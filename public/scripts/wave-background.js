var ZW="181";var WW=0,_Q=1,UW=2;var AQ=1,KW=2,N6=3,j9=0,g8=1,G6=2,w6=0,E7=1,TQ=2,SQ=3,jQ=4,HW=5,f9=100,XW=101,YW=102,NW=103,GW=104,qW=200,EW=201,DW=202,FW=203,OW=204,kW=205,RW=206,MW=207,VW=208,LW=209,zW=210,BW=211,IW=212,wW=213,CW=214,e7=0,JJ=1,QJ=2,D7=3,$J=4,ZJ=5,WJ=6,UJ=7,PW=0,_W=1,AW=2,C6=0,TW=1,SW=2,jW=3,fW=4,yW=5,vW=6,bW=7;var y9=301,J9=302,KJ=303,HJ=304,F7=306,hW=1000,XJ=1001,xW=1002,v9=1003,pW=1004;var O7=1005;var P6=1006,YJ=1007;var b9=1008;var x6=1009,gW=1010,mW=1011,k7=1012,fQ=1013,h9=1014,p6=1015,x9=1016,yQ=1017,vQ=1018,p9=1020,dW=35902,uW=35899,lW=1021,cW=1022,q6=1023,NJ=1026,R7=1027,nW=1028,bQ=1029,hQ=1030,xQ=1031;var pQ=1033,GJ=33776,qJ=33777,EJ=33778,DJ=33779,gQ=35840,mQ=35841,dQ=35842,uQ=35843,lQ=36196,cQ=37492,nQ=37496,sQ=37808,iQ=37809,oQ=37810,aQ=37811,rQ=37812,tQ=37813,eQ=37814,J$=37815,Q$=37816,$$=37817,Z$=37818,W$=37819,U$=37820,K$=37821,H$=36492,X$=36494,Y$=36495,N$=36283,G$=36284,q$=36285,E$=36286;var sW=3201;var iW=0,oW=1,Q9="",aW="srgb",M7="srgb-linear",D$="linear",X8="srgb";var rW=512,tW=513,eW=514,F$=515,J1=516,Q1=517,$1=518,Z1=519;var O$="300 es",k$=2000;function R$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function q7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function W1(){let J=q7("canvas");return J.style.display="block",J}var vZ={},A9=null;function M$(...J){let Q="THREE."+J.shift();if(A9)A9("log",Q,...J);else console.log(Q,...J)}function h0(...J){let Q="THREE."+J.shift();if(A9)A9("warn",Q,...J);else console.warn(Q,...J)}function s0(...J){let Q="THREE."+J.shift();if(A9)A9("error",Q,...J);else console.error(Q,...J)}function T9(...J){let Q=J.join(" ");if(Q in vZ)return;vZ[Q]=!0,h0(...J)}function U1(J,Q,$){return new Promise(function(Z,W){function U(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(U,$);break;default:Z()}}setTimeout(U,$)})}class g6{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,U=Z.length;W<U;W++)Z[W].call(this,J);J.target=null}}}var C8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bZ=1234567,X7=Math.PI/180,S9=180/Math.PI;function g9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(C8[J&255]+C8[J>>8&255]+C8[J>>16&255]+C8[J>>24&255]+"-"+C8[Q&255]+C8[Q>>8&255]+"-"+C8[Q>>16&15|64]+C8[Q>>24&255]+"-"+C8[$&63|128]+C8[$>>8&255]+"-"+C8[$>>16&255]+C8[$>>24&255]+C8[Z&255]+C8[Z>>8&255]+C8[Z>>16&255]+C8[Z>>24&255]).toLowerCase()}function n0(J,Q,$){return Math.max(Q,Math.min($,J))}function V$(J,Q){return(J%Q+Q)%Q}function YK(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function NK(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function Y7(J,Q,$){return(1-$)*J+$*Q}function GK(J,Q,$,Z){return Y7(J,Q,1-Math.exp(-$*Z))}function qK(J,Q=1){return Q-Math.abs(V$(J,Q*2)-Q)}function EK(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function DK(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function FK(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function OK(J,Q){return J+Math.random()*(Q-J)}function kK(J){return J*(0.5-Math.random())}function RK(J){if(J!==void 0)bZ=J;let Q=bZ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function MK(J){return J*X7}function VK(J){return J*S9}function LK(J){return(J&J-1)===0&&J!==0}function zK(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function BK(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function IK(J,Q,$,Z,W){let{cos:U,sin:K}=Math,H=U($/2),X=K($/2),Y=U((Q+Z)/2),N=K((Q+Z)/2),G=U((Q-Z)/2),q=K((Q-Z)/2),F=U((Z-Q)/2),k=K((Z-Q)/2);switch(W){case"XYX":J.set(H*N,X*G,X*q,H*Y);break;case"YZY":J.set(X*q,H*N,X*G,H*Y);break;case"ZXZ":J.set(X*G,X*q,H*N,H*Y);break;case"XZX":J.set(H*N,X*k,X*F,H*Y);break;case"YXY":J.set(X*F,H*N,X*k,H*Y);break;case"ZYZ":J.set(X*k,X*F,H*N,H*Y);break;default:h0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function C9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function S8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var L$={DEG2RAD:X7,RAD2DEG:S9,generateUUID:g9,clamp:n0,euclideanModulo:V$,mapLinear:YK,inverseLerp:NK,lerp:Y7,damp:GK,pingpong:qK,smoothstep:EK,smootherstep:DK,randInt:FK,randFloat:OK,randFloatSpread:kK,seededRandom:RK,degToRad:MK,radToDeg:VK,isPowerOfTwo:LK,ceilPowerOfTwo:zK,floorPowerOfTwo:BK,setQuaternionFromProperEuler:IK,normalize:S8,denormalize:C9};class T0{constructor(J=0,Q=0){T0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,U=this.y-J.y;return this.x=W*$-U*Z+J.x,this.y=W*Z+U*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class m6{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,U,K){let H=$[Z+0],X=$[Z+1],Y=$[Z+2],N=$[Z+3],G=W[U+0],q=W[U+1],F=W[U+2],k=W[U+3];if(K<=0){J[Q+0]=H,J[Q+1]=X,J[Q+2]=Y,J[Q+3]=N;return}if(K>=1){J[Q+0]=G,J[Q+1]=q,J[Q+2]=F,J[Q+3]=k;return}if(N!==k||H!==G||X!==q||Y!==F){let L=H*G+X*q+Y*F+N*k;if(L<0)G=-G,q=-q,F=-F,k=-k,L=-L;let D=1-K;if(L<0.9995){let E=Math.acos(L),B=Math.sin(E);D=Math.sin(D*E)/B,K=Math.sin(K*E)/B,H=H*D+G*K,X=X*D+q*K,Y=Y*D+F*K,N=N*D+k*K}else{H=H*D+G*K,X=X*D+q*K,Y=Y*D+F*K,N=N*D+k*K;let E=1/Math.sqrt(H*H+X*X+Y*Y+N*N);H*=E,X*=E,Y*=E,N*=E}}J[Q]=H,J[Q+1]=X,J[Q+2]=Y,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,W,U){let K=$[Z],H=$[Z+1],X=$[Z+2],Y=$[Z+3],N=W[U],G=W[U+1],q=W[U+2],F=W[U+3];return J[Q]=K*F+Y*N+H*q-X*G,J[Q+1]=H*F+Y*G+X*N-K*q,J[Q+2]=X*F+Y*q+K*G-H*N,J[Q+3]=Y*F-K*N-H*G-X*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:U}=J,K=Math.cos,H=Math.sin,X=K($/2),Y=K(Z/2),N=K(W/2),G=H($/2),q=H(Z/2),F=H(W/2);switch(U){case"XYZ":this._x=G*Y*N+X*q*F,this._y=X*q*N-G*Y*F,this._z=X*Y*F+G*q*N,this._w=X*Y*N-G*q*F;break;case"YXZ":this._x=G*Y*N+X*q*F,this._y=X*q*N-G*Y*F,this._z=X*Y*F-G*q*N,this._w=X*Y*N+G*q*F;break;case"ZXY":this._x=G*Y*N-X*q*F,this._y=X*q*N+G*Y*F,this._z=X*Y*F+G*q*N,this._w=X*Y*N-G*q*F;break;case"ZYX":this._x=G*Y*N-X*q*F,this._y=X*q*N+G*Y*F,this._z=X*Y*F-G*q*N,this._w=X*Y*N+G*q*F;break;case"YZX":this._x=G*Y*N+X*q*F,this._y=X*q*N+G*Y*F,this._z=X*Y*F-G*q*N,this._w=X*Y*N-G*q*F;break;case"XZY":this._x=G*Y*N-X*q*F,this._y=X*q*N-G*Y*F,this._z=X*Y*F+G*q*N,this._w=X*Y*N+G*q*F;break;default:h0("Quaternion: .setFromEuler() encountered an unknown order: "+U)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],U=Q[1],K=Q[5],H=Q[9],X=Q[2],Y=Q[6],N=Q[10],G=$+K+N;if(G>0){let q=0.5/Math.sqrt(G+1);this._w=0.25/q,this._x=(Y-H)*q,this._y=(W-X)*q,this._z=(U-Z)*q}else if($>K&&$>N){let q=2*Math.sqrt(1+$-K-N);this._w=(Y-H)/q,this._x=0.25*q,this._y=(Z+U)/q,this._z=(W+X)/q}else if(K>N){let q=2*Math.sqrt(1+K-$-N);this._w=(W-X)/q,this._x=(Z+U)/q,this._y=0.25*q,this._z=(H+Y)/q}else{let q=2*Math.sqrt(1+N-$-K);this._w=(U-Z)/q,this._x=(W+X)/q,this._y=(H+Y)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(n0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:U}=J,K=Q._x,H=Q._y,X=Q._z,Y=Q._w;return this._x=$*Y+U*K+Z*X-W*H,this._y=Z*Y+U*H+W*K-$*X,this._z=W*Y+U*X+$*H-Z*K,this._w=U*Y-$*K-Z*H-W*X,this._onChangeCallback(),this}slerp(J,Q){if(Q<=0)return this;if(Q>=1)return this.copy(J);let{_x:$,_y:Z,_z:W,_w:U}=J,K=this.dot(J);if(K<0)$=-$,Z=-Z,W=-W,U=-U,K=-K;let H=1-Q;if(K<0.9995){let X=Math.acos(K),Y=Math.sin(X);H=Math.sin(H*X)/Y,Q=Math.sin(Q*X)/Y,this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+W*Q,this._w=this._w*H+U*Q,this._onChangeCallback()}else this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+W*Q,this._w=this._w*H+U*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class f{constructor(J=0,Q=0,$=0){f.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(hZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(hZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,U=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*U,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*U,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*U,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,U=J.y,K=J.z,H=J.w,X=2*(U*Z-K*$),Y=2*(K*Q-W*Z),N=2*(W*$-U*Q);return this.x=Q+H*X+U*N-K*Y,this.y=$+H*Y+K*X-W*N,this.z=Z+H*N+W*Y-U*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,U=Q.x,K=Q.y,H=Q.z;return this.x=Z*H-W*K,this.y=W*U-$*H,this.z=$*K-Z*U,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return $Q.copy(this).projectOnVector(J),this.sub($Q)}reflect(J){return this.sub($Q.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(n0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var $Q=new f,hZ=new m6;class d0{constructor(J,Q,$,Z,W,U,K,H,X){if(d0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,U,K,H,X)}set(J,Q,$,Z,W,U,K,H,X){let Y=this.elements;return Y[0]=J,Y[1]=Z,Y[2]=K,Y[3]=Q,Y[4]=W,Y[5]=H,Y[6]=$,Y[7]=U,Y[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,U=$[0],K=$[3],H=$[6],X=$[1],Y=$[4],N=$[7],G=$[2],q=$[5],F=$[8],k=Z[0],L=Z[3],D=Z[6],E=Z[1],B=Z[4],I=Z[7],P=Z[2],A=Z[5],C=Z[8];return W[0]=U*k+K*E+H*P,W[3]=U*L+K*B+H*A,W[6]=U*D+K*I+H*C,W[1]=X*k+Y*E+N*P,W[4]=X*L+Y*B+N*A,W[7]=X*D+Y*I+N*C,W[2]=G*k+q*E+F*P,W[5]=G*L+q*B+F*A,W[8]=G*D+q*I+F*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],U=J[4],K=J[5],H=J[6],X=J[7],Y=J[8];return Q*U*Y-Q*K*X-$*W*Y+$*K*H+Z*W*X-Z*U*H}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],U=J[4],K=J[5],H=J[6],X=J[7],Y=J[8],N=Y*U-K*X,G=K*H-Y*W,q=X*W-U*H,F=Q*N+$*G+Z*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let k=1/F;return J[0]=N*k,J[1]=(Z*X-Y*$)*k,J[2]=(K*$-Z*U)*k,J[3]=G*k,J[4]=(Y*Q-Z*H)*k,J[5]=(Z*W-K*Q)*k,J[6]=q*k,J[7]=($*H-X*Q)*k,J[8]=(U*Q-$*W)*k,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,U,K){let H=Math.cos(W),X=Math.sin(W);return this.set($*H,$*X,-$*(H*U+X*K)+U+J,-Z*X,Z*H,-Z*(-X*U+H*K)+K+Q,0,0,1),this}scale(J,Q){return this.premultiply(ZQ.makeScale(J,Q)),this}rotate(J){return this.premultiply(ZQ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(ZQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var ZQ=new d0,xZ=new d0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),pZ=new d0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function wK(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,U,K){if(this.enabled===!1||U===K||!U||!K)return W;if(this.spaces[U].transfer==="srgb")W.r=I6(W.r),W.g=I6(W.g),W.b=I6(W.b);if(this.spaces[U].primaries!==this.spaces[K].primaries)W.applyMatrix3(this.spaces[U].toXYZ),W.applyMatrix3(this.spaces[K].fromXYZ);if(this.spaces[K].transfer==="srgb")W.r=_9(W.r),W.g=_9(W.g),W.b=_9(W.b);return W},workingToColorSpace:function(W,U){return this.convert(W,this.workingColorSpace,U)},colorSpaceToWorking:function(W,U){return this.convert(W,U,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,U=this.workingColorSpace){return W.fromArray(this.spaces[U].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,U,K){return W.copy(this.spaces[U].toXYZ).multiply(this.spaces[K].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,U){return T9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,U)},toWorkingColorSpace:function(W,U){return T9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,U)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:xZ,fromXYZ:pZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:xZ,fromXYZ:pZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var e0=wK();function I6(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function _9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var D9;class z${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(D9===void 0)D9=q7("canvas");D9.width=J.width,D9.height=J.height;let Z=D9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=D9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=q7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let U=0;U<W.length;U++)W[U]=I6(W[U]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(I6(Q[$]/255)*255);else Q[$]=I6(Q[$]);return{data:Q,width:J.width,height:J.height}}else return h0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var CK=0;class V7{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CK++}),this.uuid=g9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let U=0,K=Z.length;U<K;U++)if(Z[U].isDataTexture)W.push(WQ(Z[U].image));else W.push(WQ(Z[U]))}else W=WQ(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function WQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return z$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return h0("Texture: Unable to serialize Texture."),{}}var PK=0,UQ=new f;class _8 extends g6{constructor(J=_8.DEFAULT_IMAGE,Q=_8.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,U=1008,K=1023,H=1009,X=_8.DEFAULT_ANISOTROPY,Y=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:PK++}),this.uuid=g9(),this.name="",this.source=new V7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=U,this.anisotropy=X,this.format=K,this.internalFormat=null,this.type=H,this.offset=new T0(0,0),this.repeat=new T0(1,1),this.center=new T0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new d0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=Y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(UQ).x}get height(){return this.source.getSize(UQ).y}get depth(){return this.source.getSize(UQ).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){h0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){h0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}_8.DEFAULT_IMAGE=null;_8.DEFAULT_MAPPING=300;_8.DEFAULT_ANISOTROPY=1;class Z8{constructor(J=0,Q=0,$=0,Z=1){Z8.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,U=J.elements;return this.x=U[0]*Q+U[4]*$+U[8]*Z+U[12]*W,this.y=U[1]*Q+U[5]*$+U[9]*Z+U[13]*W,this.z=U[2]*Q+U[6]*$+U[10]*Z+U[14]*W,this.w=U[3]*Q+U[7]*$+U[11]*Z+U[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,U=0.01,K=0.1,H=J.elements,X=H[0],Y=H[4],N=H[8],G=H[1],q=H[5],F=H[9],k=H[2],L=H[6],D=H[10];if(Math.abs(Y-G)<0.01&&Math.abs(N-k)<0.01&&Math.abs(F-L)<0.01){if(Math.abs(Y+G)<0.1&&Math.abs(N+k)<0.1&&Math.abs(F+L)<0.1&&Math.abs(X+q+D-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let B=(X+1)/2,I=(q+1)/2,P=(D+1)/2,A=(Y+G)/4,C=(N+k)/4,z=(F+L)/4;if(B>I&&B>P)if(B<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(B),Z=A/$,W=C/$;else if(I>P)if(I<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(I),$=A/Z,W=z/Z;else if(P<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(P),$=C/W,Z=z/W;return this.set($,Z,W,Q),this}let E=Math.sqrt((L-F)*(L-F)+(N-k)*(N-k)+(G-Y)*(G-Y));if(Math.abs(E)<0.001)E=1;return this.x=(L-F)/E,this.y=(N-k)/E,this.z=(G-Y)/E,this.w=Math.acos((X+q+D-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=n0(this.x,J.x,Q.x),this.y=n0(this.y,J.y,Q.y),this.z=n0(this.z,J.z,Q.z),this.w=n0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=n0(this.x,J,Q),this.y=n0(this.y,J,Q),this.z=n0(this.z,J,Q),this.w=n0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(n0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B$ extends g6{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new Z8(0,0,J,Q),this.scissorTest=!1,this.viewport=new Z8(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new _8(Z);this.textures=[];let U=$.count;for(let K=0;K<U;K++)this.textures[K]=W.clone(),this.textures[K].isRenderTargetTexture=!0,this.textures[K].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new V7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _6 extends B${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class FJ extends _8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class I$ extends _8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $9{constructor(J=new f(1/0,1/0,1/0),Q=new f(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(Z6.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(Z6.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=Z6.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let U=0,K=W.count;U<K;U++){if(J.isMesh===!0)J.getVertexPosition(U,Z6);else Z6.fromBufferAttribute(W,U);Z6.applyMatrix4(J.matrixWorld),this.expandByPoint(Z6)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();y7.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();y7.copy($.boundingBox)}y7.applyMatrix4(J.matrixWorld),this.union(y7)}}let Z=J.children;for(let W=0,U=Z.length;W<U;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,Z6),Z6.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(Z7),v7.subVectors(this.max,Z7),F9.subVectors(J.a,Z7),O9.subVectors(J.b,Z7),k9.subVectors(J.c,Z7),j6.subVectors(O9,F9),f6.subVectors(k9,O9),a6.subVectors(F9,k9);let Q=[0,-j6.z,j6.y,0,-f6.z,f6.y,0,-a6.z,a6.y,j6.z,0,-j6.x,f6.z,0,-f6.x,a6.z,0,-a6.x,-j6.y,j6.x,0,-f6.y,f6.x,0,-a6.y,a6.x,0];if(!KQ(Q,F9,O9,k9,v7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!KQ(Q,F9,O9,k9,v7))return!1;return b7.crossVectors(j6,f6),Q=[b7.x,b7.y,b7.z],KQ(Q,F9,O9,k9,v7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,Z6).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(Z6).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return R6[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),R6[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),R6[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),R6[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),R6[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),R6[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),R6[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),R6[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(R6),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var R6=[new f,new f,new f,new f,new f,new f,new f,new f],Z6=new f,y7=new $9,F9=new f,O9=new f,k9=new f,j6=new f,f6=new f,a6=new f,Z7=new f,v7=new f,b7=new f,r6=new f;function KQ(J,Q,$,Z,W){for(let U=0,K=J.length-3;U<=K;U+=3){r6.fromArray(J,U);let H=W.x*Math.abs(r6.x)+W.y*Math.abs(r6.y)+W.z*Math.abs(r6.z),X=Q.dot(r6),Y=$.dot(r6),N=Z.dot(r6);if(Math.max(-Math.max(X,Y,N),Math.min(X,Y,N))>H)return!1}return!0}var _K=new $9,W7=new f,HQ=new f;class L7{constructor(J=new f,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else _K.setFromPoints(J).getCenter($);let Z=0;for(let W=0,U=J.length;W<U;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;W7.subVectors(J,this.center);let Q=W7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(W7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else HQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(W7.copy(J.center).add(HQ)),this.expandByPoint(W7.copy(J.center).sub(HQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var M6=new f,XQ=new f,h7=new f,y6=new f,YQ=new f,x7=new f,NQ=new f;class w${constructor(J=new f,Q=new f(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,M6)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=M6.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return M6.copy(this.origin).addScaledVector(this.direction,Q),M6.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){XQ.copy(J).add(Q).multiplyScalar(0.5),h7.copy(Q).sub(J).normalize(),y6.copy(this.origin).sub(XQ);let W=J.distanceTo(Q)*0.5,U=-this.direction.dot(h7),K=y6.dot(this.direction),H=-y6.dot(h7),X=y6.lengthSq(),Y=Math.abs(1-U*U),N,G,q,F;if(Y>0)if(N=U*H-K,G=U*K-H,F=W*Y,N>=0)if(G>=-F)if(G<=F){let k=1/Y;N*=k,G*=k,q=N*(N+U*G+2*K)+G*(U*N+G+2*H)+X}else G=W,N=Math.max(0,-(U*G+K)),q=-N*N+G*(G+2*H)+X;else G=-W,N=Math.max(0,-(U*G+K)),q=-N*N+G*(G+2*H)+X;else if(G<=-F)N=Math.max(0,-(-U*W+K)),G=N>0?-W:Math.min(Math.max(-W,-H),W),q=-N*N+G*(G+2*H)+X;else if(G<=F)N=0,G=Math.min(Math.max(-W,-H),W),q=G*(G+2*H)+X;else N=Math.max(0,-(U*W+K)),G=N>0?W:Math.min(Math.max(-W,-H),W),q=-N*N+G*(G+2*H)+X;else G=U>0?-W:W,N=Math.max(0,-(U*G+K)),q=-N*N+G*(G+2*H)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(XQ).addScaledVector(h7,G);return q}intersectSphere(J,Q){M6.subVectors(J.center,this.origin);let $=M6.dot(this.direction),Z=M6.dot(M6)-$*$,W=J.radius*J.radius;if(Z>W)return null;let U=Math.sqrt(W-Z),K=$-U,H=$+U;if(H<0)return null;if(K<0)return this.at(H,Q);return this.at(K,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,U,K,H,X=1/this.direction.x,Y=1/this.direction.y,N=1/this.direction.z,G=this.origin;if(X>=0)$=(J.min.x-G.x)*X,Z=(J.max.x-G.x)*X;else $=(J.max.x-G.x)*X,Z=(J.min.x-G.x)*X;if(Y>=0)W=(J.min.y-G.y)*Y,U=(J.max.y-G.y)*Y;else W=(J.max.y-G.y)*Y,U=(J.min.y-G.y)*Y;if($>U||W>Z)return null;if(W>$||isNaN($))$=W;if(U<Z||isNaN(Z))Z=U;if(N>=0)K=(J.min.z-G.z)*N,H=(J.max.z-G.z)*N;else K=(J.max.z-G.z)*N,H=(J.min.z-G.z)*N;if($>H||K>Z)return null;if(K>$||$!==$)$=K;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,M6)!==null}intersectTriangle(J,Q,$,Z,W){YQ.subVectors(Q,J),x7.subVectors($,J),NQ.crossVectors(YQ,x7);let U=this.direction.dot(NQ),K;if(U>0){if(Z)return null;K=1}else if(U<0)K=-1,U=-U;else return null;y6.subVectors(this.origin,J);let H=K*this.direction.dot(x7.crossVectors(y6,x7));if(H<0)return null;let X=K*this.direction.dot(YQ.cross(y6));if(X<0)return null;if(H+X>U)return null;let Y=-K*y6.dot(NQ);if(Y<0)return null;return this.at(Y/U,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class G8{constructor(J,Q,$,Z,W,U,K,H,X,Y,N,G,q,F,k,L){if(G8.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,U,K,H,X,Y,N,G,q,F,k,L)}set(J,Q,$,Z,W,U,K,H,X,Y,N,G,q,F,k,L){let D=this.elements;return D[0]=J,D[4]=Q,D[8]=$,D[12]=Z,D[1]=W,D[5]=U,D[9]=K,D[13]=H,D[2]=X,D[6]=Y,D[10]=N,D[14]=G,D[3]=q,D[7]=F,D[11]=k,D[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new G8().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/R9.setFromMatrixColumn(J,0).length(),W=1/R9.setFromMatrixColumn(J,1).length(),U=1/R9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*U,Q[9]=$[9]*U,Q[10]=$[10]*U,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,U=Math.cos($),K=Math.sin($),H=Math.cos(Z),X=Math.sin(Z),Y=Math.cos(W),N=Math.sin(W);if(J.order==="XYZ"){let G=U*Y,q=U*N,F=K*Y,k=K*N;Q[0]=H*Y,Q[4]=-H*N,Q[8]=X,Q[1]=q+F*X,Q[5]=G-k*X,Q[9]=-K*H,Q[2]=k-G*X,Q[6]=F+q*X,Q[10]=U*H}else if(J.order==="YXZ"){let G=H*Y,q=H*N,F=X*Y,k=X*N;Q[0]=G+k*K,Q[4]=F*K-q,Q[8]=U*X,Q[1]=U*N,Q[5]=U*Y,Q[9]=-K,Q[2]=q*K-F,Q[6]=k+G*K,Q[10]=U*H}else if(J.order==="ZXY"){let G=H*Y,q=H*N,F=X*Y,k=X*N;Q[0]=G-k*K,Q[4]=-U*N,Q[8]=F+q*K,Q[1]=q+F*K,Q[5]=U*Y,Q[9]=k-G*K,Q[2]=-U*X,Q[6]=K,Q[10]=U*H}else if(J.order==="ZYX"){let G=U*Y,q=U*N,F=K*Y,k=K*N;Q[0]=H*Y,Q[4]=F*X-q,Q[8]=G*X+k,Q[1]=H*N,Q[5]=k*X+G,Q[9]=q*X-F,Q[2]=-X,Q[6]=K*H,Q[10]=U*H}else if(J.order==="YZX"){let G=U*H,q=U*X,F=K*H,k=K*X;Q[0]=H*Y,Q[4]=k-G*N,Q[8]=F*N+q,Q[1]=N,Q[5]=U*Y,Q[9]=-K*Y,Q[2]=-X*Y,Q[6]=q*N+F,Q[10]=G-k*N}else if(J.order==="XZY"){let G=U*H,q=U*X,F=K*H,k=K*X;Q[0]=H*Y,Q[4]=-N,Q[8]=X*Y,Q[1]=G*N+k,Q[5]=U*Y,Q[9]=q*N-F,Q[2]=F*N-q,Q[6]=K*Y,Q[10]=k*N+G}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(AK,J,TK)}lookAt(J,Q,$){let Z=this.elements;if(x8.subVectors(J,Q),x8.lengthSq()===0)x8.z=1;if(x8.normalize(),v6.crossVectors($,x8),v6.lengthSq()===0){if(Math.abs($.z)===1)x8.x+=0.0001;else x8.z+=0.0001;x8.normalize(),v6.crossVectors($,x8)}return v6.normalize(),p7.crossVectors(x8,v6),Z[0]=v6.x,Z[4]=p7.x,Z[8]=x8.x,Z[1]=v6.y,Z[5]=p7.y,Z[9]=x8.y,Z[2]=v6.z,Z[6]=p7.z,Z[10]=x8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,U=$[0],K=$[4],H=$[8],X=$[12],Y=$[1],N=$[5],G=$[9],q=$[13],F=$[2],k=$[6],L=$[10],D=$[14],E=$[3],B=$[7],I=$[11],P=$[15],A=Z[0],C=Z[4],z=Z[8],j=Z[12],M=Z[1],R=Z[5],_=Z[9],b=Z[13],x=Z[2],m=Z[6],o=Z[10],c=Z[14],r=Z[3],u=Z[7],Q0=Z[11],E0=Z[15];return W[0]=U*A+K*M+H*x+X*r,W[4]=U*C+K*R+H*m+X*u,W[8]=U*z+K*_+H*o+X*Q0,W[12]=U*j+K*b+H*c+X*E0,W[1]=Y*A+N*M+G*x+q*r,W[5]=Y*C+N*R+G*m+q*u,W[9]=Y*z+N*_+G*o+q*Q0,W[13]=Y*j+N*b+G*c+q*E0,W[2]=F*A+k*M+L*x+D*r,W[6]=F*C+k*R+L*m+D*u,W[10]=F*z+k*_+L*o+D*Q0,W[14]=F*j+k*b+L*c+D*E0,W[3]=E*A+B*M+I*x+P*r,W[7]=E*C+B*R+I*m+P*u,W[11]=E*z+B*_+I*o+P*Q0,W[15]=E*j+B*b+I*c+P*E0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],U=J[1],K=J[5],H=J[9],X=J[13],Y=J[2],N=J[6],G=J[10],q=J[14],F=J[3],k=J[7],L=J[11],D=J[15];return F*(+W*H*N-Z*X*N-W*K*G+$*X*G+Z*K*q-$*H*q)+k*(+Q*H*q-Q*X*G+W*U*G-Z*U*q+Z*X*Y-W*H*Y)+L*(+Q*X*N-Q*K*q-W*U*N+$*U*q+W*K*Y-$*X*Y)+D*(-Z*K*Y-Q*H*N+Q*K*G+Z*U*N-$*U*G+$*H*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],U=J[4],K=J[5],H=J[6],X=J[7],Y=J[8],N=J[9],G=J[10],q=J[11],F=J[12],k=J[13],L=J[14],D=J[15],E=N*L*X-k*G*X+k*H*q-K*L*q-N*H*D+K*G*D,B=F*G*X-Y*L*X-F*H*q+U*L*q+Y*H*D-U*G*D,I=Y*k*X-F*N*X+F*K*q-U*k*q-Y*K*D+U*N*D,P=F*N*H-Y*k*H-F*K*G+U*k*G+Y*K*L-U*N*L,A=Q*E+$*B+Z*I+W*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return J[0]=E*C,J[1]=(k*G*W-N*L*W-k*Z*q+$*L*q+N*Z*D-$*G*D)*C,J[2]=(K*L*W-k*H*W+k*Z*X-$*L*X-K*Z*D+$*H*D)*C,J[3]=(N*H*W-K*G*W-N*Z*X+$*G*X+K*Z*q-$*H*q)*C,J[4]=B*C,J[5]=(Y*L*W-F*G*W+F*Z*q-Q*L*q-Y*Z*D+Q*G*D)*C,J[6]=(F*H*W-U*L*W-F*Z*X+Q*L*X+U*Z*D-Q*H*D)*C,J[7]=(U*G*W-Y*H*W+Y*Z*X-Q*G*X-U*Z*q+Q*H*q)*C,J[8]=I*C,J[9]=(F*N*W-Y*k*W-F*$*q+Q*k*q+Y*$*D-Q*N*D)*C,J[10]=(U*k*W-F*K*W+F*$*X-Q*k*X-U*$*D+Q*K*D)*C,J[11]=(Y*K*W-U*N*W-Y*$*X+Q*N*X+U*$*q-Q*K*q)*C,J[12]=P*C,J[13]=(Y*k*Z-F*N*Z+F*$*G-Q*k*G-Y*$*L+Q*N*L)*C,J[14]=(F*K*Z-U*k*Z-F*$*H+Q*k*H+U*$*L-Q*K*L)*C,J[15]=(U*N*Z-Y*K*Z+Y*$*H-Q*N*H-U*$*G+Q*K*G)*C,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,U=J.x,K=J.y,H=J.z,X=W*U,Y=W*K;return this.set(X*U+$,X*K-Z*H,X*H+Z*K,0,X*K+Z*H,Y*K+$,Y*H-Z*U,0,X*H-Z*K,Y*H+Z*U,W*H*H+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,U){return this.set(1,$,W,0,J,1,U,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,U=Q._y,K=Q._z,H=Q._w,X=W+W,Y=U+U,N=K+K,G=W*X,q=W*Y,F=W*N,k=U*Y,L=U*N,D=K*N,E=H*X,B=H*Y,I=H*N,P=$.x,A=$.y,C=$.z;return Z[0]=(1-(k+D))*P,Z[1]=(q+I)*P,Z[2]=(F-B)*P,Z[3]=0,Z[4]=(q-I)*A,Z[5]=(1-(G+D))*A,Z[6]=(L+E)*A,Z[7]=0,Z[8]=(F+B)*C,Z[9]=(L-E)*C,Z[10]=(1-(G+k))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=R9.set(Z[0],Z[1],Z[2]).length(),U=R9.set(Z[4],Z[5],Z[6]).length(),K=R9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],W6.copy(this);let X=1/W,Y=1/U,N=1/K;return W6.elements[0]*=X,W6.elements[1]*=X,W6.elements[2]*=X,W6.elements[4]*=Y,W6.elements[5]*=Y,W6.elements[6]*=Y,W6.elements[8]*=N,W6.elements[9]*=N,W6.elements[10]*=N,Q.setFromRotationMatrix(W6),$.x=W,$.y=U,$.z=K,this}makePerspective(J,Q,$,Z,W,U,K=2000,H=!1){let X=this.elements,Y=2*W/(Q-J),N=2*W/($-Z),G=(Q+J)/(Q-J),q=($+Z)/($-Z),F,k;if(H)F=W/(U-W),k=U*W/(U-W);else if(K===2000)F=-(U+W)/(U-W),k=-2*U*W/(U-W);else if(K===2001)F=-U/(U-W),k=-U*W/(U-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return X[0]=Y,X[4]=0,X[8]=G,X[12]=0,X[1]=0,X[5]=N,X[9]=q,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=k,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,U,K=2000,H=!1){let X=this.elements,Y=2/(Q-J),N=2/($-Z),G=-(Q+J)/(Q-J),q=-($+Z)/($-Z),F,k;if(H)F=1/(U-W),k=U/(U-W);else if(K===2000)F=-2/(U-W),k=-(U+W)/(U-W);else if(K===2001)F=-1/(U-W),k=-W/(U-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return X[0]=Y,X[4]=0,X[8]=0,X[12]=G,X[1]=0,X[5]=N,X[9]=0,X[13]=q,X[2]=0,X[6]=0,X[10]=F,X[14]=k,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var R9=new f,W6=new G8,AK=new f(0,0,0),TK=new f(1,1,1),v6=new f,p7=new f,x8=new f,gZ=new G8,mZ=new m6;class K6{constructor(J=0,Q=0,$=0,Z=K6.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],U=Z[4],K=Z[8],H=Z[1],X=Z[5],Y=Z[9],N=Z[2],G=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(n0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-Y,q),this._z=Math.atan2(-U,W);else this._x=Math.atan2(G,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-n0(Y,-1,1)),Math.abs(Y)<0.9999999)this._y=Math.atan2(K,q),this._z=Math.atan2(H,X);else this._y=Math.atan2(-N,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(n0(G,-1,1)),Math.abs(G)<0.9999999)this._y=Math.atan2(-N,q),this._z=Math.atan2(-U,X);else this._y=0,this._z=Math.atan2(H,W);break;case"ZYX":if(this._y=Math.asin(-n0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(G,q),this._z=Math.atan2(H,W);else this._x=0,this._z=Math.atan2(-U,X);break;case"YZX":if(this._z=Math.asin(n0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-Y,X),this._y=Math.atan2(-N,W);else this._x=0,this._y=Math.atan2(K,q);break;case"XZY":if(this._z=Math.asin(-n0(U,-1,1)),Math.abs(U)<0.9999999)this._x=Math.atan2(G,X),this._y=Math.atan2(K,W);else this._x=Math.atan2(-Y,q),this._y=0;break;default:h0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return gZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(gZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return mZ.setFromEuler(this),this.setFromQuaternion(mZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}K6.DEFAULT_ORDER="XYZ";class OJ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var SK=0,dZ=new f,M9=new m6,V6=new G8,g7=new f,U7=new f,jK=new f,fK=new m6,uZ=new f(1,0,0),lZ=new f(0,1,0),cZ=new f(0,0,1),nZ={type:"added"},yK={type:"removed"},V9={type:"childadded",child:null},GQ={type:"childremoved",child:null};class j8 extends g6{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:SK++}),this.uuid=g9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=j8.DEFAULT_UP.clone();let J=new f,Q=new K6,$=new m6,Z=new f(1,1,1);function W(){$.setFromEuler(Q,!1)}function U(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(U),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new G8},normalMatrix:{value:new d0}}),this.matrix=new G8,this.matrixWorld=new G8,this.matrixAutoUpdate=j8.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=j8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new OJ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return M9.setFromAxisAngle(J,Q),this.quaternion.multiply(M9),this}rotateOnWorldAxis(J,Q){return M9.setFromAxisAngle(J,Q),this.quaternion.premultiply(M9),this}rotateX(J){return this.rotateOnAxis(uZ,J)}rotateY(J){return this.rotateOnAxis(lZ,J)}rotateZ(J){return this.rotateOnAxis(cZ,J)}translateOnAxis(J,Q){return dZ.copy(J).applyQuaternion(this.quaternion),this.position.add(dZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(uZ,J)}translateY(J){return this.translateOnAxis(lZ,J)}translateZ(J){return this.translateOnAxis(cZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(V6.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)g7.copy(J);else g7.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),U7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)V6.lookAt(U7,g7,this.up);else V6.lookAt(g7,U7,this.up);if(this.quaternion.setFromRotationMatrix(V6),Z)V6.extractRotation(Z.matrixWorld),M9.setFromRotationMatrix(V6),this.quaternion.premultiply(M9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return s0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(nZ),V9.child=J,this.dispatchEvent(V9),V9.child=null;else s0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(yK),GQ.child=J,this.dispatchEvent(GQ),GQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),V6.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),V6.multiply(J.parent.matrixWorld);return J.applyMatrix4(V6),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(nZ),V9.child=J,this.dispatchEvent(V9),V9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let U=this.children[$].getObjectByProperty(J,Q);if(U!==void 0)return U}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,U=Z.length;W<U;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(U7,J,jK),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(U7,fK,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,U=Z.length;W<U;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((K)=>({...K,boundingBox:K.boundingBox?K.boundingBox.toJSON():void 0,boundingSphere:K.boundingSphere?K.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((K)=>({...K})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(K,H){if(K[H.uuid]===void 0)K[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let H=K.shapes;if(Array.isArray(H))for(let X=0,Y=H.length;X<Y;X++){let N=H[X];W(J.shapes,N)}else W(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let H=0,X=this.material.length;H<X;H++)K.push(W(J.materials,this.material[H]));Z.material=K}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let K=0;K<this.children.length;K++)Z.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let K=0;K<this.animations.length;K++){let H=this.animations[K];Z.animations.push(W(J.animations,H))}}if(Q){let K=U(J.geometries),H=U(J.materials),X=U(J.textures),Y=U(J.images),N=U(J.shapes),G=U(J.skeletons),q=U(J.animations),F=U(J.nodes);if(K.length>0)$.geometries=K;if(H.length>0)$.materials=H;if(X.length>0)$.textures=X;if(Y.length>0)$.images=Y;if(N.length>0)$.shapes=N;if(G.length>0)$.skeletons=G;if(q.length>0)$.animations=q;if(F.length>0)$.nodes=F}return $.object=Z,$;function U(K){let H=[];for(let X in K){let Y=K[X];delete Y.metadata,H.push(Y)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}j8.DEFAULT_UP=new f(0,1,0);j8.DEFAULT_MATRIX_AUTO_UPDATE=!0;j8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U6=new f,L6=new f,qQ=new f,z6=new f,L9=new f,z9=new f,sZ=new f,EQ=new f,DQ=new f,FQ=new f,OQ=new Z8,kQ=new Z8,RQ=new Z8;class c8{constructor(J=new f,Q=new f,$=new f){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),U6.subVectors(J,Q),Z.cross(U6);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){U6.subVectors(Z,Q),L6.subVectors($,Q),qQ.subVectors(J,Q);let U=U6.dot(U6),K=U6.dot(L6),H=U6.dot(qQ),X=L6.dot(L6),Y=L6.dot(qQ),N=U*X-K*K;if(N===0)return W.set(0,0,0),null;let G=1/N,q=(X*H-K*Y)*G,F=(U*Y-K*H)*G;return W.set(1-q-F,F,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,z6)===null)return!1;return z6.x>=0&&z6.y>=0&&z6.x+z6.y<=1}static getInterpolation(J,Q,$,Z,W,U,K,H){if(this.getBarycoord(J,Q,$,Z,z6)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(W,z6.x),H.addScaledVector(U,z6.y),H.addScaledVector(K,z6.z),H}static getInterpolatedAttribute(J,Q,$,Z,W,U){return OQ.setScalar(0),kQ.setScalar(0),RQ.setScalar(0),OQ.fromBufferAttribute(J,Q),kQ.fromBufferAttribute(J,$),RQ.fromBufferAttribute(J,Z),U.setScalar(0),U.addScaledVector(OQ,W.x),U.addScaledVector(kQ,W.y),U.addScaledVector(RQ,W.z),U}static isFrontFacing(J,Q,$,Z){return U6.subVectors($,Q),L6.subVectors(J,Q),U6.cross(L6).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return U6.subVectors(this.c,this.b),L6.subVectors(this.a,this.b),U6.cross(L6).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return c8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return c8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return c8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return c8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return c8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,U,K;L9.subVectors(Z,$),z9.subVectors(W,$),EQ.subVectors(J,$);let H=L9.dot(EQ),X=z9.dot(EQ);if(H<=0&&X<=0)return Q.copy($);DQ.subVectors(J,Z);let Y=L9.dot(DQ),N=z9.dot(DQ);if(Y>=0&&N<=Y)return Q.copy(Z);let G=H*N-Y*X;if(G<=0&&H>=0&&Y<=0)return U=H/(H-Y),Q.copy($).addScaledVector(L9,U);FQ.subVectors(J,W);let q=L9.dot(FQ),F=z9.dot(FQ);if(F>=0&&q<=F)return Q.copy(W);let k=q*X-H*F;if(k<=0&&X>=0&&F<=0)return K=X/(X-F),Q.copy($).addScaledVector(z9,K);let L=Y*F-q*N;if(L<=0&&N-Y>=0&&q-F>=0)return sZ.subVectors(W,Z),K=(N-Y)/(N-Y+(q-F)),Q.copy(Z).addScaledVector(sZ,K);let D=1/(L+k+G);return U=k*D,K=G*D,Q.copy($).addScaledVector(L9,U).addScaledVector(z9,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var K1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},b6={h:0,s:0,l:0},m7={h:0,s:0,l:0};function MQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class x0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,e0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=e0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,e0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=e0.workingColorSpace){if(J=V$(J,1),Q=n0(Q,0,1),$=n0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,U=2*$-W;this.r=MQ(U,W,J+0.3333333333333333),this.g=MQ(U,W,J),this.b=MQ(U,W,J-0.3333333333333333)}return e0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)h0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,U=Z[1],K=Z[2];switch(U){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:h0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],U=W.length;if(U===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(U===6)return this.setHex(parseInt(W,16),Q);else h0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=K1[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else h0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=I6(J.r),this.g=I6(J.g),this.b=I6(J.b),this}copyLinearToSRGB(J){return this.r=_9(J.r),this.g=_9(J.g),this.b=_9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return e0.workingToColorSpace(P8.copy(this),J),Math.round(n0(P8.r*255,0,255))*65536+Math.round(n0(P8.g*255,0,255))*256+Math.round(n0(P8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=e0.workingColorSpace){e0.workingToColorSpace(P8.copy(this),Q);let{r:$,g:Z,b:W}=P8,U=Math.max($,Z,W),K=Math.min($,Z,W),H,X,Y=(K+U)/2;if(K===U)H=0,X=0;else{let N=U-K;switch(X=Y<=0.5?N/(U+K):N/(2-U-K),U){case $:H=(Z-W)/N+(Z<W?6:0);break;case Z:H=(W-$)/N+2;break;case W:H=($-Z)/N+4;break}H/=6}return J.h=H,J.s=X,J.l=Y,J}getRGB(J,Q=e0.workingColorSpace){return e0.workingToColorSpace(P8.copy(this),Q),J.r=P8.r,J.g=P8.g,J.b=P8.b,J}getStyle(J="srgb"){e0.workingToColorSpace(P8.copy(this),J);let{r:Q,g:$,b:Z}=P8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(b6),this.setHSL(b6.h+J,b6.s+Q,b6.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(b6),J.getHSL(m7);let $=Y7(b6.h,m7.h,Q),Z=Y7(b6.s,m7.s,Q),W=Y7(b6.l,m7.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var P8=new x0;x0.NAMES=K1;var vK=0;class Z9 extends g6{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:vK++}),this.uuid=g9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new x0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){h0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){h0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let U=[];for(let K in W){let H=W[K];delete H.metadata,U.push(H)}return U}if(Q){let W=Z(J.textures),U=Z(J.images);if(W.length>0)$.textures=W;if(U.length>0)$.images=U}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class kJ extends Z9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new x0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new K6,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var k8=new f,d7=new T0,bK=0;class n8{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bK++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)d7.fromBufferAttribute(this,Q),d7.applyMatrix3(J),this.setXY(Q,d7.x,d7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)k8.fromBufferAttribute(this,Q),k8.applyMatrix3(J),this.setXYZ(Q,k8.x,k8.y,k8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)k8.fromBufferAttribute(this,Q),k8.applyMatrix4(J),this.setXYZ(Q,k8.x,k8.y,k8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)k8.fromBufferAttribute(this,Q),k8.applyNormalMatrix(J),this.setXYZ(Q,k8.x,k8.y,k8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)k8.fromBufferAttribute(this,Q),k8.transformDirection(J),this.setXYZ(Q,k8.x,k8.y,k8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=C9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=S8($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=C9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=S8(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=C9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=S8(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=C9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=S8(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=C9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=S8(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=S8(Q,this.array),$=S8($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=S8(Q,this.array),$=S8($,this.array),Z=S8(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=S8(Q,this.array),$=S8($,this.array),Z=S8(Z,this.array),W=S8(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class RJ extends n8{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class MJ extends n8{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class s8 extends n8{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var hK=0,l8=new G8,VQ=new j8,B9=new f,p8=new $9,K7=new $9,B8=new f;class E6 extends g6{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hK++}),this.uuid=g9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((R$(J))?MJ:RJ)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new d0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return l8.makeRotationFromQuaternion(J),this.applyMatrix4(l8),this}rotateX(J){return l8.makeRotationX(J),this.applyMatrix4(l8),this}rotateY(J){return l8.makeRotationY(J),this.applyMatrix4(l8),this}rotateZ(J){return l8.makeRotationZ(J),this.applyMatrix4(l8),this}translate(J,Q,$){return l8.makeTranslation(J,Q,$),this.applyMatrix4(l8),this}scale(J,Q,$){return l8.makeScale(J,Q,$),this.applyMatrix4(l8),this}lookAt(J){return VQ.lookAt(J),VQ.updateMatrix(),this.applyMatrix4(VQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(B9).negate(),this.translate(B9.x,B9.y,B9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let U=J[Z];$.push(U.x,U.y,U.z||0)}this.setAttribute("position",new s8($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)h0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new $9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){s0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new f(-1/0,-1/0,-1/0),new f(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(p8.setFromBufferAttribute(W),this.morphTargetsRelative)B8.addVectors(this.boundingBox.min,p8.min),this.boundingBox.expandByPoint(B8),B8.addVectors(this.boundingBox.max,p8.max),this.boundingBox.expandByPoint(B8);else this.boundingBox.expandByPoint(p8.min),this.boundingBox.expandByPoint(p8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))s0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new L7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){s0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new f,1/0);return}if(J){let $=this.boundingSphere.center;if(p8.setFromBufferAttribute(J),Q)for(let W=0,U=Q.length;W<U;W++){let K=Q[W];if(K7.setFromBufferAttribute(K),this.morphTargetsRelative)B8.addVectors(p8.min,K7.min),p8.expandByPoint(B8),B8.addVectors(p8.max,K7.max),p8.expandByPoint(B8);else p8.expandByPoint(K7.min),p8.expandByPoint(K7.max)}p8.getCenter($);let Z=0;for(let W=0,U=J.count;W<U;W++)B8.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(B8));if(Q)for(let W=0,U=Q.length;W<U;W++){let K=Q[W],H=this.morphTargetsRelative;for(let X=0,Y=K.count;X<Y;X++){if(B8.fromBufferAttribute(K,X),H)B9.fromBufferAttribute(J,X),B8.add(B9);Z=Math.max(Z,$.distanceToSquared(B8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))s0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){s0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new n8(new Float32Array(4*$.count),4));let U=this.getAttribute("tangent"),K=[],H=[];for(let z=0;z<$.count;z++)K[z]=new f,H[z]=new f;let X=new f,Y=new f,N=new f,G=new T0,q=new T0,F=new T0,k=new f,L=new f;function D(z,j,M){X.fromBufferAttribute($,z),Y.fromBufferAttribute($,j),N.fromBufferAttribute($,M),G.fromBufferAttribute(W,z),q.fromBufferAttribute(W,j),F.fromBufferAttribute(W,M),Y.sub(X),N.sub(X),q.sub(G),F.sub(G);let R=1/(q.x*F.y-F.x*q.y);if(!isFinite(R))return;k.copy(Y).multiplyScalar(F.y).addScaledVector(N,-q.y).multiplyScalar(R),L.copy(N).multiplyScalar(q.x).addScaledVector(Y,-F.x).multiplyScalar(R),K[z].add(k),K[j].add(k),K[M].add(k),H[z].add(L),H[j].add(L),H[M].add(L)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let z=0,j=E.length;z<j;++z){let M=E[z],R=M.start,_=M.count;for(let b=R,x=R+_;b<x;b+=3)D(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let B=new f,I=new f,P=new f,A=new f;function C(z){P.fromBufferAttribute(Z,z),A.copy(P);let j=K[z];B.copy(j),B.sub(P.multiplyScalar(P.dot(j))).normalize(),I.crossVectors(A,j);let R=I.dot(H[z])<0?-1:1;U.setXYZW(z,B.x,B.y,B.z,R)}for(let z=0,j=E.length;z<j;++z){let M=E[z],R=M.start,_=M.count;for(let b=R,x=R+_;b<x;b+=3)C(J.getX(b+0)),C(J.getX(b+1)),C(J.getX(b+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new n8(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let G=0,q=$.count;G<q;G++)$.setXYZ(G,0,0,0);let Z=new f,W=new f,U=new f,K=new f,H=new f,X=new f,Y=new f,N=new f;if(J)for(let G=0,q=J.count;G<q;G+=3){let F=J.getX(G+0),k=J.getX(G+1),L=J.getX(G+2);Z.fromBufferAttribute(Q,F),W.fromBufferAttribute(Q,k),U.fromBufferAttribute(Q,L),Y.subVectors(U,W),N.subVectors(Z,W),Y.cross(N),K.fromBufferAttribute($,F),H.fromBufferAttribute($,k),X.fromBufferAttribute($,L),K.add(Y),H.add(Y),X.add(Y),$.setXYZ(F,K.x,K.y,K.z),$.setXYZ(k,H.x,H.y,H.z),$.setXYZ(L,X.x,X.y,X.z)}else for(let G=0,q=Q.count;G<q;G+=3)Z.fromBufferAttribute(Q,G+0),W.fromBufferAttribute(Q,G+1),U.fromBufferAttribute(Q,G+2),Y.subVectors(U,W),N.subVectors(Z,W),Y.cross(N),$.setXYZ(G+0,Y.x,Y.y,Y.z),$.setXYZ(G+1,Y.x,Y.y,Y.z),$.setXYZ(G+2,Y.x,Y.y,Y.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)B8.fromBufferAttribute(J,Q),B8.normalize(),J.setXYZ(Q,B8.x,B8.y,B8.z)}toNonIndexed(){function J(K,H){let{array:X,itemSize:Y,normalized:N}=K,G=new X.constructor(H.length*Y),q=0,F=0;for(let k=0,L=H.length;k<L;k++){if(K.isInterleavedBufferAttribute)q=H[k]*K.data.stride+K.offset;else q=H[k]*Y;for(let D=0;D<Y;D++)G[F++]=X[q++]}return new n8(G,Y,N)}if(this.index===null)return h0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new E6,$=this.index.array,Z=this.attributes;for(let K in Z){let H=Z[K],X=J(H,$);Q.setAttribute(K,X)}let W=this.morphAttributes;for(let K in W){let H=[],X=W[K];for(let Y=0,N=X.length;Y<N;Y++){let G=X[Y],q=J(G,$);H.push(q)}Q.morphAttributes[K]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let U=this.groups;for(let K=0,H=U.length;K<H;K++){let X=U[K];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let X in H)if(H[X]!==void 0)J[X]=H[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let H in $){let X=$[H];J.data.attributes[H]=X.toJSON(J.data)}let Z={},W=!1;for(let H in this.morphAttributes){let X=this.morphAttributes[H],Y=[];for(let N=0,G=X.length;N<G;N++){let q=X[N];Y.push(q.toJSON(J.data))}if(Y.length>0)Z[H]=Y,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let U=this.groups;if(U.length>0)J.data.groups=JSON.parse(JSON.stringify(U));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere=K.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let Y=Z[X];this.setAttribute(X,Y.clone(Q))}let W=J.morphAttributes;for(let X in W){let Y=[],N=W[X];for(let G=0,q=N.length;G<q;G++)Y.push(N[G].clone(Q));this.morphAttributes[X]=Y}this.morphTargetsRelative=J.morphTargetsRelative;let U=J.groups;for(let X=0,Y=U.length;X<Y;X++){let N=U[X];this.addGroup(N.start,N.count,N.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var iZ=new G8,t6=new w$,u7=new L7,oZ=new f,l7=new f,c7=new f,n7=new f,LQ=new f,s7=new f,aZ=new f,i7=new f;class i8 extends j8{constructor(J=new E6,Q=new kJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,U=Z.length;W<U;W++){let K=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,U=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let K=this.morphTargetInfluences;if(W&&K){s7.set(0,0,0);for(let H=0,X=W.length;H<X;H++){let Y=K[H],N=W[H];if(Y===0)continue;if(LQ.fromBufferAttribute(N,J),U)s7.addScaledVector(LQ,Y);else s7.addScaledVector(LQ.sub(Q),Y)}Q.add(s7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(u7.copy($.boundingSphere),u7.applyMatrix4(W),t6.copy(J.ray).recast(J.near),u7.containsPoint(t6.origin)===!1){if(t6.intersectSphere(u7,oZ)===null)return;if(t6.origin.distanceToSquared(oZ)>(J.far-J.near)**2)return}if(iZ.copy(W).invert(),t6.copy(J.ray).applyMatrix4(iZ),$.boundingBox!==null){if(t6.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,t6)}_computeIntersections(J,Q,$){let Z,W=this.geometry,U=this.material,K=W.index,H=W.attributes.position,X=W.attributes.uv,Y=W.attributes.uv1,N=W.attributes.normal,G=W.groups,q=W.drawRange;if(K!==null)if(Array.isArray(U))for(let F=0,k=G.length;F<k;F++){let L=G[F],D=U[L.materialIndex],E=Math.max(L.start,q.start),B=Math.min(K.count,Math.min(L.start+L.count,q.start+q.count));for(let I=E,P=B;I<P;I+=3){let A=K.getX(I),C=K.getX(I+1),z=K.getX(I+2);if(Z=o7(this,D,J,$,X,Y,N,A,C,z),Z)Z.faceIndex=Math.floor(I/3),Z.face.materialIndex=L.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),k=Math.min(K.count,q.start+q.count);for(let L=F,D=k;L<D;L+=3){let E=K.getX(L),B=K.getX(L+1),I=K.getX(L+2);if(Z=o7(this,U,J,$,X,Y,N,E,B,I),Z)Z.faceIndex=Math.floor(L/3),Q.push(Z)}}else if(H!==void 0)if(Array.isArray(U))for(let F=0,k=G.length;F<k;F++){let L=G[F],D=U[L.materialIndex],E=Math.max(L.start,q.start),B=Math.min(H.count,Math.min(L.start+L.count,q.start+q.count));for(let I=E,P=B;I<P;I+=3){let A=I,C=I+1,z=I+2;if(Z=o7(this,D,J,$,X,Y,N,A,C,z),Z)Z.faceIndex=Math.floor(I/3),Z.face.materialIndex=L.materialIndex,Q.push(Z)}}else{let F=Math.max(0,q.start),k=Math.min(H.count,q.start+q.count);for(let L=F,D=k;L<D;L+=3){let E=L,B=L+1,I=L+2;if(Z=o7(this,U,J,$,X,Y,N,E,B,I),Z)Z.faceIndex=Math.floor(L/3),Q.push(Z)}}}}function xK(J,Q,$,Z,W,U,K,H){let X;if(Q.side===1)X=Z.intersectTriangle(K,U,W,!0,H);else X=Z.intersectTriangle(W,U,K,Q.side===0,H);if(X===null)return null;i7.copy(H),i7.applyMatrix4(J.matrixWorld);let Y=$.ray.origin.distanceTo(i7);if(Y<$.near||Y>$.far)return null;return{distance:Y,point:i7.clone(),object:J}}function o7(J,Q,$,Z,W,U,K,H,X,Y){J.getVertexPosition(H,l7),J.getVertexPosition(X,c7),J.getVertexPosition(Y,n7);let N=xK(J,Q,$,Z,l7,c7,n7,aZ);if(N){let G=new f;if(c8.getBarycoord(aZ,l7,c7,n7,G),W)N.uv=c8.getInterpolatedAttribute(W,H,X,Y,G,new T0);if(U)N.uv1=c8.getInterpolatedAttribute(U,H,X,Y,G,new T0);if(K){if(N.normal=c8.getInterpolatedAttribute(K,H,X,Y,G,new f),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let q={a:H,b:X,c:Y,normal:new f,materialIndex:0};c8.getNormal(l7,c7,n7,q.normal),N.face=q,N.barycoord=G}return N}class m9 extends E6{constructor(J=1,Q=1,$=1,Z=1,W=1,U=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:U};let K=this;Z=Math.floor(Z),W=Math.floor(W),U=Math.floor(U);let H=[],X=[],Y=[],N=[],G=0,q=0;F("z","y","x",-1,-1,$,Q,J,U,W,0),F("z","y","x",1,-1,$,Q,-J,U,W,1),F("x","z","y",1,1,J,$,Q,Z,U,2),F("x","z","y",1,-1,J,$,-Q,Z,U,3),F("x","y","z",1,-1,J,Q,$,Z,W,4),F("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(H),this.setAttribute("position",new s8(X,3)),this.setAttribute("normal",new s8(Y,3)),this.setAttribute("uv",new s8(N,2));function F(k,L,D,E,B,I,P,A,C,z,j){let M=I/C,R=P/z,_=I/2,b=P/2,x=A/2,m=C+1,o=z+1,c=0,r=0,u=new f;for(let Q0=0;Q0<o;Q0++){let E0=Q0*R-b;for(let f0=0;f0<m;f0++){let u0=f0*M-_;u[k]=u0*E,u[L]=E0*B,u[D]=x,X.push(u.x,u.y,u.z),u[k]=0,u[L]=0,u[D]=A>0?1:-1,Y.push(u.x,u.y,u.z),N.push(f0/C),N.push(1-Q0/z),c+=1}}for(let Q0=0;Q0<z;Q0++)for(let E0=0;E0<C;E0++){let f0=G+E0+m*Q0,u0=G+E0+m*(Q0+1),K0=G+(E0+1)+m*(Q0+1),V0=G+(E0+1)+m*Q0;H.push(f0,u0,V0),H.push(u0,K0,V0),r+=6}K.addGroup(q,r,j),q+=r,G+=c}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new m9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function W9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)h0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function A8(J){let Q={};for(let $=0;$<J.length;$++){let Z=W9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function pK(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function C$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return e0.workingColorSpace}var H1={clone:W9,merge:A8},gK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class H6 extends Z9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gK,this.fragmentShader=mK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=W9(J.uniforms),this.uniformsGroups=pK(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let U=this.uniforms[Z].value;if(U&&U.isTexture)Q.uniforms[Z]={type:"t",value:U.toJSON(J).uuid};else if(U&&U.isColor)Q.uniforms[Z]={type:"c",value:U.getHex()};else if(U&&U.isVector2)Q.uniforms[Z]={type:"v2",value:U.toArray()};else if(U&&U.isVector3)Q.uniforms[Z]={type:"v3",value:U.toArray()};else if(U&&U.isVector4)Q.uniforms[Z]={type:"v4",value:U.toArray()};else if(U&&U.isMatrix3)Q.uniforms[Z]={type:"m3",value:U.toArray()};else if(U&&U.isMatrix4)Q.uniforms[Z]={type:"m4",value:U.toArray()};else Q.uniforms[Z]={value:U}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class VJ extends j8{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new G8,this.projectionMatrix=new G8,this.projectionMatrixInverse=new G8,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var h6=new f,rZ=new T0,tZ=new T0;class I8 extends VJ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=S9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(X7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return S9*2*Math.atan(Math.tan(X7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){h6.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(h6.x,h6.y).multiplyScalar(-J/h6.z),h6.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(h6.x,h6.y).multiplyScalar(-J/h6.z)}getViewSize(J,Q){return this.getViewBounds(J,rZ,tZ),Q.subVectors(tZ,rZ)}setViewOffset(J,Q,$,Z,W,U){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=U,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(X7*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,U=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:X}=U;W+=U.offsetX*Z/H,Q-=U.offsetY*$/X,Z*=U.width/H,$*=U.height/X}let K=this.filmOffset;if(K!==0)W+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var I9=-90,w9=1;class P$ extends j8{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new I8(I9,w9,J,Q);Z.layers=this.layers,this.add(Z);let W=new I8(I9,w9,J,Q);W.layers=this.layers,this.add(W);let U=new I8(I9,w9,J,Q);U.layers=this.layers,this.add(U);let K=new I8(I9,w9,J,Q);K.layers=this.layers,this.add(K);let H=new I8(I9,w9,J,Q);H.layers=this.layers,this.add(H);let X=new I8(I9,w9,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,U,K,H]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),U.up.set(0,0,1),U.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),U.up.set(0,0,-1),U.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,U,K,H,X,Y]=this.children,N=J.getRenderTarget(),G=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let k=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,U),J.setRenderTarget($,2,Z),J.render(Q,K),J.setRenderTarget($,3,Z),J.render(Q,H),J.setRenderTarget($,4,Z),J.render(Q,X),$.texture.generateMipmaps=k,J.setRenderTarget($,5,Z),J.render(Q,Y),J.setRenderTarget(N,G,q),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class LJ extends _8{constructor(J=[],Q=301,$,Z,W,U,K,H,X,Y){super(J,Q,$,Z,W,U,K,H,X,Y);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class _$ extends _6{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new LJ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},Z=new m9(5,5,5),W=new H6({name:"CubemapFromEquirect",uniforms:W9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let U=new i8(Z,W),K=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new P$(1,10,this).update(J,U),Q.minFilter=K,U.geometry.dispose(),U.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let U=0;U<6;U++)J.setRenderTarget(this,U),J.clear(Q,$,Z);J.setRenderTarget(W)}}class P9 extends j8{constructor(){super();this.isGroup=!0,this.type="Group"}}var dK={type:"move"};class z7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new P9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new P9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new f,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new f;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new P9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new f,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new f;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,U=null,K=this._targetRay,H=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){U=!0;for(let k of J.hand.values()){let L=Q.getJointPose(k,$),D=this._getHandJoint(X,k);if(L!==null)D.matrix.fromArray(L.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.matrixWorldNeedsUpdate=!0,D.jointRadius=L.radius;D.visible=L!==null}let Y=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],G=Y.position.distanceTo(N.position),q=0.02,F=0.005;if(X.inputState.pinching&&G>q+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&G<=q-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1}}if(K!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(K.matrix.fromArray(Z.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,Z.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy(Z.linearVelocity);else K.hasLinearVelocity=!1;if(Z.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy(Z.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(dK)}}}if(K!==null)K.visible=Z!==null;if(H!==null)H.visible=W!==null;if(X!==null)X.visible=U!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new P9;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class zJ extends j8{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new K6,this.environmentIntensity=1,this.environmentRotation=new K6,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class A$ extends _8{constructor(J=null,Q=1,$=1,Z,W,U,K,H,X=1003,Y=1003,N,G){super(null,U,K,H,X,Y,Z,W,N,G);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var zQ=new f,uK=new f,lK=new d0;class B6{constructor(J=new f(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=zQ.subVectors($,Q).cross(uK.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(zQ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||lK.getNormalMatrix(J),Z=this.coplanarPoint(zQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var e6=new L7,cK=new T0(0.5,0.5),a7=new f;class B7{constructor(J=new B6,Q=new B6,$=new B6,Z=new B6,W=new B6,U=new B6){this.planes=[J,Q,$,Z,W,U]}set(J,Q,$,Z,W,U){let K=this.planes;return K[0].copy(J),K[1].copy(Q),K[2].copy($),K[3].copy(Z),K[4].copy(W),K[5].copy(U),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,U=W[0],K=W[1],H=W[2],X=W[3],Y=W[4],N=W[5],G=W[6],q=W[7],F=W[8],k=W[9],L=W[10],D=W[11],E=W[12],B=W[13],I=W[14],P=W[15];if(Z[0].setComponents(X-U,q-Y,D-F,P-E).normalize(),Z[1].setComponents(X+U,q+Y,D+F,P+E).normalize(),Z[2].setComponents(X+K,q+N,D+k,P+B).normalize(),Z[3].setComponents(X-K,q-N,D-k,P-B).normalize(),$)Z[4].setComponents(H,G,L,I).normalize(),Z[5].setComponents(X-H,q-G,D-L,P-I).normalize();else if(Z[4].setComponents(X-H,q-G,D-L,P-I).normalize(),Q===2000)Z[5].setComponents(X+H,q+G,D+L,P+I).normalize();else if(Q===2001)Z[5].setComponents(H,G,L,I).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();e6.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();e6.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(e6)}intersectsSprite(J){e6.center.set(0,0,0);let Q=cK.distanceTo(J.center);return e6.radius=0.7071067811865476+Q,e6.applyMatrix4(J.matrixWorld),this.intersectsSphere(e6)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(a7.x=Z.normal.x>0?J.max.x:J.min.x,a7.y=Z.normal.y>0?J.max.y:J.min.y,a7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(a7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BJ extends _8{constructor(J,Q,$=1014,Z,W,U,K=1003,H=1003,X,Y=1026,N=1){if(Y!==1026&&Y!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let G={width:J,height:Q,depth:N};super(G,Z,W,U,K,H,Y,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new V7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class IJ extends _8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class m8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){h0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),W=0;Q.push(0);for(let U=1;U<=J;U++)$=this.getPoint(U/J),W+=$.distanceTo(Z),Q.push(W),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,W=$.length,U;if(Q)U=Q;else U=J*$[W-1];let K=0,H=W-1,X;while(K<=H)if(Z=Math.floor(K+(H-K)/2),X=$[Z]-U,X<0)K=Z+1;else if(X>0)H=Z-1;else{H=Z;break}if(Z=H,$[Z]===U)return Z/(W-1);let Y=$[Z],G=$[Z+1]-Y,q=(U-Y)/G;return(Z+q)/(W-1)}getTangent(J,Q){let Z=J-0.0001,W=J+0.0001;if(Z<0)Z=0;if(W>1)W=1;let U=this.getPoint(Z),K=this.getPoint(W),H=Q||(U.isVector2?new T0:new f);return H.copy(K).sub(U).normalize(),H}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new f,Z=[],W=[],U=[],K=new f,H=new G8;for(let q=0;q<=J;q++){let F=q/J;Z[q]=this.getTangentAt(F,new f)}W[0]=new f,U[0]=new f;let X=Number.MAX_VALUE,Y=Math.abs(Z[0].x),N=Math.abs(Z[0].y),G=Math.abs(Z[0].z);if(Y<=X)X=Y,$.set(1,0,0);if(N<=X)X=N,$.set(0,1,0);if(G<=X)$.set(0,0,1);K.crossVectors(Z[0],$).normalize(),W[0].crossVectors(Z[0],K),U[0].crossVectors(Z[0],W[0]);for(let q=1;q<=J;q++){if(W[q]=W[q-1].clone(),U[q]=U[q-1].clone(),K.crossVectors(Z[q-1],Z[q]),K.length()>Number.EPSILON){K.normalize();let F=Math.acos(n0(Z[q-1].dot(Z[q]),-1,1));W[q].applyMatrix4(H.makeRotationAxis(K,F))}U[q].crossVectors(Z[q],W[q])}if(Q===!0){let q=Math.acos(n0(W[0].dot(W[J]),-1,1));if(q/=J,Z[0].dot(K.crossVectors(W[0],W[J]))>0)q=-q;for(let F=1;F<=J;F++)W[F].applyMatrix4(H.makeRotationAxis(Z[F],q*F)),U[F].crossVectors(Z[F],W[F])}return{tangents:Z,normals:W,binormals:U}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class wJ extends m8{constructor(J=0,Q=0,$=1,Z=1,W=0,U=Math.PI*2,K=!1,H=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=W,this.aEndAngle=U,this.aClockwise=K,this.aRotation=H}getPoint(J,Q=new T0){let $=Q,Z=Math.PI*2,W=this.aEndAngle-this.aStartAngle,U=Math.abs(W)<Number.EPSILON;while(W<0)W+=Z;while(W>Z)W-=Z;if(W<Number.EPSILON)if(U)W=0;else W=Z;if(this.aClockwise===!0&&!U)if(W===Z)W=-Z;else W=W-Z;let K=this.aStartAngle+J*W,H=this.aX+this.xRadius*Math.cos(K),X=this.aY+this.yRadius*Math.sin(K);if(this.aRotation!==0){let Y=Math.cos(this.aRotation),N=Math.sin(this.aRotation),G=H-this.aX,q=X-this.aY;H=G*Y-q*N+this.aX,X=G*N+q*Y+this.aY}return $.set(H,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class T$ extends wJ{constructor(J,Q,$,Z,W,U){super(J,Q,$,$,Z,W,U);this.isArcCurve=!0,this.type="ArcCurve"}}function S$(){let J=0,Q=0,$=0,Z=0;function W(U,K,H,X){J=U,Q=H,$=-3*U+3*K-2*H-X,Z=2*U-2*K+H+X}return{initCatmullRom:function(U,K,H,X,Y){W(K,H,Y*(H-U),Y*(X-K))},initNonuniformCatmullRom:function(U,K,H,X,Y,N,G){let q=(K-U)/Y-(H-U)/(Y+N)+(H-K)/N,F=(H-K)/N-(X-K)/(N+G)+(X-H)/G;q*=N,F*=N,W(K,H,q,F)},calc:function(U){let K=U*U,H=K*U;return J+Q*U+$*K+Z*H}}}var r7=new f,BQ=new S$,IQ=new S$,wQ=new S$;class j$ extends m8{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new f){let $=Q,Z=this.points,W=Z.length,U=(W-(this.closed?0:1))*J,K=Math.floor(U),H=U-K;if(this.closed)K+=K>0?0:(Math.floor(Math.abs(K)/W)+1)*W;else if(H===0&&K===W-1)K=W-2,H=1;let X,Y;if(this.closed||K>0)X=Z[(K-1)%W];else r7.subVectors(Z[0],Z[1]).add(Z[0]),X=r7;let N=Z[K%W],G=Z[(K+1)%W];if(this.closed||K+2<W)Y=Z[(K+2)%W];else r7.subVectors(Z[W-1],Z[W-2]).add(Z[W-1]),Y=r7;if(this.curveType==="centripetal"||this.curveType==="chordal"){let q=this.curveType==="chordal"?0.5:0.25,F=Math.pow(X.distanceToSquared(N),q),k=Math.pow(N.distanceToSquared(G),q),L=Math.pow(G.distanceToSquared(Y),q);if(k<0.0001)k=1;if(F<0.0001)F=k;if(L<0.0001)L=k;BQ.initNonuniformCatmullRom(X.x,N.x,G.x,Y.x,F,k,L),IQ.initNonuniformCatmullRom(X.y,N.y,G.y,Y.y,F,k,L),wQ.initNonuniformCatmullRom(X.z,N.z,G.z,Y.z,F,k,L)}else if(this.curveType==="catmullrom")BQ.initCatmullRom(X.x,N.x,G.x,Y.x,this.tension),IQ.initCatmullRom(X.y,N.y,G.y,Y.y,this.tension),wQ.initCatmullRom(X.z,N.z,G.z,Y.z,this.tension);return $.set(BQ.calc(H),IQ.calc(H),wQ.calc(H)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new f().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function eZ(J,Q,$,Z,W){let U=(Z-Q)*0.5,K=(W-$)*0.5,H=J*J,X=J*H;return(2*$-2*Z+U+K)*X+(-3*$+3*Z-2*U-K)*H+U*J+$}function nK(J,Q){let $=1-J;return $*$*Q}function sK(J,Q){return 2*(1-J)*J*Q}function iK(J,Q){return J*J*Q}function N7(J,Q,$,Z){return nK(J,Q)+sK(J,$)+iK(J,Z)}function oK(J,Q){let $=1-J;return $*$*$*Q}function aK(J,Q){let $=1-J;return 3*$*$*J*Q}function rK(J,Q){return 3*(1-J)*J*J*Q}function tK(J,Q){return J*J*J*Q}function G7(J,Q,$,Z,W){return oK(J,Q)+aK(J,$)+rK(J,Z)+tK(J,W)}class f$ extends m8{constructor(J=new T0,Q=new T0,$=new T0,Z=new T0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new T0){let $=Q,Z=this.v0,W=this.v1,U=this.v2,K=this.v3;return $.set(G7(J,Z.x,W.x,U.x,K.x),G7(J,Z.y,W.y,U.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class y$ extends m8{constructor(J=new f,Q=new f,$=new f,Z=new f){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new f){let $=Q,Z=this.v0,W=this.v1,U=this.v2,K=this.v3;return $.set(G7(J,Z.x,W.x,U.x,K.x),G7(J,Z.y,W.y,U.y,K.y),G7(J,Z.z,W.z,U.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class v$ extends m8{constructor(J=new T0,Q=new T0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new T0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new T0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class b$ extends m8{constructor(J=new f,Q=new f){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new f){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new f){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class h$ extends m8{constructor(J=new T0,Q=new T0,$=new T0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new T0){let $=Q,Z=this.v0,W=this.v1,U=this.v2;return $.set(N7(J,Z.x,W.x,U.x),N7(J,Z.y,W.y,U.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class CJ extends m8{constructor(J=new f,Q=new f,$=new f){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new f){let $=Q,Z=this.v0,W=this.v1,U=this.v2;return $.set(N7(J,Z.x,W.x,U.x),N7(J,Z.y,W.y,U.y),N7(J,Z.z,W.z,U.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class x$ extends m8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new T0){let $=Q,Z=this.points,W=(Z.length-1)*J,U=Math.floor(W),K=W-U,H=Z[U===0?U:U-1],X=Z[U],Y=Z[U>Z.length-2?Z.length-1:U+1],N=Z[U>Z.length-3?Z.length-1:U+2];return $.set(eZ(K,H.x,X.x,Y.x,N.x),eZ(K,H.y,X.y,Y.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new T0().fromArray(Z))}return this}}var eK=Object.freeze({__proto__:null,ArcCurve:T$,CatmullRomCurve3:j$,CubicBezierCurve:f$,CubicBezierCurve3:y$,EllipseCurve:wJ,LineCurve:v$,LineCurve3:b$,QuadraticBezierCurve:h$,QuadraticBezierCurve3:CJ,SplineCurve:x$});class I7 extends E6{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,U=Q/2,K=Math.floor($),H=Math.floor(Z),X=K+1,Y=H+1,N=J/K,G=Q/H,q=[],F=[],k=[],L=[];for(let D=0;D<Y;D++){let E=D*G-U;for(let B=0;B<X;B++){let I=B*N-W;F.push(I,-E,0),k.push(0,0,1),L.push(B/K),L.push(1-D/H)}}for(let D=0;D<H;D++)for(let E=0;E<K;E++){let B=E+X*D,I=E+X*(D+1),P=E+1+X*(D+1),A=E+1+X*D;q.push(B,I,A),q.push(I,P,A)}this.setIndex(q),this.setAttribute("position",new s8(F,3)),this.setAttribute("normal",new s8(k,3)),this.setAttribute("uv",new s8(L,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new I7(J.width,J.height,J.widthSegments,J.heightSegments)}}class d9 extends E6{constructor(J=new CJ(new f(-1,-1,0),new f(-1,1,0),new f(1,1,0)),Q=64,$=1,Z=8,W=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:W};let U=J.computeFrenetFrames(Q,W);this.tangents=U.tangents,this.normals=U.normals,this.binormals=U.binormals;let K=new f,H=new f,X=new T0,Y=new f,N=[],G=[],q=[],F=[];k(),this.setIndex(F),this.setAttribute("position",new s8(N,3)),this.setAttribute("normal",new s8(G,3)),this.setAttribute("uv",new s8(q,2));function k(){for(let B=0;B<Q;B++)L(B);L(W===!1?Q:0),E(),D()}function L(B){Y=J.getPointAt(B/Q,Y);let I=U.normals[B],P=U.binormals[B];for(let A=0;A<=Z;A++){let C=A/Z*Math.PI*2,z=Math.sin(C),j=-Math.cos(C);H.x=j*I.x+z*P.x,H.y=j*I.y+z*P.y,H.z=j*I.z+z*P.z,H.normalize(),G.push(H.x,H.y,H.z),K.x=Y.x+$*H.x,K.y=Y.y+$*H.y,K.z=Y.z+$*H.z,N.push(K.x,K.y,K.z)}}function D(){for(let B=1;B<=Q;B++)for(let I=1;I<=Z;I++){let P=(Z+1)*(B-1)+(I-1),A=(Z+1)*B+(I-1),C=(Z+1)*B+I,z=(Z+1)*(B-1)+I;F.push(P,A,z),F.push(A,C,z)}}function E(){for(let B=0;B<=Q;B++)for(let I=0;I<=Z;I++)X.x=B/Q,X.y=I/Z,q.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new d9(new eK[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}class PJ extends Z9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new x0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new x0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new T0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new K6,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class p$ extends Z9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class g$ extends Z9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function t7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function JH(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class u9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let U;Q:{Z:if(!(J<Z)){for(let K=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===K)break;if(W=Z,Z=Q[++$],J<Z)break J}U=Q.length;break Q}if(!(J>=W)){let K=Q[1];if(J<K)$=2,W=K;for(let H=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===H)break;if(Z=W,W=Q[--$-1],J>=W)break J}U=$,$=0;break Q}break $}while($<U){let K=$+U>>>1;if(J<Q[K])U=K;else $=K+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let U=0;U!==Z;++U)Q[U]=$[W+U];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class m$ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,U=J+1,K=Z[W],H=Z[U];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,K=2*Q-$;break;case 2402:W=Z.length-2,K=Q+Z[W]-Z[W+1];break;default:W=J,K=$}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:U=J,H=2*$-Q;break;case 2402:U=1,H=$+Z[1]-Z[0];break;default:U=J-1,H=Q}let X=($-Q)*0.5,Y=this.valueSize;this._weightPrev=X/(Q-K),this._weightNext=X/(H-$),this._offsetPrev=W*Y,this._offsetNext=U*Y}interpolate_(J,Q,$,Z){let W=this.resultBuffer,U=this.sampleValues,K=this.valueSize,H=J*K,X=H-K,Y=this._offsetPrev,N=this._offsetNext,G=this._weightPrev,q=this._weightNext,F=($-Q)/(Z-Q),k=F*F,L=k*F,D=-G*L+2*G*k-G*F,E=(1+G)*L+(-1.5-2*G)*k+(-0.5+G)*F+1,B=(-1-q)*L+(1.5+q)*k+0.5*F,I=q*L-q*k;for(let P=0;P!==K;++P)W[P]=D*U[Y+P]+E*U[X+P]+B*U[H+P]+I*U[N+P];return W}}class d$ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,U=this.sampleValues,K=this.valueSize,H=J*K,X=H-K,Y=($-Q)/(Z-Q),N=1-Y;for(let G=0;G!==K;++G)W[G]=U[X+G]*N+U[H+G]*Y;return W}}class u$ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class o8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=t7(Q,this.TimeBufferType),this.values=t7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:t7(J.times,Array),values:t7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new u$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new d$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new m$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return h0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,U=Z-1;while(W!==Z&&$[W]<J)++W;while(U!==-1&&$[U]>Q)--U;if(++U,W!==0||U!==Z){if(W>=U)U=Math.max(U,1),W=U-1;let K=this.getValueSize();this.times=$.slice(W,U),this.values=this.values.slice(W*K,U*K)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)s0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)s0("KeyframeTrack: Track is empty.",this),J=!1;let U=null;for(let K=0;K!==W;K++){let H=$[K];if(typeof H==="number"&&isNaN(H)){s0("KeyframeTrack: Time is not a valid number.",this,K,H),J=!1;break}if(U!==null&&U>H){s0("KeyframeTrack: Out of order keys.",this,K,H,U),J=!1;break}U=H}if(Z!==void 0){if(JH(Z))for(let K=0,H=Z.length;K!==H;++K){let X=Z[K];if(isNaN(X)){s0("KeyframeTrack: Value is not a valid number.",this,K,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,U=1;for(let K=1;K<W;++K){let H=!1,X=J[K],Y=J[K+1];if(X!==Y&&(K!==1||X!==J[0]))if(!Z){let N=K*$,G=N-$,q=N+$;for(let F=0;F!==$;++F){let k=Q[N+F];if(k!==Q[G+F]||k!==Q[q+F]){H=!0;break}}}else H=!0;if(H){if(K!==U){J[U]=J[K];let N=K*$,G=U*$;for(let q=0;q!==$;++q)Q[G+q]=Q[N+q]}++U}}if(W>0){J[U]=J[W];for(let K=W*$,H=U*$,X=0;X!==$;++X)Q[H+X]=Q[K+X];++U}if(U!==J.length)this.times=J.slice(0,U),this.values=Q.slice(0,U*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}o8.prototype.ValueTypeName="";o8.prototype.TimeBufferType=Float32Array;o8.prototype.ValueBufferType=Float32Array;o8.prototype.DefaultInterpolation=2301;class U9 extends o8{constructor(J,Q,$){super(J,Q,$)}}U9.prototype.ValueTypeName="bool";U9.prototype.ValueBufferType=Array;U9.prototype.DefaultInterpolation=2300;U9.prototype.InterpolantFactoryMethodLinear=void 0;U9.prototype.InterpolantFactoryMethodSmooth=void 0;class l$ extends o8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}l$.prototype.ValueTypeName="color";class c$ extends o8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}c$.prototype.ValueTypeName="number";class n$ extends u9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,U=this.sampleValues,K=this.valueSize,H=($-Q)/(Z-Q),X=J*K;for(let Y=X+K;X!==Y;X+=4)m6.slerpFlat(W,0,U,X-K,U,X,H);return W}}class _J extends o8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new n$(this.times,this.values,this.getValueSize(),J)}}_J.prototype.ValueTypeName="quaternion";_J.prototype.InterpolantFactoryMethodSmooth=void 0;class K9 extends o8{constructor(J,Q,$){super(J,Q,$)}}K9.prototype.ValueTypeName="string";K9.prototype.ValueBufferType=Array;K9.prototype.DefaultInterpolation=2300;K9.prototype.InterpolantFactoryMethodLinear=void 0;K9.prototype.InterpolantFactoryMethodSmooth=void 0;class s$ extends o8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}s$.prototype.ValueTypeName="vector";class i${constructor(J,Q,$){let Z=this,W=!1,U=0,K=0,H=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(Y){if(K++,W===!1){if(Z.onStart!==void 0)Z.onStart(Y,U,K)}W=!0},this.itemEnd=function(Y){if(U++,Z.onProgress!==void 0)Z.onProgress(Y,U,K);if(U===K){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(Y){if(Z.onError!==void 0)Z.onError(Y)},this.resolveURL=function(Y){if(H)return H(Y);return Y},this.setURLModifier=function(Y){return H=Y,this},this.addHandler=function(Y,N){return X.push(Y,N),this},this.removeHandler=function(Y){let N=X.indexOf(Y);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(Y){for(let N=0,G=X.length;N<G;N+=2){let q=X[N],F=X[N+1];if(q.global)q.lastIndex=0;if(q.test(Y))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var X1=new i$;class o${constructor(J){this.manager=J!==void 0?J:X1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}o$.DEFAULT_MATERIAL_NAME="__DEFAULT";class AJ extends j8{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new x0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}var CQ=new G8,JW=new f,QW=new f;class Y1{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new T0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new G8,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new B7,this._frameExtents=new T0(1,1),this._viewportCount=1,this._viewports=[new Z8(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(JW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(JW),QW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(QW),Q.updateMatrixWorld(),CQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(CQ,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(CQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var $W=new G8,H7=new f,PQ=new f;class N1 extends Y1{constructor(){super(new I8(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new T0(4,2),this._viewportCount=6,this._viewports=[new Z8(2,1,1,1),new Z8(0,1,1,1),new Z8(3,1,1,1),new Z8(1,1,1,1),new Z8(3,0,1,1),new Z8(1,0,1,1)],this._cubeDirections=[new f(1,0,0),new f(-1,0,0),new f(0,0,1),new f(0,0,-1),new f(0,1,0),new f(0,-1,0)],this._cubeUps=[new f(0,1,0),new f(0,1,0),new f(0,1,0),new f(0,1,0),new f(0,0,1),new f(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,W=J.distance||$.far;if(W!==$.far)$.far=W,$.updateProjectionMatrix();H7.setFromMatrixPosition(J.matrixWorld),$.position.copy(H7),PQ.copy($.position),PQ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(PQ),$.updateMatrixWorld(),Z.makeTranslation(-H7.x,-H7.y,-H7.z),$W.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix($W,$.coordinateSystem,$.reversedDepth)}}class H9 extends AJ{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new N1}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class a$ extends VJ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,U=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=U,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,U){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=U,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,U=$+J,K=Z+Q,H=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,Y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,U=W+X*this.view.width,K-=Y*this.view.offsetY,H=K-Y*this.view.height}this.projectionMatrix.makeOrthographic(W,U,K,H,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class TJ extends AJ{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class r$ extends I8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var t$="\\[\\]\\.:\\/",QH=new RegExp("["+t$+"]","g"),e$="[^"+t$+"]",$H="[^"+t$.replace("\\.","")+"]",ZH=/((?:WC+[\/:])*)/.source.replace("WC",e$),WH=/(WCOD+)?/.source.replace("WCOD",$H),UH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",e$),KH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",e$),HH=new RegExp("^"+ZH+WH+UH+KH+"$"),XH=["material","materials","bones","map"];class G1{constructor(J,Q,$){let Z=$||$8.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class $8{constructor(J,Q,$){this.path=Q,this.parsedPath=$||$8.parseTrackName(Q),this.node=$8.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new $8(J,Q,$);else return new $8.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(QH,"")}static parseTrackName(J){let Q=HH.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(XH.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let U=0;U<W.length;U++){let K=W[U];if(K.name===Q||K.uuid===Q)return K;let H=$(K.children);if(H)return H}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=$8.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){h0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){s0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){s0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){s0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let Y=0;Y<J.length;Y++)if(J[Y].name===X){X=Y;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){s0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){s0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){s0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){s0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let U=J[Z];if(U===void 0){let X=Q.nodeName;s0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let K=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)K=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)K=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){s0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){s0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}H=this.BindingType.ArrayElement,this.resolvedProperty=U,this.propertyIndex=W}else if(U.fromArray!==void 0&&U.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=U;else if(Array.isArray(U))H=this.BindingType.EntireArray,this.resolvedProperty=U;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$8.Composite=G1;$8.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$8.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$8.prototype.GetterByBindingType=[$8.prototype._getValue_direct,$8.prototype._getValue_array,$8.prototype._getValue_arrayElement,$8.prototype._getValue_toArray];$8.prototype.SetterByBindingTypeAndVersioning=[[$8.prototype._setValue_direct,$8.prototype._setValue_direct_setNeedsUpdate,$8.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$8.prototype._setValue_array,$8.prototype._setValue_array_setNeedsUpdate,$8.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$8.prototype._setValue_arrayElement,$8.prototype._setValue_arrayElement_setNeedsUpdate,$8.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$8.prototype._setValue_fromArray,$8.prototype._setValue_fromArray_setNeedsUpdate,$8.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rq=new Float32Array(1);function JZ(J,Q,$,Z){let W=YH(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function YH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));if(typeof window<"u")if(window.__THREE__)h0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="181";function y1(){let J=null,Q=!1,$=null,Z=null;function W(U,K){$(U,K),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(U){$=U},setContext:function(U){J=U}}}function NH(J){let Q=new WeakMap;function $(H,X){let{array:Y,usage:N}=H,G=Y.byteLength,q=J.createBuffer();J.bindBuffer(X,q),J.bufferData(X,Y,N),H.onUploadCallback();let F;if(Y instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&Y instanceof Float16Array)F=J.HALF_FLOAT;else if(Y instanceof Uint16Array)if(H.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(Y instanceof Int16Array)F=J.SHORT;else if(Y instanceof Uint32Array)F=J.UNSIGNED_INT;else if(Y instanceof Int32Array)F=J.INT;else if(Y instanceof Int8Array)F=J.BYTE;else if(Y instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(Y instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+Y);return{buffer:q,type:F,bytesPerElement:Y.BYTES_PER_ELEMENT,version:H.version,size:G}}function Z(H,X,Y){let{array:N,updateRanges:G}=X;if(J.bindBuffer(Y,H),G.length===0)J.bufferSubData(Y,0,N);else{G.sort((F,k)=>F.start-k.start);let q=0;for(let F=1;F<G.length;F++){let k=G[q],L=G[F];if(L.start<=k.start+k.count+1)k.count=Math.max(k.count,L.start+L.count-k.start);else++q,G[q]=L}G.length=q+1;for(let F=0,k=G.length;F<k;F++){let L=G[F];J.bufferSubData(Y,L.start*N.BYTES_PER_ELEMENT,N,L.start,L.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function U(H){if(H.isInterleavedBufferAttribute)H=H.data;let X=Q.get(H);if(X)J.deleteBuffer(X.buffer),Q.delete(H)}function K(H,X){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let N=Q.get(H);if(!N||N.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let Y=Q.get(H);if(Y===void 0)Q.set(H,$(H,X));else if(Y.version<H.version){if(Y.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(Y.buffer,H,X),Y.version=H.version}}return{get:W,remove:U,update:K}}var GH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qH=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DH=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kH=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MH=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,VH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BH=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IH=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wH=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CH=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_H=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TH=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fH=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yH=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vH=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bH=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mH="gl_FragColor = linearToOutputTexel( gl_FragColor );",dH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cH=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sH=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tH=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QX=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$X=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZX=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WX=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UX=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KX=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HX=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XX=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YX=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NX=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GX=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qX=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EX=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DX=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FX=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OX=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kX=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RX=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MX=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VX=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LX=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zX=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BX=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IX=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wX=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CX=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PX=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_X=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AX=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,TX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SX=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jX=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fX=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yX=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vX=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bX=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hX=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xX=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pX=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gX=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mX=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dX=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uX=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lX=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cX=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nX=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sX=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iX=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oX=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aX=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rX=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tX=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eX=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$Y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZY=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WY=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UY=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YY=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GY=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EY=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FY=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kY=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RY=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MY=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LY=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zY=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BY=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IY=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wY=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CY=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PY=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_Y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AY=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TY=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SY=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jY=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fY=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yY=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vY=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bY=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hY=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xY=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gY=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mY=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dY=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uY=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,c0={alphahash_fragment:GH,alphahash_pars_fragment:qH,alphamap_fragment:EH,alphamap_pars_fragment:DH,alphatest_fragment:FH,alphatest_pars_fragment:OH,aomap_fragment:kH,aomap_pars_fragment:RH,batching_pars_vertex:MH,batching_vertex:VH,begin_vertex:LH,beginnormal_vertex:zH,bsdfs:BH,iridescence_fragment:IH,bumpmap_pars_fragment:wH,clipping_planes_fragment:CH,clipping_planes_pars_fragment:PH,clipping_planes_pars_vertex:_H,clipping_planes_vertex:AH,color_fragment:TH,color_pars_fragment:SH,color_pars_vertex:jH,color_vertex:fH,common:yH,cube_uv_reflection_fragment:vH,defaultnormal_vertex:bH,displacementmap_pars_vertex:hH,displacementmap_vertex:xH,emissivemap_fragment:pH,emissivemap_pars_fragment:gH,colorspace_fragment:mH,colorspace_pars_fragment:dH,envmap_fragment:uH,envmap_common_pars_fragment:lH,envmap_pars_fragment:cH,envmap_pars_vertex:nH,envmap_physical_pars_fragment:ZX,envmap_vertex:sH,fog_vertex:iH,fog_pars_vertex:oH,fog_fragment:aH,fog_pars_fragment:rH,gradientmap_pars_fragment:tH,lightmap_pars_fragment:eH,lights_lambert_fragment:JX,lights_lambert_pars_fragment:QX,lights_pars_begin:$X,lights_toon_fragment:WX,lights_toon_pars_fragment:UX,lights_phong_fragment:KX,lights_phong_pars_fragment:HX,lights_physical_fragment:XX,lights_physical_pars_fragment:YX,lights_fragment_begin:NX,lights_fragment_maps:GX,lights_fragment_end:qX,logdepthbuf_fragment:EX,logdepthbuf_pars_fragment:DX,logdepthbuf_pars_vertex:FX,logdepthbuf_vertex:OX,map_fragment:kX,map_pars_fragment:RX,map_particle_fragment:MX,map_particle_pars_fragment:VX,metalnessmap_fragment:LX,metalnessmap_pars_fragment:zX,morphinstance_vertex:BX,morphcolor_vertex:IX,morphnormal_vertex:wX,morphtarget_pars_vertex:CX,morphtarget_vertex:PX,normal_fragment_begin:_X,normal_fragment_maps:AX,normal_pars_fragment:TX,normal_pars_vertex:SX,normal_vertex:jX,normalmap_pars_fragment:fX,clearcoat_normal_fragment_begin:yX,clearcoat_normal_fragment_maps:vX,clearcoat_pars_fragment:bX,iridescence_pars_fragment:hX,opaque_fragment:xX,packing:pX,premultiplied_alpha_fragment:gX,project_vertex:mX,dithering_fragment:dX,dithering_pars_fragment:uX,roughnessmap_fragment:lX,roughnessmap_pars_fragment:cX,shadowmap_pars_fragment:nX,shadowmap_pars_vertex:sX,shadowmap_vertex:iX,shadowmask_pars_fragment:oX,skinbase_vertex:aX,skinning_pars_vertex:rX,skinning_vertex:tX,skinnormal_vertex:eX,specularmap_fragment:JY,specularmap_pars_fragment:QY,tonemapping_fragment:$Y,tonemapping_pars_fragment:ZY,transmission_fragment:WY,transmission_pars_fragment:UY,uv_pars_fragment:KY,uv_pars_vertex:HY,uv_vertex:XY,worldpos_vertex:YY,background_vert:NY,background_frag:GY,backgroundCube_vert:qY,backgroundCube_frag:EY,cube_vert:DY,cube_frag:FY,depth_vert:OY,depth_frag:kY,distanceRGBA_vert:RY,distanceRGBA_frag:MY,equirect_vert:VY,equirect_frag:LY,linedashed_vert:zY,linedashed_frag:BY,meshbasic_vert:IY,meshbasic_frag:wY,meshlambert_vert:CY,meshlambert_frag:PY,meshmatcap_vert:_Y,meshmatcap_frag:AY,meshnormal_vert:TY,meshnormal_frag:SY,meshphong_vert:jY,meshphong_frag:fY,meshphysical_vert:yY,meshphysical_frag:vY,meshtoon_vert:bY,meshtoon_frag:hY,points_vert:xY,points_frag:pY,shadow_vert:gY,shadow_frag:mY,sprite_vert:dY,sprite_frag:uY},X0={common:{diffuse:{value:new x0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new d0},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new d0}},envmap:{envMap:{value:null},envMapRotation:{value:new d0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new d0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new d0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new d0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new d0},normalScale:{value:new T0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new d0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new d0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new d0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new d0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new x0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new x0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0},uvTransform:{value:new d0}},sprite:{diffuse:{value:new x0(16777215)},opacity:{value:1},center:{value:new T0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new d0},alphaMap:{value:null},alphaMapTransform:{value:new d0},alphaTest:{value:0}}},D6={basic:{uniforms:A8([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.fog]),vertexShader:c0.meshbasic_vert,fragmentShader:c0.meshbasic_frag},lambert:{uniforms:A8([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new x0(0)}}]),vertexShader:c0.meshlambert_vert,fragmentShader:c0.meshlambert_frag},phong:{uniforms:A8([X0.common,X0.specularmap,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,X0.lights,{emissive:{value:new x0(0)},specular:{value:new x0(1118481)},shininess:{value:30}}]),vertexShader:c0.meshphong_vert,fragmentShader:c0.meshphong_frag},standard:{uniforms:A8([X0.common,X0.envmap,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.roughnessmap,X0.metalnessmap,X0.fog,X0.lights,{emissive:{value:new x0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag},toon:{uniforms:A8([X0.common,X0.aomap,X0.lightmap,X0.emissivemap,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.gradientmap,X0.fog,X0.lights,{emissive:{value:new x0(0)}}]),vertexShader:c0.meshtoon_vert,fragmentShader:c0.meshtoon_frag},matcap:{uniforms:A8([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,X0.fog,{matcap:{value:null}}]),vertexShader:c0.meshmatcap_vert,fragmentShader:c0.meshmatcap_frag},points:{uniforms:A8([X0.points,X0.fog]),vertexShader:c0.points_vert,fragmentShader:c0.points_frag},dashed:{uniforms:A8([X0.common,X0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:c0.linedashed_vert,fragmentShader:c0.linedashed_frag},depth:{uniforms:A8([X0.common,X0.displacementmap]),vertexShader:c0.depth_vert,fragmentShader:c0.depth_frag},normal:{uniforms:A8([X0.common,X0.bumpmap,X0.normalmap,X0.displacementmap,{opacity:{value:1}}]),vertexShader:c0.meshnormal_vert,fragmentShader:c0.meshnormal_frag},sprite:{uniforms:A8([X0.sprite,X0.fog]),vertexShader:c0.sprite_vert,fragmentShader:c0.sprite_frag},background:{uniforms:{uvTransform:{value:new d0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:c0.background_vert,fragmentShader:c0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new d0}},vertexShader:c0.backgroundCube_vert,fragmentShader:c0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:c0.cube_vert,fragmentShader:c0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:c0.equirect_vert,fragmentShader:c0.equirect_frag},distanceRGBA:{uniforms:A8([X0.common,X0.displacementmap,{referencePosition:{value:new f},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:c0.distanceRGBA_vert,fragmentShader:c0.distanceRGBA_frag},shadow:{uniforms:A8([X0.lights,X0.fog,{color:{value:new x0(0)},opacity:{value:1}}]),vertexShader:c0.shadow_vert,fragmentShader:c0.shadow_frag}};D6.physical={uniforms:A8([D6.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new d0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new d0},clearcoatNormalScale:{value:new T0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new d0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new d0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new d0},sheen:{value:0},sheenColor:{value:new x0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new d0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new d0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new d0},transmissionSamplerSize:{value:new T0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new d0},attenuationDistance:{value:0},attenuationColor:{value:new x0(0)},specularColor:{value:new x0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new d0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new d0},anisotropyVector:{value:new T0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new d0}}]),vertexShader:c0.meshphysical_vert,fragmentShader:c0.meshphysical_frag};var SJ={r:0,b:0,g:0},X9=new K6,lY=new G8;function cY(J,Q,$,Z,W,U,K){let H=new x0(0),X=U===!0?0:1,Y,N,G=null,q=0,F=null;function k(I){let P=I.isScene===!0?I.background:null;if(P&&P.isTexture)P=(I.backgroundBlurriness>0?$:Q).get(P);return P}function L(I){let P=!1,A=k(I);if(A===null)E(H,X);else if(A&&A.isColor)E(A,1),P=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,K);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||P)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function D(I,P){let A=k(P);if(A&&(A.isCubeTexture||A.mapping===F7)){if(N===void 0)N=new i8(new m9(1,1,1),new H6({name:"BackgroundCubeMaterial",uniforms:W9(D6.backgroundCube.uniforms),vertexShader:D6.backgroundCube.vertexShader,fragmentShader:D6.backgroundCube.fragmentShader,side:g8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(C,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(N);if(X9.copy(P.backgroundRotation),X9.x*=-1,X9.y*=-1,X9.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1)X9.y*=-1,X9.z*=-1;if(N.material.uniforms.envMap.value=A,N.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,N.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,N.material.uniforms.backgroundRotation.value.setFromMatrix4(lY.makeRotationFromEuler(X9)),N.material.toneMapped=e0.getTransfer(A.colorSpace)!==X8,G!==A||q!==A.version||F!==J.toneMapping)N.material.needsUpdate=!0,G=A,q=A.version,F=J.toneMapping;N.layers.enableAll(),I.unshift(N,N.geometry,N.material,0,0,null)}else if(A&&A.isTexture){if(Y===void 0)Y=new i8(new I7(2,2),new H6({name:"BackgroundMaterial",uniforms:W9(D6.background.uniforms),vertexShader:D6.background.vertexShader,fragmentShader:D6.background.fragmentShader,side:j9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),Y.geometry.deleteAttribute("normal"),Object.defineProperty(Y.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(Y);if(Y.material.uniforms.t2D.value=A,Y.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,Y.material.toneMapped=e0.getTransfer(A.colorSpace)!==X8,A.matrixAutoUpdate===!0)A.updateMatrix();if(Y.material.uniforms.uvTransform.value.copy(A.matrix),G!==A||q!==A.version||F!==J.toneMapping)Y.material.needsUpdate=!0,G=A,q=A.version,F=J.toneMapping;Y.layers.enableAll(),I.unshift(Y,Y.geometry,Y.material,0,0,null)}}function E(I,P){I.getRGB(SJ,C$(J)),Z.buffers.color.setClear(SJ.r,SJ.g,SJ.b,P,K)}function B(){if(N!==void 0)N.geometry.dispose(),N.material.dispose(),N=void 0;if(Y!==void 0)Y.geometry.dispose(),Y.material.dispose(),Y=void 0}return{getClearColor:function(){return H},setClearColor:function(I,P=1){H.set(I),X=P,E(H,X)},getClearAlpha:function(){return X},setClearAlpha:function(I){X=I,E(H,X)},render:L,addToRenderList:D,dispose:B}}function nY(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=q(null),U=W,K=!1;function H(R,_,b,x,m){let o=!1,c=G(x,b,_);if(U!==c)U=c,Y(U.object);if(o=F(R,x,b,m),o)k(R,x,b,m);if(m!==null)Q.update(m,J.ELEMENT_ARRAY_BUFFER);if(o||K){if(K=!1,P(R,_,b,x),m!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(m).buffer)}}function X(){return J.createVertexArray()}function Y(R){return J.bindVertexArray(R)}function N(R){return J.deleteVertexArray(R)}function G(R,_,b){let x=b.wireframe===!0,m=Z[R.id];if(m===void 0)m={},Z[R.id]=m;let o=m[_.id];if(o===void 0)o={},m[_.id]=o;let c=o[x];if(c===void 0)c=q(X()),o[x]=c;return c}function q(R){let _=[],b=[],x=[];for(let m=0;m<$;m++)_[m]=0,b[m]=0,x[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:b,attributeDivisors:x,object:R,attributes:{},index:null}}function F(R,_,b,x){let m=U.attributes,o=_.attributes,c=0,r=b.getAttributes();for(let u in r)if(r[u].location>=0){let E0=m[u],f0=o[u];if(f0===void 0){if(u==="instanceMatrix"&&R.instanceMatrix)f0=R.instanceMatrix;if(u==="instanceColor"&&R.instanceColor)f0=R.instanceColor}if(E0===void 0)return!0;if(E0.attribute!==f0)return!0;if(f0&&E0.data!==f0.data)return!0;c++}if(U.attributesNum!==c)return!0;if(U.index!==x)return!0;return!1}function k(R,_,b,x){let m={},o=_.attributes,c=0,r=b.getAttributes();for(let u in r)if(r[u].location>=0){let E0=o[u];if(E0===void 0){if(u==="instanceMatrix"&&R.instanceMatrix)E0=R.instanceMatrix;if(u==="instanceColor"&&R.instanceColor)E0=R.instanceColor}let f0={};if(f0.attribute=E0,E0&&E0.data)f0.data=E0.data;m[u]=f0,c++}U.attributes=m,U.attributesNum=c,U.index=x}function L(){let R=U.newAttributes;for(let _=0,b=R.length;_<b;_++)R[_]=0}function D(R){E(R,0)}function E(R,_){let{newAttributes:b,enabledAttributes:x,attributeDivisors:m}=U;if(b[R]=1,x[R]===0)J.enableVertexAttribArray(R),x[R]=1;if(m[R]!==_)J.vertexAttribDivisor(R,_),m[R]=_}function B(){let{newAttributes:R,enabledAttributes:_}=U;for(let b=0,x=_.length;b<x;b++)if(_[b]!==R[b])J.disableVertexAttribArray(b),_[b]=0}function I(R,_,b,x,m,o,c){if(c===!0)J.vertexAttribIPointer(R,_,b,m,o);else J.vertexAttribPointer(R,_,b,x,m,o)}function P(R,_,b,x){L();let m=x.attributes,o=b.getAttributes(),c=_.defaultAttributeValues;for(let r in o){let u=o[r];if(u.location>=0){let Q0=m[r];if(Q0===void 0){if(r==="instanceMatrix"&&R.instanceMatrix)Q0=R.instanceMatrix;if(r==="instanceColor"&&R.instanceColor)Q0=R.instanceColor}if(Q0!==void 0){let{normalized:E0,itemSize:f0}=Q0,u0=Q.get(Q0);if(u0===void 0)continue;let{buffer:K0,type:V0,bytesPerElement:l}=u0,U0=V0===J.INT||V0===J.UNSIGNED_INT||Q0.gpuType===fQ;if(Q0.isInterleavedBufferAttribute){let $0=Q0.data,P0=$0.stride,g0=Q0.offset;if($0.isInstancedInterleavedBuffer){for(let v0=0;v0<u.locationSize;v0++)E(u.location+v0,$0.meshPerAttribute);if(R.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=$0.meshPerAttribute*$0.count}else for(let v0=0;v0<u.locationSize;v0++)D(u.location+v0);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let v0=0;v0<u.locationSize;v0++)I(u.location+v0,f0/u.locationSize,V0,E0,P0*l,(g0+f0/u.locationSize*v0)*l,U0)}else{if(Q0.isInstancedBufferAttribute){for(let $0=0;$0<u.locationSize;$0++)E(u.location+$0,Q0.meshPerAttribute);if(R.isInstancedMesh!==!0&&x._maxInstanceCount===void 0)x._maxInstanceCount=Q0.meshPerAttribute*Q0.count}else for(let $0=0;$0<u.locationSize;$0++)D(u.location+$0);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let $0=0;$0<u.locationSize;$0++)I(u.location+$0,f0/u.locationSize,V0,E0,f0*l,f0/u.locationSize*$0*l,U0)}}else if(c!==void 0){let E0=c[r];if(E0!==void 0)switch(E0.length){case 2:J.vertexAttrib2fv(u.location,E0);break;case 3:J.vertexAttrib3fv(u.location,E0);break;case 4:J.vertexAttrib4fv(u.location,E0);break;default:J.vertexAttrib1fv(u.location,E0)}}}}B()}function A(){j();for(let R in Z){let _=Z[R];for(let b in _){let x=_[b];for(let m in x)N(x[m].object),delete x[m];delete _[b]}delete Z[R]}}function C(R){if(Z[R.id]===void 0)return;let _=Z[R.id];for(let b in _){let x=_[b];for(let m in x)N(x[m].object),delete x[m];delete _[b]}delete Z[R.id]}function z(R){for(let _ in Z){let b=Z[_];if(b[R.id]===void 0)continue;let x=b[R.id];for(let m in x)N(x[m].object),delete x[m];delete b[R.id]}}function j(){if(M(),K=!0,U===W)return;U=W,Y(U.object)}function M(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:H,reset:j,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:z,initAttributes:L,enableAttribute:D,disableUnusedAttributes:B}}function sY(J,Q,$){let Z;function W(Y){Z=Y}function U(Y,N){J.drawArrays(Z,Y,N),$.update(N,Z,1)}function K(Y,N,G){if(G===0)return;J.drawArraysInstanced(Z,Y,N,G),$.update(N,Z,G)}function H(Y,N,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,Y,0,N,0,G);let F=0;for(let k=0;k<G;k++)F+=N[k];$.update(F,Z,1)}function X(Y,N,G,q){if(G===0)return;let F=Q.get("WEBGL_multi_draw");if(F===null)for(let k=0;k<Y.length;k++)K(Y[k],N[k],q[k]);else{F.multiDrawArraysInstancedWEBGL(Z,Y,0,N,0,q,0,G);let k=0;for(let L=0;L<G;L++)k+=N[L]*q[L];$.update(k,Z,1)}}this.setMode=W,this.render=U,this.renderInstances=K,this.renderMultiDraw=H,this.renderMultiDrawInstances=X}function iY(J,Q,$,Z){let W;function U(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let z=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function K(z){if(z!==q6&&Z.convert(z)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(z){let j=z===x9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(z!==x6&&Z.convert(z)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==p6&&!j)return!1;return!0}function X(z){if(z==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";z="mediump"}if(z==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let Y=$.precision!==void 0?$.precision:"highp",N=X(Y);if(N!==Y)h0("WebGLRenderer:",Y,"not supported, using",N,"instead."),Y=N;let G=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=J.getParameter(J.MAX_TEXTURE_SIZE),D=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),B=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),I=J.getParameter(J.MAX_VARYING_VECTORS),P=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),A=k>0,C=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:U,getMaxPrecision:X,textureFormatReadable:K,textureTypeReadable:H,precision:Y,logarithmicDepthBuffer:G,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:k,maxTextureSize:L,maxCubemapSize:D,maxAttributes:E,maxVertexUniforms:B,maxVaryings:I,maxFragmentUniforms:P,vertexTextures:A,maxSamples:C}}function oY(J){let Q=this,$=null,Z=0,W=!1,U=!1,K=new B6,H=new d0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(G,q){let F=G.length!==0||q||Z!==0||W;return W=q,Z=G.length,F},this.beginShadows=function(){U=!0,N(null)},this.endShadows=function(){U=!1},this.setGlobalState=function(G,q){$=N(G,q,0)},this.setState=function(G,q,F){let{clippingPlanes:k,clipIntersection:L,clipShadows:D}=G,E=J.get(G);if(!W||k===null||k.length===0||U&&!D)if(U)N(null);else Y();else{let B=U?0:Z,I=B*4,P=E.clippingState||null;X.value=P,P=N(k,q,I,F);for(let A=0;A!==I;++A)P[A]=$[A];E.clippingState=P,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=B}};function Y(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(G,q,F,k){let L=G!==null?G.length:0,D=null;if(L!==0){if(D=X.value,k!==!0||D===null){let E=F+L*4,B=q.matrixWorldInverse;if(H.getNormalMatrix(B),D===null||D.length<E)D=new Float32Array(E);for(let I=0,P=F;I!==L;++I,P+=4)K.copy(G[I]).applyMatrix4(B,H),K.normal.toArray(D,P),D[P+3]=K.constant}X.value=D,X.needsUpdate=!0}return Q.numPlanes=L,Q.numIntersection=0,D}}function aY(J){let Q=new WeakMap;function $(K,H){if(H===KJ)K.mapping=y9;else if(H===HJ)K.mapping=J9;return K}function Z(K){if(K&&K.isTexture){let H=K.mapping;if(H===KJ||H===HJ)if(Q.has(K)){let X=Q.get(K).texture;return $(X,K.mapping)}else{let X=K.image;if(X&&X.height>0){let Y=new _$(X.height);return Y.fromEquirectangularTexture(J,K),Q.set(K,Y),K.addEventListener("dispose",W),$(Y.texture,K.mapping)}else return null}}return K}function W(K){let H=K.target;H.removeEventListener("dispose",W);let X=Q.get(H);if(X!==void 0)Q.delete(H),X.dispose()}function U(){Q=new WeakMap}return{get:Z,dispose:U}}var d6=4,q1=[0.125,0.215,0.35,0.446,0.526,0.582],N9=20,rY=256,w7=new a$,E1=new x0,QZ=null,$Z=0,ZZ=0,WZ=!1,tY=new f;class KZ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:U=256,position:K=tY}=W;QZ=this._renderer.getRenderTarget(),$Z=this._renderer.getActiveCubeFace(),ZZ=this._renderer.getActiveMipmapLevel(),WZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(U);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,H,K),Q>0)this._blur(H,0,0,Q);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=O1(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=F1(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(QZ,$Z,ZZ),this._renderer.xr.enabled=WZ,J.scissorTest=!1,l9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===y9||J.mapping===J9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);QZ=this._renderer.getRenderTarget(),$Z=this._renderer.getActiveCubeFace(),ZZ=this._renderer.getActiveMipmapLevel(),WZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:P6,minFilter:P6,generateMipmaps:!1,type:x9,format:q6,colorSpace:M7,depthBuffer:!1},Z=D1(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=D1(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eY(W)),this._blurMaterial=Q5(W,J,Q),this._ggxMaterial=J5(W,J,Q)}return Z}_compileMaterial(J){let Q=new i8(new E6,J);this._renderer.compile(Q,w7)}_sceneToCubeUV(J,Q,$,Z,W){let H=new I8(90,1,Q,$),X=[1,-1,1,1,1,1],Y=[1,1,1,-1,-1,-1],N=this._renderer,G=N.autoClear,q=N.toneMapping;if(N.getClearColor(E1),N.toneMapping=C6,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new i8(new m9,new kJ({name:"PMREM.Background",side:g8,depthWrite:!1,depthTest:!1}));let k=this._backgroundBox,L=k.material,D=!1,E=J.background;if(E){if(E.isColor)L.color.copy(E),J.background=null,D=!0}else L.color.copy(E1),D=!0;for(let B=0;B<6;B++){let I=B%3;if(I===0)H.up.set(0,X[B],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x+Y[B],W.y,W.z);else if(I===1)H.up.set(0,0,X[B]),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y+Y[B],W.z);else H.up.set(0,X[B],0),H.position.set(W.x,W.y,W.z),H.lookAt(W.x,W.y,W.z+Y[B]);let P=this._cubeSize;if(l9(Z,I*P,B>2?P:0,P,P),N.setRenderTarget(Z),D)N.render(k,H);N.render(J,H)}N.toneMapping=q,N.autoClear=G,J.background=E}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===y9||J.mapping===J9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=O1();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=F1();let W=Z?this._cubemapMaterial:this._equirectMaterial,U=this._lodMeshes[0];U.material=W;let K=W.uniforms;K.envMap.value=J;let H=this._cubeSize;l9(Q,0,0,3*H,2*H),$.setRenderTarget(Q),$.render(U,w7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,U=this._ggxMaterial,K=this._lodMeshes[$];K.material=U;let H=U.uniforms,X=$/(this._lodMeshes.length-1),Y=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-Y*Y),G=0.05+X*0.95,q=N*G,{_lodMax:F}=this,k=this._sizeLods[$],L=3*k*($>F-d6?$-F+d6:0),D=4*(this._cubeSize-k);H.envMap.value=J.texture,H.roughness.value=q,H.mipInt.value=F-Q,l9(W,L,D,3*k,2*k),Z.setRenderTarget(W),Z.render(K,w7),H.envMap.value=W.texture,H.roughness.value=0,H.mipInt.value=F-$,l9(J,L,D,3*k,2*k),Z.setRenderTarget(J),Z.render(K,w7)}_blur(J,Q,$,Z,W){let U=this._pingPongRenderTarget;this._halfBlur(J,U,Q,$,Z,"latitudinal",W),this._halfBlur(U,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,U,K){let H=this._renderer,X=this._blurMaterial;if(U!=="latitudinal"&&U!=="longitudinal")s0("blur direction must be either latitudinal or longitudinal!");let Y=3,N=this._lodMeshes[Z];N.material=X;let G=X.uniforms,q=this._sizeLods[$]-1,F=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*N9-1),k=W/F,L=isFinite(W)?1+Math.floor(Y*k):N9;if(L>N9)h0(`sigmaRadians, ${W}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${N9}`);let D=[],E=0;for(let C=0;C<N9;++C){let z=C/k,j=Math.exp(-z*z/2);if(D.push(j),C===0)E+=j;else if(C<L)E+=2*j}for(let C=0;C<D.length;C++)D[C]=D[C]/E;if(G.envMap.value=J.texture,G.samples.value=L,G.weights.value=D,G.latitudinal.value=U==="latitudinal",K)G.poleAxis.value=K;let{_lodMax:B}=this;G.dTheta.value=F,G.mipInt.value=B-$;let I=this._sizeLods[Z],P=3*I*(Z>B-d6?Z-B+d6:0),A=4*(this._cubeSize-I);l9(Q,P,A,3*I,2*I),H.setRenderTarget(Q),H.render(N,w7)}}function eY(J){let Q=[],$=[],Z=[],W=J,U=J-d6+1+q1.length;for(let K=0;K<U;K++){let H=Math.pow(2,W);Q.push(H);let X=1/H;if(K>J-d6)X=q1[K-J+d6-1];else if(K===0)X=0;$.push(X);let Y=1/(H-2),N=-Y,G=1+Y,q=[N,N,G,N,G,G,N,N,G,G,N,G],F=6,k=6,L=3,D=2,E=1,B=new Float32Array(L*k*F),I=new Float32Array(D*k*F),P=new Float32Array(E*k*F);for(let C=0;C<F;C++){let z=C%3*2/3-1,j=C>2?0:-1,M=[z,j,0,z+0.6666666666666666,j,0,z+0.6666666666666666,j+1,0,z,j,0,z+0.6666666666666666,j+1,0,z,j+1,0];B.set(M,L*k*C),I.set(q,D*k*C);let R=[C,C,C,C,C,C];P.set(R,E*k*C)}let A=new E6;if(A.setAttribute("position",new n8(B,L)),A.setAttribute("uv",new n8(I,D)),A.setAttribute("faceIndex",new n8(P,E)),Z.push(new i8(A,null)),W>d6)W--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function D1(J,Q,$){let Z=new _6(J,Q,$);return Z.texture.mapping=F7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function l9(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function J5(J,Q,$){return new H6({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rY,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fJ(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:w6,depthTest:!1,depthWrite:!1})}function Q5(J,Q,$){let Z=new Float32Array(N9),W=new f(0,1,0);return new H6({name:"SphericalGaussianBlur",defines:{n:N9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:fJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:w6,depthTest:!1,depthWrite:!1})}function F1(){return new H6({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:w6,depthTest:!1,depthWrite:!1})}function O1(){return new H6({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fJ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:w6,depthTest:!1,depthWrite:!1})}function fJ(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $5(J){let Q=new WeakMap,$=null;function Z(H){if(H&&H.isTexture){let X=H.mapping,Y=X===KJ||X===HJ,N=X===y9||X===J9;if(Y||N){let G=Q.get(H),q=G!==void 0?G.texture.pmremVersion:0;if(H.isRenderTargetTexture&&H.pmremVersion!==q){if($===null)$=new KZ(J);return G=Y?$.fromEquirectangular(H,G):$.fromCubemap(H,G),G.texture.pmremVersion=H.pmremVersion,Q.set(H,G),G.texture}else if(G!==void 0)return G.texture;else{let F=H.image;if(Y&&F&&F.height>0||N&&F&&W(F)){if($===null)$=new KZ(J);return G=Y?$.fromEquirectangular(H):$.fromCubemap(H),G.texture.pmremVersion=H.pmremVersion,Q.set(H,G),H.addEventListener("dispose",U),G.texture}else return null}}}return H}function W(H){let X=0,Y=6;for(let N=0;N<Y;N++)if(H[N]!==void 0)X++;return X===Y}function U(H){let X=H.target;X.removeEventListener("dispose",U);let Y=Q.get(X);if(Y!==void 0)Q.delete(X),Y.dispose()}function K(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:K}}function Z5(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)T9("WebGLRenderer: "+Z+" extension not supported.");return W}}}function W5(J,Q,$,Z){let W={},U=new WeakMap;function K(G){let q=G.target;if(q.index!==null)Q.remove(q.index);for(let k in q.attributes)Q.remove(q.attributes[k]);q.removeEventListener("dispose",K),delete W[q.id];let F=U.get(q);if(F)Q.remove(F),U.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function H(G,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",K),W[q.id]=!0,$.memory.geometries++,q}function X(G){let q=G.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function Y(G){let q=[],F=G.index,k=G.attributes.position,L=0;if(F!==null){let B=F.array;L=F.version;for(let I=0,P=B.length;I<P;I+=3){let A=B[I+0],C=B[I+1],z=B[I+2];q.push(A,C,C,z,z,A)}}else if(k!==void 0){let B=k.array;L=k.version;for(let I=0,P=B.length/3-1;I<P;I+=3){let A=I+0,C=I+1,z=I+2;q.push(A,C,C,z,z,A)}}else return;let D=new((R$(q))?MJ:RJ)(q,1);D.version=L;let E=U.get(G);if(E)Q.remove(E);U.set(G,D)}function N(G){let q=U.get(G);if(q){let F=G.index;if(F!==null){if(q.version<F.version)Y(G)}}else Y(G);return U.get(G)}return{get:H,update:X,getWireframeAttribute:N}}function U5(J,Q,$){let Z;function W(q){Z=q}let U,K;function H(q){U=q.type,K=q.bytesPerElement}function X(q,F){J.drawElements(Z,F,U,q*K),$.update(F,Z,1)}function Y(q,F,k){if(k===0)return;J.drawElementsInstanced(Z,F,U,q*K,k),$.update(F,Z,k)}function N(q,F,k){if(k===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,F,0,U,q,0,k);let D=0;for(let E=0;E<k;E++)D+=F[E];$.update(D,Z,1)}function G(q,F,k,L){if(k===0)return;let D=Q.get("WEBGL_multi_draw");if(D===null)for(let E=0;E<q.length;E++)Y(q[E]/K,F[E],L[E]);else{D.multiDrawElementsInstancedWEBGL(Z,F,0,U,q,0,L,0,k);let E=0;for(let B=0;B<k;B++)E+=F[B]*L[B];$.update(E,Z,1)}}this.setMode=W,this.setIndex=H,this.render=X,this.renderInstances=Y,this.renderMultiDraw=N,this.renderMultiDrawInstances=G}function K5(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(U,K,H){switch($.calls++,K){case J.TRIANGLES:$.triangles+=H*(U/3);break;case J.LINES:$.lines+=H*(U/2);break;case J.LINE_STRIP:$.lines+=H*(U-1);break;case J.LINE_LOOP:$.lines+=H*U;break;case J.POINTS:$.points+=H*U;break;default:s0("WebGLInfo: Unknown draw mode:",K);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function H5(J,Q,$){let Z=new WeakMap,W=new Z8;function U(K,H,X){let Y=K.morphTargetInfluences,N=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,G=N!==void 0?N.length:0,q=Z.get(H);if(q===void 0||q.count!==G){let M=function(){z.dispose(),Z.delete(H),H.removeEventListener("dispose",M)};if(q!==void 0)q.texture.dispose();let F=H.morphAttributes.position!==void 0,k=H.morphAttributes.normal!==void 0,L=H.morphAttributes.color!==void 0,D=H.morphAttributes.position||[],E=H.morphAttributes.normal||[],B=H.morphAttributes.color||[],I=0;if(F===!0)I=1;if(k===!0)I=2;if(L===!0)I=3;let P=H.attributes.position.count*I,A=1;if(P>Q.maxTextureSize)A=Math.ceil(P/Q.maxTextureSize),P=Q.maxTextureSize;let C=new Float32Array(P*A*4*G),z=new FJ(C,P,A,G);z.type=p6,z.needsUpdate=!0;let j=I*4;for(let R=0;R<G;R++){let _=D[R],b=E[R],x=B[R],m=P*A*4*R;for(let o=0;o<_.count;o++){let c=o*j;if(F===!0)W.fromBufferAttribute(_,o),C[m+c+0]=W.x,C[m+c+1]=W.y,C[m+c+2]=W.z,C[m+c+3]=0;if(k===!0)W.fromBufferAttribute(b,o),C[m+c+4]=W.x,C[m+c+5]=W.y,C[m+c+6]=W.z,C[m+c+7]=0;if(L===!0)W.fromBufferAttribute(x,o),C[m+c+8]=W.x,C[m+c+9]=W.y,C[m+c+10]=W.z,C[m+c+11]=x.itemSize===4?W.w:1}}q={count:G,texture:z,size:new T0(P,A)},Z.set(H,q),H.addEventListener("dispose",M)}if(K.isInstancedMesh===!0&&K.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",K.morphTexture,$);else{let F=0;for(let L=0;L<Y.length;L++)F+=Y[L];let k=H.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",k),X.getUniforms().setValue(J,"morphTargetInfluences",Y)}X.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:U}}function X5(J,Q,$,Z){let W=new WeakMap;function U(X){let Y=Z.render.frame,N=X.geometry,G=Q.get(X,N);if(W.get(G)!==Y)Q.update(G),W.set(G,Y);if(X.isInstancedMesh){if(X.hasEventListener("dispose",H)===!1)X.addEventListener("dispose",H);if(W.get(X)!==Y){if($.update(X.instanceMatrix,J.ARRAY_BUFFER),X.instanceColor!==null)$.update(X.instanceColor,J.ARRAY_BUFFER);W.set(X,Y)}}if(X.isSkinnedMesh){let q=X.skeleton;if(W.get(q)!==Y)q.update(),W.set(q,Y)}return G}function K(){W=new WeakMap}function H(X){let Y=X.target;if(Y.removeEventListener("dispose",H),$.remove(Y.instanceMatrix),Y.instanceColor!==null)$.remove(Y.instanceColor)}return{update:U,dispose:K}}var v1=new _8,k1=new BJ(1,1),b1=new FJ,h1=new I$,x1=new LJ,R1=[],M1=[],V1=new Float32Array(16),L1=new Float32Array(9),z1=new Float32Array(4);function c9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,U=R1[W];if(U===void 0)U=new Float32Array(W),R1[W]=U;if(Q!==0){Z.toArray(U,0);for(let K=1,H=0;K!==Q;++K)H+=$,J[K].toArray(U,H)}return U}function L8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function z8(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function yJ(J,Q){let $=M1[Q];if($===void 0)$=new Int32Array(Q),M1[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function Y5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function N5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(L8($,Q))return;J.uniform2fv(this.addr,Q),z8($,Q)}}function G5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(L8($,Q))return;J.uniform3fv(this.addr,Q),z8($,Q)}}function q5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(L8($,Q))return;J.uniform4fv(this.addr,Q),z8($,Q)}}function E5(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(L8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),z8($,Q)}else{if(L8($,Z))return;z1.set(Z),J.uniformMatrix2fv(this.addr,!1,z1),z8($,Z)}}function D5(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(L8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),z8($,Q)}else{if(L8($,Z))return;L1.set(Z),J.uniformMatrix3fv(this.addr,!1,L1),z8($,Z)}}function F5(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(L8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),z8($,Q)}else{if(L8($,Z))return;V1.set(Z),J.uniformMatrix4fv(this.addr,!1,V1),z8($,Z)}}function O5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function k5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(L8($,Q))return;J.uniform2iv(this.addr,Q),z8($,Q)}}function R5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(L8($,Q))return;J.uniform3iv(this.addr,Q),z8($,Q)}}function M5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(L8($,Q))return;J.uniform4iv(this.addr,Q),z8($,Q)}}function V5(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function L5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(L8($,Q))return;J.uniform2uiv(this.addr,Q),z8($,Q)}}function z5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(L8($,Q))return;J.uniform3uiv(this.addr,Q),z8($,Q)}}function B5(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(L8($,Q))return;J.uniform4uiv(this.addr,Q),z8($,Q)}}function I5(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let U;if(this.type===J.SAMPLER_2D_SHADOW)k1.compareFunction=F$,U=k1;else U=v1;$.setTexture2D(Q||U,W)}function w5(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||h1,W)}function C5(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||x1,W)}function P5(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||b1,W)}function _5(J){switch(J){case 5126:return Y5;case 35664:return N5;case 35665:return G5;case 35666:return q5;case 35674:return E5;case 35675:return D5;case 35676:return F5;case 5124:case 35670:return O5;case 35667:case 35671:return k5;case 35668:case 35672:return R5;case 35669:case 35673:return M5;case 5125:return V5;case 36294:return L5;case 36295:return z5;case 36296:return B5;case 35678:case 36198:case 36298:case 36306:case 35682:return I5;case 35679:case 36299:case 36307:return w5;case 35680:case 36300:case 36308:case 36293:return C5;case 36289:case 36303:case 36311:case 36292:return P5}}function A5(J,Q){J.uniform1fv(this.addr,Q)}function T5(J,Q){let $=c9(Q,this.size,2);J.uniform2fv(this.addr,$)}function S5(J,Q){let $=c9(Q,this.size,3);J.uniform3fv(this.addr,$)}function j5(J,Q){let $=c9(Q,this.size,4);J.uniform4fv(this.addr,$)}function f5(J,Q){let $=c9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function y5(J,Q){let $=c9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function v5(J,Q){let $=c9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function b5(J,Q){J.uniform1iv(this.addr,Q)}function h5(J,Q){J.uniform2iv(this.addr,Q)}function x5(J,Q){J.uniform3iv(this.addr,Q)}function p5(J,Q){J.uniform4iv(this.addr,Q)}function g5(J,Q){J.uniform1uiv(this.addr,Q)}function m5(J,Q){J.uniform2uiv(this.addr,Q)}function d5(J,Q){J.uniform3uiv(this.addr,Q)}function u5(J,Q){J.uniform4uiv(this.addr,Q)}function l5(J,Q,$){let Z=this.cache,W=Q.length,U=yJ($,W);if(!L8(Z,U))J.uniform1iv(this.addr,U),z8(Z,U);for(let K=0;K!==W;++K)$.setTexture2D(Q[K]||v1,U[K])}function c5(J,Q,$){let Z=this.cache,W=Q.length,U=yJ($,W);if(!L8(Z,U))J.uniform1iv(this.addr,U),z8(Z,U);for(let K=0;K!==W;++K)$.setTexture3D(Q[K]||h1,U[K])}function n5(J,Q,$){let Z=this.cache,W=Q.length,U=yJ($,W);if(!L8(Z,U))J.uniform1iv(this.addr,U),z8(Z,U);for(let K=0;K!==W;++K)$.setTextureCube(Q[K]||x1,U[K])}function s5(J,Q,$){let Z=this.cache,W=Q.length,U=yJ($,W);if(!L8(Z,U))J.uniform1iv(this.addr,U),z8(Z,U);for(let K=0;K!==W;++K)$.setTexture2DArray(Q[K]||b1,U[K])}function i5(J){switch(J){case 5126:return A5;case 35664:return T5;case 35665:return S5;case 35666:return j5;case 35674:return f5;case 35675:return y5;case 35676:return v5;case 5124:case 35670:return b5;case 35667:case 35671:return h5;case 35668:case 35672:return x5;case 35669:case 35673:return p5;case 5125:return g5;case 36294:return m5;case 36295:return d5;case 36296:return u5;case 35678:case 36198:case 36298:case 36306:case 35682:return l5;case 35679:case 36299:case 36307:return c5;case 35680:case 36300:case 36308:case 36293:return n5;case 36289:case 36303:case 36311:case 36292:return s5}}class p1{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=_5(Q.type)}}class g1{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=i5(Q.type)}}class m1{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,U=Z.length;W!==U;++W){let K=Z[W];K.setValue(J,Q[K.id],$)}}}var UZ=/(\w+)(\])?(\[|\.)?/g;function B1(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function o5(J,Q,$){let Z=J.name,W=Z.length;UZ.lastIndex=0;while(!0){let U=UZ.exec(Z),K=UZ.lastIndex,H=U[1],X=U[2]==="]",Y=U[3];if(X)H=H|0;if(Y===void 0||Y==="["&&K+2===W){B1($,Y===void 0?new p1(H,J,Q):new g1(H,J,Q));break}else{let G=$.map[H];if(G===void 0)G=new m1(H),B1($,G);$=G}}}class P7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),U=J.getUniformLocation(Q,W.name);o5(W,U,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,U=Q.length;W!==U;++W){let K=Q[W],H=$[K.id];if(H.needsUpdate!==!1)K.setValue(J,H.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let U=J[Z];if(U.id in Q)$.push(U)}return $}}function I1(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var a5=37297,r5=0;function t5(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),U=Math.min(Q+6,$.length);for(let K=W;K<U;K++){let H=K+1;Z.push(`${H===Q?">":" "} ${H}: ${$[K]}`)}return Z.join(`
`)}var w1=new d0;function e5(J){e0._getMatrix(w1,e0.workingColorSpace,J);let Q=`mat3( ${w1.elements.map(($)=>$.toFixed(4))} )`;switch(e0.getTransfer(J)){case D$:return[Q,"LinearTransferOETF"];case X8:return[Q,"sRGBTransferOETF"];default:return h0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function C1(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),U=(J.getShaderInfoLog(Q)||"").trim();if(Z&&U==="")return"";let K=/ERROR: 0:(\d+)/.exec(U);if(K){let H=parseInt(K[1]);return $.toUpperCase()+`

`+U+`

`+t5(J.getShaderSource(Q),H)}else return U}function JN(J,Q){let $=e5(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}function QN(J,Q){let $;switch(Q){case TW:$="Linear";break;case SW:$="Reinhard";break;case jW:$="Cineon";break;case fW:$="ACESFilmic";break;case vW:$="AgX";break;case bW:$="Neutral";break;case yW:$="Custom";break;default:h0("WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var jJ=new f;function $N(){e0.getLuminanceCoefficients(jJ);let J=jJ.x.toFixed(4),Q=jJ.y.toFixed(4),$=jJ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function ZN(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(C7).join(`
`)}function WN(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function UN(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let U=J.getActiveAttrib(Q,W),K=U.name,H=1;if(U.type===J.FLOAT_MAT2)H=2;if(U.type===J.FLOAT_MAT3)H=3;if(U.type===J.FLOAT_MAT4)H=4;$[K]={type:U.type,location:J.getAttribLocation(Q,K),locationSize:H}}return $}function C7(J){return J!==""}function P1(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function _1(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var KN=/^[ \t]*#include +<([\w\d./]+)>/gm;function HZ(J){return J.replace(KN,XN)}var HN=new Map;function XN(J,Q){let $=c0[Q];if($===void 0){let Z=HN.get(Q);if(Z!==void 0)$=c0[Z],h0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return HZ($)}var YN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A1(J){return J.replace(YN,NN)}function NN(J,Q,$,Z){let W="";for(let U=parseInt(Q);U<parseInt($);U++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+U+" ]").replace(/UNROLLED_LOOP_INDEX/g,U);return W}function T1(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function GN(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===AQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===KW)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===N6)Q="SHADOWMAP_TYPE_VSM";return Q}function qN(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case y9:case J9:Q="ENVMAP_TYPE_CUBE";break;case F7:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function EN(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case J9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function DN(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case PW:Q="ENVMAP_BLENDING_MULTIPLY";break;case _W:Q="ENVMAP_BLENDING_MIX";break;case AW:Q="ENVMAP_BLENDING_ADD";break}return Q}function FN(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function ON(J,Q,$,Z){let W=J.getContext(),U=$.defines,K=$.vertexShader,H=$.fragmentShader,X=GN($),Y=qN($),N=EN($),G=DN($),q=FN($),F=ZN($),k=WN(U),L=W.createProgram(),D,E,B=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(C7).join(`
`),D.length>0)D+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k].filter(C7).join(`
`),E.length>0)E+=`
`}else D=[T1($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(C7).join(`
`),E=[T1($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,k,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+Y:"",$.envMap?"#define "+N:"",$.envMap?"#define "+G:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==C6?"#define TONE_MAPPING":"",$.toneMapping!==C6?c0.tonemapping_pars_fragment:"",$.toneMapping!==C6?QN("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",c0.colorspace_pars_fragment,JN("linearToOutputTexel",$.outputColorSpace),$N(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(C7).join(`
`);if(K=HZ(K),K=P1(K,$),K=_1(K,$),H=HZ(H),H=P1(H,$),H=_1(H,$),K=A1(K),H=A1(H),$.isRawShaderMaterial!==!0)B=`#version 300 es
`,D=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+D,E=["#define varying in",$.glslVersion===O$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===O$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let I=B+D+K,P=B+E+H,A=I1(W,W.VERTEX_SHADER,I),C=I1(W,W.FRAGMENT_SHADER,P);if(W.attachShader(L,A),W.attachShader(L,C),$.index0AttributeName!==void 0)W.bindAttribLocation(L,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(L,0,"position");W.linkProgram(L);function z(_){if(J.debug.checkShaderErrors){let b=W.getProgramInfoLog(L)||"",x=W.getShaderInfoLog(A)||"",m=W.getShaderInfoLog(C)||"",o=b.trim(),c=x.trim(),r=m.trim(),u=!0,Q0=!0;if(W.getProgramParameter(L,W.LINK_STATUS)===!1)if(u=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,L,A,C);else{let E0=C1(W,A,"vertex"),f0=C1(W,C,"fragment");s0("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(L,W.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+o+`
`+E0+`
`+f0)}else if(o!=="")h0("WebGLProgram: Program Info Log:",o);else if(c===""||r==="")Q0=!1;if(Q0)_.diagnostics={runnable:u,programLog:o,vertexShader:{log:c,prefix:D},fragmentShader:{log:r,prefix:E}}}W.deleteShader(A),W.deleteShader(C),j=new P7(W,L),M=UN(W,L)}let j;this.getUniforms=function(){if(j===void 0)z(this);return j};let M;this.getAttributes=function(){if(M===void 0)z(this);return M};let R=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(R===!1)R=W.getProgramParameter(L,a5);return R},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(L),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=r5++,this.cacheKey=Q,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=C,this}var kN=0;class d1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),U=this._getShaderCacheForMaterial(J);if(U.has(Z)===!1)U.add(Z),Z.usedTimes++;if(U.has(W)===!1)U.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new u1(J),Q.set(J,$);return $}}class u1{constructor(J){this.id=kN++,this.code=J,this.usedTimes=0}}function RN(J,Q,$,Z,W,U,K){let H=new OJ,X=new d1,Y=new Set,N=[],G=W.logarithmicDepthBuffer,q=W.vertexTextures,F=W.precision,k={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(M){if(Y.add(M),M===0)return"uv";return`uv${M}`}function D(M,R,_,b,x){let m=b.fog,o=x.geometry,c=M.isMeshStandardMaterial?b.environment:null,r=(M.isMeshStandardMaterial?$:Q).get(M.envMap||c),u=!!r&&r.mapping===F7?r.image.height:null,Q0=k[M.type];if(M.precision!==null){if(F=W.getMaxPrecision(M.precision),F!==M.precision)h0("WebGLProgram.getParameters:",M.precision,"not supported, using",F,"instead.")}let E0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f0=E0!==void 0?E0.length:0,u0=0;if(o.morphAttributes.position!==void 0)u0=1;if(o.morphAttributes.normal!==void 0)u0=2;if(o.morphAttributes.color!==void 0)u0=3;let K0,V0,l,U0;if(Q0){let Q8=D6[Q0];K0=Q8.vertexShader,V0=Q8.fragmentShader}else K0=M.vertexShader,V0=M.fragmentShader,X.update(M),l=X.getVertexShaderID(M),U0=X.getFragmentShaderID(M);let $0=J.getRenderTarget(),P0=J.state.buffers.depth.getReversed(),g0=x.isInstancedMesh===!0,v0=x.isBatchedMesh===!0,V8=!!M.map,i0=!!M.matcap,N8=!!r,T=!!M.aoMap,r0=!!M.lightMap,o0=!!M.bumpMap,H8=!!M.normalMap,w0=!!M.displacementMap,t0=!!M.emissiveMap,_0=!!M.metalnessMap,l0=!!M.roughnessMap,O8=M.anisotropy>0,w=M.clearcoat>0,O=M.dispersion>0,h=M.iridescence>0,s=M.sheen>0,a=M.transmission>0,n=O8&&!!M.anisotropyMap,z0=w&&!!M.clearcoatMap,Y0=w&&!!M.clearcoatNormalMap,L0=w&&!!M.clearcoatRoughnessMap,B0=h&&!!M.iridescenceMap,t=h&&!!M.iridescenceThicknessMap,G0=s&&!!M.sheenColorMap,y0=s&&!!M.sheenRoughnessMap,S0=!!M.specularMap,H0=!!M.specularColorMap,p0=!!M.specularIntensityMap,S=a&&!!M.transmissionMap,N0=a&&!!M.thicknessMap,e=!!M.gradientMap,O0=!!M.alphaMap,J0=M.alphaTest>0,i=!!M.alphaHash,R0=!!M.extensions,m0=C6;if(M.toneMapped){if($0===null||$0.isXRRenderTarget===!0)m0=J.toneMapping}let Y8={shaderID:Q0,shaderType:M.type,shaderName:M.name,vertexShader:K0,fragmentShader:V0,defines:M.defines,customVertexShaderID:l,customFragmentShaderID:U0,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:F,batching:v0,batchingColor:v0&&x._colorsTexture!==null,instancing:g0,instancingColor:g0&&x.instanceColor!==null,instancingMorph:g0&&x.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:$0===null?J.outputColorSpace:$0.isXRRenderTarget===!0?$0.texture.colorSpace:M7,alphaToCoverage:!!M.alphaToCoverage,map:V8,matcap:i0,envMap:N8,envMapMode:N8&&r.mapping,envMapCubeUVHeight:u,aoMap:T,lightMap:r0,bumpMap:o0,normalMap:H8,displacementMap:q&&w0,emissiveMap:t0,normalMapObjectSpace:H8&&M.normalMapType===oW,normalMapTangentSpace:H8&&M.normalMapType===iW,metalnessMap:_0,roughnessMap:l0,anisotropy:O8,anisotropyMap:n,clearcoat:w,clearcoatMap:z0,clearcoatNormalMap:Y0,clearcoatRoughnessMap:L0,dispersion:O,iridescence:h,iridescenceMap:B0,iridescenceThicknessMap:t,sheen:s,sheenColorMap:G0,sheenRoughnessMap:y0,specularMap:S0,specularColorMap:H0,specularIntensityMap:p0,transmission:a,transmissionMap:S,thicknessMap:N0,gradientMap:e,opaque:M.transparent===!1&&M.blending===E7&&M.alphaToCoverage===!1,alphaMap:O0,alphaTest:J0,alphaHash:i,combine:M.combine,mapUv:V8&&L(M.map.channel),aoMapUv:T&&L(M.aoMap.channel),lightMapUv:r0&&L(M.lightMap.channel),bumpMapUv:o0&&L(M.bumpMap.channel),normalMapUv:H8&&L(M.normalMap.channel),displacementMapUv:w0&&L(M.displacementMap.channel),emissiveMapUv:t0&&L(M.emissiveMap.channel),metalnessMapUv:_0&&L(M.metalnessMap.channel),roughnessMapUv:l0&&L(M.roughnessMap.channel),anisotropyMapUv:n&&L(M.anisotropyMap.channel),clearcoatMapUv:z0&&L(M.clearcoatMap.channel),clearcoatNormalMapUv:Y0&&L(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L0&&L(M.clearcoatRoughnessMap.channel),iridescenceMapUv:B0&&L(M.iridescenceMap.channel),iridescenceThicknessMapUv:t&&L(M.iridescenceThicknessMap.channel),sheenColorMapUv:G0&&L(M.sheenColorMap.channel),sheenRoughnessMapUv:y0&&L(M.sheenRoughnessMap.channel),specularMapUv:S0&&L(M.specularMap.channel),specularColorMapUv:H0&&L(M.specularColorMap.channel),specularIntensityMapUv:p0&&L(M.specularIntensityMap.channel),transmissionMapUv:S&&L(M.transmissionMap.channel),thicknessMapUv:N0&&L(M.thicknessMap.channel),alphaMapUv:O0&&L(M.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(H8||O8),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!o.attributes.uv&&(V8||O0),fog:!!m,useFog:M.fog===!0,fogExp2:!!m&&m.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:G,reversedDepthBuffer:P0,skinning:x.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:f0,morphTextureStride:u0,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:M.dithering,shadowMapEnabled:J.shadowMap.enabled&&_.length>0,shadowMapType:J.shadowMap.type,toneMapping:m0,decodeVideoTexture:V8&&M.map.isVideoTexture===!0&&e0.getTransfer(M.map.colorSpace)===X8,decodeVideoTextureEmissive:t0&&M.emissiveMap.isVideoTexture===!0&&e0.getTransfer(M.emissiveMap.colorSpace)===X8,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===G6,flipSided:M.side===g8,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:R0&&M.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R0&&M.extensions.multiDraw===!0||v0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Y8.vertexUv1s=Y.has(1),Y8.vertexUv2s=Y.has(2),Y8.vertexUv3s=Y.has(3),Y.clear(),Y8}function E(M){let R=[];if(M.shaderID)R.push(M.shaderID);else R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let _ in M.defines)R.push(_),R.push(M.defines[_]);if(M.isRawShaderMaterial===!1)B(R,M),I(R,M),R.push(J.outputColorSpace);return R.push(M.customProgramCacheKey),R.join()}function B(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function I(M,R){if(H.disableAll(),R.supportsVertexTextures)H.enable(0);if(R.instancing)H.enable(1);if(R.instancingColor)H.enable(2);if(R.instancingMorph)H.enable(3);if(R.matcap)H.enable(4);if(R.envMap)H.enable(5);if(R.normalMapObjectSpace)H.enable(6);if(R.normalMapTangentSpace)H.enable(7);if(R.clearcoat)H.enable(8);if(R.iridescence)H.enable(9);if(R.alphaTest)H.enable(10);if(R.vertexColors)H.enable(11);if(R.vertexAlphas)H.enable(12);if(R.vertexUv1s)H.enable(13);if(R.vertexUv2s)H.enable(14);if(R.vertexUv3s)H.enable(15);if(R.vertexTangents)H.enable(16);if(R.anisotropy)H.enable(17);if(R.alphaHash)H.enable(18);if(R.batching)H.enable(19);if(R.dispersion)H.enable(20);if(R.batchingColor)H.enable(21);if(R.gradientMap)H.enable(22);if(M.push(H.mask),H.disableAll(),R.fog)H.enable(0);if(R.useFog)H.enable(1);if(R.flatShading)H.enable(2);if(R.logarithmicDepthBuffer)H.enable(3);if(R.reversedDepthBuffer)H.enable(4);if(R.skinning)H.enable(5);if(R.morphTargets)H.enable(6);if(R.morphNormals)H.enable(7);if(R.morphColors)H.enable(8);if(R.premultipliedAlpha)H.enable(9);if(R.shadowMapEnabled)H.enable(10);if(R.doubleSided)H.enable(11);if(R.flipSided)H.enable(12);if(R.useDepthPacking)H.enable(13);if(R.dithering)H.enable(14);if(R.transmission)H.enable(15);if(R.sheen)H.enable(16);if(R.opaque)H.enable(17);if(R.pointsUvs)H.enable(18);if(R.decodeVideoTexture)H.enable(19);if(R.decodeVideoTextureEmissive)H.enable(20);if(R.alphaToCoverage)H.enable(21);M.push(H.mask)}function P(M){let R=k[M.type],_;if(R){let b=D6[R];_=H1.clone(b.uniforms)}else _=M.uniforms;return _}function A(M,R){let _;for(let b=0,x=N.length;b<x;b++){let m=N[b];if(m.cacheKey===R){_=m,++_.usedTimes;break}}if(_===void 0)_=new ON(J,R,M,U),N.push(_);return _}function C(M){if(--M.usedTimes===0){let R=N.indexOf(M);N[R]=N[N.length-1],N.pop(),M.destroy()}}function z(M){X.remove(M)}function j(){X.dispose()}return{getParameters:D,getProgramCacheKey:E,getUniforms:P,acquireProgram:A,releaseProgram:C,releaseShaderCache:z,programs:N,dispose:j}}function MN(){let J=new WeakMap;function Q(K){return J.has(K)}function $(K){let H=J.get(K);if(H===void 0)H={},J.set(K,H);return H}function Z(K){J.delete(K)}function W(K,H,X){J.get(K)[H]=X}function U(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:U}}function VN(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function S1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function j1(){let J=[],Q=0,$=[],Z=[],W=[];function U(){Q=0,$.length=0,Z.length=0,W.length=0}function K(G,q,F,k,L,D){let E=J[Q];if(E===void 0)E={id:G.id,object:G,geometry:q,material:F,groupOrder:k,renderOrder:G.renderOrder,z:L,group:D},J[Q]=E;else E.id=G.id,E.object=G,E.geometry=q,E.material=F,E.groupOrder=k,E.renderOrder=G.renderOrder,E.z=L,E.group=D;return Q++,E}function H(G,q,F,k,L,D){let E=K(G,q,F,k,L,D);if(F.transmission>0)Z.push(E);else if(F.transparent===!0)W.push(E);else $.push(E)}function X(G,q,F,k,L,D){let E=K(G,q,F,k,L,D);if(F.transmission>0)Z.unshift(E);else if(F.transparent===!0)W.unshift(E);else $.unshift(E)}function Y(G,q){if($.length>1)$.sort(G||VN);if(Z.length>1)Z.sort(q||S1);if(W.length>1)W.sort(q||S1)}function N(){for(let G=Q,q=J.length;G<q;G++){let F=J[G];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:U,push:H,unshift:X,finish:N,sort:Y}}function LN(){let J=new WeakMap;function Q(Z,W){let U=J.get(Z),K;if(U===void 0)K=new j1,J.set(Z,[K]);else if(W>=U.length)K=new j1,U.push(K);else K=U[W];return K}function $(){J=new WeakMap}return{get:Q,dispose:$}}function zN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new f,color:new x0};break;case"SpotLight":$={position:new f,direction:new f,color:new x0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new f,color:new x0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new f,skyColor:new x0,groundColor:new x0};break;case"RectAreaLight":$={color:new x0,position:new f,halfWidth:new f,halfHeight:new f};break}return J[Q.id]=$,$}}}function BN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new T0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var IN=0;function wN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function CN(J){let Q=new zN,$=BN(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Y=0;Y<9;Y++)Z.probe.push(new f);let W=new f,U=new G8,K=new G8;function H(Y){let N=0,G=0,q=0;for(let M=0;M<9;M++)Z.probe[M].set(0,0,0);let F=0,k=0,L=0,D=0,E=0,B=0,I=0,P=0,A=0,C=0,z=0;Y.sort(wN);for(let M=0,R=Y.length;M<R;M++){let _=Y[M],b=_.color,x=_.intensity,m=_.distance,o=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)N+=b.r*x,G+=b.g*x,q+=b.b*x;else if(_.isLightProbe){for(let c=0;c<9;c++)Z.probe[c].addScaledVector(_.sh.coefficients[c],x);z++}else if(_.isDirectionalLight){let c=Q.get(_);if(c.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let r=_.shadow,u=$.get(_);u.shadowIntensity=r.intensity,u.shadowBias=r.bias,u.shadowNormalBias=r.normalBias,u.shadowRadius=r.radius,u.shadowMapSize=r.mapSize,Z.directionalShadow[F]=u,Z.directionalShadowMap[F]=o,Z.directionalShadowMatrix[F]=_.shadow.matrix,B++}Z.directional[F]=c,F++}else if(_.isSpotLight){let c=Q.get(_);c.position.setFromMatrixPosition(_.matrixWorld),c.color.copy(b).multiplyScalar(x),c.distance=m,c.coneCos=Math.cos(_.angle),c.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),c.decay=_.decay,Z.spot[L]=c;let r=_.shadow;if(_.map){if(Z.spotLightMap[A]=_.map,A++,r.updateMatrices(_),_.castShadow)C++}if(Z.spotLightMatrix[L]=r.matrix,_.castShadow){let u=$.get(_);u.shadowIntensity=r.intensity,u.shadowBias=r.bias,u.shadowNormalBias=r.normalBias,u.shadowRadius=r.radius,u.shadowMapSize=r.mapSize,Z.spotShadow[L]=u,Z.spotShadowMap[L]=o,P++}L++}else if(_.isRectAreaLight){let c=Q.get(_);c.color.copy(b).multiplyScalar(x),c.halfWidth.set(_.width*0.5,0,0),c.halfHeight.set(0,_.height*0.5,0),Z.rectArea[D]=c,D++}else if(_.isPointLight){let c=Q.get(_);if(c.color.copy(_.color).multiplyScalar(_.intensity),c.distance=_.distance,c.decay=_.decay,_.castShadow){let r=_.shadow,u=$.get(_);u.shadowIntensity=r.intensity,u.shadowBias=r.bias,u.shadowNormalBias=r.normalBias,u.shadowRadius=r.radius,u.shadowMapSize=r.mapSize,u.shadowCameraNear=r.camera.near,u.shadowCameraFar=r.camera.far,Z.pointShadow[k]=u,Z.pointShadowMap[k]=o,Z.pointShadowMatrix[k]=_.shadow.matrix,I++}Z.point[k]=c,k++}else if(_.isHemisphereLight){let c=Q.get(_);c.skyColor.copy(_.color).multiplyScalar(x),c.groundColor.copy(_.groundColor).multiplyScalar(x),Z.hemi[E]=c,E++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=X0.LTC_FLOAT_1,Z.rectAreaLTC2=X0.LTC_FLOAT_2;else Z.rectAreaLTC1=X0.LTC_HALF_1,Z.rectAreaLTC2=X0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=G,Z.ambient[2]=q;let j=Z.hash;if(j.directionalLength!==F||j.pointLength!==k||j.spotLength!==L||j.rectAreaLength!==D||j.hemiLength!==E||j.numDirectionalShadows!==B||j.numPointShadows!==I||j.numSpotShadows!==P||j.numSpotMaps!==A||j.numLightProbes!==z)Z.directional.length=F,Z.spot.length=L,Z.rectArea.length=D,Z.point.length=k,Z.hemi.length=E,Z.directionalShadow.length=B,Z.directionalShadowMap.length=B,Z.pointShadow.length=I,Z.pointShadowMap.length=I,Z.spotShadow.length=P,Z.spotShadowMap.length=P,Z.directionalShadowMatrix.length=B,Z.pointShadowMatrix.length=I,Z.spotLightMatrix.length=P+A-C,Z.spotLightMap.length=A,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=z,j.directionalLength=F,j.pointLength=k,j.spotLength=L,j.rectAreaLength=D,j.hemiLength=E,j.numDirectionalShadows=B,j.numPointShadows=I,j.numSpotShadows=P,j.numSpotMaps=A,j.numLightProbes=z,Z.version=IN++}function X(Y,N){let G=0,q=0,F=0,k=0,L=0,D=N.matrixWorldInverse;for(let E=0,B=Y.length;E<B;E++){let I=Y[E];if(I.isDirectionalLight){let P=Z.directional[G];P.direction.setFromMatrixPosition(I.matrixWorld),W.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(W),P.direction.transformDirection(D),G++}else if(I.isSpotLight){let P=Z.spot[F];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(D),P.direction.setFromMatrixPosition(I.matrixWorld),W.setFromMatrixPosition(I.target.matrixWorld),P.direction.sub(W),P.direction.transformDirection(D),F++}else if(I.isRectAreaLight){let P=Z.rectArea[k];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(D),K.identity(),U.copy(I.matrixWorld),U.premultiply(D),K.extractRotation(U),P.halfWidth.set(I.width*0.5,0,0),P.halfHeight.set(0,I.height*0.5,0),P.halfWidth.applyMatrix4(K),P.halfHeight.applyMatrix4(K),k++}else if(I.isPointLight){let P=Z.point[q];P.position.setFromMatrixPosition(I.matrixWorld),P.position.applyMatrix4(D),q++}else if(I.isHemisphereLight){let P=Z.hemi[L];P.direction.setFromMatrixPosition(I.matrixWorld),P.direction.transformDirection(D),L++}}}return{setup:H,setupView:X,state:Z}}function f1(J){let Q=new CN(J),$=[],Z=[];function W(N){Y.camera=N,$.length=0,Z.length=0}function U(N){$.push(N)}function K(N){Z.push(N)}function H(){Q.setup($)}function X(N){Q.setupView($,N)}let Y={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:Y,setupLights:H,setupLightsView:X,pushLight:U,pushShadow:K}}function PN(J){let Q=new WeakMap;function $(W,U=0){let K=Q.get(W),H;if(K===void 0)H=new f1(J),Q.set(W,[H]);else if(U>=K.length)H=new f1(J),K.push(H);else H=K[U];return H}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var _N=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TN(J,Q,$){let Z=new B7,W=new T0,U=new T0,K=new Z8,H=new p$({depthPacking:sW}),X=new g$,Y={},N=$.maxTextureSize,G={[j9]:g8,[g8]:j9,[G6]:G6},q=new H6({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new T0},radius:{value:4}},vertexShader:_N,fragmentShader:AN}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let k=new E6;k.setAttribute("position",new n8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let L=new i8(k,q),D=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=AQ;let E=this.type;this.render=function(C,z,j){if(D.enabled===!1)return;if(D.autoUpdate===!1&&D.needsUpdate===!1)return;if(C.length===0)return;let M=J.getRenderTarget(),R=J.getActiveCubeFace(),_=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(w6),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let x=E!==N6&&this.type===N6,m=E===N6&&this.type!==N6;for(let o=0,c=C.length;o<c;o++){let r=C[o],u=r.shadow;if(u===void 0){h0("WebGLShadowMap:",r,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;W.copy(u.mapSize);let Q0=u.getFrameExtents();if(W.multiply(Q0),U.copy(u.mapSize),W.x>N||W.y>N){if(W.x>N)U.x=Math.floor(N/Q0.x),W.x=U.x*Q0.x,u.mapSize.x=U.x;if(W.y>N)U.y=Math.floor(N/Q0.y),W.y=U.y*Q0.y,u.mapSize.y=U.y}if(u.map===null||x===!0||m===!0){let f0=this.type!==N6?{minFilter:v9,magFilter:v9}:{};if(u.map!==null)u.map.dispose();u.map=new _6(W.x,W.y,f0),u.map.texture.name=r.name+".shadowMap",u.camera.updateProjectionMatrix()}J.setRenderTarget(u.map),J.clear();let E0=u.getViewportCount();for(let f0=0;f0<E0;f0++){let u0=u.getViewport(f0);K.set(U.x*u0.x,U.y*u0.y,U.x*u0.z,U.y*u0.w),b.viewport(K),u.updateMatrices(r,f0),Z=u.getFrustum(),P(z,j,u.camera,r,this.type)}if(u.isPointLightShadow!==!0&&this.type===N6)B(u,j);u.needsUpdate=!1}E=this.type,D.needsUpdate=!1,J.setRenderTarget(M,R,_)};function B(C,z){let j=Q.update(L);if(q.defines.VSM_SAMPLES!==C.blurSamples)q.defines.VSM_SAMPLES=C.blurSamples,F.defines.VSM_SAMPLES=C.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new _6(W.x,W.y);q.uniforms.shadow_pass.value=C.map.texture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(z,null,j,q,L,null),F.uniforms.shadow_pass.value=C.mapPass.texture,F.uniforms.resolution.value=C.mapSize,F.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(z,null,j,F,L,null)}function I(C,z,j,M){let R=null,_=j.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(_!==void 0)R=_;else if(R=j.isPointLight===!0?X:H,J.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let b=R.uuid,x=z.uuid,m=Y[b];if(m===void 0)m={},Y[b]=m;let o=m[x];if(o===void 0)o=R.clone(),m[x]=o,z.addEventListener("dispose",A);R=o}if(R.visible=z.visible,R.wireframe=z.wireframe,M===N6)R.side=z.shadowSide!==null?z.shadowSide:z.side;else R.side=z.shadowSide!==null?z.shadowSide:G[z.side];if(R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?0.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let b=J.properties.get(R);b.light=j}return R}function P(C,z,j,M,R){if(C.visible===!1)return;if(C.layers.test(z.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&R===N6)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld);let x=Q.update(C),m=C.material;if(Array.isArray(m)){let o=x.groups;for(let c=0,r=o.length;c<r;c++){let u=o[c],Q0=m[u.materialIndex];if(Q0&&Q0.visible){let E0=I(C,Q0,M,R);C.onBeforeShadow(J,C,z,j,x,E0,u),J.renderBufferDirect(j,null,x,E0,C,u),C.onAfterShadow(J,C,z,j,x,E0,u)}}}else if(m.visible){let o=I(C,m,M,R);C.onBeforeShadow(J,C,z,j,x,o,null),J.renderBufferDirect(j,null,x,o,C,null),C.onAfterShadow(J,C,z,j,x,o,null)}}}let b=C.children;for(let x=0,m=b.length;x<m;x++)P(b[x],z,j,M,R)}function A(C){C.target.removeEventListener("dispose",A);for(let j in Y){let M=Y[j],R=C.target.uuid;if(R in M)M[R].dispose(),delete M[R]}}}var SN={[e7]:JJ,[QJ]:WJ,[$J]:UJ,[D7]:ZJ,[JJ]:e7,[WJ]:QJ,[UJ]:$J,[ZJ]:D7};function jN(J,Q){function $(){let S=!1,N0=new Z8,e=null,O0=new Z8(0,0,0,0);return{setMask:function(J0){if(e!==J0&&!S)J.colorMask(J0,J0,J0,J0),e=J0},setLocked:function(J0){S=J0},setClear:function(J0,i,R0,m0,Y8){if(Y8===!0)J0*=m0,i*=m0,R0*=m0;if(N0.set(J0,i,R0,m0),O0.equals(N0)===!1)J.clearColor(J0,i,R0,m0),O0.copy(N0)},reset:function(){S=!1,e=null,O0.set(-1,0,0,0)}}}function Z(){let S=!1,N0=!1,e=null,O0=null,J0=null;return{setReversed:function(i){if(N0!==i){let R0=Q.get("EXT_clip_control");if(i)R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.ZERO_TO_ONE_EXT);else R0.clipControlEXT(R0.LOWER_LEFT_EXT,R0.NEGATIVE_ONE_TO_ONE_EXT);N0=i;let m0=J0;J0=null,this.setClear(m0)}},getReversed:function(){return N0},setTest:function(i){if(i)$0(J.DEPTH_TEST);else P0(J.DEPTH_TEST)},setMask:function(i){if(e!==i&&!S)J.depthMask(i),e=i},setFunc:function(i){if(N0)i=SN[i];if(O0!==i){switch(i){case e7:J.depthFunc(J.NEVER);break;case JJ:J.depthFunc(J.ALWAYS);break;case QJ:J.depthFunc(J.LESS);break;case D7:J.depthFunc(J.LEQUAL);break;case $J:J.depthFunc(J.EQUAL);break;case ZJ:J.depthFunc(J.GEQUAL);break;case WJ:J.depthFunc(J.GREATER);break;case UJ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}O0=i}},setLocked:function(i){S=i},setClear:function(i){if(J0!==i){if(N0)i=1-i;J.clearDepth(i),J0=i}},reset:function(){S=!1,e=null,O0=null,J0=null,N0=!1}}}function W(){let S=!1,N0=null,e=null,O0=null,J0=null,i=null,R0=null,m0=null,Y8=null;return{setTest:function(Q8){if(!S)if(Q8)$0(J.STENCIL_TEST);else P0(J.STENCIL_TEST)},setMask:function(Q8){if(N0!==Q8&&!S)J.stencilMask(Q8),N0=Q8},setFunc:function(Q8,$6,k6){if(e!==Q8||O0!==$6||J0!==k6)J.stencilFunc(Q8,$6,k6),e=Q8,O0=$6,J0=k6},setOp:function(Q8,$6,k6){if(i!==Q8||R0!==$6||m0!==k6)J.stencilOp(Q8,$6,k6),i=Q8,R0=$6,m0=k6},setLocked:function(Q8){S=Q8},setClear:function(Q8){if(Y8!==Q8)J.clearStencil(Q8),Y8=Q8},reset:function(){S=!1,N0=null,e=null,O0=null,J0=null,i=null,R0=null,m0=null,Y8=null}}}let U=new $,K=new Z,H=new W,X=new WeakMap,Y=new WeakMap,N={},G={},q=new WeakMap,F=[],k=null,L=!1,D=null,E=null,B=null,I=null,P=null,A=null,C=null,z=new x0(0,0,0),j=0,M=!1,R=null,_=null,b=null,x=null,m=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),c=!1,r=0,u=J.getParameter(J.VERSION);if(u.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(u)[1]),c=r>=1;else if(u.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(u)[1]),c=r>=2;let Q0=null,E0={},f0=J.getParameter(J.SCISSOR_BOX),u0=J.getParameter(J.VIEWPORT),K0=new Z8().fromArray(f0),V0=new Z8().fromArray(u0);function l(S,N0,e,O0){let J0=new Uint8Array(4),i=J.createTexture();J.bindTexture(S,i),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let R0=0;R0<e;R0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D(N0,0,J.RGBA,1,1,O0,0,J.RGBA,J.UNSIGNED_BYTE,J0);else J.texImage2D(N0+R0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,J0);return i}let U0={};U0[J.TEXTURE_2D]=l(J.TEXTURE_2D,J.TEXTURE_2D,1),U0[J.TEXTURE_CUBE_MAP]=l(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),U0[J.TEXTURE_2D_ARRAY]=l(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),U0[J.TEXTURE_3D]=l(J.TEXTURE_3D,J.TEXTURE_3D,1,1),U.setClear(0,0,0,1),K.setClear(1),H.setClear(0),$0(J.DEPTH_TEST),K.setFunc(D7),o0(!1),H8(_Q),$0(J.CULL_FACE),T(w6);function $0(S){if(N[S]!==!0)J.enable(S),N[S]=!0}function P0(S){if(N[S]!==!1)J.disable(S),N[S]=!1}function g0(S,N0){if(G[S]!==N0){if(J.bindFramebuffer(S,N0),G[S]=N0,S===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=N0;if(S===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=N0;return!0}return!1}function v0(S,N0){let e=F,O0=!1;if(S){if(e=q.get(N0),e===void 0)e=[],q.set(N0,e);let J0=S.textures;if(e.length!==J0.length||e[0]!==J.COLOR_ATTACHMENT0){for(let i=0,R0=J0.length;i<R0;i++)e[i]=J.COLOR_ATTACHMENT0+i;e.length=J0.length,O0=!0}}else if(e[0]!==J.BACK)e[0]=J.BACK,O0=!0;if(O0)J.drawBuffers(e)}function V8(S){if(k!==S)return J.useProgram(S),k=S,!0;return!1}let i0={[f9]:J.FUNC_ADD,[XW]:J.FUNC_SUBTRACT,[YW]:J.FUNC_REVERSE_SUBTRACT};i0[NW]=J.MIN,i0[GW]=J.MAX;let N8={[qW]:J.ZERO,[EW]:J.ONE,[DW]:J.SRC_COLOR,[OW]:J.SRC_ALPHA,[zW]:J.SRC_ALPHA_SATURATE,[VW]:J.DST_COLOR,[RW]:J.DST_ALPHA,[FW]:J.ONE_MINUS_SRC_COLOR,[kW]:J.ONE_MINUS_SRC_ALPHA,[LW]:J.ONE_MINUS_DST_COLOR,[MW]:J.ONE_MINUS_DST_ALPHA,[BW]:J.CONSTANT_COLOR,[IW]:J.ONE_MINUS_CONSTANT_COLOR,[wW]:J.CONSTANT_ALPHA,[CW]:J.ONE_MINUS_CONSTANT_ALPHA};function T(S,N0,e,O0,J0,i,R0,m0,Y8,Q8){if(S===w6){if(L===!0)P0(J.BLEND),L=!1;return}if(L===!1)$0(J.BLEND),L=!0;if(S!==HW){if(S!==D||Q8!==M){if(E!==f9||P!==f9)J.blendEquation(J.FUNC_ADD),E=f9,P=f9;if(Q8)switch(S){case E7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case TQ:J.blendFunc(J.ONE,J.ONE);break;case SQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case jQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:s0("WebGLState: Invalid blending: ",S);break}else switch(S){case E7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case TQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case SQ:s0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jQ:s0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:s0("WebGLState: Invalid blending: ",S);break}B=null,I=null,A=null,C=null,z.set(0,0,0),j=0,D=S,M=Q8}return}if(J0=J0||N0,i=i||e,R0=R0||O0,N0!==E||J0!==P)J.blendEquationSeparate(i0[N0],i0[J0]),E=N0,P=J0;if(e!==B||O0!==I||i!==A||R0!==C)J.blendFuncSeparate(N8[e],N8[O0],N8[i],N8[R0]),B=e,I=O0,A=i,C=R0;if(m0.equals(z)===!1||Y8!==j)J.blendColor(m0.r,m0.g,m0.b,Y8),z.copy(m0),j=Y8;D=S,M=!1}function r0(S,N0){S.side===G6?P0(J.CULL_FACE):$0(J.CULL_FACE);let e=S.side===g8;if(N0)e=!e;o0(e),S.blending===E7&&S.transparent===!1?T(w6):T(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),K.setFunc(S.depthFunc),K.setTest(S.depthTest),K.setMask(S.depthWrite),U.setMask(S.colorWrite);let O0=S.stencilWrite;if(H.setTest(O0),O0)H.setMask(S.stencilWriteMask),H.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),H.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);t0(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?$0(J.SAMPLE_ALPHA_TO_COVERAGE):P0(J.SAMPLE_ALPHA_TO_COVERAGE)}function o0(S){if(R!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);R=S}}function H8(S){if(S!==WW){if($0(J.CULL_FACE),S!==_)if(S===_Q)J.cullFace(J.BACK);else if(S===UW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else P0(J.CULL_FACE);_=S}function w0(S){if(S!==b){if(c)J.lineWidth(S);b=S}}function t0(S,N0,e){if(S){if($0(J.POLYGON_OFFSET_FILL),x!==N0||m!==e)J.polygonOffset(N0,e),x=N0,m=e}else P0(J.POLYGON_OFFSET_FILL)}function _0(S){if(S)$0(J.SCISSOR_TEST);else P0(J.SCISSOR_TEST)}function l0(S){if(S===void 0)S=J.TEXTURE0+o-1;if(Q0!==S)J.activeTexture(S),Q0=S}function O8(S,N0,e){if(e===void 0)if(Q0===null)e=J.TEXTURE0+o-1;else e=Q0;let O0=E0[e];if(O0===void 0)O0={type:void 0,texture:void 0},E0[e]=O0;if(O0.type!==S||O0.texture!==N0){if(Q0!==e)J.activeTexture(e),Q0=e;J.bindTexture(S,N0||U0[S]),O0.type=S,O0.texture=N0}}function w(){let S=E0[Q0];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function O(){try{J.compressedTexImage2D(...arguments)}catch(S){S("WebGLState:",S)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(S){S("WebGLState:",S)}}function s(){try{J.texSubImage2D(...arguments)}catch(S){S("WebGLState:",S)}}function a(){try{J.texSubImage3D(...arguments)}catch(S){S("WebGLState:",S)}}function n(){try{J.compressedTexSubImage2D(...arguments)}catch(S){S("WebGLState:",S)}}function z0(){try{J.compressedTexSubImage3D(...arguments)}catch(S){S("WebGLState:",S)}}function Y0(){try{J.texStorage2D(...arguments)}catch(S){S("WebGLState:",S)}}function L0(){try{J.texStorage3D(...arguments)}catch(S){S("WebGLState:",S)}}function B0(){try{J.texImage2D(...arguments)}catch(S){S("WebGLState:",S)}}function t(){try{J.texImage3D(...arguments)}catch(S){S("WebGLState:",S)}}function G0(S){if(K0.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),K0.copy(S)}function y0(S){if(V0.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),V0.copy(S)}function S0(S,N0){let e=Y.get(N0);if(e===void 0)e=new WeakMap,Y.set(N0,e);let O0=e.get(S);if(O0===void 0)O0=J.getUniformBlockIndex(N0,S.name),e.set(S,O0)}function H0(S,N0){let O0=Y.get(N0).get(S);if(X.get(N0)!==O0)J.uniformBlockBinding(N0,O0,S.__bindingPointIndex),X.set(N0,O0)}function p0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),K.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),N={},Q0=null,E0={},G={},q=new WeakMap,F=[],k=null,L=!1,D=null,E=null,B=null,I=null,P=null,A=null,C=null,z=new x0(0,0,0),j=0,M=!1,R=null,_=null,b=null,x=null,m=null,K0.set(0,0,J.canvas.width,J.canvas.height),V0.set(0,0,J.canvas.width,J.canvas.height),U.reset(),K.reset(),H.reset()}return{buffers:{color:U,depth:K,stencil:H},enable:$0,disable:P0,bindFramebuffer:g0,drawBuffers:v0,useProgram:V8,setBlending:T,setMaterial:r0,setFlipSided:o0,setCullFace:H8,setLineWidth:w0,setPolygonOffset:t0,setScissorTest:_0,activeTexture:l0,bindTexture:O8,unbindTexture:w,compressedTexImage2D:O,compressedTexImage3D:h,texImage2D:B0,texImage3D:t,updateUBOMapping:S0,uniformBlockBinding:H0,texStorage2D:Y0,texStorage3D:L0,texSubImage2D:s,texSubImage3D:a,compressedTexSubImage2D:n,compressedTexSubImage3D:z0,scissor:G0,viewport:y0,reset:p0}}function fN(J,Q,$,Z,W,U,K){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Y=new T0,N=new WeakMap,G,q=new WeakMap,F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function k(w,O){return F?new OffscreenCanvas(w,O):q7("canvas")}function L(w,O,h){let s=1,a=O8(w);if(a.width>h||a.height>h)s=h/Math.max(a.width,a.height);if(s<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let n=Math.floor(s*a.width),z0=Math.floor(s*a.height);if(G===void 0)G=k(n,z0);let Y0=O?k(n,z0):G;return Y0.width=n,Y0.height=z0,Y0.getContext("2d").drawImage(w,0,0,n,z0),h0("WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+n+"x"+z0+")."),Y0}else{if("data"in w)h0("WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").");return w}return w}function D(w){return w.generateMipmaps}function E(w){J.generateMipmap(w)}function B(w){if(w.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(w.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function I(w,O,h,s,a=!1){if(w!==null){if(J[w]!==void 0)return J[w];h0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let n=O;if(O===J.RED){if(h===J.FLOAT)n=J.R32F;if(h===J.HALF_FLOAT)n=J.R16F;if(h===J.UNSIGNED_BYTE)n=J.R8}if(O===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)n=J.R8UI;if(h===J.UNSIGNED_SHORT)n=J.R16UI;if(h===J.UNSIGNED_INT)n=J.R32UI;if(h===J.BYTE)n=J.R8I;if(h===J.SHORT)n=J.R16I;if(h===J.INT)n=J.R32I}if(O===J.RG){if(h===J.FLOAT)n=J.RG32F;if(h===J.HALF_FLOAT)n=J.RG16F;if(h===J.UNSIGNED_BYTE)n=J.RG8}if(O===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)n=J.RG8UI;if(h===J.UNSIGNED_SHORT)n=J.RG16UI;if(h===J.UNSIGNED_INT)n=J.RG32UI;if(h===J.BYTE)n=J.RG8I;if(h===J.SHORT)n=J.RG16I;if(h===J.INT)n=J.RG32I}if(O===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)n=J.RGB8UI;if(h===J.UNSIGNED_SHORT)n=J.RGB16UI;if(h===J.UNSIGNED_INT)n=J.RGB32UI;if(h===J.BYTE)n=J.RGB8I;if(h===J.SHORT)n=J.RGB16I;if(h===J.INT)n=J.RGB32I}if(O===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)n=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)n=J.RGBA16UI;if(h===J.UNSIGNED_INT)n=J.RGBA32UI;if(h===J.BYTE)n=J.RGBA8I;if(h===J.SHORT)n=J.RGBA16I;if(h===J.INT)n=J.RGBA32I}if(O===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)n=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)n=J.R11F_G11F_B10F}if(O===J.RGBA){let z0=a?D$:e0.getTransfer(s);if(h===J.FLOAT)n=J.RGBA32F;if(h===J.HALF_FLOAT)n=J.RGBA16F;if(h===J.UNSIGNED_BYTE)n=z0===X8?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)n=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)n=J.RGB5_A1}if(n===J.R16F||n===J.R32F||n===J.RG16F||n===J.RG32F||n===J.RGBA16F||n===J.RGBA32F)Q.get("EXT_color_buffer_float");return n}function P(w,O){let h;if(w){if(O===null||O===h9||O===p9)h=J.DEPTH24_STENCIL8;else if(O===p6)h=J.DEPTH32F_STENCIL8;else if(O===k7)h=J.DEPTH24_STENCIL8,h0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(O===null||O===h9||O===p9)h=J.DEPTH_COMPONENT24;else if(O===p6)h=J.DEPTH_COMPONENT32F;else if(O===k7)h=J.DEPTH_COMPONENT16;return h}function A(w,O){if(D(w)===!0||w.isFramebufferTexture&&w.minFilter!==v9&&w.minFilter!==P6)return Math.log2(Math.max(O.width,O.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return O.mipmaps.length;else return 1}function C(w){let O=w.target;if(O.removeEventListener("dispose",C),j(O),O.isVideoTexture)N.delete(O)}function z(w){let O=w.target;O.removeEventListener("dispose",z),R(O)}function j(w){let O=Z.get(w);if(O.__webglInit===void 0)return;let h=w.source,s=q.get(h);if(s){let a=s[O.__cacheKey];if(a.usedTimes--,a.usedTimes===0)M(w);if(Object.keys(s).length===0)q.delete(h)}Z.remove(w)}function M(w){let O=Z.get(w);J.deleteTexture(O.__webglTexture);let h=w.source,s=q.get(h);delete s[O.__cacheKey],K.memory.textures--}function R(w){let O=Z.get(w);if(w.depthTexture)w.depthTexture.dispose(),Z.remove(w.depthTexture);if(w.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(O.__webglFramebuffer[s]))for(let a=0;a<O.__webglFramebuffer[s].length;a++)J.deleteFramebuffer(O.__webglFramebuffer[s][a]);else J.deleteFramebuffer(O.__webglFramebuffer[s]);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer[s])}else{if(Array.isArray(O.__webglFramebuffer))for(let s=0;s<O.__webglFramebuffer.length;s++)J.deleteFramebuffer(O.__webglFramebuffer[s]);else J.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer)J.deleteRenderbuffer(O.__webglDepthbuffer);if(O.__webglMultisampledFramebuffer)J.deleteFramebuffer(O.__webglMultisampledFramebuffer);if(O.__webglColorRenderbuffer){for(let s=0;s<O.__webglColorRenderbuffer.length;s++)if(O.__webglColorRenderbuffer[s])J.deleteRenderbuffer(O.__webglColorRenderbuffer[s])}if(O.__webglDepthRenderbuffer)J.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let h=w.textures;for(let s=0,a=h.length;s<a;s++){let n=Z.get(h[s]);if(n.__webglTexture)J.deleteTexture(n.__webglTexture),K.memory.textures--;Z.remove(h[s])}Z.remove(w)}let _=0;function b(){_=0}function x(){let w=_;if(w>=W.maxTextures)h0("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+W.maxTextures);return _+=1,w}function m(w){let O=[];return O.push(w.wrapS),O.push(w.wrapT),O.push(w.wrapR||0),O.push(w.magFilter),O.push(w.minFilter),O.push(w.anisotropy),O.push(w.internalFormat),O.push(w.format),O.push(w.type),O.push(w.generateMipmaps),O.push(w.premultiplyAlpha),O.push(w.flipY),O.push(w.unpackAlignment),O.push(w.colorSpace),O.join()}function o(w,O){let h=Z.get(w);if(w.isVideoTexture)_0(w);if(w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&h.__version!==w.version){let s=w.image;if(s===null)h0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)h0("WebGLRenderer: Texture marked for update but image is incomplete");else{U0(h,w,O);return}}else if(w.isExternalTexture)h.__webglTexture=w.sourceTexture?w.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+O)}function c(w,O){let h=Z.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&h.__version!==w.version){U0(h,w,O);return}else if(w.isExternalTexture)h.__webglTexture=w.sourceTexture?w.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+O)}function r(w,O){let h=Z.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&h.__version!==w.version){U0(h,w,O);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+O)}function u(w,O){let h=Z.get(w);if(w.version>0&&h.__version!==w.version){$0(h,w,O);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+O)}let Q0={[hW]:J.REPEAT,[XJ]:J.CLAMP_TO_EDGE,[xW]:J.MIRRORED_REPEAT},E0={[v9]:J.NEAREST,[pW]:J.NEAREST_MIPMAP_NEAREST,[O7]:J.NEAREST_MIPMAP_LINEAR,[P6]:J.LINEAR,[YJ]:J.LINEAR_MIPMAP_NEAREST,[b9]:J.LINEAR_MIPMAP_LINEAR},f0={[rW]:J.NEVER,[Z1]:J.ALWAYS,[tW]:J.LESS,[F$]:J.LEQUAL,[eW]:J.EQUAL,[$1]:J.GEQUAL,[J1]:J.GREATER,[Q1]:J.NOTEQUAL};function u0(w,O){if(O.type===p6&&Q.has("OES_texture_float_linear")===!1&&(O.magFilter===P6||O.magFilter===YJ||O.magFilter===O7||O.magFilter===b9||O.minFilter===P6||O.minFilter===YJ||O.minFilter===O7||O.minFilter===b9))h0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(w,J.TEXTURE_WRAP_S,Q0[O.wrapS]),J.texParameteri(w,J.TEXTURE_WRAP_T,Q0[O.wrapT]),w===J.TEXTURE_3D||w===J.TEXTURE_2D_ARRAY)J.texParameteri(w,J.TEXTURE_WRAP_R,Q0[O.wrapR]);if(J.texParameteri(w,J.TEXTURE_MAG_FILTER,E0[O.magFilter]),J.texParameteri(w,J.TEXTURE_MIN_FILTER,E0[O.minFilter]),O.compareFunction)J.texParameteri(w,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(w,J.TEXTURE_COMPARE_FUNC,f0[O.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(O.magFilter===v9)return;if(O.minFilter!==O7&&O.minFilter!==b9)return;if(O.type===p6&&Q.has("OES_texture_float_linear")===!1)return;if(O.anisotropy>1||Z.get(O).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(w,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(O.anisotropy,W.getMaxAnisotropy())),Z.get(O).__currentAnisotropy=O.anisotropy}}}function K0(w,O){let h=!1;if(w.__webglInit===void 0)w.__webglInit=!0,O.addEventListener("dispose",C);let s=O.source,a=q.get(s);if(a===void 0)a={},q.set(s,a);let n=m(O);if(n!==w.__cacheKey){if(a[n]===void 0)a[n]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,h=!0;a[n].usedTimes++;let z0=a[w.__cacheKey];if(z0!==void 0){if(a[w.__cacheKey].usedTimes--,z0.usedTimes===0)M(O)}w.__cacheKey=n,w.__webglTexture=a[n].texture}return h}function V0(w,O,h){return Math.floor(Math.floor(w/h)/O)}function l(w,O,h,s){let n=w.updateRanges;if(n.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,O.width,O.height,h,s,O.data);else{n.sort((t,G0)=>t.start-G0.start);let z0=0;for(let t=1;t<n.length;t++){let G0=n[z0],y0=n[t],S0=G0.start+G0.count,H0=V0(y0.start,O.width,4),p0=V0(G0.start,O.width,4);if(y0.start<=S0+1&&H0===p0&&V0(y0.start+y0.count-1,O.width,4)===H0)G0.count=Math.max(G0.count,y0.start+y0.count-G0.start);else++z0,n[z0]=y0}n.length=z0+1;let Y0=J.getParameter(J.UNPACK_ROW_LENGTH),L0=J.getParameter(J.UNPACK_SKIP_PIXELS),B0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,O.width);for(let t=0,G0=n.length;t<G0;t++){let y0=n[t],S0=Math.floor(y0.start/4),H0=Math.ceil(y0.count/4),p0=S0%O.width,S=Math.floor(S0/O.width),N0=H0,e=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,p0),J.pixelStorei(J.UNPACK_SKIP_ROWS,S),$.texSubImage2D(J.TEXTURE_2D,0,p0,S,N0,1,h,s,O.data)}w.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,Y0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,L0),J.pixelStorei(J.UNPACK_SKIP_ROWS,B0)}}function U0(w,O,h){let s=J.TEXTURE_2D;if(O.isDataArrayTexture||O.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(O.isData3DTexture)s=J.TEXTURE_3D;let a=K0(w,O),n=O.source;$.bindTexture(s,w.__webglTexture,J.TEXTURE0+h);let z0=Z.get(n);if(n.version!==z0.__version||a===!0){$.activeTexture(J.TEXTURE0+h);let Y0=e0.getPrimaries(e0.workingColorSpace),L0=O.colorSpace===Q9?null:e0.getPrimaries(O.colorSpace),B0=O.colorSpace===Q9||Y0===L0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,B0);let t=L(O.image,!1,W.maxTextureSize);t=l0(O,t);let G0=U.convert(O.format,O.colorSpace),y0=U.convert(O.type),S0=I(O.internalFormat,G0,y0,O.colorSpace,O.isVideoTexture);u0(s,O);let H0,p0=O.mipmaps,S=O.isVideoTexture!==!0,N0=z0.__version===void 0||a===!0,e=n.dataReady,O0=A(O,t);if(O.isDepthTexture){if(S0=P(O.format===R7,O.type),N0)if(S)$.texStorage2D(J.TEXTURE_2D,1,S0,t.width,t.height);else $.texImage2D(J.TEXTURE_2D,0,S0,t.width,t.height,0,G0,y0,null)}else if(O.isDataTexture)if(p0.length>0){if(S&&N0)$.texStorage2D(J.TEXTURE_2D,O0,S0,p0[0].width,p0[0].height);for(let J0=0,i=p0.length;J0<i;J0++)if(H0=p0[J0],S){if(e)$.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,G0,y0,H0.data)}else $.texImage2D(J.TEXTURE_2D,J0,S0,H0.width,H0.height,0,G0,y0,H0.data);O.generateMipmaps=!1}else if(S){if(N0)$.texStorage2D(J.TEXTURE_2D,O0,S0,t.width,t.height);if(e)l(O,t,G0,y0)}else $.texImage2D(J.TEXTURE_2D,0,S0,t.width,t.height,0,G0,y0,t.data);else if(O.isCompressedTexture)if(O.isCompressedArrayTexture){if(S&&N0)$.texStorage3D(J.TEXTURE_2D_ARRAY,O0,S0,p0[0].width,p0[0].height,t.depth);for(let J0=0,i=p0.length;J0<i;J0++)if(H0=p0[J0],O.format!==q6)if(G0!==null)if(S){if(e)if(O.layerUpdates.size>0){let R0=JZ(H0.width,H0.height,O.format,O.type);for(let m0 of O.layerUpdates){let Y8=H0.data.subarray(m0*R0/H0.data.BYTES_PER_ELEMENT,(m0+1)*R0/H0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,m0,H0.width,H0.height,1,G0,Y8)}O.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,t.depth,G0,H0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,J0,S0,H0.width,H0.height,t.depth,0,H0.data,0,0);else h0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if(e)$.texSubImage3D(J.TEXTURE_2D_ARRAY,J0,0,0,0,H0.width,H0.height,t.depth,G0,y0,H0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,J0,S0,H0.width,H0.height,t.depth,0,G0,y0,H0.data)}else{if(S&&N0)$.texStorage2D(J.TEXTURE_2D,O0,S0,p0[0].width,p0[0].height);for(let J0=0,i=p0.length;J0<i;J0++)if(H0=p0[J0],O.format!==q6)if(G0!==null)if(S){if(e)$.compressedTexSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,G0,H0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,J0,S0,H0.width,H0.height,0,H0.data);else h0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if(e)$.texSubImage2D(J.TEXTURE_2D,J0,0,0,H0.width,H0.height,G0,y0,H0.data)}else $.texImage2D(J.TEXTURE_2D,J0,S0,H0.width,H0.height,0,G0,y0,H0.data)}else if(O.isDataArrayTexture)if(S){if(N0)$.texStorage3D(J.TEXTURE_2D_ARRAY,O0,S0,t.width,t.height,t.depth);if(e)if(O.layerUpdates.size>0){let J0=JZ(t.width,t.height,O.format,O.type);for(let i of O.layerUpdates){let R0=t.data.subarray(i*J0/t.data.BYTES_PER_ELEMENT,(i+1)*J0/t.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,G0,y0,R0)}O.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,G0,y0,t.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,S0,t.width,t.height,t.depth,0,G0,y0,t.data);else if(O.isData3DTexture)if(S){if(N0)$.texStorage3D(J.TEXTURE_3D,O0,S0,t.width,t.height,t.depth);if(e)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,G0,y0,t.data)}else $.texImage3D(J.TEXTURE_3D,0,S0,t.width,t.height,t.depth,0,G0,y0,t.data);else if(O.isFramebufferTexture){if(N0)if(S)$.texStorage2D(J.TEXTURE_2D,O0,S0,t.width,t.height);else{let{width:J0,height:i}=t;for(let R0=0;R0<O0;R0++)$.texImage2D(J.TEXTURE_2D,R0,S0,J0,i,0,G0,y0,null),J0>>=1,i>>=1}}else if(p0.length>0){if(S&&N0){let J0=O8(p0[0]);$.texStorage2D(J.TEXTURE_2D,O0,S0,J0.width,J0.height)}for(let J0=0,i=p0.length;J0<i;J0++)if(H0=p0[J0],S){if(e)$.texSubImage2D(J.TEXTURE_2D,J0,0,0,G0,y0,H0)}else $.texImage2D(J.TEXTURE_2D,J0,S0,G0,y0,H0);O.generateMipmaps=!1}else if(S){if(N0){let J0=O8(t);$.texStorage2D(J.TEXTURE_2D,O0,S0,J0.width,J0.height)}if(e)$.texSubImage2D(J.TEXTURE_2D,0,0,0,G0,y0,t)}else $.texImage2D(J.TEXTURE_2D,0,S0,G0,y0,t);if(D(O))E(s);if(z0.__version=n.version,O.onUpdate)O.onUpdate(O)}w.__version=O.version}function $0(w,O,h){if(O.image.length!==6)return;let s=K0(w,O),a=O.source;$.bindTexture(J.TEXTURE_CUBE_MAP,w.__webglTexture,J.TEXTURE0+h);let n=Z.get(a);if(a.version!==n.__version||s===!0){$.activeTexture(J.TEXTURE0+h);let z0=e0.getPrimaries(e0.workingColorSpace),Y0=O.colorSpace===Q9?null:e0.getPrimaries(O.colorSpace),L0=O.colorSpace===Q9||z0===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,O.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,O.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,L0);let B0=O.isCompressedTexture||O.image[0].isCompressedTexture,t=O.image[0]&&O.image[0].isDataTexture,G0=[];for(let i=0;i<6;i++){if(!B0&&!t)G0[i]=L(O.image[i],!0,W.maxCubemapSize);else G0[i]=t?O.image[i].image:O.image[i];G0[i]=l0(O,G0[i])}let y0=G0[0],S0=U.convert(O.format,O.colorSpace),H0=U.convert(O.type),p0=I(O.internalFormat,S0,H0,O.colorSpace),S=O.isVideoTexture!==!0,N0=n.__version===void 0||s===!0,e=a.dataReady,O0=A(O,y0);u0(J.TEXTURE_CUBE_MAP,O);let J0;if(B0){if(S&&N0)$.texStorage2D(J.TEXTURE_CUBE_MAP,O0,p0,y0.width,y0.height);for(let i=0;i<6;i++){J0=G0[i].mipmaps;for(let R0=0;R0<J0.length;R0++){let m0=J0[R0];if(O.format!==q6)if(S0!==null)if(S){if(e)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0,0,0,m0.width,m0.height,S0,m0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0,p0,m0.width,m0.height,0,m0.data);else h0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0,0,0,m0.width,m0.height,S0,H0,m0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0,p0,m0.width,m0.height,0,S0,H0,m0.data)}}}else{if(J0=O.mipmaps,S&&N0){if(J0.length>0)O0++;let i=O8(G0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,O0,p0,i.width,i.height)}for(let i=0;i<6;i++)if(t){if(S){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,G0[i].width,G0[i].height,S0,H0,G0[i].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,p0,G0[i].width,G0[i].height,0,S0,H0,G0[i].data);for(let R0=0;R0<J0.length;R0++){let Y8=J0[R0].image[i].image;if(S){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0+1,0,0,Y8.width,Y8.height,S0,H0,Y8.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0+1,p0,Y8.width,Y8.height,0,S0,H0,Y8.data)}}else{if(S){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,0,0,S0,H0,G0[i])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,p0,S0,H0,G0[i]);for(let R0=0;R0<J0.length;R0++){let m0=J0[R0];if(S){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0+1,0,0,S0,H0,m0.image[i])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+i,R0+1,p0,S0,H0,m0.image[i])}}}if(D(O))E(J.TEXTURE_CUBE_MAP);if(n.__version=a.version,O.onUpdate)O.onUpdate(O)}w.__version=O.version}function P0(w,O,h,s,a,n){let z0=U.convert(h.format,h.colorSpace),Y0=U.convert(h.type),L0=I(h.internalFormat,z0,Y0,h.colorSpace),B0=Z.get(O),t=Z.get(h);if(t.__renderTarget=O,!B0.__hasExternalTextures){let G0=Math.max(1,O.width>>n),y0=Math.max(1,O.height>>n);if(a===J.TEXTURE_3D||a===J.TEXTURE_2D_ARRAY)$.texImage3D(a,n,L0,G0,y0,O.depth,0,z0,Y0,null);else $.texImage2D(a,n,L0,G0,y0,0,z0,Y0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,w),t0(O))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,a,t.__webglTexture,0,w0(O));else if(a===J.TEXTURE_2D||a>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,a,t.__webglTexture,n);$.bindFramebuffer(J.FRAMEBUFFER,null)}function g0(w,O,h){if(J.bindRenderbuffer(J.RENDERBUFFER,w),O.depthBuffer){let s=O.depthTexture,a=s&&s.isDepthTexture?s.type:null,n=P(O.stencilBuffer,a),z0=O.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,Y0=w0(O);if(t0(O))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,Y0,n,O.width,O.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,Y0,n,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,n,O.width,O.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,z0,J.RENDERBUFFER,w)}else{let s=O.textures;for(let a=0;a<s.length;a++){let n=s[a],z0=U.convert(n.format,n.colorSpace),Y0=U.convert(n.type),L0=I(n.internalFormat,z0,Y0,n.colorSpace),B0=w0(O);if(h&&t0(O)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,B0,L0,O.width,O.height);else if(t0(O))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,B0,L0,O.width,O.height);else J.renderbufferStorage(J.RENDERBUFFER,L0,O.width,O.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function v0(w,O){if(O&&O.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,w),!(O.depthTexture&&O.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let s=Z.get(O.depthTexture);if(s.__renderTarget=O,!s.__webglTexture||O.depthTexture.image.width!==O.width||O.depthTexture.image.height!==O.height)O.depthTexture.image.width=O.width,O.depthTexture.image.height=O.height,O.depthTexture.needsUpdate=!0;o(O.depthTexture,0);let a=s.__webglTexture,n=w0(O);if(O.depthTexture.format===NJ)if(t0(O))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0,n);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,a,0);else if(O.depthTexture.format===R7)if(t0(O))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0,n);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,a,0);else throw Error("Unknown depthTexture format")}function V8(w){let O=Z.get(w),h=w.isWebGLCubeRenderTarget===!0;if(O.__boundDepthTexture!==w.depthTexture){let s=w.depthTexture;if(O.__depthDisposeCallback)O.__depthDisposeCallback();if(s){let a=()=>{delete O.__boundDepthTexture,delete O.__depthDisposeCallback,s.removeEventListener("dispose",a)};s.addEventListener("dispose",a),O.__depthDisposeCallback=a}O.__boundDepthTexture=s}if(w.depthTexture&&!O.__autoAllocateDepthBuffer){if(h)throw Error("target.depthTexture not supported in Cube render targets");let s=w.texture.mipmaps;if(s&&s.length>0)v0(O.__webglFramebuffer[0],w);else v0(O.__webglFramebuffer,w)}else if(h){O.__webglDepthbuffer=[];for(let s=0;s<6;s++)if($.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[s]),O.__webglDepthbuffer[s]===void 0)O.__webglDepthbuffer[s]=J.createRenderbuffer(),g0(O.__webglDepthbuffer[s],w,!1);else{let a=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,n=O.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,n),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,n)}}else{let s=w.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,O.__webglFramebuffer);if(O.__webglDepthbuffer===void 0)O.__webglDepthbuffer=J.createRenderbuffer(),g0(O.__webglDepthbuffer,w,!1);else{let a=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,n=O.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,n),J.framebufferRenderbuffer(J.FRAMEBUFFER,a,J.RENDERBUFFER,n)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function i0(w,O,h){let s=Z.get(w);if(O!==void 0)P0(s.__webglFramebuffer,w,w.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)V8(w)}function N8(w){let O=w.texture,h=Z.get(w),s=Z.get(O);w.addEventListener("dispose",z);let a=w.textures,n=w.isWebGLCubeRenderTarget===!0,z0=a.length>1;if(!z0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=O.version,K.memory.textures++}if(n){h.__webglFramebuffer=[];for(let Y0=0;Y0<6;Y0++)if(O.mipmaps&&O.mipmaps.length>0){h.__webglFramebuffer[Y0]=[];for(let L0=0;L0<O.mipmaps.length;L0++)h.__webglFramebuffer[Y0][L0]=J.createFramebuffer()}else h.__webglFramebuffer[Y0]=J.createFramebuffer()}else{if(O.mipmaps&&O.mipmaps.length>0){h.__webglFramebuffer=[];for(let Y0=0;Y0<O.mipmaps.length;Y0++)h.__webglFramebuffer[Y0]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(z0)for(let Y0=0,L0=a.length;Y0<L0;Y0++){let B0=Z.get(a[Y0]);if(B0.__webglTexture===void 0)B0.__webglTexture=J.createTexture(),K.memory.textures++}if(w.samples>0&&t0(w)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let Y0=0;Y0<a.length;Y0++){let L0=a[Y0];h.__webglColorRenderbuffer[Y0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[Y0]);let B0=U.convert(L0.format,L0.colorSpace),t=U.convert(L0.type),G0=I(L0.internalFormat,B0,t,L0.colorSpace,w.isXRRenderTarget===!0),y0=w0(w);J.renderbufferStorageMultisample(J.RENDERBUFFER,y0,G0,w.width,w.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,h.__webglColorRenderbuffer[Y0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),w.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),g0(h.__webglDepthRenderbuffer,w,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(n){$.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),u0(J.TEXTURE_CUBE_MAP,O);for(let Y0=0;Y0<6;Y0++)if(O.mipmaps&&O.mipmaps.length>0)for(let L0=0;L0<O.mipmaps.length;L0++)P0(h.__webglFramebuffer[Y0][L0],w,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,L0);else P0(h.__webglFramebuffer[Y0],w,O,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0);if(D(O))E(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(z0){for(let Y0=0,L0=a.length;Y0<L0;Y0++){let B0=a[Y0],t=Z.get(B0),G0=J.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)G0=w.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(G0,t.__webglTexture),u0(G0,B0),P0(h.__webglFramebuffer,w,B0,J.COLOR_ATTACHMENT0+Y0,G0,0),D(B0))E(G0)}$.unbindTexture()}else{let Y0=J.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)Y0=w.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Y0,s.__webglTexture),u0(Y0,O),O.mipmaps&&O.mipmaps.length>0)for(let L0=0;L0<O.mipmaps.length;L0++)P0(h.__webglFramebuffer[L0],w,O,J.COLOR_ATTACHMENT0,Y0,L0);else P0(h.__webglFramebuffer,w,O,J.COLOR_ATTACHMENT0,Y0,0);if(D(O))E(Y0);$.unbindTexture()}if(w.depthBuffer)V8(w)}function T(w){let O=w.textures;for(let h=0,s=O.length;h<s;h++){let a=O[h];if(D(a)){let n=B(w),z0=Z.get(a).__webglTexture;$.bindTexture(n,z0),E(n),$.unbindTexture()}}}let r0=[],o0=[];function H8(w){if(w.samples>0){if(t0(w)===!1){let{textures:O,width:h,height:s}=w,a=J.COLOR_BUFFER_BIT,n=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,z0=Z.get(w),Y0=O.length>1;if(Y0)for(let B0=0;B0<O.length;B0++)$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,z0.__webglMultisampledFramebuffer);let L0=w.texture.mipmaps;if(L0&&L0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer);for(let B0=0;B0<O.length;B0++){if(w.resolveDepthBuffer){if(w.depthBuffer)a|=J.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)a|=J.STENCIL_BUFFER_BIT}if(Y0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[B0]);let t=Z.get(O[B0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,t,0)}if(J.blitFramebuffer(0,0,h,s,0,0,h,s,a,J.NEAREST),X===!0){if(r0.length=0,o0.length=0,r0.push(J.COLOR_ATTACHMENT0+B0),w.depthBuffer&&w.resolveDepthBuffer===!1)r0.push(n),o0.push(n),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,o0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,r0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Y0)for(let B0=0;B0<O.length;B0++){$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[B0]);let t=Z.get(O[B0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+B0,J.TEXTURE_2D,t,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&X){let O=w.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[O])}}}function w0(w){return Math.min(W.maxSamples,w.samples)}function t0(w){let O=Z.get(w);return w.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&O.__useRenderToTexture!==!1}function _0(w){let O=K.render.frame;if(N.get(w)!==O)N.set(w,O),w.update()}function l0(w,O){let{colorSpace:h,format:s,type:a}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return O;if(h!==M7&&h!==Q9)if(e0.getTransfer(h)===X8){if(s!==q6||a!==x6)h0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else s0("WebGLTextures: Unsupported texture color space:",h);return O}function O8(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)Y.width=w.naturalWidth||w.width,Y.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)Y.width=w.displayWidth,Y.height=w.displayHeight;else Y.width=w.width,Y.height=w.height;return Y}this.allocateTextureUnit=x,this.resetTextureUnits=b,this.setTexture2D=o,this.setTexture2DArray=c,this.setTexture3D=r,this.setTextureCube=u,this.rebindTextures=i0,this.setupRenderTarget=N8,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=H8,this.setupDepthRenderbuffer=V8,this.setupFrameBufferTexture=P0,this.useMultisampledRTT=t0}function yN(J,Q){function $(Z,W=Q9){let U,K=e0.getTransfer(W);if(Z===x6)return J.UNSIGNED_BYTE;if(Z===yQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===vQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===dW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===uW)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===gW)return J.BYTE;if(Z===mW)return J.SHORT;if(Z===k7)return J.UNSIGNED_SHORT;if(Z===fQ)return J.INT;if(Z===h9)return J.UNSIGNED_INT;if(Z===p6)return J.FLOAT;if(Z===x9)return J.HALF_FLOAT;if(Z===lW)return J.ALPHA;if(Z===cW)return J.RGB;if(Z===q6)return J.RGBA;if(Z===NJ)return J.DEPTH_COMPONENT;if(Z===R7)return J.DEPTH_STENCIL;if(Z===nW)return J.RED;if(Z===bQ)return J.RED_INTEGER;if(Z===hQ)return J.RG;if(Z===xQ)return J.RG_INTEGER;if(Z===pQ)return J.RGBA_INTEGER;if(Z===GJ||Z===qJ||Z===EJ||Z===DJ)if(K===X8)if(U=Q.get("WEBGL_compressed_texture_s3tc_srgb"),U!==null){if(Z===GJ)return U.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===qJ)return U.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===EJ)return U.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===DJ)return U.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(U=Q.get("WEBGL_compressed_texture_s3tc"),U!==null){if(Z===GJ)return U.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===qJ)return U.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===EJ)return U.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===DJ)return U.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===gQ||Z===mQ||Z===dQ||Z===uQ)if(U=Q.get("WEBGL_compressed_texture_pvrtc"),U!==null){if(Z===gQ)return U.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===mQ)return U.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===dQ)return U.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===uQ)return U.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===lQ||Z===cQ||Z===nQ)if(U=Q.get("WEBGL_compressed_texture_etc"),U!==null){if(Z===lQ||Z===cQ)return K===X8?U.COMPRESSED_SRGB8_ETC2:U.COMPRESSED_RGB8_ETC2;if(Z===nQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:U.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===rQ||Z===tQ||Z===eQ||Z===J$||Z===Q$||Z===$$||Z===Z$||Z===W$||Z===U$||Z===K$)if(U=Q.get("WEBGL_compressed_texture_astc"),U!==null){if(Z===sQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:U.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===iQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:U.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===oQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:U.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===aQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:U.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===rQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:U.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===tQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:U.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===eQ)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:U.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===J$)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:U.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===Q$)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:U.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===$$)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:U.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===Z$)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:U.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===W$)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:U.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===U$)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:U.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===K$)return K===X8?U.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:U.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===H$||Z===X$||Z===Y$)if(U=Q.get("EXT_texture_compression_bptc"),U!==null){if(Z===H$)return K===X8?U.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:U.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===X$)return U.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===Y$)return U.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===N$||Z===G$||Z===q$||Z===E$)if(U=Q.get("EXT_texture_compression_rgtc"),U!==null){if(Z===N$)return U.COMPRESSED_RED_RGTC1_EXT;if(Z===G$)return U.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===q$)return U.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===E$)return U.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===p9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var vN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new IJ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new H6({vertexShader:vN,fragmentShader:bN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new i8(new I7(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c1 extends g6{constructor(J,Q){super();let $=this,Z=null,W=1,U=null,K="local-floor",H=1,X=null,Y=null,N=null,G=null,q=null,F=null,k=typeof XRWebGLBinding<"u",L=new l1,D={},E=Q.getContextAttributes(),B=null,I=null,P=[],A=[],C=new T0,z=null,j=new I8;j.viewport=new Z8;let M=new I8;M.viewport=new Z8;let R=[j,M],_=new r$,b=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(l){let U0=P[l];if(U0===void 0)U0=new z7,P[l]=U0;return U0.getTargetRaySpace()},this.getControllerGrip=function(l){let U0=P[l];if(U0===void 0)U0=new z7,P[l]=U0;return U0.getGripSpace()},this.getHand=function(l){let U0=P[l];if(U0===void 0)U0=new z7,P[l]=U0;return U0.getHandSpace()};function m(l){let U0=A.indexOf(l.inputSource);if(U0===-1)return;let $0=P[U0];if($0!==void 0)$0.update(l.inputSource,l.frame,X||U),$0.dispatchEvent({type:l.type,data:l.inputSource})}function o(){Z.removeEventListener("select",m),Z.removeEventListener("selectstart",m),Z.removeEventListener("selectend",m),Z.removeEventListener("squeeze",m),Z.removeEventListener("squeezestart",m),Z.removeEventListener("squeezeend",m),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",c);for(let l=0;l<P.length;l++){let U0=A[l];if(U0===null)continue;A[l]=null,P[l].disconnect(U0)}b=null,x=null,L.reset();for(let l in D)delete D[l];J.setRenderTarget(B),q=null,G=null,N=null,Z=null,I=null,V0.stop(),$.isPresenting=!1,J.setPixelRatio(z),J.setSize(C.width,C.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(l){if(W=l,$.isPresenting===!0)h0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(l){if(K=l,$.isPresenting===!0)h0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||U},this.setReferenceSpace=function(l){X=l},this.getBaseLayer=function(){return G!==null?G:q},this.getBinding=function(){if(N===null&&k)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(l){if(Z=l,Z!==null){if(B=J.getRenderTarget(),Z.addEventListener("select",m),Z.addEventListener("selectstart",m),Z.addEventListener("selectend",m),Z.addEventListener("squeeze",m),Z.addEventListener("squeezestart",m),Z.addEventListener("squeezeend",m),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",c),E.xrCompatible!==!0)await Q.makeXRCompatible();if(z=J.getPixelRatio(),J.getSize(C),!(k&&("createProjectionLayer"in XRWebGLBinding.prototype))){let $0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,Q,$0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),I=new _6(q.framebufferWidth,q.framebufferHeight,{format:q6,type:x6,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let $0=null,P0=null,g0=null;if(E.depth)g0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,$0=E.stencil?R7:NJ,P0=E.stencil?p9:h9;let v0={colorFormat:Q.RGBA8,depthFormat:g0,scaleFactor:W};N=this.getBinding(),G=N.createProjectionLayer(v0),Z.updateRenderState({layers:[G]}),J.setPixelRatio(1),J.setSize(G.textureWidth,G.textureHeight,!1),I=new _6(G.textureWidth,G.textureHeight,{format:q6,type:x6,depthTexture:new BJ(G.textureWidth,G.textureHeight,P0,void 0,void 0,void 0,void 0,void 0,void 0,$0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(H),X=null,U=await Z.requestReferenceSpace(K),V0.setContext(Z),V0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return L.getDepthTexture()};function c(l){for(let U0=0;U0<l.removed.length;U0++){let $0=l.removed[U0],P0=A.indexOf($0);if(P0>=0)A[P0]=null,P[P0].disconnect($0)}for(let U0=0;U0<l.added.length;U0++){let $0=l.added[U0],P0=A.indexOf($0);if(P0===-1){for(let v0=0;v0<P.length;v0++)if(v0>=A.length){A.push($0),P0=v0;break}else if(A[v0]===null){A[v0]=$0,P0=v0;break}if(P0===-1)break}let g0=P[P0];if(g0)g0.connect($0)}}let r=new f,u=new f;function Q0(l,U0,$0){r.setFromMatrixPosition(U0.matrixWorld),u.setFromMatrixPosition($0.matrixWorld);let P0=r.distanceTo(u),g0=U0.projectionMatrix.elements,v0=$0.projectionMatrix.elements,V8=g0[14]/(g0[10]-1),i0=g0[14]/(g0[10]+1),N8=(g0[9]+1)/g0[5],T=(g0[9]-1)/g0[5],r0=(g0[8]-1)/g0[0],o0=(v0[8]+1)/v0[0],H8=V8*r0,w0=V8*o0,t0=P0/(-r0+o0),_0=t0*-r0;if(U0.matrixWorld.decompose(l.position,l.quaternion,l.scale),l.translateX(_0),l.translateZ(t0),l.matrixWorld.compose(l.position,l.quaternion,l.scale),l.matrixWorldInverse.copy(l.matrixWorld).invert(),g0[10]===-1)l.projectionMatrix.copy(U0.projectionMatrix),l.projectionMatrixInverse.copy(U0.projectionMatrixInverse);else{let l0=V8+t0,O8=i0+t0,w=H8-_0,O=w0+(P0-_0),h=N8*i0/O8*l0,s=T*i0/O8*l0;l.projectionMatrix.makePerspective(w,O,h,s,l0,O8),l.projectionMatrixInverse.copy(l.projectionMatrix).invert()}}function E0(l,U0){if(U0===null)l.matrixWorld.copy(l.matrix);else l.matrixWorld.multiplyMatrices(U0.matrixWorld,l.matrix);l.matrixWorldInverse.copy(l.matrixWorld).invert()}this.updateCamera=function(l){if(Z===null)return;let{near:U0,far:$0}=l;if(L.texture!==null){if(L.depthNear>0)U0=L.depthNear;if(L.depthFar>0)$0=L.depthFar}if(_.near=M.near=j.near=U0,_.far=M.far=j.far=$0,b!==_.near||x!==_.far)Z.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,x=_.far;_.layers.mask=l.layers.mask|6,j.layers.mask=_.layers.mask&3,M.layers.mask=_.layers.mask&5;let P0=l.parent,g0=_.cameras;E0(_,P0);for(let v0=0;v0<g0.length;v0++)E0(g0[v0],P0);if(g0.length===2)Q0(_,j,M);else _.projectionMatrix.copy(j.projectionMatrix);f0(l,_,P0)};function f0(l,U0,$0){if($0===null)l.matrix.copy(U0.matrixWorld);else l.matrix.copy($0.matrixWorld),l.matrix.invert(),l.matrix.multiply(U0.matrixWorld);if(l.matrix.decompose(l.position,l.quaternion,l.scale),l.updateMatrixWorld(!0),l.projectionMatrix.copy(U0.projectionMatrix),l.projectionMatrixInverse.copy(U0.projectionMatrixInverse),l.isPerspectiveCamera)l.fov=S9*2*Math.atan(1/l.projectionMatrix.elements[5]),l.zoom=1}this.getCamera=function(){return _},this.getFoveation=function(){if(G===null&&q===null)return;return H},this.setFoveation=function(l){if(H=l,G!==null)G.fixedFoveation=l;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=l},this.hasDepthSensing=function(){return L.texture!==null},this.getDepthSensingMesh=function(){return L.getMesh(_)},this.getCameraTexture=function(l){return D[l]};let u0=null;function K0(l,U0){if(Y=U0.getViewerPose(X||U),F=U0,Y!==null){let $0=Y.views;if(q!==null)J.setRenderTargetFramebuffer(I,q.framebuffer),J.setRenderTarget(I);let P0=!1;if($0.length!==_.cameras.length)_.cameras.length=0,P0=!0;for(let i0=0;i0<$0.length;i0++){let N8=$0[i0],T=null;if(q!==null)T=q.getViewport(N8);else{let o0=N.getViewSubImage(G,N8);if(T=o0.viewport,i0===0)J.setRenderTargetTextures(I,o0.colorTexture,o0.depthStencilTexture),J.setRenderTarget(I)}let r0=R[i0];if(r0===void 0)r0=new I8,r0.layers.enable(i0),r0.viewport=new Z8,R[i0]=r0;if(r0.matrix.fromArray(N8.transform.matrix),r0.matrix.decompose(r0.position,r0.quaternion,r0.scale),r0.projectionMatrix.fromArray(N8.projectionMatrix),r0.projectionMatrixInverse.copy(r0.projectionMatrix).invert(),r0.viewport.set(T.x,T.y,T.width,T.height),i0===0)_.matrix.copy(r0.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale);if(P0===!0)_.cameras.push(r0)}let g0=Z.enabledFeatures;if(g0&&g0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&k){N=$.getBinding();let i0=N.getDepthInformation($0[0]);if(i0&&i0.isValid&&i0.texture)L.init(i0,Z.renderState)}if(g0&&g0.includes("camera-access")&&k){J.state.unbindTexture(),N=$.getBinding();for(let i0=0;i0<$0.length;i0++){let N8=$0[i0].camera;if(N8){let T=D[N8];if(!T)T=new IJ,D[N8]=T;let r0=N.getCameraImage(N8);T.sourceTexture=r0}}}}for(let $0=0;$0<P.length;$0++){let P0=A[$0],g0=P[$0];if(P0!==null&&g0!==void 0)g0.update(P0,U0,X||U)}if(u0)u0(l,U0);if(U0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:U0});F=null}let V0=new y1;V0.setAnimationLoop(K0),this.setAnimationLoop=function(l){u0=l},this.dispose=function(){}}}var Y9=new K6,hN=new G8;function xN(J,Q){function $(D,E){if(D.matrixAutoUpdate===!0)D.updateMatrix();E.value.copy(D.matrix)}function Z(D,E){if(E.color.getRGB(D.fogColor.value,C$(J)),E.isFog)D.fogNear.value=E.near,D.fogFar.value=E.far;else if(E.isFogExp2)D.fogDensity.value=E.density}function W(D,E,B,I,P){if(E.isMeshBasicMaterial)U(D,E);else if(E.isMeshLambertMaterial)U(D,E);else if(E.isMeshToonMaterial)U(D,E),G(D,E);else if(E.isMeshPhongMaterial)U(D,E),N(D,E);else if(E.isMeshStandardMaterial){if(U(D,E),q(D,E),E.isMeshPhysicalMaterial)F(D,E,P)}else if(E.isMeshMatcapMaterial)U(D,E),k(D,E);else if(E.isMeshDepthMaterial)U(D,E);else if(E.isMeshDistanceMaterial)U(D,E),L(D,E);else if(E.isMeshNormalMaterial)U(D,E);else if(E.isLineBasicMaterial){if(K(D,E),E.isLineDashedMaterial)H(D,E)}else if(E.isPointsMaterial)X(D,E,B,I);else if(E.isSpriteMaterial)Y(D,E);else if(E.isShadowMaterial)D.color.value.copy(E.color),D.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function U(D,E){if(D.opacity.value=E.opacity,E.color)D.diffuse.value.copy(E.color);if(E.emissive)D.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)D.map.value=E.map,$(E.map,D.mapTransform);if(E.alphaMap)D.alphaMap.value=E.alphaMap,$(E.alphaMap,D.alphaMapTransform);if(E.bumpMap){if(D.bumpMap.value=E.bumpMap,$(E.bumpMap,D.bumpMapTransform),D.bumpScale.value=E.bumpScale,E.side===g8)D.bumpScale.value*=-1}if(E.normalMap){if(D.normalMap.value=E.normalMap,$(E.normalMap,D.normalMapTransform),D.normalScale.value.copy(E.normalScale),E.side===g8)D.normalScale.value.negate()}if(E.displacementMap)D.displacementMap.value=E.displacementMap,$(E.displacementMap,D.displacementMapTransform),D.displacementScale.value=E.displacementScale,D.displacementBias.value=E.displacementBias;if(E.emissiveMap)D.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,D.emissiveMapTransform);if(E.specularMap)D.specularMap.value=E.specularMap,$(E.specularMap,D.specularMapTransform);if(E.alphaTest>0)D.alphaTest.value=E.alphaTest;let B=Q.get(E),I=B.envMap,P=B.envMapRotation;if(I){if(D.envMap.value=I,Y9.copy(P),Y9.x*=-1,Y9.y*=-1,Y9.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1)Y9.y*=-1,Y9.z*=-1;D.envMapRotation.value.setFromMatrix4(hN.makeRotationFromEuler(Y9)),D.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,D.reflectivity.value=E.reflectivity,D.ior.value=E.ior,D.refractionRatio.value=E.refractionRatio}if(E.lightMap)D.lightMap.value=E.lightMap,D.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,D.lightMapTransform);if(E.aoMap)D.aoMap.value=E.aoMap,D.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,D.aoMapTransform)}function K(D,E){if(D.diffuse.value.copy(E.color),D.opacity.value=E.opacity,E.map)D.map.value=E.map,$(E.map,D.mapTransform)}function H(D,E){D.dashSize.value=E.dashSize,D.totalSize.value=E.dashSize+E.gapSize,D.scale.value=E.scale}function X(D,E,B,I){if(D.diffuse.value.copy(E.color),D.opacity.value=E.opacity,D.size.value=E.size*B,D.scale.value=I*0.5,E.map)D.map.value=E.map,$(E.map,D.uvTransform);if(E.alphaMap)D.alphaMap.value=E.alphaMap,$(E.alphaMap,D.alphaMapTransform);if(E.alphaTest>0)D.alphaTest.value=E.alphaTest}function Y(D,E){if(D.diffuse.value.copy(E.color),D.opacity.value=E.opacity,D.rotation.value=E.rotation,E.map)D.map.value=E.map,$(E.map,D.mapTransform);if(E.alphaMap)D.alphaMap.value=E.alphaMap,$(E.alphaMap,D.alphaMapTransform);if(E.alphaTest>0)D.alphaTest.value=E.alphaTest}function N(D,E){D.specular.value.copy(E.specular),D.shininess.value=Math.max(E.shininess,0.0001)}function G(D,E){if(E.gradientMap)D.gradientMap.value=E.gradientMap}function q(D,E){if(D.metalness.value=E.metalness,E.metalnessMap)D.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,D.metalnessMapTransform);if(D.roughness.value=E.roughness,E.roughnessMap)D.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,D.roughnessMapTransform);if(E.envMap)D.envMapIntensity.value=E.envMapIntensity}function F(D,E,B){if(D.ior.value=E.ior,E.sheen>0){if(D.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),D.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)D.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,D.sheenColorMapTransform);if(E.sheenRoughnessMap)D.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,D.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(D.clearcoat.value=E.clearcoat,D.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)D.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,D.clearcoatMapTransform);if(E.clearcoatRoughnessMap)D.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,D.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(D.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,D.clearcoatNormalMapTransform),D.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===g8)D.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)D.dispersion.value=E.dispersion;if(E.iridescence>0){if(D.iridescence.value=E.iridescence,D.iridescenceIOR.value=E.iridescenceIOR,D.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],D.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)D.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,D.iridescenceMapTransform);if(E.iridescenceThicknessMap)D.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,D.iridescenceThicknessMapTransform)}if(E.transmission>0){if(D.transmission.value=E.transmission,D.transmissionSamplerMap.value=B.texture,D.transmissionSamplerSize.value.set(B.width,B.height),E.transmissionMap)D.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,D.transmissionMapTransform);if(D.thickness.value=E.thickness,E.thicknessMap)D.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,D.thicknessMapTransform);D.attenuationDistance.value=E.attenuationDistance,D.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(D.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)D.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,D.anisotropyMapTransform)}if(D.specularIntensity.value=E.specularIntensity,D.specularColor.value.copy(E.specularColor),E.specularColorMap)D.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,D.specularColorMapTransform);if(E.specularIntensityMap)D.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,D.specularIntensityMapTransform)}function k(D,E){if(E.matcap)D.matcap.value=E.matcap}function L(D,E){let B=Q.get(E).light;D.referencePosition.value.setFromMatrixPosition(B.matrixWorld),D.nearDistance.value=B.shadow.camera.near,D.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function pN(J,Q,$,Z){let W={},U={},K=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(B,I){let P=I.program;Z.uniformBlockBinding(B,P)}function Y(B,I){let P=W[B.id];if(P===void 0)k(B),P=N(B),W[B.id]=P,B.addEventListener("dispose",D);let A=I.program;Z.updateUBOMapping(B,A);let C=Q.render.frame;if(U[B.id]!==C)q(B),U[B.id]=C}function N(B){let I=G();B.__bindingPointIndex=I;let P=J.createBuffer(),A=B.__size,C=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,A,C),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,I,P),P}function G(){for(let B=0;B<H;B++)if(K.indexOf(B)===-1)return K.push(B),B;return s0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(B){let I=W[B.id],P=B.uniforms,A=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,I);for(let C=0,z=P.length;C<z;C++){let j=Array.isArray(P[C])?P[C]:[P[C]];for(let M=0,R=j.length;M<R;M++){let _=j[M];if(F(_,C,M,A)===!0){let b=_.__offset,x=Array.isArray(_.value)?_.value:[_.value],m=0;for(let o=0;o<x.length;o++){let c=x[o],r=L(c);if(typeof c==="number"||typeof c==="boolean")_.__data[0]=c,J.bufferSubData(J.UNIFORM_BUFFER,b+m,_.__data);else if(c.isMatrix3)_.__data[0]=c.elements[0],_.__data[1]=c.elements[1],_.__data[2]=c.elements[2],_.__data[3]=0,_.__data[4]=c.elements[3],_.__data[5]=c.elements[4],_.__data[6]=c.elements[5],_.__data[7]=0,_.__data[8]=c.elements[6],_.__data[9]=c.elements[7],_.__data[10]=c.elements[8],_.__data[11]=0;else c.toArray(_.__data,m),m+=r.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,b,_.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(B,I,P,A){let C=B.value,z=I+"_"+P;if(A[z]===void 0){if(typeof C==="number"||typeof C==="boolean")A[z]=C;else A[z]=C.clone();return!0}else{let j=A[z];if(typeof C==="number"||typeof C==="boolean"){if(j!==C)return A[z]=C,!0}else if(j.equals(C)===!1)return j.copy(C),!0}return!1}function k(B){let I=B.uniforms,P=0,A=16;for(let z=0,j=I.length;z<j;z++){let M=Array.isArray(I[z])?I[z]:[I[z]];for(let R=0,_=M.length;R<_;R++){let b=M[R],x=Array.isArray(b.value)?b.value:[b.value];for(let m=0,o=x.length;m<o;m++){let c=x[m],r=L(c),u=P%A,Q0=u%r.boundary,E0=u+Q0;if(P+=Q0,E0!==0&&A-E0<r.storage)P+=A-E0;b.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=P,P+=r.storage}}}let C=P%A;if(C>0)P+=A-C;return B.__size=P,B.__cache={},this}function L(B){let I={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")I.boundary=4,I.storage=4;else if(B.isVector2)I.boundary=8,I.storage=8;else if(B.isVector3||B.isColor)I.boundary=16,I.storage=12;else if(B.isVector4)I.boundary=16,I.storage=16;else if(B.isMatrix3)I.boundary=48,I.storage=48;else if(B.isMatrix4)I.boundary=64,I.storage=64;else if(B.isTexture)h0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else h0("WebGLRenderer: Unsupported uniform value type.",B);return I}function D(B){let I=B.target;I.removeEventListener("dispose",D);let P=K.indexOf(I.__bindingPointIndex);K.splice(P,1),J.deleteBuffer(W[I.id]),delete W[I.id],delete U[I.id]}function E(){for(let B in W)J.deleteBuffer(W[B]);K=[],W={},U={}}return{bind:X,update:Y,dispose:E}}var gN=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8000,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),A6=null;function mN(){if(A6===null)A6=new A$(gN,32,32,hQ,x9),A6.minFilter=P6,A6.magFilter=P6,A6.wrapS=XJ,A6.wrapT=XJ,A6.generateMipmaps=!1,A6.needsUpdate=!0;return A6}class XZ{constructor(J={}){let{canvas:Q=W1(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:U=!1,antialias:K=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:X=!1,powerPreference:Y="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:G=!1}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=U;let F=new Set([pQ,xQ,bQ]),k=new Set([x6,h9,k7,p9,yQ,vQ]),L=new Uint32Array(4),D=new Int32Array(4),E=null,B=null,I=[],P=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=C6,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1;this._outputColorSpace=aW;let z=0,j=0,M=null,R=-1,_=null,b=new Z8,x=new Z8,m=null,o=new x0(0),c=0,r=Q.width,u=Q.height,Q0=1,E0=null,f0=null,u0=new Z8(0,0,r,u),K0=new Z8(0,0,r,u),V0=!1,l=new B7,U0=!1,$0=!1,P0=new G8,g0=new f,v0=new Z8,V8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},i0=!1;function N8(){return M===null?Q0:1}let T=$;function r0(V,y){return Q.getContext(V,y)}try{let V={alpha:!0,depth:Z,stencil:W,antialias:K,premultipliedAlpha:H,preserveDrawingBuffer:X,powerPreference:Y,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${ZW}`);if(Q.addEventListener("webglcontextlost",O0,!1),Q.addEventListener("webglcontextrestored",J0,!1),Q.addEventListener("webglcontextcreationerror",i,!1),T===null){if(T=r0("webgl2",V),T===null)if(r0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(V){throw V("WebGLRenderer: "+V.message),V}let o0,H8,w0,t0,_0,l0,O8,w,O,h,s,a,n,z0,Y0,L0,B0,t,G0,y0,S0,H0,p0,S;function N0(){if(o0=new Z5(T),o0.init(),H0=new yN(T,o0),H8=new iY(T,o0,J,H0),w0=new jN(T,o0),H8.reversedDepthBuffer&&G)w0.buffers.depth.setReversed(!0);t0=new K5(T),_0=new MN,l0=new fN(T,o0,w0,_0,H8,H0,t0),O8=new aY(A),w=new $5(A),O=new NH(T),p0=new nY(T,O),h=new W5(T,O,t0,p0),s=new X5(T,h,O,t0),G0=new H5(T,H8,l0),L0=new oY(_0),a=new RN(A,O8,w,o0,H8,p0,L0),n=new xN(A,_0),z0=new LN,Y0=new PN(o0),t=new cY(A,O8,w,w0,s,q,H),B0=new TN(A,s,H8),S=new pN(T,t0,H8,w0),y0=new sY(T,o0,t0),S0=new U5(T,o0,t0),t0.programs=a.programs,A.capabilities=H8,A.extensions=o0,A.properties=_0,A.renderLists=z0,A.shadowMap=B0,A.state=w0,A.info=t0}N0();let e=new c1(A,T);this.xr=e,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let V=o0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=o0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return Q0},this.setPixelRatio=function(V){if(V===void 0)return;Q0=V,this.setSize(r,u,!1)},this.getSize=function(V){return V.set(r,u)},this.setSize=function(V,y,p=!0){if(e.isPresenting){h0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(r=V,u=y,Q.width=Math.floor(V*Q0),Q.height=Math.floor(y*Q0),p===!0)Q.style.width=V+"px",Q.style.height=y+"px";this.setViewport(0,0,V,y)},this.getDrawingBufferSize=function(V){return V.set(r*Q0,u*Q0).floor()},this.setDrawingBufferSize=function(V,y,p){r=V,u=y,Q0=p,Q.width=Math.floor(V*p),Q.height=Math.floor(y*p),this.setViewport(0,0,V,y)},this.getCurrentViewport=function(V){return V.copy(b)},this.getViewport=function(V){return V.copy(u0)},this.setViewport=function(V,y,p,g){if(V.isVector4)u0.set(V.x,V.y,V.z,V.w);else u0.set(V,y,p,g);w0.viewport(b.copy(u0).multiplyScalar(Q0).round())},this.getScissor=function(V){return V.copy(K0)},this.setScissor=function(V,y,p,g){if(V.isVector4)K0.set(V.x,V.y,V.z,V.w);else K0.set(V,y,p,g);w0.scissor(x.copy(K0).multiplyScalar(Q0).round())},this.getScissorTest=function(){return V0},this.setScissorTest=function(V){w0.setScissorTest(V0=V)},this.setOpaqueSort=function(V){E0=V},this.setTransparentSort=function(V){f0=V},this.getClearColor=function(V){return V.copy(t.getClearColor())},this.setClearColor=function(){t.setClearColor(...arguments)},this.getClearAlpha=function(){return t.getClearAlpha()},this.setClearAlpha=function(){t.setClearAlpha(...arguments)},this.clear=function(V=!0,y=!0,p=!0){let g=0;if(V){let v=!1;if(M!==null){let W0=M.texture.format;v=F.has(W0)}if(v){let W0=M.texture.type,q0=k.has(W0),M0=t.getClearColor(),D0=t.getClearAlpha(),j0=M0.r,b0=M0.g,C0=M0.b;if(q0)L[0]=j0,L[1]=b0,L[2]=C0,L[3]=D0,T.clearBufferuiv(T.COLOR,0,L);else D[0]=j0,D[1]=b0,D[2]=C0,D[3]=D0,T.clearBufferiv(T.COLOR,0,D)}else g|=T.COLOR_BUFFER_BIT}if(y)g|=T.DEPTH_BUFFER_BIT;if(p)g|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",O0,!1),Q.removeEventListener("webglcontextrestored",J0,!1),Q.removeEventListener("webglcontextcreationerror",i,!1),t.dispose(),z0.dispose(),Y0.dispose(),_0.dispose(),O8.dispose(),w.dispose(),s.dispose(),p0.dispose(),S.dispose(),a.dispose(),e.dispose(),e.removeEventListener("sessionstart",_Z),e.removeEventListener("sessionend",AZ),i6.stop()};function O0(V){V.preventDefault(),M$("WebGLRenderer: Context Lost."),C=!0}function J0(){M$("WebGLRenderer: Context Restored."),C=!1;let V=t0.autoReset,y=B0.enabled,p=B0.autoUpdate,g=B0.needsUpdate,v=B0.type;N0(),t0.autoReset=V,B0.enabled=y,B0.autoUpdate=p,B0.needsUpdate=g,B0.type=v}function i(V){s0("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function R0(V){let y=V.target;y.removeEventListener("dispose",R0),m0(y)}function m0(V){Y8(V),_0.remove(V)}function Y8(V){let y=_0.get(V).programs;if(y!==void 0){if(y.forEach(function(p){a.releaseProgram(p)}),V.isShaderMaterial)a.releaseShaderCache(V)}}this.renderBufferDirect=function(V,y,p,g,v,W0){if(y===null)y=V8;let q0=v.isMesh&&v.matrixWorld.determinant()<0,M0=ZK(V,y,p,g,v);w0.setMaterial(g,q0);let D0=p.index,j0=1;if(g.wireframe===!0){if(D0=h.getWireframeAttribute(p),D0===void 0)return;j0=2}let b0=p.drawRange,C0=p.attributes.position,a0=b0.start*j0,W8=(b0.start+b0.count)*j0;if(W0!==null)a0=Math.max(a0,W0.start*j0),W8=Math.min(W8,(W0.start+W0.count)*j0);if(D0!==null)a0=Math.max(a0,0),W8=Math.min(W8,D0.count);else if(C0!==void 0&&C0!==null)a0=Math.max(a0,0),W8=Math.min(W8,C0.count);let D8=W8-a0;if(D8<0||D8===1/0)return;p0.setup(v,g,M0,p,D0);let F8,K8=y0;if(D0!==null)F8=O.get(D0),K8=S0,K8.setIndex(F8);if(v.isMesh)if(g.wireframe===!0)w0.setLineWidth(g.wireframeLinewidth*N8()),K8.setMode(T.LINES);else K8.setMode(T.TRIANGLES);else if(v.isLine){let A0=g.linewidth;if(A0===void 0)A0=1;if(w0.setLineWidth(A0*N8()),v.isLineSegments)K8.setMode(T.LINES);else if(v.isLineLoop)K8.setMode(T.LINE_LOOP);else K8.setMode(T.LINE_STRIP)}else if(v.isPoints)K8.setMode(T.POINTS);else if(v.isSprite)K8.setMode(T.TRIANGLES);if(v.isBatchedMesh)if(v._multiDrawInstances!==null)T9("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),K8.renderMultiDrawInstances(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount,v._multiDrawInstances);else if(!o0.get("WEBGL_multi_draw")){let{_multiDrawStarts:A0,_multiDrawCounts:q8,_multiDrawCount:J8}=v,b8=D0?O.get(D0).bytesPerElement:1,E9=_0.get(g).currentProgram.getUniforms();for(let h8=0;h8<J8;h8++)E9.setValue(T,"_gl_DrawID",h8),K8.render(A0[h8]/b8,q8[h8])}else K8.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else if(v.isInstancedMesh)K8.renderInstances(a0,D8,v.count);else if(p.isInstancedBufferGeometry){let A0=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,q8=Math.min(p.instanceCount,A0);K8.renderInstances(a0,D8,q8)}else K8.render(a0,D8)};function Q8(V,y,p){if(V.transparent===!0&&V.side===G6&&V.forceSinglePass===!1)V.side=g8,V.needsUpdate=!0,f7(V,y,p),V.side=j9,V.needsUpdate=!0,f7(V,y,p),V.side=G6;else f7(V,y,p)}this.compile=function(V,y,p=null){if(p===null)p=V;if(B=Y0.get(p),B.init(y),P.push(B),p.traverseVisible(function(v){if(v.isLight&&v.layers.test(y.layers)){if(B.pushLight(v),v.castShadow)B.pushShadow(v)}}),V!==p)V.traverseVisible(function(v){if(v.isLight&&v.layers.test(y.layers)){if(B.pushLight(v),v.castShadow)B.pushShadow(v)}});B.setupLights();let g=new Set;return V.traverse(function(v){if(!(v.isMesh||v.isPoints||v.isLine||v.isSprite))return;let W0=v.material;if(W0)if(Array.isArray(W0))for(let q0=0;q0<W0.length;q0++){let M0=W0[q0];Q8(M0,p,v),g.add(M0)}else Q8(W0,p,v),g.add(W0)}),B=P.pop(),g},this.compileAsync=function(V,y,p=null){let g=this.compile(V,y,p);return new Promise((v)=>{function W0(){if(g.forEach(function(q0){if(_0.get(q0).currentProgram.isReady())g.delete(q0)}),g.size===0){v(V);return}setTimeout(W0,10)}if(o0.get("KHR_parallel_shader_compile")!==null)W0();else setTimeout(W0,10)})};let $6=null;function k6(V){if($6)$6(V)}function _Z(){i6.stop()}function AZ(){i6.start()}let i6=new y1;if(i6.setAnimationLoop(k6),typeof self<"u")i6.setContext(self);this.setAnimationLoop=function(V){$6=V,e.setAnimationLoop(V),V===null?i6.stop():i6.start()},e.addEventListener("sessionstart",_Z),e.addEventListener("sessionend",AZ),this.render=function(V,y){if(y!==void 0&&y.isCamera!==!0){s0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(y.parent===null&&y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(e.enabled===!0&&e.isPresenting===!0){if(e.cameraAutoUpdate===!0)e.updateCamera(y);y=e.getCamera()}if(V.isScene===!0)V.onBeforeRender(A,V,y,M);if(B=Y0.get(V,P.length),B.init(y),P.push(B),P0.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),l.setFromProjectionMatrix(P0,k$,y.reversedDepth),$0=this.localClippingEnabled,U0=L0.init(this.clippingPlanes,$0),E=z0.get(V,I.length),E.init(),I.push(E),e.enabled===!0&&e.isPresenting===!0){let W0=A.xr.getDepthSensingMesh();if(W0!==null)JQ(W0,y,-1/0,A.sortObjects)}if(JQ(V,y,0,A.sortObjects),E.finish(),A.sortObjects===!0)E.sort(E0,f0);if(i0=e.enabled===!1||e.isPresenting===!1||e.hasDepthSensing()===!1,i0)t.addToRenderList(E,V);if(this.info.render.frame++,U0===!0)L0.beginShadows();let p=B.state.shadowsArray;if(B0.render(p,V,y),U0===!0)L0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:v}=E;if(B.setupLights(),y.isArrayCamera){let W0=y.cameras;if(v.length>0)for(let q0=0,M0=W0.length;q0<M0;q0++){let D0=W0[q0];SZ(g,v,V,D0)}if(i0)t.render(V);for(let q0=0,M0=W0.length;q0<M0;q0++){let D0=W0[q0];TZ(E,V,D0,D0.viewport)}}else{if(v.length>0)SZ(g,v,V,y);if(i0)t.render(V);TZ(E,V,y)}if(M!==null&&j===0)l0.updateMultisampleRenderTarget(M),l0.updateRenderTargetMipmap(M);if(V.isScene===!0)V.onAfterRender(A,V,y);if(p0.resetDefaultState(),R=-1,_=null,P.pop(),P.length>0){if(B=P[P.length-1],U0===!0)L0.setGlobalState(A.clippingPlanes,B.state.camera)}else B=null;if(I.pop(),I.length>0)E=I[I.length-1];else E=null};function JQ(V,y,p,g){if(V.visible===!1)return;if(V.layers.test(y.layers)){if(V.isGroup)p=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(y)}else if(V.isLight){if(B.pushLight(V),V.castShadow)B.pushShadow(V)}else if(V.isSprite){if(!V.frustumCulled||l.intersectsSprite(V)){if(g)v0.setFromMatrixPosition(V.matrixWorld).applyMatrix4(P0);let q0=s.update(V),M0=V.material;if(M0.visible)E.push(V,q0,M0,p,v0.z,null)}}else if(V.isMesh||V.isLine||V.isPoints){if(!V.frustumCulled||l.intersectsObject(V)){let q0=s.update(V),M0=V.material;if(g){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();v0.copy(V.boundingSphere.center)}else{if(q0.boundingSphere===null)q0.computeBoundingSphere();v0.copy(q0.boundingSphere.center)}v0.applyMatrix4(V.matrixWorld).applyMatrix4(P0)}if(Array.isArray(M0)){let D0=q0.groups;for(let j0=0,b0=D0.length;j0<b0;j0++){let C0=D0[j0],a0=M0[C0.materialIndex];if(a0&&a0.visible)E.push(V,q0,a0,p,v0.z,C0)}}else if(M0.visible)E.push(V,q0,M0,p,v0.z,null)}}}let W0=V.children;for(let q0=0,M0=W0.length;q0<M0;q0++)JQ(W0[q0],y,p,g)}function TZ(V,y,p,g){let{opaque:v,transmissive:W0,transparent:q0}=V;if(B.setupLightsView(p),U0===!0)L0.setGlobalState(A.clippingPlanes,p);if(g)w0.viewport(b.copy(g));if(v.length>0)j7(v,y,p);if(W0.length>0)j7(W0,y,p);if(q0.length>0)j7(q0,y,p);w0.buffers.depth.setTest(!0),w0.buffers.depth.setMask(!0),w0.buffers.color.setMask(!0),w0.setPolygonOffset(!1)}function SZ(V,y,p,g){if((p.isScene===!0?p.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[g.id]===void 0)B.state.transmissionRenderTarget[g.id]=new _6(1,1,{generateMipmaps:!0,type:o0.has("EXT_color_buffer_half_float")||o0.has("EXT_color_buffer_float")?x9:x6,minFilter:b9,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:e0.workingColorSpace});let W0=B.state.transmissionRenderTarget[g.id],q0=g.viewport||b;W0.setSize(q0.z*A.transmissionResolutionScale,q0.w*A.transmissionResolutionScale);let M0=A.getRenderTarget(),D0=A.getActiveCubeFace(),j0=A.getActiveMipmapLevel();if(A.setRenderTarget(W0),A.getClearColor(o),c=A.getClearAlpha(),c<1)A.setClearColor(16777215,0.5);if(A.clear(),i0)t.render(p);let b0=A.toneMapping;A.toneMapping=C6;let C0=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(B.setupLightsView(g),U0===!0)L0.setGlobalState(A.clippingPlanes,g);if(j7(V,p,g),l0.updateMultisampleRenderTarget(W0),l0.updateRenderTargetMipmap(W0),o0.has("WEBGL_multisampled_render_to_texture")===!1){let a0=!1;for(let W8=0,D8=y.length;W8<D8;W8++){let F8=y[W8],{object:K8,geometry:A0,material:q8,group:J8}=F8;if(q8.side===G6&&K8.layers.test(g.layers)){let b8=q8.side;q8.side=g8,q8.needsUpdate=!0,jZ(K8,p,g,A0,q8,J8),q8.side=b8,q8.needsUpdate=!0,a0=!0}}if(a0===!0)l0.updateMultisampleRenderTarget(W0),l0.updateRenderTargetMipmap(W0)}if(A.setRenderTarget(M0,D0,j0),A.setClearColor(o,c),C0!==void 0)g.viewport=C0;A.toneMapping=b0}function j7(V,y,p){let g=y.isScene===!0?y.overrideMaterial:null;for(let v=0,W0=V.length;v<W0;v++){let q0=V[v],{object:M0,geometry:D0,group:j0}=q0,b0=q0.material;if(b0.allowOverride===!0&&g!==null)b0=g;if(M0.layers.test(p.layers))jZ(M0,y,p,D0,b0,j0)}}function jZ(V,y,p,g,v,W0){if(V.onBeforeRender(A,y,p,g,v,W0),V.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),v.onBeforeRender(A,y,p,g,V,W0),v.transparent===!0&&v.side===G6&&v.forceSinglePass===!1)v.side=g8,v.needsUpdate=!0,A.renderBufferDirect(p,y,g,v,V,W0),v.side=j9,v.needsUpdate=!0,A.renderBufferDirect(p,y,g,v,V,W0),v.side=G6;else A.renderBufferDirect(p,y,g,v,V,W0);V.onAfterRender(A,y,p,g,v,W0)}function f7(V,y,p){if(y.isScene!==!0)y=V8;let g=_0.get(V),v=B.state.lights,W0=B.state.shadowsArray,q0=v.state.version,M0=a.getParameters(V,v.state,W0,y,p),D0=a.getProgramCacheKey(M0),j0=g.programs;if(g.environment=V.isMeshStandardMaterial?y.environment:null,g.fog=y.fog,g.envMap=(V.isMeshStandardMaterial?w:O8).get(V.envMap||g.environment),g.envMapRotation=g.environment!==null&&V.envMap===null?y.environmentRotation:V.envMapRotation,j0===void 0)V.addEventListener("dispose",R0),j0=new Map,g.programs=j0;let b0=j0.get(D0);if(b0!==void 0){if(g.currentProgram===b0&&g.lightsStateVersion===q0)return yZ(V,M0),b0}else M0.uniforms=a.getUniforms(V),V.onBeforeCompile(M0,A),b0=a.acquireProgram(M0,D0),j0.set(D0,b0),g.uniforms=M0.uniforms;let C0=g.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)C0.clippingPlanes=L0.uniform;if(yZ(V,M0),g.needsLights=UK(V),g.lightsStateVersion=q0,g.needsLights)C0.ambientLightColor.value=v.state.ambient,C0.lightProbe.value=v.state.probe,C0.directionalLights.value=v.state.directional,C0.directionalLightShadows.value=v.state.directionalShadow,C0.spotLights.value=v.state.spot,C0.spotLightShadows.value=v.state.spotShadow,C0.rectAreaLights.value=v.state.rectArea,C0.ltc_1.value=v.state.rectAreaLTC1,C0.ltc_2.value=v.state.rectAreaLTC2,C0.pointLights.value=v.state.point,C0.pointLightShadows.value=v.state.pointShadow,C0.hemisphereLights.value=v.state.hemi,C0.directionalShadowMap.value=v.state.directionalShadowMap,C0.directionalShadowMatrix.value=v.state.directionalShadowMatrix,C0.spotShadowMap.value=v.state.spotShadowMap,C0.spotLightMatrix.value=v.state.spotLightMatrix,C0.spotLightMap.value=v.state.spotLightMap,C0.pointShadowMap.value=v.state.pointShadowMap,C0.pointShadowMatrix.value=v.state.pointShadowMatrix;return g.currentProgram=b0,g.uniformsList=null,b0}function fZ(V){if(V.uniformsList===null){let y=V.currentProgram.getUniforms();V.uniformsList=P7.seqWithValue(y.seq,V.uniforms)}return V.uniformsList}function yZ(V,y){let p=_0.get(V);p.outputColorSpace=y.outputColorSpace,p.batching=y.batching,p.batchingColor=y.batchingColor,p.instancing=y.instancing,p.instancingColor=y.instancingColor,p.instancingMorph=y.instancingMorph,p.skinning=y.skinning,p.morphTargets=y.morphTargets,p.morphNormals=y.morphNormals,p.morphColors=y.morphColors,p.morphTargetsCount=y.morphTargetsCount,p.numClippingPlanes=y.numClippingPlanes,p.numIntersection=y.numClipIntersection,p.vertexAlphas=y.vertexAlphas,p.vertexTangents=y.vertexTangents,p.toneMapping=y.toneMapping}function ZK(V,y,p,g,v){if(y.isScene!==!0)y=V8;l0.resetTextureUnits();let W0=y.fog,q0=g.isMeshStandardMaterial?y.environment:null,M0=M===null?A.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:M7,D0=(g.isMeshStandardMaterial?w:O8).get(g.envMap||q0),j0=g.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,b0=!!p.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),C0=!!p.morphAttributes.position,a0=!!p.morphAttributes.normal,W8=!!p.morphAttributes.color,D8=C6;if(g.toneMapped){if(M===null||M.isXRRenderTarget===!0)D8=A.toneMapping}let F8=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,K8=F8!==void 0?F8.length:0,A0=_0.get(g),q8=B.state.lights;if(U0===!0){if($0===!0||V!==_){let T8=V===_&&g.id===R;L0.setState(g,V,T8)}}let J8=!1;if(g.version===A0.__version){if(A0.needsLights&&A0.lightsStateVersion!==q8.state.version)J8=!0;else if(A0.outputColorSpace!==M0)J8=!0;else if(v.isBatchedMesh&&A0.batching===!1)J8=!0;else if(!v.isBatchedMesh&&A0.batching===!0)J8=!0;else if(v.isBatchedMesh&&A0.batchingColor===!0&&v.colorTexture===null)J8=!0;else if(v.isBatchedMesh&&A0.batchingColor===!1&&v.colorTexture!==null)J8=!0;else if(v.isInstancedMesh&&A0.instancing===!1)J8=!0;else if(!v.isInstancedMesh&&A0.instancing===!0)J8=!0;else if(v.isSkinnedMesh&&A0.skinning===!1)J8=!0;else if(!v.isSkinnedMesh&&A0.skinning===!0)J8=!0;else if(v.isInstancedMesh&&A0.instancingColor===!0&&v.instanceColor===null)J8=!0;else if(v.isInstancedMesh&&A0.instancingColor===!1&&v.instanceColor!==null)J8=!0;else if(v.isInstancedMesh&&A0.instancingMorph===!0&&v.morphTexture===null)J8=!0;else if(v.isInstancedMesh&&A0.instancingMorph===!1&&v.morphTexture!==null)J8=!0;else if(A0.envMap!==D0)J8=!0;else if(g.fog===!0&&A0.fog!==W0)J8=!0;else if(A0.numClippingPlanes!==void 0&&(A0.numClippingPlanes!==L0.numPlanes||A0.numIntersection!==L0.numIntersection))J8=!0;else if(A0.vertexAlphas!==j0)J8=!0;else if(A0.vertexTangents!==b0)J8=!0;else if(A0.morphTargets!==C0)J8=!0;else if(A0.morphNormals!==a0)J8=!0;else if(A0.morphColors!==W8)J8=!0;else if(A0.toneMapping!==D8)J8=!0;else if(A0.morphTargetsCount!==K8)J8=!0}else J8=!0,A0.__version=g.version;let b8=A0.currentProgram;if(J8===!0)b8=f7(g,y,v);let E9=!1,h8=!1,$7=!1,E8=b8.getUniforms(),y8=A0.uniforms;if(w0.useProgram(b8.program))E9=!0,h8=!0,$7=!0;if(g.id!==R)R=g.id,h8=!0;if(E9||_!==V){if(w0.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();E8.setValue(T,"projectionMatrix",V.projectionMatrix),E8.setValue(T,"viewMatrix",V.matrixWorldInverse);let v8=E8.map.cameraPosition;if(v8!==void 0)v8.setValue(T,g0.setFromMatrixPosition(V.matrixWorld));if(H8.logarithmicDepthBuffer)E8.setValue(T,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)E8.setValue(T,"isOrthographic",V.isOrthographicCamera===!0);if(_!==V)_=V,h8=!0,$7=!0}if(v.isSkinnedMesh){E8.setOptional(T,v,"bindMatrix"),E8.setOptional(T,v,"bindMatrixInverse");let T8=v.skeleton;if(T8){if(T8.boneTexture===null)T8.computeBoneTexture();E8.setValue(T,"boneTexture",T8.boneTexture,l0)}}if(v.isBatchedMesh){if(E8.setOptional(T,v,"batchingTexture"),E8.setValue(T,"batchingTexture",v._matricesTexture,l0),E8.setOptional(T,v,"batchingIdTexture"),E8.setValue(T,"batchingIdTexture",v._indirectTexture,l0),E8.setOptional(T,v,"batchingColorTexture"),v._colorsTexture!==null)E8.setValue(T,"batchingColorTexture",v._colorsTexture,l0)}let u8=p.morphAttributes;if(u8.position!==void 0||u8.normal!==void 0||u8.color!==void 0)G0.update(v,p,b8);if(h8||A0.receiveShadow!==v.receiveShadow)A0.receiveShadow=v.receiveShadow,E8.setValue(T,"receiveShadow",v.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)y8.envMap.value=D0,y8.flipEnvMap.value=D0.isCubeTexture&&D0.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&y.environment!==null)y8.envMapIntensity.value=y.environmentIntensity;if(y8.dfgLUT!==void 0)y8.dfgLUT.value=mN();if(h8){if(E8.setValue(T,"toneMappingExposure",A.toneMappingExposure),A0.needsLights)WK(y8,$7);if(W0&&g.fog===!0)n.refreshFogUniforms(y8,W0);n.refreshMaterialUniforms(y8,g,Q0,u,B.state.transmissionRenderTarget[V.id]),P7.upload(T,fZ(A0),y8,l0)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)P7.upload(T,fZ(A0),y8,l0),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)E8.setValue(T,"center",v.center);if(E8.setValue(T,"modelViewMatrix",v.modelViewMatrix),E8.setValue(T,"normalMatrix",v.normalMatrix),E8.setValue(T,"modelMatrix",v.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let T8=g.uniformsGroups;for(let v8=0,QQ=T8.length;v8<QQ;v8++){let o6=T8[v8];S.update(o6,b8),S.bind(o6,b8)}}return b8}function WK(V,y){V.ambientLightColor.needsUpdate=y,V.lightProbe.needsUpdate=y,V.directionalLights.needsUpdate=y,V.directionalLightShadows.needsUpdate=y,V.pointLights.needsUpdate=y,V.pointLightShadows.needsUpdate=y,V.spotLights.needsUpdate=y,V.spotLightShadows.needsUpdate=y,V.rectAreaLights.needsUpdate=y,V.hemisphereLights.needsUpdate=y}function UK(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(V,y,p){let g=_0.get(V);if(g.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,g.__autoAllocateDepthBuffer===!1)g.__useRenderToTexture=!1;_0.get(V.texture).__webglTexture=y,_0.get(V.depthTexture).__webglTexture=g.__autoAllocateDepthBuffer?void 0:p,g.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,y){let p=_0.get(V);p.__webglFramebuffer=y,p.__useDefaultFramebuffer=y===void 0};let KK=T.createFramebuffer();this.setRenderTarget=function(V,y=0,p=0){M=V,z=y,j=p;let g=!0,v=null,W0=!1,q0=!1;if(V){let D0=_0.get(V);if(D0.__useDefaultFramebuffer!==void 0)w0.bindFramebuffer(T.FRAMEBUFFER,null),g=!1;else if(D0.__webglFramebuffer===void 0)l0.setupRenderTarget(V);else if(D0.__hasExternalTextures)l0.rebindTextures(V,_0.get(V.texture).__webglTexture,_0.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let C0=V.depthTexture;if(D0.__boundDepthTexture!==C0){if(C0!==null&&_0.has(C0)&&(V.width!==C0.image.width||V.height!==C0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");l0.setupDepthRenderbuffer(V)}}let j0=V.texture;if(j0.isData3DTexture||j0.isDataArrayTexture||j0.isCompressedArrayTexture)q0=!0;let b0=_0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(b0[y]))v=b0[y][p];else v=b0[y];W0=!0}else if(V.samples>0&&l0.useMultisampledRTT(V)===!1)v=_0.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(b0))v=b0[p];else v=b0;b.copy(V.viewport),x.copy(V.scissor),m=V.scissorTest}else b.copy(u0).multiplyScalar(Q0).floor(),x.copy(K0).multiplyScalar(Q0).floor(),m=V0;if(p!==0)v=KK;if(w0.bindFramebuffer(T.FRAMEBUFFER,v)&&g)w0.drawBuffers(V,v);if(w0.viewport(b),w0.scissor(x),w0.setScissorTest(m),W0){let D0=_0.get(V.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+y,D0.__webglTexture,p)}else if(q0){let D0=y;for(let j0=0;j0<V.textures.length;j0++){let b0=_0.get(V.textures[j0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+j0,b0.__webglTexture,p,D0)}}else if(V!==null&&p!==0){let D0=_0.get(V.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,D0.__webglTexture,p)}R=-1},this.readRenderTargetPixels=function(V,y,p,g,v,W0,q0,M0=0){if(!(V&&V.isWebGLRenderTarget)){s0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D0=_0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&q0!==void 0)D0=D0[q0];if(D0){w0.bindFramebuffer(T.FRAMEBUFFER,D0);try{let j0=V.textures[M0],b0=j0.format,C0=j0.type;if(!H8.textureFormatReadable(b0)){s0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H8.textureTypeReadable(C0)){s0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(y>=0&&y<=V.width-g&&(p>=0&&p<=V.height-v)){if(V.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+M0);T.readPixels(y,p,g,v,H0.convert(b0),H0.convert(C0),W0)}}finally{let j0=M!==null?_0.get(M).__webglFramebuffer:null;w0.bindFramebuffer(T.FRAMEBUFFER,j0)}}},this.readRenderTargetPixelsAsync=async function(V,y,p,g,v,W0,q0,M0=0){if(!(V&&V.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let D0=_0.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&q0!==void 0)D0=D0[q0];if(D0)if(y>=0&&y<=V.width-g&&(p>=0&&p<=V.height-v)){w0.bindFramebuffer(T.FRAMEBUFFER,D0);let j0=V.textures[M0],b0=j0.format,C0=j0.type;if(!H8.textureFormatReadable(b0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H8.textureTypeReadable(C0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let a0=T.createBuffer();if(T.bindBuffer(T.PIXEL_PACK_BUFFER,a0),T.bufferData(T.PIXEL_PACK_BUFFER,W0.byteLength,T.STREAM_READ),V.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+M0);T.readPixels(y,p,g,v,H0.convert(b0),H0.convert(C0),0);let W8=M!==null?_0.get(M).__webglFramebuffer:null;w0.bindFramebuffer(T.FRAMEBUFFER,W8);let D8=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await U1(T,D8,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,a0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,W0),T.deleteBuffer(a0),T.deleteSync(D8),W0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,y=null,p=0){let g=Math.pow(2,-p),v=Math.floor(V.image.width*g),W0=Math.floor(V.image.height*g),q0=y!==null?y.x:0,M0=y!==null?y.y:0;l0.setTexture2D(V,0),T.copyTexSubImage2D(T.TEXTURE_2D,p,0,0,q0,M0,v,W0),w0.unbindTexture()};let HK=T.createFramebuffer(),XK=T.createFramebuffer();if(this.copyTextureToTexture=function(V,y,p=null,g=null,v=0,W0=null){if(W0===null)if(v!==0)T9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),W0=v,v=0;else W0=0;let q0,M0,D0,j0,b0,C0,a0,W8,D8,F8=V.isCompressedTexture?V.mipmaps[W0]:V.image;if(p!==null)q0=p.max.x-p.min.x,M0=p.max.y-p.min.y,D0=p.isBox3?p.max.z-p.min.z:1,j0=p.min.x,b0=p.min.y,C0=p.isBox3?p.min.z:0;else{let u8=Math.pow(2,-v);if(q0=Math.floor(F8.width*u8),M0=Math.floor(F8.height*u8),V.isDataArrayTexture)D0=F8.depth;else if(V.isData3DTexture)D0=Math.floor(F8.depth*u8);else D0=1;j0=0,b0=0,C0=0}if(g!==null)a0=g.x,W8=g.y,D8=g.z;else a0=0,W8=0,D8=0;let K8=H0.convert(y.format),A0=H0.convert(y.type),q8;if(y.isData3DTexture)l0.setTexture3D(y,0),q8=T.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)l0.setTexture2DArray(y,0),q8=T.TEXTURE_2D_ARRAY;else l0.setTexture2D(y,0),q8=T.TEXTURE_2D;T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,y.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,y.unpackAlignment);let J8=T.getParameter(T.UNPACK_ROW_LENGTH),b8=T.getParameter(T.UNPACK_IMAGE_HEIGHT),E9=T.getParameter(T.UNPACK_SKIP_PIXELS),h8=T.getParameter(T.UNPACK_SKIP_ROWS),$7=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,F8.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,F8.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,j0),T.pixelStorei(T.UNPACK_SKIP_ROWS,b0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,C0);let E8=V.isDataArrayTexture||V.isData3DTexture,y8=y.isDataArrayTexture||y.isData3DTexture;if(V.isDepthTexture){let u8=_0.get(V),T8=_0.get(y),v8=_0.get(u8.__renderTarget),QQ=_0.get(T8.__renderTarget);w0.bindFramebuffer(T.READ_FRAMEBUFFER,v8.__webglFramebuffer),w0.bindFramebuffer(T.DRAW_FRAMEBUFFER,QQ.__webglFramebuffer);for(let o6=0;o6<D0;o6++){if(E8)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_0.get(V).__webglTexture,v,C0+o6),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_0.get(y).__webglTexture,W0,D8+o6);T.blitFramebuffer(j0,b0,q0,M0,a0,W8,q0,M0,T.DEPTH_BUFFER_BIT,T.NEAREST)}w0.bindFramebuffer(T.READ_FRAMEBUFFER,null),w0.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(v!==0||V.isRenderTargetTexture||_0.has(V)){let u8=_0.get(V),T8=_0.get(y);w0.bindFramebuffer(T.READ_FRAMEBUFFER,HK),w0.bindFramebuffer(T.DRAW_FRAMEBUFFER,XK);for(let v8=0;v8<D0;v8++){if(E8)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,u8.__webglTexture,v,C0+v8);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,u8.__webglTexture,v);if(y8)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T8.__webglTexture,W0,D8+v8);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,T8.__webglTexture,W0);if(v!==0)T.blitFramebuffer(j0,b0,q0,M0,a0,W8,q0,M0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(y8)T.copyTexSubImage3D(q8,W0,a0,W8,D8+v8,j0,b0,q0,M0);else T.copyTexSubImage2D(q8,W0,a0,W8,j0,b0,q0,M0)}w0.bindFramebuffer(T.READ_FRAMEBUFFER,null),w0.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(y8)if(V.isDataTexture||V.isData3DTexture)T.texSubImage3D(q8,W0,a0,W8,D8,q0,M0,D0,K8,A0,F8.data);else if(y.isCompressedArrayTexture)T.compressedTexSubImage3D(q8,W0,a0,W8,D8,q0,M0,D0,K8,F8.data);else T.texSubImage3D(q8,W0,a0,W8,D8,q0,M0,D0,K8,A0,F8);else if(V.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,W0,a0,W8,q0,M0,K8,A0,F8.data);else if(V.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,W0,a0,W8,F8.width,F8.height,K8,F8.data);else T.texSubImage2D(T.TEXTURE_2D,W0,a0,W8,q0,M0,K8,A0,F8);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,J8),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,b8),T.pixelStorei(T.UNPACK_SKIP_PIXELS,E9),T.pixelStorei(T.UNPACK_SKIP_ROWS,h8),T.pixelStorei(T.UNPACK_SKIP_IMAGES,$7),W0===0&&y.generateMipmaps)T.generateMipmap(q8);w0.unbindTexture()},this.initRenderTarget=function(V){if(_0.get(V).__webglFramebuffer===void 0)l0.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)l0.setTextureCube(V,0);else if(V.isData3DTexture)l0.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)l0.setTexture2DArray(V,0);else l0.setTexture2D(V,0);w0.unbindTexture()},this.resetState=function(){z=0,j=0,M=null,w0.reset(),p0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return k$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=e0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=e0._getUnpackColorSpace()}}var{min:uN,max:lN}=Math,a8=(J,Q=0,$=1)=>{return uN(lN(Q,J),$)};var G9=(J)=>{J._clipped=!1,J._unclipped=J.slice(0);for(let Q=0;Q<=3;Q++)if(Q<3){if(J[Q]<0||J[Q]>255)J._clipped=!0;J[Q]=a8(J[Q],0,255)}else if(Q===3)J[Q]=a8(J[Q],0,1);return J};var n1={};for(let J of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])n1[`[object ${J}]`]=J.toLowerCase();function F0(J){return n1[Object.prototype.toString.call(J)]||"object"}var Z0=(J,Q=null)=>{if(J.length>=3)return Array.prototype.slice.call(J);if(F0(J[0])=="object"&&Q)return Q.split("").filter(($)=>J[0][$]!==void 0).map(($)=>J[0][$]);return J[0].slice(0)};var d8=(J)=>{if(J.length<2)return null;let Q=J.length-1;if(F0(J[Q])=="string")return J[Q].toLowerCase();return null};var{PI:vJ,min:bJ,max:hJ}=Math,w8=(J)=>Math.round(J*100)/100,_7=(J)=>Math.round(J*100)/100,r8=vJ*2,xJ=vJ/3,s1=vJ/180,i1=180/vJ;function pJ(J){return[...J.slice(0,3).reverse(),...J.slice(3)]}var k0={format:{},autodetect:[]};class o1{constructor(...J){let Q=this;if(F0(J[0])==="object"&&J[0].constructor&&J[0].constructor===this.constructor)return J[0];let $=d8(J),Z=!1;if(!$){if(Z=!0,!k0.sorted)k0.autodetect=k0.autodetect.sort((W,U)=>U.p-W.p),k0.sorted=!0;for(let W of k0.autodetect)if($=W.test(...J),$)break}if(k0.format[$]){let W=k0.format[$].apply(null,Z?J:J.slice(0,-1));Q._rgb=G9(W)}else throw Error("unknown format: "+J);if(Q._rgb.length===3)Q._rgb.push(1)}toString(){if(F0(this.hex)=="function")return this.hex();return`[${this._rgb.join(",")}]`}}var d=o1;var a1="3.1.4";var r1=(...J)=>{return new d(...J)};r1.version=a1;var I0=r1;var cN={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},u6=cN;var nN=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,sN=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,iN=(J)=>{if(J.match(nN)){if(J.length===4||J.length===7)J=J.substr(1);if(J.length===3)J=J.split(""),J=J[0]+J[0]+J[1]+J[1]+J[2]+J[2];let Q=parseInt(J,16),$=Q>>16,Z=Q>>8&255,W=Q&255;return[$,Z,W,1]}if(J.match(sN)){if(J.length===5||J.length===9)J=J.substr(1);if(J.length===4)J=J.split(""),J=J[0]+J[0]+J[1]+J[1]+J[2]+J[2]+J[3]+J[3];let Q=parseInt(J,16),$=Q>>24&255,Z=Q>>16&255,W=Q>>8&255,U=Math.round((Q&255)/255*100)/100;return[$,Z,W,U]}throw Error(`unknown hex color: ${J}`)},gJ=iN;var{round:mJ}=Math,oN=(...J)=>{let[Q,$,Z,W]=Z0(J,"rgba"),U=d8(J)||"auto";if(W===void 0)W=1;if(U==="auto")U=W<1?"rgba":"rgb";Q=mJ(Q),$=mJ($),Z=mJ(Z);let H="000000"+(Q<<16|$<<8|Z).toString(16);H=H.substr(H.length-6);let X="0"+mJ(W*255).toString(16);switch(X=X.substr(X.length-2),U.toLowerCase()){case"rgba":return`#${H}${X}`;case"argb":return`#${X}${H}`;default:return`#${H}`}},dJ=oN;d.prototype.name=function(){let J=dJ(this._rgb,"rgb");for(let Q of Object.keys(u6))if(u6[Q]===J)return Q.toLowerCase();return J};k0.format.named=(J)=>{if(J=J.toLowerCase(),u6[J])return gJ(u6[J]);throw Error("unknown color name: "+J)};k0.autodetect.push({p:5,test:(J,...Q)=>{if(!Q.length&&F0(J)==="string"&&u6[J.toLowerCase()])return"named"}});d.prototype.alpha=function(J,Q=!1){if(J!==void 0&&F0(J)==="number"){if(Q)return this._rgb[3]=J,this;return new d([this._rgb[0],this._rgb[1],this._rgb[2],J],"rgb")}return this._rgb[3]};d.prototype.clipped=function(){return this._rgb._clipped||!1};var A7={Kn:18,labWhitePoint:"d65",Xn:0.95047,Yn:1,Zn:1.08883,t0:0.137931034,t1:0.206896552,t2:0.12841855,t3:0.008856452,kE:0.008856451679035631,kKE:8,kK:903.2962962962963,RefWhiteRGB:{X:0.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:0.4124564390896922,m01:0.21267285140562253,m02:0.0193338955823293,m10:0.357576077643909,m11:0.715152155287818,m12:0.11919202588130297,m20:0.18043748326639894,m21:0.07217499330655958,m22:0.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-0.9692660305051868,m02:0.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-0.2040259135167538,m20:-0.498531409556016,m21:0.041556017530349834,m22:1.0572251882231791},As:0.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:0.8951,m01:-0.7502,m02:0.0389,m10:0.2664,m11:1.7135,m12:-0.0685,m20:-0.1614,m21:0.0367,m22:1.0296},MtxAdaptMaI:{m00:0.9869929054667123,m01:0.43230526972339456,m02:-0.008528664575177328,m10:-0.14705425642099013,m11:0.5183602715367776,m12:0.04004282165408487,m20:0.15996265166373125,m21:0.0492912282128556,m22:0.9684866957875502}},F6=A7,aN=new Map([["a",[1.0985,0.35585]],["b",[1.0985,0.35585]],["c",[0.98074,1.18232]],["d50",[0.96422,0.82521]],["d55",[0.95682,0.92149]],["d65",[0.95047,1.08883]],["e",[1,1,1]],["f2",[0.99186,0.67393]],["f7",[0.95041,1.08747]],["f11",[1.00962,0.6435]],["icc",[0.96422,0.82521]]]);function t8(J){let Q=aN.get(String(J).toLowerCase());if(!Q)throw Error("unknown Lab illuminant "+J);A7.labWhitePoint=J,A7.Xn=Q[0],A7.Zn=Q[1]}function l6(){return A7.labWhitePoint}var rN=(...J)=>{J=Z0(J,"lab");let[Q,$,Z]=J,[W,U,K]=tN(Q,$,Z),[H,X,Y]=NZ(W,U,K);return[H,X,Y,J.length>3?J[3]:1]},tN=(J,Q,$)=>{let{kE:Z,kK:W,kKE:U,Xn:K,Yn:H,Zn:X}=F6,Y=(J+16)/116,N=0.002*Q+Y,G=Y-0.005*$,q=N*N*N,F=G*G*G,k=q>Z?q:(116*N-16)/W,L=J>U?Math.pow((J+16)/116,3):J/W,D=F>Z?F:(116*G-16)/W,E=k*K,B=L*H,I=D*X;return[E,B,I]},YZ=(J)=>{let Q=Math.sign(J);return J=Math.abs(J),(J<=0.0031308?J*12.92:1.055*Math.pow(J,0.4166666666666667)-0.055)*Q},NZ=(J,Q,$)=>{let{MtxAdaptMa:Z,MtxAdaptMaI:W,MtxXYZ2RGB:U,RefWhiteRGB:K,Xn:H,Yn:X,Zn:Y}=F6,N=H*Z.m00+X*Z.m10+Y*Z.m20,G=H*Z.m01+X*Z.m11+Y*Z.m21,q=H*Z.m02+X*Z.m12+Y*Z.m22,F=K.X*Z.m00+K.Y*Z.m10+K.Z*Z.m20,k=K.X*Z.m01+K.Y*Z.m11+K.Z*Z.m21,L=K.X*Z.m02+K.Y*Z.m12+K.Z*Z.m22,D=(J*Z.m00+Q*Z.m10+$*Z.m20)*(F/N),E=(J*Z.m01+Q*Z.m11+$*Z.m21)*(k/G),B=(J*Z.m02+Q*Z.m12+$*Z.m22)*(L/q),I=D*W.m00+E*W.m10+B*W.m20,P=D*W.m01+E*W.m11+B*W.m21,A=D*W.m02+E*W.m12+B*W.m22,C=YZ(I*U.m00+P*U.m10+A*U.m20),z=YZ(I*U.m01+P*U.m11+A*U.m21),j=YZ(I*U.m02+P*U.m12+A*U.m22);return[C*255,z*255,j*255]},n9=rN;var eN=(...J)=>{let[Q,$,Z,...W]=Z0(J,"rgb"),[U,K,H]=qZ(Q,$,Z),[X,Y,N]=JG(U,K,H);return[X,Y,N,...W.length>0&&W[0]<1?[W[0]]:[]]};function JG(J,Q,$){let{Xn:Z,Yn:W,Zn:U,kE:K,kK:H}=F6,X=J/Z,Y=Q/W,N=$/U,G=X>K?Math.pow(X,0.3333333333333333):(H*X+16)/116,q=Y>K?Math.pow(Y,0.3333333333333333):(H*Y+16)/116,F=N>K?Math.pow(N,0.3333333333333333):(H*N+16)/116;return[116*q-16,500*(G-q),200*(q-F)]}function GZ(J){let Q=Math.sign(J);return J=Math.abs(J),(J<=0.04045?J/12.92:Math.pow((J+0.055)/1.055,2.4))*Q}var qZ=(J,Q,$)=>{J=GZ(J/255),Q=GZ(Q/255),$=GZ($/255);let{MtxRGB2XYZ:Z,MtxAdaptMa:W,MtxAdaptMaI:U,Xn:K,Yn:H,Zn:X,As:Y,Bs:N,Cs:G}=F6,q=J*Z.m00+Q*Z.m10+$*Z.m20,F=J*Z.m01+Q*Z.m11+$*Z.m21,k=J*Z.m02+Q*Z.m12+$*Z.m22,L=K*W.m00+H*W.m10+X*W.m20,D=K*W.m01+H*W.m11+X*W.m21,E=K*W.m02+H*W.m12+X*W.m22,B=q*W.m00+F*W.m10+k*W.m20,I=q*W.m01+F*W.m11+k*W.m21,P=q*W.m02+F*W.m12+k*W.m22;return B*=L/Y,I*=D/N,P*=E/G,q=B*U.m00+I*U.m10+P*U.m20,F=B*U.m01+I*U.m11+P*U.m21,k=B*U.m02+I*U.m12+P*U.m22,[q,F,k]},s9=eN;d.prototype.lab=function(){return s9(this._rgb)};var QG=(...J)=>new d(...J,"lab");Object.assign(I0,{lab:QG,getLabWhitePoint:l6,setLabWhitePoint:t8});k0.format.lab=n9;k0.autodetect.push({p:2,test:(...J)=>{if(J=Z0(J,"lab"),F0(J)==="array"&&J.length===3)return"lab"}});d.prototype.darken=function(J=1){let Q=this,$=Q.lab();return $[0]-=F6.Kn*J,new d($,"lab").alpha(Q.alpha(),!0)};d.prototype.brighten=function(J=1){return this.darken(-J)};d.prototype.darker=d.prototype.darken;d.prototype.brighter=d.prototype.brighten;d.prototype.get=function(J){let[Q,$]=J.split("."),Z=this[Q]();if($){let W=Q.indexOf($)-(Q.substr(0,2)==="ok"?2:0);if(W>-1)return Z[W];throw Error(`unknown channel ${$} in mode ${Q}`)}else return Z};var{pow:$G}=Math,ZG=0.0000001,WG=20;d.prototype.luminance=function(J,Q="rgb"){if(J!==void 0&&F0(J)==="number"){if(J===0)return new d([0,0,0,this._rgb[3]],"rgb");if(J===1)return new d([255,255,255,this._rgb[3]],"rgb");let $=this.luminance(),Z=WG,W=(K,H)=>{let X=K.interpolate(H,0.5,Q),Y=X.luminance();if(Math.abs(J-Y)<ZG||!Z--)return X;return Y>J?W(K,X):W(X,H)},U=($>J?W(new d([0,0,0]),this):W(this,new d([255,255,255]))).rgb();return new d([...U,this._rgb[3]])}return UG(...this._rgb.slice(0,3))};var UG=(J,Q,$)=>{return J=EZ(J),Q=EZ(Q),$=EZ($),0.2126*J+0.7152*Q+0.0722*$},EZ=(J)=>{return J/=255,J<=0.03928?J/12.92:$G((J+0.055)/1.055,2.4)};var U8={};var O6=(J,Q,$=0.5,...Z)=>{let W=Z[0]||"lrgb";if(!U8[W]&&!Z.length)W=Object.keys(U8)[0];if(!U8[W])throw Error(`interpolation mode ${W} is not defined`);if(F0(J)!=="object")J=new d(J);if(F0(Q)!=="object")Q=new d(Q);return U8[W](J,Q,$).alpha(J.alpha()+$*(Q.alpha()-J.alpha()))};d.prototype.mix=d.prototype.interpolate=function(J,Q=0.5,...$){return O6(this,J,Q,...$)};d.prototype.premultiply=function(J=!1){let Q=this._rgb,$=Q[3];if(J)return this._rgb=[Q[0]*$,Q[1]*$,Q[2]*$,$],this;else return new d([Q[0]*$,Q[1]*$,Q[2]*$,$],"rgb")};var{sin:KG,cos:HG}=Math,XG=(...J)=>{let[Q,$,Z]=Z0(J,"lch");if(isNaN(Z))Z=0;return Z=Z*s1,[Q,HG(Z)*$,KG(Z)*$]},uJ=XG;var YG=(...J)=>{J=Z0(J,"lch");let[Q,$,Z]=J,[W,U,K]=uJ(Q,$,Z),[H,X,Y]=n9(W,U,K);return[H,X,Y,J.length>3?J[3]:1]},i9=YG;var NG=(...J)=>{let Q=pJ(Z0(J,"hcl"));return i9(...Q)},t1=NG;var{sqrt:GG,atan2:qG,round:EG}=Math,DG=(...J)=>{let[Q,$,Z]=Z0(J,"lab"),W=GG($*$+Z*Z),U=(qG(Z,$)*i1+360)%360;if(EG(W*1e4)===0)U=Number.NaN;return[Q,W,U]},lJ=DG;var FG=(...J)=>{let[Q,$,Z,...W]=Z0(J,"rgb"),[U,K,H]=s9(Q,$,Z),[X,Y,N]=lJ(U,K,H);return[X,Y,N,...W.length>0&&W[0]<1?[W[0]]:[]]},T7=FG;d.prototype.lch=function(){return T7(this._rgb)};d.prototype.hcl=function(){return pJ(T7(this._rgb))};var OG=(...J)=>new d(...J,"lch"),kG=(...J)=>new d(...J,"hcl");Object.assign(I0,{lch:OG,hcl:kG});k0.format.lch=i9;k0.format.hcl=t1;["lch","hcl"].forEach((J)=>k0.autodetect.push({p:2,test:(...Q)=>{if(Q=Z0(Q,J),F0(Q)==="array"&&Q.length===3)return J}}));d.prototype.saturate=function(J=1){let Q=this,$=Q.lch();if($[1]+=F6.Kn*J,$[1]<0)$[1]=0;return new d($,"lch").alpha(Q.alpha(),!0)};d.prototype.desaturate=function(J=1){return this.saturate(-J)};d.prototype.set=function(J,Q,$=!1){let[Z,W]=J.split("."),U=this[Z]();if(W){let K=Z.indexOf(W)-(Z.substr(0,2)==="ok"?2:0);if(K>-1){if(F0(Q)=="string")switch(Q.charAt(0)){case"+":U[K]+=+Q;break;case"-":U[K]+=+Q;break;case"*":U[K]*=+Q.substr(1);break;case"/":U[K]/=+Q.substr(1);break;default:U[K]=+Q}else if(F0(Q)==="number")U[K]=Q;else throw Error("unsupported value for Color.set");let H=new d(U,Z);if($)return this._rgb=H._rgb,this;return H}throw Error(`unknown channel ${W} in mode ${Z}`)}else return U};d.prototype.tint=function(J=0.5,...Q){return O6(this,"white",J,...Q)};d.prototype.shade=function(J=0.5,...Q){return O6(this,"black",J,...Q)};var RG=(J,Q,$)=>{let Z=J._rgb,W=Q._rgb;return new d(Z[0]+$*(W[0]-Z[0]),Z[1]+$*(W[1]-Z[1]),Z[2]+$*(W[2]-Z[2]),"rgb")};U8.rgb=RG;var{sqrt:DZ,pow:o9}=Math,MG=(J,Q,$)=>{let[Z,W,U]=J._rgb,[K,H,X]=Q._rgb;return new d(DZ(o9(Z,2)*(1-$)+o9(K,2)*$),DZ(o9(W,2)*(1-$)+o9(H,2)*$),DZ(o9(U,2)*(1-$)+o9(X,2)*$),"rgb")};U8.lrgb=MG;var VG=(J,Q,$)=>{let Z=J.lab(),W=Q.lab();return new d(Z[0]+$*(W[0]-Z[0]),Z[1]+$*(W[1]-Z[1]),Z[2]+$*(W[2]-Z[2]),"lab")};U8.lab=VG;var e8=(J,Q,$,Z)=>{let W,U;if(Z==="hsl")W=J.hsl(),U=Q.hsl();else if(Z==="hsv")W=J.hsv(),U=Q.hsv();else if(Z==="hcg")W=J.hcg(),U=Q.hcg();else if(Z==="hsi")W=J.hsi(),U=Q.hsi();else if(Z==="lch"||Z==="hcl")Z="hcl",W=J.hcl(),U=Q.hcl();else if(Z==="oklch")W=J.oklch().reverse(),U=Q.oklch().reverse();let K,H,X,Y,N,G;if(Z.substr(0,1)==="h"||Z==="oklch")[K,X,N]=W,[H,Y,G]=U;let q,F,k,L;if(!isNaN(K)&&!isNaN(H)){if(H>K&&H-K>180)L=H-(K+360);else if(H<K&&K-H>180)L=H+360-K;else L=H-K;F=K+$*L}else if(!isNaN(K)){if(F=K,(G==1||G==0)&&Z!="hsv")q=X}else if(!isNaN(H)){if(F=H,(N==1||N==0)&&Z!="hsv")q=Y}else F=Number.NaN;if(q===void 0)q=X+$*(Y-X);return k=N+$*(G-N),Z==="oklch"?new d([k,q,F],Z):new d([F,q,k],Z)};var e1=(J,Q,$)=>{return e8(J,Q,$,"lch")};U8.lch=e1;U8.hcl=e1;var LG=(J)=>{if(F0(J)=="number"&&J>=0&&J<=16777215){let Q=J>>16,$=J>>8&255,Z=J&255;return[Q,$,Z,1]}throw Error("unknown num color: "+J)},JU=LG;var zG=(...J)=>{let[Q,$,Z]=Z0(J,"rgb");return(Q<<16)+($<<8)+Z},QU=zG;d.prototype.num=function(){return QU(this._rgb)};var BG=(...J)=>new d(...J,"num");Object.assign(I0,{num:BG});k0.format.num=JU;k0.autodetect.push({p:5,test:(...J)=>{if(J.length===1&&F0(J[0])==="number"&&J[0]>=0&&J[0]<=16777215)return"num"}});var IG=(J,Q,$)=>{let Z=J.num(),W=Q.num();return new d(Z+$*(W-Z),"num")};U8.num=IG;var{floor:wG}=Math,CG=(...J)=>{J=Z0(J,"hcg");let[Q,$,Z]=J,W,U,K;Z=Z*255;let H=$*255;if($===0)W=U=K=Z;else{if(Q===360)Q=0;if(Q>360)Q-=360;if(Q<0)Q+=360;Q/=60;let X=wG(Q),Y=Q-X,N=Z*(1-$),G=N+H*(1-Y),q=N+H*Y,F=N+H;switch(X){case 0:[W,U,K]=[F,q,N];break;case 1:[W,U,K]=[G,F,N];break;case 2:[W,U,K]=[N,F,q];break;case 3:[W,U,K]=[N,G,F];break;case 4:[W,U,K]=[q,N,F];break;case 5:[W,U,K]=[F,N,G];break}}return[W,U,K,J.length>3?J[3]:1]},$U=CG;var PG=(...J)=>{let[Q,$,Z]=Z0(J,"rgb"),W=bJ(Q,$,Z),U=hJ(Q,$,Z),K=U-W,H=K*100/255,X=W/(255-K)*100,Y;if(K===0)Y=Number.NaN;else{if(Q===U)Y=($-Z)/K;if($===U)Y=2+(Z-Q)/K;if(Z===U)Y=4+(Q-$)/K;if(Y*=60,Y<0)Y+=360}return[Y,H,X]},ZU=PG;d.prototype.hcg=function(){return ZU(this._rgb)};var _G=(...J)=>new d(...J,"hcg");I0.hcg=_G;k0.format.hcg=$U;k0.autodetect.push({p:1,test:(...J)=>{if(J=Z0(J,"hcg"),F0(J)==="array"&&J.length===3)return"hcg"}});var AG=(J,Q,$)=>{return e8(J,Q,$,"hcg")};U8.hcg=AG;var{cos:a9}=Math,TG=(...J)=>{J=Z0(J,"hsi");let[Q,$,Z]=J,W,U,K;if(isNaN(Q))Q=0;if(isNaN($))$=0;if(Q>360)Q-=360;if(Q<0)Q+=360;if(Q/=360,Q<0.3333333333333333)K=(1-$)/3,W=(1+$*a9(r8*Q)/a9(xJ-r8*Q))/3,U=1-(K+W);else if(Q<0.6666666666666666)Q-=0.3333333333333333,W=(1-$)/3,U=(1+$*a9(r8*Q)/a9(xJ-r8*Q))/3,K=1-(W+U);else Q-=0.6666666666666666,U=(1-$)/3,K=(1+$*a9(r8*Q)/a9(xJ-r8*Q))/3,W=1-(U+K);return W=a8(Z*W*3),U=a8(Z*U*3),K=a8(Z*K*3),[W*255,U*255,K*255,J.length>3?J[3]:1]},WU=TG;var{min:SG,sqrt:jG,acos:fG}=Math,yG=(...J)=>{let[Q,$,Z]=Z0(J,"rgb");Q/=255,$/=255,Z/=255;let W,U=SG(Q,$,Z),K=(Q+$+Z)/3,H=K>0?1-U/K:0;if(H===0)W=NaN;else{if(W=(Q-$+(Q-Z))/2,W/=jG((Q-$)*(Q-$)+(Q-Z)*($-Z)),W=fG(W),Z>$)W=r8-W;W/=r8}return[W*360,H,K]},UU=yG;d.prototype.hsi=function(){return UU(this._rgb)};var vG=(...J)=>new d(...J,"hsi");I0.hsi=vG;k0.format.hsi=WU;k0.autodetect.push({p:2,test:(...J)=>{if(J=Z0(J,"hsi"),F0(J)==="array"&&J.length===3)return"hsi"}});var bG=(J,Q,$)=>{return e8(J,Q,$,"hsi")};U8.hsi=bG;var hG=(...J)=>{J=Z0(J,"hsl");let[Q,$,Z]=J,W,U,K;if($===0)W=U=K=Z*255;else{let H=[0,0,0],X=[0,0,0],Y=Z<0.5?Z*(1+$):Z+$-Z*$,N=2*Z-Y,G=Q/360;H[0]=G+0.3333333333333333,H[1]=G,H[2]=G-0.3333333333333333;for(let q=0;q<3;q++){if(H[q]<0)H[q]+=1;if(H[q]>1)H[q]-=1;if(6*H[q]<1)X[q]=N+(Y-N)*6*H[q];else if(2*H[q]<1)X[q]=Y;else if(3*H[q]<2)X[q]=N+(Y-N)*(0.6666666666666666-H[q])*6;else X[q]=N}[W,U,K]=[X[0]*255,X[1]*255,X[2]*255]}if(J.length>3)return[W,U,K,J[3]];return[W,U,K,1]},S7=hG;var xG=(...J)=>{J=Z0(J,"rgba");let[Q,$,Z]=J;Q/=255,$/=255,Z/=255;let W=bJ(Q,$,Z),U=hJ(Q,$,Z),K=(U+W)/2,H,X;if(U===W)H=0,X=Number.NaN;else H=K<0.5?(U-W)/(U+W):(U-W)/(2-U-W);if(Q==U)X=($-Z)/(U-W);else if($==U)X=2+(Z-Q)/(U-W);else if(Z==U)X=4+(Q-$)/(U-W);if(X*=60,X<0)X+=360;if(J.length>3&&J[3]!==void 0)return[X,H,K,J[3]];return[X,H,K]},cJ=xG;d.prototype.hsl=function(){return cJ(this._rgb)};var pG=(...J)=>new d(...J,"hsl");I0.hsl=pG;k0.format.hsl=S7;k0.autodetect.push({p:2,test:(...J)=>{if(J=Z0(J,"hsl"),F0(J)==="array"&&J.length===3)return"hsl"}});var gG=(J,Q,$)=>{return e8(J,Q,$,"hsl")};U8.hsl=gG;var{floor:mG}=Math,dG=(...J)=>{J=Z0(J,"hsv");let[Q,$,Z]=J,W,U,K;if(Z*=255,$===0)W=U=K=Z;else{if(Q===360)Q=0;if(Q>360)Q-=360;if(Q<0)Q+=360;Q/=60;let H=mG(Q),X=Q-H,Y=Z*(1-$),N=Z*(1-$*X),G=Z*(1-$*(1-X));switch(H){case 0:[W,U,K]=[Z,G,Y];break;case 1:[W,U,K]=[N,Z,Y];break;case 2:[W,U,K]=[Y,Z,G];break;case 3:[W,U,K]=[Y,N,Z];break;case 4:[W,U,K]=[G,Y,Z];break;case 5:[W,U,K]=[Z,Y,N];break}}return[W,U,K,J.length>3?J[3]:1]},KU=dG;var{min:uG,max:lG}=Math,cG=(...J)=>{J=Z0(J,"rgb");let[Q,$,Z]=J,W=uG(Q,$,Z),U=lG(Q,$,Z),K=U-W,H,X,Y;if(Y=U/255,U===0)H=Number.NaN,X=0;else{if(X=K/U,Q===U)H=($-Z)/K;if($===U)H=2+(Z-Q)/K;if(Z===U)H=4+(Q-$)/K;if(H*=60,H<0)H+=360}return[H,X,Y]},HU=cG;d.prototype.hsv=function(){return HU(this._rgb)};var nG=(...J)=>new d(...J,"hsv");I0.hsv=nG;k0.format.hsv=KU;k0.autodetect.push({p:2,test:(...J)=>{if(J=Z0(J,"hsv"),F0(J)==="array"&&J.length===3)return"hsv"}});var sG=(J,Q,$)=>{return e8(J,Q,$,"hsv")};U8.hsv=sG;function q9(J,Q){let $=J.length;if(!Array.isArray(J[0]))J=[J];if(!Array.isArray(Q[0]))Q=Q.map((K)=>[K]);let Z=Q[0].length,W=Q[0].map((K,H)=>Q.map((X)=>X[H])),U=J.map((K)=>W.map((H)=>{if(!Array.isArray(K))return H.reduce((X,Y)=>X+Y*K,0);return K.reduce((X,Y,N)=>X+Y*(H[N]||0),0)}));if($===1)U=U[0];if(Z===1)return U.map((K)=>K[0]);return U}var iG=(...J)=>{J=Z0(J,"lab");let[Q,$,Z,...W]=J,[U,K,H]=oG([Q,$,Z]),[X,Y,N]=NZ(U,K,H);return[X,Y,N,...W.length>0&&W[0]<1?[W[0]]:[]]};function oG(J){var Q=[[1.2268798758459243,-0.5578149944602171,0.2813910456659647],[-0.0405757452148008,1.112286803280317,-0.0717110580655164],[-0.0763729366746601,-0.4214933324022432,1.5869240198367816]],$=[[1,0.3963377773761749,0.2158037573099136],[1,-0.1055613458156586,-0.0638541728258133],[1,-0.0894841775298119,-1.2914855480194092]],Z=q9($,J);return q9(Q,Z.map((W)=>W**3))}var r9=iG;var aG=(...J)=>{let[Q,$,Z,...W]=Z0(J,"rgb"),U=qZ(Q,$,Z);return[...rG(U),...W.length>0&&W[0]<1?[W[0]]:[]]};function rG(J){let Q=[[0.819022437996703,0.3619062600528904,-0.1288737815209879],[0.0329836539323885,0.9292868615863434,0.0361446663506424],[0.0481771893596242,0.2642395317527308,0.6335478284694309]],$=[[0.210454268309314,0.7936177747023054,-0.0040720430116193],[1.9779985324311684,-2.42859224204858,0.450593709617411],[0.0259040424655478,0.7827717124575296,-0.8086757549230774]],Z=q9(Q,J);return q9($,Z.map((W)=>Math.cbrt(W)))}var t9=aG;d.prototype.oklab=function(){return t9(this._rgb)};var tG=(...J)=>new d(...J,"oklab");Object.assign(I0,{oklab:tG});k0.format.oklab=r9;k0.autodetect.push({p:2,test:(...J)=>{if(J=Z0(J,"oklab"),F0(J)==="array"&&J.length===3)return"oklab"}});var eG=(J,Q,$)=>{let Z=J.oklab(),W=Q.oklab();return new d(Z[0]+$*(W[0]-Z[0]),Z[1]+$*(W[1]-Z[1]),Z[2]+$*(W[2]-Z[2]),"oklab")};U8.oklab=eG;var Jq=(J,Q,$)=>{return e8(J,Q,$,"oklch")};U8.oklch=Jq;var{pow:FZ,sqrt:OZ,PI:kZ,cos:XU,sin:YU,atan2:Qq}=Math,NU=(J,Q="lrgb",$=null)=>{let Z=J.length;if(!$)$=Array.from(Array(Z)).map(()=>1);let W=Z/$.reduce(function(G,q){return G+q});if($.forEach((G,q)=>{$[q]*=W}),J=J.map((G)=>new d(G)),Q==="lrgb")return $q(J,$);let U=J.shift(),K=U.get(Q),H=[],X=0,Y=0;for(let G=0;G<K.length;G++)if(K[G]=(K[G]||0)*$[0],H.push(isNaN(K[G])?0:$[0]),Q.charAt(G)==="h"&&!isNaN(K[G])){let q=K[G]/180*kZ;X+=XU(q)*$[0],Y+=YU(q)*$[0]}let N=U.alpha()*$[0];J.forEach((G,q)=>{let F=G.get(Q);N+=G.alpha()*$[q+1];for(let k=0;k<K.length;k++)if(!isNaN(F[k]))if(H[k]+=$[q+1],Q.charAt(k)==="h"){let L=F[k]/180*kZ;X+=XU(L)*$[q+1],Y+=YU(L)*$[q+1]}else K[k]+=F[k]*$[q+1]});for(let G=0;G<K.length;G++)if(Q.charAt(G)==="h"){let q=Qq(Y/H[G],X/H[G])/kZ*180;while(q<0)q+=360;while(q>=360)q-=360;K[G]=q}else K[G]=K[G]/H[G];return N/=Z,new d(K,Q).alpha(N>0.99999?1:N,!0)},$q=(J,Q)=>{let $=J.length,Z=[0,0,0,0];for(let W=0;W<J.length;W++){let U=J[W],K=Q[W]/$,H=U._rgb;Z[0]+=FZ(H[0],2)*K,Z[1]+=FZ(H[1],2)*K,Z[2]+=FZ(H[2],2)*K,Z[3]+=H[3]*K}if(Z[0]=OZ(Z[0]),Z[1]=OZ(Z[1]),Z[2]=OZ(Z[2]),Z[3]>0.9999999)Z[3]=1;return new d(G9(Z))};var{pow:Zq}=Math;function c6(J){let Q="rgb",$=I0("#ccc"),Z=0,W=[0,1],U=[],K=[0,0],H=!1,X=[],Y=!1,N=0,G=1,q=!1,F={},k=!0,L=1,D=function(z){if(z=z||["#fff","#000"],z&&F0(z)==="string"&&I0.brewer&&I0.brewer[z.toLowerCase()])z=I0.brewer[z.toLowerCase()];if(F0(z)==="array"){if(z.length===1)z=[z[0],z[0]];z=z.slice(0);for(let j=0;j<z.length;j++)z[j]=I0(z[j]);U.length=0;for(let j=0;j<z.length;j++)U.push(j/(z.length-1))}return A(),X=z},E=function(z){if(H!=null){let j=H.length-1,M=0;while(M<j&&z>=H[M])M++;return M-1}return 0},B=(z)=>z,I=(z)=>z,P=function(z,j){let M,R;if(j==null)j=!1;if(isNaN(z)||z===null)return $;if(!j)if(H&&H.length>2)R=E(z)/(H.length-2);else if(G!==N)R=(z-N)/(G-N);else R=1;else R=z;if(R=I(R),!j)R=B(R);if(L!==1)R=Zq(R,L);R=K[0]+R*(1-K[0]-K[1]),R=a8(R,0,1);let _=Math.floor(R*1e4);if(k&&F[_])M=F[_];else{if(F0(X)==="array")for(let b=0;b<U.length;b++){let x=U[b];if(R<=x){M=X[b];break}if(R>=x&&b===U.length-1){M=X[b];break}if(R>x&&R<U[b+1]){R=(R-x)/(U[b+1]-x),M=I0.interpolate(X[b],X[b+1],R,Q);break}}else if(F0(X)==="function")M=X(R);if(k)F[_]=M}return M};var A=()=>F={};D(J);let C=function(z){let j=I0(P(z));if(Y&&j[Y])return j[Y]();else return j};return C.classes=function(z){if(z!=null){if(F0(z)==="array")H=z,W=[z[0],z[z.length-1]];else{let j=I0.analyze(W);if(z===0)H=[j.min,j.max];else H=I0.limits(j,"e",z)}return C}return H},C.domain=function(z){if(!arguments.length)return W;N=z[0],G=z[z.length-1],U=[];let j=X.length;if(z.length===j&&N!==G)for(let M of Array.from(z))U.push((M-N)/(G-N));else{for(let M=0;M<j;M++)U.push(M/(j-1));if(z.length>2){let M=z.map((_,b)=>b/(z.length-1)),R=z.map((_)=>(_-N)/(G-N));if(!R.every((_,b)=>M[b]===_))I=(_)=>{if(_<=0||_>=1)return _;let b=0;while(_>=R[b+1])b++;let x=(_-R[b])/(R[b+1]-R[b]);return M[b]+x*(M[b+1]-M[b])}}}return W=[N,G],C},C.mode=function(z){if(!arguments.length)return Q;return Q=z,A(),C},C.range=function(z,j){return D(z,j),C},C.out=function(z){return Y=z,C},C.spread=function(z){if(!arguments.length)return Z;return Z=z,C},C.correctLightness=function(z){if(z==null)z=!0;if(q=z,A(),q)B=function(j){let M=P(0,!0).lab()[0],R=P(1,!0).lab()[0],_=M>R,b=P(j,!0).lab()[0],x=M+(R-M)*j,m=b-x,o=0,c=1,r=20;while(Math.abs(m)>0.01&&r-- >0)(function(){if(_)m*=-1;if(m<0)o=j,j+=(c-j)*0.5;else c=j,j+=(o-j)*0.5;return b=P(j,!0).lab()[0],m=b-x})();return j};else B=(j)=>j;return C},C.padding=function(z){if(z!=null){if(F0(z)==="number")z=[z,z];return K=z,C}else return K},C.colors=function(z,j){if(arguments.length<2)j="hex";let M=[];if(arguments.length===0)M=X.slice(0);else if(z===1)M=[C(0.5)];else if(z>1){let R=W[0],_=W[1]-R;M=Wq(0,z,!1).map((b)=>C(R+b/(z-1)*_))}else{J=[];let R=[];if(H&&H.length>2)for(let _=1,b=H.length,x=1<=b;x?_<b:_>b;x?_++:_--)R.push((H[_-1]+H[_])*0.5);else R=W;M=R.map((_)=>C(_))}if(I0[j])M=M.map((R)=>R[j]());return M},C.cache=function(z){if(z!=null)return k=z,C;else return k},C.gamma=function(z){if(z!=null)return L=z,C;else return L},C.nodata=function(z){if(z!=null)return $=I0(z),C;else return $},C}function Wq(J,Q,$){let Z=[],W=J<Q,U=!$?Q:W?Q+1:Q-1;for(let K=J;W?K<U:K>U;W?K++:K--)Z.push(K);return Z}var Uq=function(J){let Q=[1,1];for(let $=1;$<J;$++){let Z=[1];for(let W=1;W<=Q.length;W++)Z[W]=(Q[W]||0)+Q[W-1];Q=Z}return Q},Kq=function(J){let Q,$,Z,W;if(J=J.map((U)=>new d(U)),J.length===2)[$,Z]=J.map((U)=>U.lab()),Q=function(U){let K=[0,1,2].map((H)=>$[H]+U*(Z[H]-$[H]));return new d(K,"lab")};else if(J.length===3)[$,Z,W]=J.map((U)=>U.lab()),Q=function(U){let K=[0,1,2].map((H)=>(1-U)*(1-U)*$[H]+2*(1-U)*U*Z[H]+U*U*W[H]);return new d(K,"lab")};else if(J.length===4){let U;[$,Z,W,U]=J.map((K)=>K.lab()),Q=function(K){let H=[0,1,2].map((X)=>(1-K)*(1-K)*(1-K)*$[X]+3*(1-K)*(1-K)*K*Z[X]+3*(1-K)*K*K*W[X]+K*K*K*U[X]);return new d(H,"lab")}}else if(J.length>=5){let U,K,H;U=J.map((X)=>X.lab()),H=J.length-1,K=Uq(H),Q=function(X){let Y=1-X,N=[0,1,2].map((G)=>U.reduce((q,F,k)=>q+K[k]*Y**(H-k)*X**k*F[G],0));return new d(N,"lab")}}else throw RangeError("No point in running bezier with only one color.");return Q},GU=(J)=>{let Q=Kq(J);return Q.scale=()=>c6(Q),Q};var{round:qU}=Math;d.prototype.rgb=function(J=!0){if(J===!1)return this._rgb.slice(0,3);return this._rgb.slice(0,3).map(qU)};d.prototype.rgba=function(J=!0){return this._rgb.slice(0,4).map((Q,$)=>{return $<3?J===!1?Q:qU(Q):Q})};var Hq=(...J)=>new d(...J,"rgb");Object.assign(I0,{rgb:Hq});k0.format.rgb=(...J)=>{let Q=Z0(J,"rgba");if(Q[3]===void 0)Q[3]=1;return Q};k0.autodetect.push({p:3,test:(...J)=>{if(J=Z0(J,"rgba"),F0(J)==="array"&&(J.length===3||J.length===4&&F0(J[3])=="number"&&J[3]>=0&&J[3]<=1))return"rgb"}});var X6=(J,Q,$)=>{if(!X6[$])throw Error("unknown blend mode "+$);return X6[$](J,Q)},n6=(J)=>(Q,$)=>{let Z=I0($).rgb(),W=I0(Q).rgb();return I0.rgb(J(Z,W))},s6=(J)=>(Q,$)=>{let Z=[];return Z[0]=J(Q[0],$[0]),Z[1]=J(Q[1],$[1]),Z[2]=J(Q[2],$[2]),Z},Xq=(J)=>J,Yq=(J,Q)=>J*Q/255,Nq=(J,Q)=>J>Q?Q:J,Gq=(J,Q)=>J>Q?J:Q,qq=(J,Q)=>255*(1-(1-J/255)*(1-Q/255)),Eq=(J,Q)=>Q<128?2*J*Q/255:255*(1-2*(1-J/255)*(1-Q/255)),Dq=(J,Q)=>255*(1-(1-Q/255)/(J/255)),Fq=(J,Q)=>{if(J===255)return 255;return J=255*(Q/255)/(1-J/255),J>255?255:J};X6.normal=n6(s6(Xq));X6.multiply=n6(s6(Yq));X6.screen=n6(s6(qq));X6.overlay=n6(s6(Eq));X6.darken=n6(s6(Nq));X6.lighten=n6(s6(Gq));X6.dodge=n6(s6(Fq));X6.burn=n6(s6(Dq));var EU=X6;var{pow:Oq,sin:kq,cos:Rq}=Math;function RZ(J=300,Q=-1.5,$=1,Z=1,W=[0,1]){let U=0,K;if(F0(W)==="array")K=W[1]-W[0];else K=0,W=[W,W];let H=function(X){let Y=r8*((J+120)/360+Q*X),N=Oq(W[0]+K*X,Z),q=(U!==0?$[0]+X*U:$)*N*(1-N)/2,F=Rq(Y),k=kq(Y),L=N+q*(-0.14861*F+1.78277*k),D=N+q*(-0.29227*F-0.90649*k),E=N+q*(1.97294*F);return I0(G9([L*255,D*255,E*255,1]))};return H.start=function(X){if(X==null)return J;return J=X,H},H.rotations=function(X){if(X==null)return Q;return Q=X,H},H.gamma=function(X){if(X==null)return Z;return Z=X,H},H.hue=function(X){if(X==null)return $;if($=X,F0($)==="array"){if(U=$[1]-$[0],U===0)$=$[1]}else U=0;return H},H.lightness=function(X){if(X==null)return W;if(F0(X)==="array")W=X,K=X[1]-X[0];else W=[X,X],K=0;return H},H.scale=()=>I0.scale(H),H.hue($),H}var Mq="0123456789abcdef",{floor:Vq,random:Lq}=Math,DU=(J=Lq)=>{let Q="#";for(let $=0;$<6;$++)Q+=Mq.charAt(Vq(J()*16));return new d(Q,"hex")};var{log:FU,pow:zq,floor:Bq,abs:Iq}=Math;function MZ(J,Q=null){let $={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};if(F0(J)==="object")J=Object.values(J);return J.forEach((Z)=>{if(Q&&F0(Z)==="object")Z=Z[Q];if(Z!==void 0&&Z!==null&&!isNaN(Z)){if($.values.push(Z),$.sum+=Z,Z<$.min)$.min=Z;if(Z>$.max)$.max=Z;$.count+=1}}),$.domain=[$.min,$.max],$.limits=(Z,W)=>VZ($,Z,W),$}function VZ(J,Q="equal",$=7){if(F0(J)=="array")J=MZ(J);let{min:Z,max:W}=J,U=J.values.sort((H,X)=>H-X);if($===1)return[Z,W];let K=[];if(Q.substr(0,1)==="c")K.push(Z),K.push(W);if(Q.substr(0,1)==="e"){K.push(Z);for(let H=1;H<$;H++)K.push(Z+H/$*(W-Z));K.push(W)}else if(Q.substr(0,1)==="l"){if(Z<=0)throw Error("Logarithmic scales are only possible for values > 0");let H=Math.LOG10E*FU(Z),X=Math.LOG10E*FU(W);K.push(Z);for(let Y=1;Y<$;Y++)K.push(zq(10,H+Y/$*(X-H)));K.push(W)}else if(Q.substr(0,1)==="q"){K.push(Z);for(let H=1;H<$;H++){let X=(U.length-1)*H/$,Y=Bq(X);if(Y===X)K.push(U[Y]);else{let N=X-Y;K.push(U[Y]*(1-N)+U[Y+1]*N)}}K.push(W)}else if(Q.substr(0,1)==="k"){let H,X=U.length,Y=Array(X),N=Array($),G=!0,q=0,F=null;F=[],F.push(Z);for(let D=1;D<$;D++)F.push(Z+D/$*(W-Z));F.push(W);while(G){for(let E=0;E<$;E++)N[E]=0;for(let E=0;E<X;E++){let B=U[E],I=Number.MAX_VALUE,P;for(let A=0;A<$;A++){let C=Iq(F[A]-B);if(C<I)I=C,P=A;N[P]++,Y[E]=P}}let D=Array($);for(let E=0;E<$;E++)D[E]=null;for(let E=0;E<X;E++)if(H=Y[E],D[H]===null)D[H]=U[E];else D[H]+=U[E];for(let E=0;E<$;E++)D[E]*=1/N[E];G=!1;for(let E=0;E<$;E++)if(D[E]!==F[E]){G=!0;break}if(F=D,q++,q>200)G=!1}let k={};for(let D=0;D<$;D++)k[D]=[];for(let D=0;D<X;D++)H=Y[D],k[H].push(U[D]);let L=[];for(let D=0;D<$;D++)L.push(k[D][0]),L.push(k[D][k[D].length-1]);L=L.sort((D,E)=>D-E),K.push(L[0]);for(let D=1;D<L.length;D+=2){let E=L[D];if(!isNaN(E)&&K.indexOf(E)===-1)K.push(E)}}return K}var OU=(J,Q)=>{J=new d(J),Q=new d(Q);let $=J.luminance(),Z=Q.luminance();return $>Z?($+0.05)/(Z+0.05):(Z+0.05)/($+0.05)};var kU=0.027,wq=0.0005,Cq=0.1,RU=1.14,nJ=0.022,MU=1.414,LU=(J,Q)=>{if(J=new d(J),Q=new d(Q),J.alpha()<1)J=O6(Q,J,J.alpha(),"rgb");let $=VU(...J.rgb()),Z=VU(...Q.rgb()),W=$>=nJ?$:$+Math.pow(nJ-$,MU),U=Z>=nJ?Z:Z+Math.pow(nJ-Z,MU),K=Math.pow(U,0.56)-Math.pow(W,0.57),H=Math.pow(U,0.65)-Math.pow(W,0.62),X=Math.abs(U-W)<wq?0:W<U?K*RU:H*RU;return(Math.abs(X)<Cq?0:X>0?X-kU:X+kU)*100};function VU(J,Q,$){return 0.2126729*Math.pow(J/255,2.4)+0.7151522*Math.pow(Q/255,2.4)+0.072175*Math.pow($/255,2.4)}var{sqrt:T6,pow:R8,min:Pq,max:_q,atan2:zU,abs:BU,cos:sJ,sin:IU,exp:Aq,PI:wU}=Math;function LZ(J,Q,$=1,Z=1,W=1){var U=function(K0){return 360*K0/(2*wU)},K=function(K0){return 2*wU*K0/360};J=new d(J),Q=new d(Q);let[H,X,Y]=Array.from(J.lab()),[N,G,q]=Array.from(Q.lab()),F=(H+N)/2,k=T6(R8(X,2)+R8(Y,2)),L=T6(R8(G,2)+R8(q,2)),D=(k+L)/2,E=0.5*(1-T6(R8(D,7)/(R8(D,7)+R8(25,7)))),B=X*(1+E),I=G*(1+E),P=T6(R8(B,2)+R8(Y,2)),A=T6(R8(I,2)+R8(q,2)),C=(P+A)/2,z=U(zU(Y,B)),j=U(zU(q,I)),M=z>=0?z:z+360,R=j>=0?j:j+360,_=BU(M-R)>180?(M+R+360)/2:(M+R)/2,b=1-0.17*sJ(K(_-30))+0.24*sJ(K(2*_))+0.32*sJ(K(3*_+6))-0.2*sJ(K(4*_-63)),x=R-M;x=BU(x)<=180?x:R<=M?x+360:x-360,x=2*T6(P*A)*IU(K(x)/2);let m=N-H,o=A-P,c=1+0.015*R8(F-50,2)/T6(20+R8(F-50,2)),r=1+0.045*C,u=1+0.015*C*b,Q0=30*Aq(-R8((_-275)/25,2)),f0=-(2*T6(R8(C,7)/(R8(C,7)+R8(25,7))))*IU(2*K(Q0)),u0=T6(R8(m/($*c),2)+R8(o/(Z*r),2)+R8(x/(W*u),2)+f0*(o/(Z*r))*(x/(W*u)));return _q(0,Pq(100,u0))}function zZ(J,Q,$="lab"){J=new d(J),Q=new d(Q);let Z=J.get($),W=Q.get($),U=0;for(let K in Z){let H=(Z[K]||0)-(W[K]||0);U+=H*H}return Math.sqrt(U)}var CU=(...J)=>{try{return new d(...J),!0}catch(Q){return!1}};var PU={cool(){return c6([I0.hsl(180,1,0.9),I0.hsl(250,0.7,0.4)])},hot(){return c6(["#000","#f00","#ff0","#fff"],[0,0.25,0.75,1]).mode("rgb")}};var BZ={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},AU=Object.keys(BZ),_U=new Map(AU.map((J)=>[J.toLowerCase(),J])),Tq=typeof Proxy==="function"?new Proxy(BZ,{get(J,Q){let $=Q.toLowerCase();if(_U.has($))return J[_U.get($)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(AU)}}):BZ,TU=Tq;var Sq=(...J)=>{J=Z0(J,"cmyk");let[Q,$,Z,W]=J,U=J.length>4?J[4]:1;if(W===1)return[0,0,0,U];return[Q>=1?0:255*(1-Q)*(1-W),$>=1?0:255*(1-$)*(1-W),Z>=1?0:255*(1-Z)*(1-W),U]},SU=Sq;var{max:jU}=Math,jq=(...J)=>{let[Q,$,Z]=Z0(J,"rgb");Q=Q/255,$=$/255,Z=Z/255;let W=1-jU(Q,jU($,Z)),U=W<1?1/(1-W):0,K=(1-Q-W)*U,H=(1-$-W)*U,X=(1-Z-W)*U;return[K,H,X,W]},fU=jq;d.prototype.cmyk=function(){return fU(this._rgb)};var fq=(...J)=>new d(...J,"cmyk");Object.assign(I0,{cmyk:fq});k0.format.cmyk=SU;k0.autodetect.push({p:2,test:(...J)=>{if(J=Z0(J,"cmyk"),F0(J)==="array"&&J.length===4)return"cmyk"}});var yq=(...J)=>{let Q=Z0(J,"hsla"),$=d8(J)||"lsa";if(Q[0]=w8(Q[0]||0)+"deg",Q[1]=w8(Q[1]*100)+"%",Q[2]=w8(Q[2]*100)+"%",$==="hsla"||Q.length>3&&Q[3]<1)Q[3]="/ "+(Q.length>3?Q[3]:1),$="hsla";else Q.length=3;return`${$.substr(0,3)}(${Q.join(" ")})`},yU=yq;var vq=(...J)=>{let Q=Z0(J,"lab"),$=d8(J)||"lab";if(Q[0]=w8(Q[0])+"%",Q[1]=w8(Q[1]),Q[2]=w8(Q[2]),$==="laba"||Q.length>3&&Q[3]<1)Q[3]="/ "+(Q.length>3?Q[3]:1);else Q.length=3;return`lab(${Q.join(" ")})`},vU=vq;var bq=(...J)=>{let Q=Z0(J,"lch"),$=d8(J)||"lab";if(Q[0]=w8(Q[0])+"%",Q[1]=w8(Q[1]),Q[2]=isNaN(Q[2])?"none":w8(Q[2])+"deg",$==="lcha"||Q.length>3&&Q[3]<1)Q[3]="/ "+(Q.length>3?Q[3]:1);else Q.length=3;return`lch(${Q.join(" ")})`},bU=bq;var hq=(...J)=>{let Q=Z0(J,"lab");if(Q[0]=w8(Q[0]*100)+"%",Q[1]=_7(Q[1]),Q[2]=_7(Q[2]),Q.length>3&&Q[3]<1)Q[3]="/ "+(Q.length>3?Q[3]:1);else Q.length=3;return`oklab(${Q.join(" ")})`},hU=hq;var xq=(...J)=>{let[Q,$,Z,...W]=Z0(J,"rgb"),[U,K,H]=t9(Q,$,Z),[X,Y,N]=lJ(U,K,H);return[X,Y,N,...W.length>0&&W[0]<1?[W[0]]:[]]},iJ=xq;var pq=(...J)=>{let Q=Z0(J,"lch");if(Q[0]=w8(Q[0]*100)+"%",Q[1]=_7(Q[1]),Q[2]=isNaN(Q[2])?"none":w8(Q[2])+"deg",Q.length>3&&Q[3]<1)Q[3]="/ "+(Q.length>3?Q[3]:1);else Q.length=3;return`oklch(${Q.join(" ")})`},xU=pq;var{round:IZ}=Math,gq=(...J)=>{let Q=Z0(J,"rgba"),$=d8(J)||"rgb";if($.substr(0,3)==="hsl")return yU(cJ(Q),$);if($.substr(0,3)==="lab"){let Z=l6();t8("d50");let W=vU(s9(Q),$);return t8(Z),W}if($.substr(0,3)==="lch"){let Z=l6();t8("d50");let W=bU(T7(Q),$);return t8(Z),W}if($.substr(0,5)==="oklab")return hU(t9(Q));if($.substr(0,5)==="oklch")return xU(iJ(Q));if(Q[0]=IZ(Q[0]),Q[1]=IZ(Q[1]),Q[2]=IZ(Q[2]),$==="rgba"||Q.length>3&&Q[3]<1)Q[3]="/ "+(Q.length>3?Q[3]:1),$="rgba";return`${$.substr(0,3)}(${Q.slice(0,$==="rgb"?3:4).join(" ")})`},pU=gq;var mq=(...J)=>{J=Z0(J,"lch");let[Q,$,Z,...W]=J,[U,K,H]=uJ(Q,$,Z),[X,Y,N]=r9(U,K,H);return[X,Y,N,...W.length>0&&W[0]<1?[W[0]]:[]]},oJ=mq;var S6=/((?:-?\d+)|(?:-?\d+(?:\.\d+)?)%|none)/.source,Y6=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%?)|none)/.source,aJ=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)%)|none)/.source,J6=/\s*/.source,J7=/\s+/.source,wZ=/\s*,\s*/.source,rJ=/((?:-?(?:\d+(?:\.\d*)?|\.\d+)(?:deg)?)|none)/.source,Q7=/\s*(?:\/\s*((?:[01]|[01]?\.\d+)|\d+(?:\.\d+)?%))?/.source,gU=new RegExp("^rgba?\\("+J6+[S6,S6,S6].join(J7)+Q7+"\\)$"),mU=new RegExp("^rgb\\("+J6+[S6,S6,S6].join(wZ)+J6+"\\)$"),dU=new RegExp("^rgba\\("+J6+[S6,S6,S6,Y6].join(wZ)+J6+"\\)$"),uU=new RegExp("^hsla?\\("+J6+[rJ,aJ,aJ].join(J7)+Q7+"\\)$"),lU=new RegExp("^hsl?\\("+J6+[rJ,aJ,aJ].join(wZ)+J6+"\\)$"),cU=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,nU=new RegExp("^lab\\("+J6+[Y6,Y6,Y6].join(J7)+Q7+"\\)$"),sU=new RegExp("^lch\\("+J6+[Y6,Y6,rJ].join(J7)+Q7+"\\)$"),iU=new RegExp("^oklab\\("+J6+[Y6,Y6,Y6].join(J7)+Q7+"\\)$"),oU=new RegExp("^oklch\\("+J6+[Y6,Y6,rJ].join(J7)+Q7+"\\)$"),{round:aU}=Math,e9=(J)=>{return J.map((Q,$)=>$<=2?a8(aU(Q),0,255):Q)},M8=(J,Q=0,$=100,Z=!1)=>{if(typeof J==="string"&&J.endsWith("%"))if(J=parseFloat(J.substring(0,J.length-1))/100,Z)J=Q+(J+1)*0.5*($-Q);else J=Q+J*($-Q);return+J},f8=(J,Q)=>{return J==="none"?Q:J},rU=(J)=>{if(J=J.toLowerCase().trim(),J==="transparent")return[0,0,0,0];let Q;if(k0.format.named)try{return k0.format.named(J)}catch($){}if((Q=J.match(gU))||(Q=J.match(mU))){let $=Q.slice(1,4);for(let W=0;W<3;W++)$[W]=+M8(f8($[W],0),0,255);$=e9($);let Z=Q[4]!==void 0?+M8(Q[4],0,1):1;return $[3]=Z,$}if(Q=J.match(dU)){let $=Q.slice(1,5);for(let Z=0;Z<4;Z++)$[Z]=+M8($[Z],0,255);return $}if((Q=J.match(uU))||(Q=J.match(lU))){let $=Q.slice(1,4);$[0]=+f8($[0].replace("deg",""),0),$[1]=+M8(f8($[1],0),0,100)*0.01,$[2]=+M8(f8($[2],0),0,100)*0.01;let Z=e9(S7($)),W=Q[4]!==void 0?+M8(Q[4],0,1):1;return Z[3]=W,Z}if(Q=J.match(cU)){let $=Q.slice(1,4);$[1]*=0.01,$[2]*=0.01;let Z=S7($);for(let W=0;W<3;W++)Z[W]=aU(Z[W]);return Z[3]=+Q[4],Z}if(Q=J.match(nU)){let $=Q.slice(1,4);$[0]=M8(f8($[0],0),0,100),$[1]=M8(f8($[1],0),-125,125,!0),$[2]=M8(f8($[2],0),-125,125,!0);let Z=l6();t8("d50");let W=e9(n9($));t8(Z);let U=Q[4]!==void 0?+M8(Q[4],0,1):1;return W[3]=U,W}if(Q=J.match(sU)){let $=Q.slice(1,4);$[0]=M8($[0],0,100),$[1]=M8(f8($[1],0),0,150,!1),$[2]=+f8($[2].replace("deg",""),0);let Z=l6();t8("d50");let W=e9(i9($));t8(Z);let U=Q[4]!==void 0?+M8(Q[4],0,1):1;return W[3]=U,W}if(Q=J.match(iU)){let $=Q.slice(1,4);$[0]=M8(f8($[0],0),0,1),$[1]=M8(f8($[1],0),-0.4,0.4,!0),$[2]=M8(f8($[2],0),-0.4,0.4,!0);let Z=e9(r9($)),W=Q[4]!==void 0?+M8(Q[4],0,1):1;return Z[3]=W,Z}if(Q=J.match(oU)){let $=Q.slice(1,4);$[0]=M8(f8($[0],0),0,1),$[1]=M8(f8($[1],0),0,0.4,!1),$[2]=+f8($[2].replace("deg",""),0);let Z=e9(oJ($)),W=Q[4]!==void 0?+M8(Q[4],0,1):1;return Z[3]=W,Z}};rU.test=(J)=>{return gU.test(J)||uU.test(J)||nU.test(J)||sU.test(J)||iU.test(J)||oU.test(J)||mU.test(J)||dU.test(J)||lU.test(J)||cU.test(J)||J==="transparent"};var CZ=rU;d.prototype.css=function(J){return pU(this._rgb,J)};var dq=(...J)=>new d(...J,"css");I0.css=dq;k0.format.css=CZ;k0.autodetect.push({p:5,test:(J,...Q)=>{if(!Q.length&&F0(J)==="string"&&CZ.test(J))return"css"}});k0.format.gl=(...J)=>{let Q=Z0(J,"rgba");return Q[0]*=255,Q[1]*=255,Q[2]*=255,Q};var uq=(...J)=>new d(...J,"gl");I0.gl=uq;d.prototype.gl=function(){let J=this._rgb;return[J[0]/255,J[1]/255,J[2]/255,J[3]]};d.prototype.hex=function(J){return dJ(this._rgb,J)};var lq=(...J)=>new d(...J,"hex");I0.hex=lq;k0.format.hex=gJ;k0.autodetect.push({p:4,test:(J,...Q)=>{if(!Q.length&&F0(J)==="string"&&[3,4,5,6,7,8,9].indexOf(J.length)>=0)return"hex"}});var{log:tJ}=Math,cq=(J)=>{let Q=J/100,$,Z,W;if(Q<66)$=255,Z=Q<6?0:-155.25485562709179-0.44596950469579133*(Z=Q-2)+104.49216199393888*tJ(Z),W=Q<20?0:-254.76935184120902+0.8274096064007395*(W=Q-10)+115.67994401066147*tJ(W);else $=351.97690566805693+0.114206453784165*($=Q-55)-40.25366309332127*tJ($),Z=325.4494125711974+0.07943456536662342*(Z=Q-50)-28.0852963507957*tJ(Z),W=255;return[$,Z,W,1]},eJ=cq;var{round:nq}=Math,sq=(...J)=>{let Q=Z0(J,"rgb"),$=Q[0],Z=Q[2],W=1000,U=40000,K=0.4,H;while(U-W>K){H=(U+W)*0.5;let X=eJ(H);if(X[2]/X[0]>=Z/$)U=H;else W=H}return nq(H)},tU=sq;d.prototype.temp=d.prototype.kelvin=d.prototype.temperature=function(){return tU(this._rgb)};var PZ=(...J)=>new d(...J,"temp");Object.assign(I0,{temp:PZ,kelvin:PZ,temperature:PZ});k0.format.temp=k0.format.kelvin=k0.format.temperature=eJ;d.prototype.oklch=function(){return iJ(this._rgb)};var iq=(...J)=>new d(...J,"oklch");Object.assign(I0,{oklch:iq});k0.format.oklch=oJ;k0.autodetect.push({p:2,test:(...J)=>{if(J=Z0(J,"oklch"),F0(J)==="array"&&J.length===3)return"oklch"}});Object.assign(I0,{analyze:MZ,average:NU,bezier:GU,blend:EU,brewer:TU,Color:d,colors:u6,contrast:OU,contrastAPCA:LU,cubehelix:RZ,deltaE:LZ,distance:zZ,input:k0,interpolate:O6,limits:VZ,mix:O6,random:DU,scale:c6,scales:PU,valid:CU});var Q6=I0;var oq=function(){let J=0.5*(Math.sqrt(3)-1),Q=(3-Math.sqrt(3))/6,$=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function Z(U){this.p=new Uint8Array(256),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);let K=U?W(U):Math.random;for(let H=0;H<256;H++)this.p[H]=H;for(let H=255;H>0;H--){let X=Math.floor(K()*(H+1));[this.p[H],this.p[X]]=[this.p[X],this.p[H]]}for(let H=0;H<512;H++)this.perm[H]=this.p[H&255],this.permMod12[H]=this.perm[H]%12}function W(U){return function(){let K=U+=1831565813;return K=Math.imul(K^K>>>15,K|1),K^=K+Math.imul(K^K>>>7,K|61),((K^K>>>14)>>>0)/4294967296}}return Z.prototype.noise2D=function(U,K){let H=this.perm,X=this.permMod12,Y,N,G,q=(U+K)*J,F=Math.floor(U+q),k=Math.floor(K+q),L=(F+k)*Q,D=F-L,E=k-L,B=U-D,I=K-E,P,A;if(B>I)P=1,A=0;else P=0,A=1;let C=B-P+Q,z=I-A+Q,j=B-1+2*Q,M=I-1+2*Q,R=F&255,_=k&255,b=X[R+H[_]],x=X[R+P+H[_+A]],m=X[R+1+H[_+1]],o=0.5-B*B-I*I;if(o<0)Y=0;else o*=o,Y=o*o*($[b][0]*B+$[b][1]*I);let c=0.5-C*C-z*z;if(c<0)N=0;else c*=c,N=c*c*($[x][0]*C+$[x][1]*z);let r=0.5-j*j-M*M;if(r<0)G=0;else r*=r,G=r*r*($[m][0]*j+$[m][1]*M);return 70*(Y+N+G)},Z}(),eU=new oq;class QK extends m8{constructor(J,Q,$,Z){super();this.x=J,this.y=Q,this.l=$,this.noise=Z,this.yn=this.y*this.noise.coef}getPoint(J){let Q=this.x+J*this.l,$=Q*this.noise.coef,Z=eU.noise2D($+this.noise.time,this.yn-this.noise.time),U=eU.noise2D(this.yn+this.noise.time,$-this.noise.time)*this.noise.height,K=this.y+Z*this.noise.height;return new f(Q,K,U)}}class $K{constructor(J,Q,$,Z,W,U,K){this.segments=Z,this.radialSegments=8,this.radius=W,this.curve=new QK(J,Q,$,K),this.geometry=new d9(this.curve,Z,W,this.radialSegments,!1),this.material=new PJ({color:2236962,metalness:0.8,roughness:0.2}),this.mesh=new i8(this.geometry,this.material)}update(){let J=new d9(this.curve,this.segments,this.radius,this.radialSegments,!1);this.geometry.dispose(),this.geometry=J,this.mesh.geometry=this.geometry}}function aq(J){J={fov:75,cameraZ:150,background:0,tubeRadius:3,resY:10,resX:4,noiseCoef:50,timeCoef:50,heightCoef:20,ambientColor:13421772,lightIntensity:2000,light1Color:2422174,light2Color:14766144,light3Color:1803678,light4Color:5025867,...J};let Q,$,Z,W,U,K,H,X=L$.randFloat,Y,N,G,q,F,k={},L,D="waveBackground_animated",E=localStorage.getItem(D)!=="false",B=null;x(Q6("#d11f6c")),I();function I(){console.log("App.init() called");let K0=document.getElementById("wave-bg");if(console.log("Canvas element:",K0),!K0){console.warn("Wave background canvas not found");return}Q=new XZ({canvas:K0,antialias:!0}),console.log("Renderer created:",Q),Z=new I8(J.fov),Z.position.z=J.cameraZ,f0(),console.log("After updateSize - wWidth:",K,"wHeight:",H),window.addEventListener("resize",f0,!1),P(),console.log("Scene initialized, objects:",F?.length),m()}function P(){if($=new zJ,J.background!==void 0)$.background=new x0(J.background);A(),C(),Z.position.z=130}function A(){$.add(new TJ(J.ambientColor,0.3));let K0=50,V0=1000;Y=new H9(J.light1Color,J.lightIntensity,V0),Y.position.set(0,H/2,K0),$.add(Y),N=new H9(J.light2Color,J.lightIntensity,V0),N.position.set(0,-H/2,K0),$.add(N),G=new H9(J.light3Color,J.lightIntensity,V0),G.position.set(K/2,0,K0),$.add(G),q=new H9(J.light4Color,J.lightIntensity,V0),q.position.set(-K/2,0,K0),$.add(q)}function C(){z();let K0=Math.round(K/J.resX)+1,V0=Math.round(H/J.resY)+1;F=[];let l,U0;for(let $0=0;$0<V0;$0++)U0=L(X(0,1)).hex(),l=new $K(-K/2,-H/2+$0*J.resY,K,K0,J.tubeRadius,U0,k),F.push(l),$.add(l.mesh)}function z(){k.coef=J.noiseCoef*0.00012,k.height=J.heightCoef,k.time=Date.now()*J.timeCoef*0.000002}function j(){let K0=getComputedStyle(document.body),V0=parseInt(K0.getPropertyValue("--hue1"))||222,l=parseInt(K0.getPropertyValue("--hue2"))||V0;return{hue1:V0,hue2:l}}function M(){return document.body.classList.contains("dark-mode")}function R(){if($){let K0=M();if($.background=new x0(K0?0:15790837),$.children[0]&&$.children[0].isAmbientLight)$.children[0].intensity=K0?0.3:0.5}}function _(){requestAnimationFrame(()=>{let{hue1:K0,hue2:V0}=j();if(R(),Y.color=new x0(Q6.hsl(K0,1,0.6).hex()),G.color=new x0(Q6.hsl(K0,0.95,0.55).hex()),N.color=new x0(Q6.hsl(V0,1,0.65).hex()),N.intensity=J.lightIntensity*1.3,q.color=new x0(Q6.hsl(V0,1,0.6).hex()),q.intensity=J.lightIntensity*1.3,!E)Q.render($,Z)})}function b(){let K0=Q6.random();x(K0);for(let V0=0;V0<F.length;V0++)F[V0].material.color=new x0(L(X(0,1)).hex());Y.color=new x0(Q6.random().hex()),N.color=new x0(Q6.random().hex()),G.color=new x0(Q6.random().hex()),q.color=new x0(Q6.random().hex())}function x(K0){let V0=[K0.set("hsl.s",X(0,1)).set("hsl.l",X(0,0.3)).hex(),K0.set("hsl.s",X(0,1)).set("hsl.l",0.3+X(0,0.4)).hex(),K0.set("hsl.s",X(0,1)).set("hsl.l",0.7+X(0,0.3)).hex(),"#ffffff"];L=Q6.scale(V0)}function m(){if(!E)return;B=requestAnimationFrame(m),Q0(),E0(),Q.render($,Z)}function o(){if(E=!1,B)cancelAnimationFrame(B),B=null}function c(){if(!E)E=!0,m()}function r(K0){if(localStorage.setItem(D,K0?"true":"false"),K0)c();else{o();let V0=K/2,l=H/2;Y.position.set(-V0*0.5,l*0.5,50),G.position.set(V0*0.5,-l*0.5,50),N.position.set(V0*0.5,l*0.5,50),q.position.set(-V0*0.5,-l*0.5,50),Q.render($,Z)}}function u(){return E}function Q0(){z();for(let K0=0;K0<F.length;K0++)F[K0].update()}function E0(){let K0=Date.now()*0.001,V0=K/2,l=H/2;Y.position.x=Math.sin(K0*0.1)*V0,Y.position.y=Math.cos(K0*0.2)*l,N.position.x=Math.cos(K0*0.3)*V0,N.position.y=Math.sin(K0*0.4)*l,G.position.x=Math.sin(K0*0.5)*V0,G.position.y=Math.sin(K0*0.6)*l,q.position.x=Math.sin(K0*0.7)*V0,q.position.y=Math.cos(K0*0.8)*l}function f0(){if(W=window.innerWidth,U=window.innerHeight,Q&&Z){Q.setSize(W,U),Z.aspect=W/U,Z.updateProjectionMatrix();let K0=u0();K=K0[0],H=K0[1]}}function u0(){let K0=new I8(Z.fov,Z.aspect),V0=K0.fov*Math.PI/180,l=2*Math.tan(V0/2)*Math.abs(J.cameraZ);return[l*K0.aspect,l]}if(_(),!E)requestAnimationFrame(()=>r(!1));return{updateColors:b,updateTheme:_,setAnimated:r,isAnimated:u,pause:o,resume:c}}function JK(){console.log("initWaveBackground called");let J=aq();console.log("App created:",J),window.waveBackground={updateTheme:()=>J?.updateTheme(),updateColors:()=>J?.updateColors(),setAnimated:(Q)=>J?.setAnimated(Q),isAnimated:()=>J?.isAnimated()??!0,pause:()=>J?.pause(),resume:()=>J?.resume()}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",JK);else JK();
