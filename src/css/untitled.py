import rhinoscriptsyntax as rs 
import math as ma
import Grasshopper as gh 
curve_object=c
#导入外部类包库。
sample=s
pi=ma.pi
al=alpha1*pi
be=beta1*pi #定义了生形参数。 def coorxy(theta,alpha,beta,r):
def coorxy(theta,alpha,beta,r):
	import math as ma 
	x=r*ma.sin(beta)*ma.cos(theta)*(ma.e**(theta/ma.tan(alpha))) 
	y=r*ma.sin(beta)*ma.sin(theta)*(ma.e**(theta/ma.tan(alpha))) 
	return (x,y) #对数螺旋线基本方程。
crvdomain=rs.CurveDomain(curve_object) 
sections=[] 
t_step=(crvdomain[1]-crvdomain[0])/sample 
t=crvdomain[0]
a_step=20*pi/sample
a=0
for t in rs.frange(crvdomain[0],crvdomain[1],t_step):
	a=a+a_step
	curvecurvature=rs.CurveCurvature(curve_object,t) 
	sectionplane=None
	curvept= curvecurvature [0]
	curvetangent= curvecurvature[1]
	curveperp=(0,0,1)
	curvenormal=rs.VectorCrossProduct(curveperp,curvetangent)	
	sectionplane=rs.PlaneFromFrame(curvept,curveperp,curvenormal) 
	if sectionplane:
		coor=coorxy(a,al,be,r)
		x=coor[0]
		y=coor[1]
		x1=rs.VectorUnitize(curveperp) 
		y1=rs.VectorUnitize(curvenormal) 
		pt=rs.VectorAdd(x*x1,y*y1) 
		secptvec=pt+curvept
		secpt=rs.AddPoint(secptvec)
		sections.append(secpt)
	curve=rs.AddInterpCurve(sections) 