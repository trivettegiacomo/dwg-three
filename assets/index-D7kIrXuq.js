(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="179",T_=0,Gf=1,E_=2,im=1,b_=2,sr=3,gr=0,Dn=1,ki=2,zr=0,no=1,Wf=2,Xf=3,Yf=4,w_=5,hs=100,A_=101,R_=102,C_=103,P_=104,D_=200,L_=201,I_=202,U_=203,bu=204,wu=205,N_=206,O_=207,F_=208,B_=209,k_=210,z_=211,H_=212,V_=213,G_=214,Au=0,Ru=1,Cu=2,fo=3,Pu=4,Du=5,Lu=6,Iu=7,Hh=0,W_=1,X_=2,Hr=0,Y_=1,q_=2,K_=3,$_=4,j_=5,Z_=6,J_=7,qf="attached",Q_="detached",rm=300,po=301,mo=302,Uu=303,Nu=304,pc=306,go=1e3,Ur=1001,$l=1002,Ln=1003,sm=1004,$o=1005,Cn=1006,Il=1007,ur=1008,qi=1009,om=1010,am=1011,Ma=1012,Vh=1013,Ts=1014,Ai=1015,ka=1016,Gh=1017,Wh=1018,Sa=1020,lm=35902,cm=1021,Xh=1022,di=1023,Ta=1026,Ea=1027,Yh=1028,qh=1029,um=1030,Kh=1031,$h=1033,Ul=33776,Nl=33777,Ol=33778,Fl=33779,Ou=35840,Fu=35841,Bu=35842,ku=35843,zu=36196,Hu=37492,Vu=37496,Gu=37808,Wu=37809,Xu=37810,Yu=37811,qu=37812,Ku=37813,$u=37814,ju=37815,Zu=37816,Ju=37817,Qu=37818,eh=37819,th=37820,nh=37821,Bl=36492,ih=36494,rh=36495,hm=36283,sh=36284,oh=36285,ah=36286,ba=2300,wa=2301,bc=2302,Kf=2400,$f=2401,jf=2402,e0=2500,t0=0,fm=1,lh=2,n0=3200,i0=3201,jh=0,r0=1,Ir="",on="srgb",Un="srgb-linear",jl="linear",Tt="srgb",Ds=7680,Zf=519,s0=512,o0=513,a0=514,dm=515,l0=516,c0=517,u0=518,h0=519,ch=35044,Jf=35048,Qf="300 es",Hi=2e3,Zl=2001;class Co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ed=1234567;const sa=Math.PI/180,_o=180/Math.PI;function Ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function Zh(s,e){return(s%e+e)%e}function f0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function d0(s,e,t){return s!==e?(t-s)/(e-s):0}function oa(s,e,t){return(1-t)*s+t*e}function p0(s,e,t,n){return oa(s,e,1-Math.exp(-t*n))}function m0(s,e=1){return e-Math.abs(Zh(s,e*2)-e)}function g0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function v0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function x0(s,e){return s+Math.random()*(e-s)}function y0(s){return s*(.5-Math.random())}function M0(s){s!==void 0&&(ed=s);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function S0(s){return s*sa}function T0(s){return s*_o}function E0(s){return(s&s-1)===0&&s!==0}function b0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function w0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function A0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const R0={DEG2RAD:sa,RAD2DEG:_o,generateUUID:Ri,clamp:ut,euclideanModulo:Zh,mapLinear:f0,inverseLerp:d0,lerp:oa,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:_0,randInt:v0,randFloat:x0,randFloatSpread:y0,seededRandom:M0,degToRad:S0,radToDeg:T0,isPowerOfTwo:E0,ceilPowerOfTwo:b0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:A0,normalize:Mt,denormalize:Ti};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),R=Math.atan2(w,p*T);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}const v=a*T;if(l=l*m+f*v,c=c*m+d*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new z,td=new Di;class tt{constructor(e,t,n,i,r,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],T=i[1],S=i[4],v=i[7],w=i[2],R=i[5],b=i[8];return r[0]=o*g+a*T+l*w,r[3]=o*m+a*S+l*R,r[6]=o*p+a*v+l*b,r[1]=c*g+u*T+h*w,r[4]=c*m+u*S+h*R,r[7]=c*p+u*v+h*b,r[2]=f*g+d*T+_*w,r[5]=f*m+d*S+_*R,r[8]=f*p+d*v+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new tt;function pm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Aa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function C0(){const s=Aa("canvas");return s.style.display="block",s}const nd={};function io(s){s in nd||(nd[s]=!0,console.warn(s))}function P0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const id=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rd=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D0(){const s={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(i.r=ro(i.r),i.g=ro(i.g),i.b=ro(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ir?jl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return io("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return io("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Un]:{primaries:e,whitePoint:n,transfer:jl,toXYZ:id,fromXYZ:rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:id,fromXYZ:rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),s}const mt=D0();function pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class L0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Aa("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=pr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pr(t[n]/255)*255):t[n]=pr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I0=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Rc(i[o].image)):r.push(Rc(i[o]))}else r=Rc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Rc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?L0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U0=0;const Cc=new z;class rn extends Co{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Ur,i=Ur,r=Cn,o=ur,a=di,l=qi,c=rn.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ri(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=rm;rn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(d+1)/2,w=(p+1)/2,R=(u+f)/4,b=(h+g)/4,P=(_+m)/4;return S>v&&S>w?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=b/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=P/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=b/r,i=P/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-g)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N0 extends Co{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new rn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Jh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends N0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mm extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends rn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),Wa.subVectors(this.max,Oo),Is.subVectors(e.a,Oo),Us.subVectors(e.b,Oo),Ns.subVectors(e.c,Oo),Sr.subVectors(Us,Is),Tr.subVectors(Ns,Us),Zr.subVectors(Is,Ns);let t=[0,-Sr.z,Sr.y,0,-Tr.z,Tr.y,0,-Zr.z,Zr.y,Sr.z,0,-Sr.x,Tr.z,0,-Tr.x,Zr.z,0,-Zr.x,-Sr.y,Sr.x,0,-Tr.y,Tr.x,0,-Zr.y,Zr.x,0];return!Pc(t,Is,Us,Ns,Wa)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,Is,Us,Ns,Wa))?!1:(Xa.crossVectors(Sr,Tr),t=[Xa.x,Xa.y,Xa.z],Pc(t,Is,Us,Ns,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new z,new z,new z,new z,new z,new z,new z,new z],xi=new z,Ga=new xr,Is=new z,Us=new z,Ns=new z,Sr=new z,Tr=new z,Zr=new z,Oo=new z,Wa=new z,Xa=new z,Jr=new z;function Pc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Jr.fromArray(s,r);const a=i.x*Math.abs(Jr.x)+i.y*Math.abs(Jr.y)+i.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),u=n.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const F0=new xr,Fo=new z,Dc=new z;class ji{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):F0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Dc)),this.expandByPoint(Fo.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qi=new z,Lc=new z,Ya=new z,Er=new z,Ic=new z,qa=new z,Uc=new z;class mc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lc.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(Lc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),a=Er.dot(this.direction),l=-Er.dot(Ya),c=Er.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Lc).addScaledVector(Ya,f),d}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const n=Qi.dot(this.direction),i=Qi.dot(Qi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,n,i,r){Ic.subVectors(t,e),qa.subVectors(n,e),Uc.crossVectors(Ic,qa);let o=this.direction.dot(Uc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Er.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(Er,qa));if(l<0)return null;const c=a*this.direction.dot(Ic.cross(Er));if(c<0||l+c>o)return null;const u=-a*Er.dot(Uc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,k0)}lookAt(e,t,n){const i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),br.crossVectors(n,Xn),br.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),br.crossVectors(n,Xn)),br.normalize(),Ka.crossVectors(Xn,br),i[0]=br.x,i[4]=Ka.x,i[8]=Xn.x,i[1]=br.y,i[5]=Ka.y,i[9]=Xn.y,i[2]=br.z,i[6]=Ka.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],T=n[3],S=n[7],v=n[11],w=n[15],R=i[0],b=i[4],P=i[8],y=i[12],M=i[1],C=i[5],U=i[9],H=i[13],V=i[2],j=i[6],W=i[10],Y=i[14],G=i[3],oe=i[7],L=i[11],ge=i[15];return r[0]=o*R+a*M+l*V+c*G,r[4]=o*b+a*C+l*j+c*oe,r[8]=o*P+a*U+l*W+c*L,r[12]=o*y+a*H+l*Y+c*ge,r[1]=u*R+h*M+f*V+d*G,r[5]=u*b+h*C+f*j+d*oe,r[9]=u*P+h*U+f*W+d*L,r[13]=u*y+h*H+f*Y+d*ge,r[2]=_*R+g*M+m*V+p*G,r[6]=_*b+g*C+m*j+p*oe,r[10]=_*P+g*U+m*W+p*L,r[14]=_*y+g*H+m*Y+p*ge,r[3]=T*R+S*M+v*V+w*G,r[7]=T*b+S*C+v*j+w*oe,r[11]=T*P+S*U+v*W+w*L,r[15]=T*y+S*H+v*Y+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],T=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,S=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,v=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,w=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,R=t*T+n*S+i*v+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=T*b,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*b,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*b,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*b,e[4]=S*b,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*b,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*b,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*b,e[8]=v*b,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*p-t*h*p)*b,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*b,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=w*b,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*b,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,g=o*u,m=o*h,p=a*h,T=l*c,S=l*u,v=l*h,w=n.x,R=n.y,b=n.z;return i[0]=(1-(g+p))*w,i[1]=(d+v)*w,i[2]=(_-S)*w,i[3]=0,i[4]=(d-v)*R,i[5]=(1-(f+p))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(_+S)*b,i[9]=(m-T)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Os.set(i[0],i[1],i[2]).length();const o=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yi.copy(this);const c=1/r,u=1/o,h=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Hi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let _,g;if(l)_=r/(o-r),g=o*r/(o-r);else if(a===Hi)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zl)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Hi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,g;if(l)_=1/(o-r),g=o/(o-r);else if(a===Hi)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===Zl)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new z,yi=new $e,B0=new z(0,0,0),k0=new z(1,1,1),br=new z,Ka=new z,Xn=new z,sd=new $e,od=new Di;class Pi{constructor(e=0,t=0,n=0,i=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const ad=new z,Fs=new Di,er=new $e,$a=new z,Bo=new z,H0=new z,V0=new Di,ld=new z(1,0,0),cd=new z(0,1,0),ud=new z(0,0,1),hd={type:"added"},G0={type:"removed"},Bs={type:"childadded",child:null},Nc={type:"childremoved",child:null};class Bt extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new z,t=new Pi,n=new Di,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new tt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ud,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(Bo,$a,this.up):er.lookAt($a,Bo,this.up),this.quaternion.setFromRotationMatrix(er),i&&(er.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(er),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G0),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new z(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new z,tr=new z,Oc=new z,nr=new z,ks=new z,zs=new z,fd=new z,Fc=new z,Bc=new z,kc=new z,zc=new _t,Hc=new _t,Vc=new _t;class Ei{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mi.subVectors(i,t),tr.subVectors(n,t),Oc.subVectors(e,t);const o=Mi.dot(Mi),a=Mi.dot(tr),l=Mi.dot(Oc),c=tr.dot(tr),u=tr.dot(Oc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nr.x),l.addScaledVector(o,nr.y),l.addScaledVector(a,nr.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return zc.setScalar(0),Hc.setScalar(0),Vc.setScalar(0),zc.fromBufferAttribute(e,t),Hc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(zc,r.x),o.addScaledVector(Hc,r.y),o.addScaledVector(Vc,r.z),o}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),tr.subVectors(e,t),Mi.cross(tr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Mi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ks.subVectors(i,n),zs.subVectors(r,n),Fc.subVectors(e,n);const l=ks.dot(Fc),c=zs.dot(Fc);if(l<=0&&c<=0)return t.copy(n);Bc.subVectors(e,i);const u=ks.dot(Bc),h=zs.dot(Bc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ks,o);kc.subVectors(e,r);const d=ks.dot(kc),_=zs.dot(kc);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(zs,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return fd.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(fd,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(ks,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Gc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=mt.workingColorSpace){if(e=Zh(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gc(o,r,e+1/3),this.g=Gc(o,r,e),this.b=Gc(o,r,e-1/3)}return mt.colorSpaceToWorking(this,i),this}setStyle(e,t=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const n=_m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return mt.workingToColorSpace(un.copy(this),e),Math.round(ut(un.r*255,0,255))*65536+Math.round(ut(un.g*255,0,255))*256+Math.round(ut(un.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(un.copy(this),t);const n=un.r,i=un.g,r=un.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=on){mt.workingToColorSpace(un.copy(this),e);const t=un.r,n=un.g,i=un.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(ja);const n=oa(wr.h,ja.h,t),i=oa(wr.s,ja.s,t),r=oa(wr.l,ja.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Xe;Xe.NAMES=_m;let W0=0;class Ci extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=no,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=wu,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(n.blending=this.blending),this.side!==gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bu&&(n.blendSrc=this.blendSrc),this.blendDst!==wu&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ds extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new z,Za=new dt;let X0=0;class In{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}}class vm extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xm extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _i extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Y0=0;const li=new $e,Wc=new Bt,Hs=new z,Yn=new xr,ko=new xr,en=new z;class Li extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pm(e)?xm:vm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _i(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Yn.min,ko.min),Yn.expandByPoint(en),en.addVectors(Yn.max,ko.max),Yn.expandByPoint(en)):(Yn.expandByPoint(ko.min),Yn.expandByPoint(ko.max))}Yn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),en.add(Hs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new z,l[P]=new z;const c=new z,u=new z,h=new z,f=new dt,d=new dt,_=new dt,g=new z,m=new z;function p(P,y,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(C),a[P].add(g),a[y].add(g),a[M].add(g),l[P].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,y=T.length;P<y;++P){const M=T[P],C=M.start,U=M.count;for(let H=C,V=C+U;H<V;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new z,v=new z,w=new z,R=new z;function b(P){w.fromBufferAttribute(i,P),R.copy(w);const y=a[P];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(R,y);const C=v.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,y=T.length;P<y;++P){const M=T[P],C=M.start,U=M.count;for(let H=C,V=C+U;H<V;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new In(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Li,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new $e,Qr=new mc,Ja=new ji,pd=new z,Qa=new z,el=new z,tl=new z,Xc=new z,nl=new z,md=new z,il=new z;class Pn extends Bt{constructor(e=new Li,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Xc.fromBufferAttribute(h,e),o?nl.addScaledVector(Xc,u):nl.addScaledVector(Xc.sub(t),u))}t.add(nl)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),Qr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(Ja,pd)===null||Qr.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),Qr.copy(e.ray).applyMatrix4(dd),!(n.boundingBox!==null&&Qr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=S;v<w;v+=3){const R=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);i=rl(this,p,e,n,c,u,h,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=rl(this,o,e,n,c,u,h,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=S;v<w;v+=3){const R=v,b=v+1,P=v+2;i=rl(this,p,e,n,c,u,h,R,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const T=m,S=m+1,v=m+2;i=rl(this,o,e,n,c,u,h,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function q0(s,e,t,n,i,r,o,a){let l;if(e.side===Dn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===gr,a),l===null)return null;il.copy(a),il.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(il);return c<t.near||c>t.far?null:{distance:c,point:il.clone(),object:s}}function rl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Qa),s.getVertexPosition(l,el),s.getVertexPosition(c,tl);const u=q0(s,e,t,n,Qa,el,tl,md);if(u){const h=new z;Ei.getBarycoord(md,Qa,el,tl,h),i&&(u.uv=Ei.getInterpolatedAttribute(i,a,l,c,h,new dt)),r&&(u.uv1=Ei.getInterpolatedAttribute(r,a,l,c,h,new dt)),o&&(u.normal=Ei.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Ei.getNormal(Qa,el,tl,f.normal),u.face=f,u.barycoord=h}return u}class za extends Li{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(u,3)),this.setAttribute("uv",new _i(h,2));function _(g,m,p,T,S,v,w,R,b,P,y){const M=v/b,C=w/P,U=v/2,H=w/2,V=R/2,j=b+1,W=P+1;let Y=0,G=0;const oe=new z;for(let L=0;L<W;L++){const ge=L*C-H;for(let Ue=0;Ue<j;Ue++){const Ze=Ue*M-U;oe[g]=Ze*T,oe[m]=ge*S,oe[p]=V,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=R>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Ue/b),h.push(1-L/P),Y+=1}}for(let L=0;L<P;L++)for(let ge=0;ge<b;ge++){const Ue=f+ge+j*L,Ze=f+ge+j*(L+1),Fe=f+(ge+1)+j*(L+1),Z=f+(ge+1)+j*L;l.push(Ue,Ze,Z),l.push(Ze,Fe,Z),G+=6}a.addGroup(d,G,y),d+=G,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(s){const e={};for(let t=0;t<s.length;t++){const n=vo(s[t]);for(const i in n)e[i]=n[i]}return e}function K0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ym(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const $0={clone:vo,merge:Sn};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mm extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new z,gd=new dt,_d=new dt;class dn extends Mm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,gd,_d),t.subVectors(_d,gd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class J0 extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Vs,Gs,e,t);i.layers=this.layers,this.add(i);const r=new dn(Vs,Gs,e,t);r.layers=this.layers,this.add(r);const o=new dn(Vs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new dn(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new dn(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new dn(Vs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Sm extends rn{constructor(e=[],t=po,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q0 extends Xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new za(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:zr});r.uniforms.tEquirect.value=t;const o=new Pn(i,r),a=t.minFilter;return t.minFilter===ur&&(t.minFilter=Cn),new J0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class hr extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ev={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tv extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new z;class Qh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vd=new z,xd=new _t,yd=new _t,iv=new z,Md=new $e,sl=new z,qc=new ji,Sd=new $e,Kc=new mc;class rv extends Pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qf,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sl),this.boundingBox.expandByPoint(sl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ji),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sl),this.boundingSphere.expandByPoint(sl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qc.copy(this.boundingSphere),qc.applyMatrix4(i),e.ray.intersectsSphere(qc)!==!1&&(Sd.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Q_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xd.fromBufferAttribute(i.attributes.skinIndex,e),yd.fromBufferAttribute(i.attributes.skinWeight,e),vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=yd.getComponent(r);if(o!==0){const a=xd.getComponent(r);Md.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(iv.copy(vd).applyMatrix4(Md),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tm extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Em extends rn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ln,u=Ln,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Td=new $e,sv=new $e;class ef{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:sv;Td.multiplyMatrices(a,t[r]),Td.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ef(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Em(t,e,e,di,Ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Tm),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ra extends In{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ws=new $e,Ed=new $e,ol=[],bd=new xr,ov=new $e,zo=new Pn,Ho=new ji;class bm extends Pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ra(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ov)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),bd.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(bd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Ho.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(n),e.ray.intersectsSphere(Ho)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ws),Ed.multiplyMatrices(n,Ws),zo.matrixWorld=Ed,zo.raycast(e,ol);for(let o=0,a=ol.length;o<a;o++){const l=ol[o];l.instanceId=r,l.object=this,t.push(l)}ol.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Em(new Float32Array(i*this.count),i,this.count,Yh,Ai));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $c=new z,av=new z,lv=new tt;class Dr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$c.subVectors(n,t).cross(av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($c),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lv.getNormalMatrix(e),i=this.coplanarPoint($c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ji,cv=new dt(.5,.5),al=new z;class tf{constructor(e=new Dr,t=new Dr,n=new Dr,i=new Dr,r=new Dr,o=new Dr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],T=r[12],S=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-o,d-u,p-_,w-T).normalize(),i[1].setComponents(c+o,d+u,p+_,w+T).normalize(),i[2].setComponents(c+a,d+h,p+g,w+S).normalize(),i[3].setComponents(c-a,d-h,p-g,w-S).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,p-m,w-v).normalize();else if(i[4].setComponents(c-l,d-f,p-m,w-v).normalize(),t===Hi)i[5].setComponents(c+l,d+f,p+m,w+v).normalize();else if(t===Zl)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const t=cv.distanceTo(e.center);return es.radius=.7071067811865476+t,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(al.x=i.normal.x>0?e.max.x:e.min.x,al.y=i.normal.y>0?e.max.y:e.min.y,al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wm extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jl=new z,Ql=new z,wd=new $e,Vo=new mc,ll=new ji,jc=new z,Ad=new z;class nf extends Bt{constructor(e=new Li,t=new wm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jl.fromBufferAttribute(t,i-1),Ql.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jl.distanceTo(Ql);e.setAttribute("lineDistance",new _i(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(i),ll.radius+=r,e.ray.intersectsSphere(ll)===!1)return;wd.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(wd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),T=u.getX(g+1),S=cl(this,e,Vo,l,p,T,g);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=cl(this,e,Vo,l,g,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=cl(this,e,Vo,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=cl(this,e,Vo,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function cl(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Jl.fromBufferAttribute(a,i),Ql.fromBufferAttribute(a,r),t.distanceSqToSegment(Jl,Ql,jc,Ad)>n)return;jc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(jc);if(!(c<e.near||c>e.far))return{distance:c,point:Ad.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Rd=new z,Cd=new z;class uv extends nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Rd.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rd.distanceTo(Cd);e.setAttribute("lineDistance",new _i(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hv extends nf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Am extends Ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pd=new $e,uh=new mc,ul=new ji,hl=new z;class fv extends Bt{constructor(e=new Li,t=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(i),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Pd.copy(i).invert(),uh.copy(e.ray).applyMatrix4(Pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);hl.fromBufferAttribute(h,m),Dd(hl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)hl.fromBufferAttribute(h,_),Dd(hl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dd(s,e,t,n,i,r,o){const a=uh.distanceSqToPoint(s);if(a<t){const l=new z;uh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rm extends rn{constructor(e,t,n=Ts,i,r,o,a=Ln,l=Ln,c,u=Ta,h=1){if(u!==Ta&&u!==Ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Po extends Li{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let S=0;S<c;S++){const v=S*h-r;_.push(v,-T,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,v=T+c*(p+1),w=T+1+c*(p+1),R=T+1+c*p;d.push(S,v,R),d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(g,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}class rf extends Li{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const T=[],S=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const R=w/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(R+v,1-S),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){const S=u[p][T+1],v=u[p][T],w=u[p+1][T],R=u[p+1][T+1];(p!==0||o>0)&&d.push(S,v,R),(p!==n-1||l<Math.PI)&&d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new _i(_,3)),this.setAttribute("normal",new _i(g,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sf extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends sf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class dv extends Ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pv extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mv extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function fl(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _v(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ld(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Cm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ha{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vv extends Ha{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kf,endingEnd:Kf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $f:r=e,a=2*t-n;break;case jf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $f:o=e,l=2*n-t;break;case jf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,T=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,S=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+T*o[c+w]+S*o[l+w]+v*o[h+w];return r}}class xv extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class yv extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fl(t,this.TimeBufferType),this.values=fl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fl(e.times,Array),values:fl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ba:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case bc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&gv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=wa;class Do extends Ii{constructor(e,t,n){super(e,t,n)}}Do.prototype.ValueTypeName="bool";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=ba;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class Pm extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}Pm.prototype.ValueTypeName="color";class xo extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}xo.prototype.ValueTypeName="number";class Mv extends Ha{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Di.slerpFlat(r,0,o,c-a,o,c,l);return r}}class yo extends Ii{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Mv(this.times,this.values,this.getValueSize(),e)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends Ii{constructor(e,t,n){super(e,t,n)}}Lo.prototype.ValueTypeName="string";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=ba;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends Ii{constructor(e,t,n,i){super(e,t,n,i)}}Mo.prototype.ValueTypeName="vector";class Sv{constructor(e="",t=-1,n=[],i=e0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ev(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ii.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=_v(l);l=Ld(l,1,u),c=Ld(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];Cm(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let T=0;T!==f[_].morphTargets.length;++T){const S=f[_];m.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new xo(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Mo,d+".position",f,"pos",i),n(yo,d+".quaternion",f,"rot",i),n(Mo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return Pm;case"quaternion":return yo;case"bool":case"boolean":return Do;case"string":return Lo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ev(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(s.type);if(s.times===void 0){const t=[],n=[];Cm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const fr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Dm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const bv=new Dm;class Io{constructor(e){this.manager=e!==void 0?e:bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Io.DEFAULT_MATERIAL_NAME="__DEFAULT";const ir={};class wv extends Error{constructor(e,t){super(e),this.response=t}}class Lm extends Io{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=fr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ir[e]!==void 0){ir[e].push({onLoad:t,onProgress:n,onError:i});return}ir[e]=[],ir[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ir[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){T();function T(){h.read().then(({done:S,value:v})=>{if(S)p.close();else{g+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let R=0,b=u.length;R<b;R++){const P=u[R];P.onProgress&&P.onProgress(w)}p.enqueue(v),T()}},S=>{p.error(S)})}}});return new Response(m)}else throw new wv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{fr.add(`file:${e}`,c);const u=ir[e];delete ir[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ir[e];if(u===void 0)throw this.manager.itemError(e),c;delete ir[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xs=new WeakMap;class Av extends Io{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Xs.get(o);h===void 0&&(h=[],Xs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Aa("img");function l(){u(),t&&t(this);const h=Xs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Xs.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),fr.remove(`image:${e}`);const f=Xs.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}Xs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Im extends Io{constructor(e){super(e)}load(e,t,n,i){const r=new rn,o=new Av(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class gc extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zc=new $e,Id=new z,Ud=new z;class of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tf,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Ud.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ud),t.updateMatrixWorld(),Zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rv extends of{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=_o*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class af extends gc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nd=new $e,Go=new z,Jc=new z;class Cv extends of{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),n.position.copy(Go),Jc.copy(n.position),Jc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jc),n.updateMatrixWorld(),i.makeTranslation(-Go.x,-Go.y,-Go.z),Nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd,n.coordinateSystem,n.reversedDepth)}}class Um extends gc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lf extends Mm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pv extends of{constructor(){super(new lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dv extends gc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Pv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lv extends gc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class aa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qc=new WeakMap;class Iv extends Io{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=fr.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Qc.has(o)===!0)i&&i(Qc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return fr.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Qc.set(l,c),fr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});fr.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Uv extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const cf="\\[\\]\\.:\\/",Ov=new RegExp("["+cf+"]","g"),uf="[^"+cf+"]",Fv="[^"+cf.replace("\\.","")+"]",Bv=/((?:WC+[\/:])*)/.source.replace("WC",uf),kv=/(WCOD+)?/.source.replace("WCOD",Fv),zv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),Hv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),Vv=new RegExp("^"+Bv+kv+zv+Hv+"$"),Gv=["material","materials","bones","map"];class Wv{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ov,"")}static parseTrackName(e){const t=Vv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Gv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=Wv;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Od(s,e,t,n){const i=Xv(n);switch(t){case cm:return s*e;case Yh:return s*e/i.components*i.byteLength;case qh:return s*e/i.components*i.byteLength;case um:return s*e*2/i.components*i.byteLength;case Kh:return s*e*2/i.components*i.byteLength;case Xh:return s*e*3/i.components*i.byteLength;case di:return s*e*4/i.components*i.byteLength;case $h:return s*e*4/i.components*i.byteLength;case Ul:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fu:case ku:return Math.max(s,16)*Math.max(e,8)/4;case Ou:case Bu:return Math.max(s,8)*Math.max(e,8)/2;case zu:case Hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ju:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case ih:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hm:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oh:case ah:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xv(s){switch(s){case qi:case om:return{byteLength:1,components:1};case Ma:case am:case ka:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case Ts:case Vh:case Ai:return{byteLength:4,components:1};case lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yv(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kv=`#ifdef USE_ALPHAHASH
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
#endif`,$v=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qv=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,ax=`#ifdef USE_BUMPMAP
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gx=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,kx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
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
#endif`,Xx=`struct PhysicalMaterial {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Yx=`
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ny=`#if defined( USE_POINTS_UV )
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
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
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
#endif`,cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
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
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,My=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dy=`float getShadowMask() {
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
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
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
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
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
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,By=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
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
#endif`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qy=`uniform sampler2D t2D;
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jy=`#include <common>
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
}`,Qy=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,eM=`#define DISTANCE
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
}`,tM=`#define DISTANCE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
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
}`,sM=`uniform vec3 diffuse;
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
}`,oM=`#include <common>
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#define LAMBERT
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
}`,cM=`#define LAMBERT
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
}`,uM=`#define MATCAP
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
}`,hM=`#define MATCAP
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
}`,fM=`#define NORMAL
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
}`,dM=`#define NORMAL
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
}`,pM=`#define PHONG
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
}`,mM=`#define PHONG
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
}`,gM=`#define STANDARD
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
}`,_M=`#define STANDARD
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
}`,vM=`#define TOON
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
}`,xM=`#define TOON
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
}`,yM=`uniform float size;
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
}`,MM=`uniform vec3 diffuse;
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
}`,SM=`#include <common>
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
}`,TM=`uniform vec3 color;
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
}`,EM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:qv,alphahash_pars_fragment:Kv,alphamap_fragment:$v,alphamap_pars_fragment:jv,alphatest_fragment:Zv,alphatest_pars_fragment:Jv,aomap_fragment:Qv,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:ax,clipping_planes_fragment:lx,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:ux,clipping_planes_vertex:hx,color_fragment:fx,color_pars_fragment:dx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:vx,displacementmap_pars_vertex:xx,displacementmap_vertex:yx,emissivemap_fragment:Mx,emissivemap_pars_fragment:Sx,colorspace_fragment:Tx,colorspace_pars_fragment:Ex,envmap_fragment:bx,envmap_common_pars_fragment:wx,envmap_pars_fragment:Ax,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:kx,envmap_vertex:Cx,fog_vertex:Px,fog_pars_vertex:Dx,fog_fragment:Lx,fog_pars_fragment:Ix,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Fx,lights_pars_begin:Bx,lights_toon_fragment:zx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:Yx,lights_fragment_maps:qx,lights_fragment_end:Kx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Jx,map_fragment:Qx,map_pars_fragment:ey,map_particle_fragment:ty,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:ry,morphinstance_vertex:sy,morphcolor_vertex:oy,morphnormal_vertex:ay,morphtarget_pars_vertex:ly,morphtarget_vertex:cy,normal_fragment_begin:uy,normal_fragment_maps:hy,normal_pars_fragment:fy,normal_pars_vertex:dy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:xy,opaque_fragment:yy,packing:My,premultiplied_alpha_fragment:Sy,project_vertex:Ty,dithering_fragment:Ey,dithering_pars_fragment:by,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ay,shadowmap_pars_fragment:Ry,shadowmap_pars_vertex:Cy,shadowmap_vertex:Py,shadowmask_pars_fragment:Dy,skinbase_vertex:Ly,skinning_pars_vertex:Iy,skinning_vertex:Uy,skinnormal_vertex:Ny,specularmap_fragment:Oy,specularmap_pars_fragment:Fy,tonemapping_fragment:By,tonemapping_pars_fragment:ky,transmission_fragment:zy,transmission_pars_fragment:Hy,uv_pars_fragment:Vy,uv_pars_vertex:Gy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:Yy,background_frag:qy,backgroundCube_vert:Ky,backgroundCube_frag:$y,cube_vert:jy,cube_frag:Zy,depth_vert:Jy,depth_frag:Qy,distanceRGBA_vert:eM,distanceRGBA_frag:tM,equirect_vert:nM,equirect_frag:iM,linedashed_vert:rM,linedashed_frag:sM,meshbasic_vert:oM,meshbasic_frag:aM,meshlambert_vert:lM,meshlambert_frag:cM,meshmatcap_vert:uM,meshmatcap_frag:hM,meshnormal_vert:fM,meshnormal_frag:dM,meshphong_vert:pM,meshphong_frag:mM,meshphysical_vert:gM,meshphysical_frag:_M,meshtoon_vert:vM,meshtoon_frag:xM,points_vert:yM,points_frag:MM,shadow_vert:SM,shadow_frag:TM,sprite_vert:EM,sprite_frag:bM},Se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Fi={basic:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Sn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Sn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Sn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Sn([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Sn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Sn([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Sn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Sn([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Sn([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Sn([Se.lights,Se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Fi.physical={uniforms:Sn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const dl={r:0,b:0,g:0},ts=new Pi,wM=new $e;function AM(s,e,t,n,i,r,o){const a=new Xe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function g(S){let v=!1;const w=_(S);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===pc)?(u===void 0&&(u=new Pn(new za(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:vo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ts.copy(v.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wM.makeRotationFromEuler(ts)),u.material.toneMapped=mt.getTransfer(w.colorSpace)!==Tt,(h!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Pn(new Po(2,2),new Ki({name:"BackgroundMaterial",uniforms:vo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(w.colorSpace)!==Tt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(dl,ym(s)),n.buffers.color.setClear(dl.r,dl.g,dl.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:T}}function RM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,C,U,H,V){let j=!1;const W=h(H,U,C);r!==W&&(r=W,c(r.object)),j=d(M,H,U,V),j&&_(M,H,U,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(M,C,U,H),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,C,U){const H=U.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let j=V[C.id];j===void 0&&(j={},V[C.id]=j);let W=j[H];return W===void 0&&(W=f(l()),j[H]=W),W}function f(M){const C=[],U=[],H=[];for(let V=0;V<t;V++)C[V]=0,U[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,C,U,H){const V=r.attributes,j=C.attributes;let W=0;const Y=U.getAttributes();for(const G in Y)if(Y[G].location>=0){const L=V[G];let ge=j[G];if(ge===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),L===void 0||L.attribute!==ge||ge&&L.data!==ge.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function _(M,C,U,H){const V={},j=C.attributes;let W=0;const Y=U.getAttributes();for(const G in Y)if(Y[G].location>=0){let L=j[G];L===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(L=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(L=M.instanceColor));const ge={};ge.attribute=L,L&&L.data&&(ge.data=L.data),V[G]=ge,W++}r.attributes=V,r.attributesNum=W,r.index=H}function g(){const M=r.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const U=r.newAttributes,H=r.enabledAttributes,V=r.attributeDivisors;U[M]=1,H[M]===0&&(s.enableVertexAttribArray(M),H[M]=1),V[M]!==C&&(s.vertexAttribDivisor(M,C),V[M]=C)}function T(){const M=r.newAttributes,C=r.enabledAttributes;for(let U=0,H=C.length;U<H;U++)C[U]!==M[U]&&(s.disableVertexAttribArray(U),C[U]=0)}function S(M,C,U,H,V,j,W){W===!0?s.vertexAttribIPointer(M,C,U,V,j):s.vertexAttribPointer(M,C,U,H,V,j)}function v(M,C,U,H){g();const V=H.attributes,j=U.getAttributes(),W=C.defaultAttributeValues;for(const Y in j){const G=j[Y];if(G.location>=0){let oe=V[Y];if(oe===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const L=oe.normalized,ge=oe.itemSize,Ue=e.get(oe);if(Ue===void 0)continue;const Ze=Ue.buffer,Fe=Ue.type,Z=Ue.bytesPerElement,fe=Fe===s.INT||Fe===s.UNSIGNED_INT||oe.gpuType===Vh;if(oe.isInterleavedBufferAttribute){const ae=oe.data,be=ae.stride,we=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let ke=0;ke<G.locationSize;ke++)S(G.location+ke,ge/G.locationSize,Fe,L,be*Z,(we+ge/G.locationSize*ke)*Z,fe)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae,oe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let ae=0;ae<G.locationSize;ae++)S(G.location+ae,ge/G.locationSize,Fe,L,ge*Z,ge/G.locationSize*ae*Z,fe)}}else if(W!==void 0){const L=W[Y];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(G.location,L);break;case 3:s.vertexAttrib3fv(G.location,L);break;case 4:s.vertexAttrib4fv(G.location,L);break;default:s.vertexAttrib1fv(G.location,L)}}}}T()}function w(){P();for(const M in n){const C=n[M];for(const U in C){const H=C[U];for(const V in H)u(H[V].object),delete H[V];delete C[U]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const U in C){const H=C[U];for(const V in H)u(H[V].object),delete H[V];delete C[U]}delete n[M.id]}function b(M){for(const C in n){const U=n[C];if(U[M.id]===void 0)continue;const H=U[M.id];for(const V in H)u(H[V].object),delete H[V];delete U[M.id]}}function P(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function CM(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==di&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==qi&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ai&&!P)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:w,maxSamples:R}}function DM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:n,S=T*4;let v=p.clippingState||null;l.value=v,v=u(_,f,S,d);for(let w=0;w!==S;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==g;++S,v+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function LM(s){let e=new WeakMap;function t(o,a){return a===Uu?o.mapping=po:a===Nu&&(o.mapping=mo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uu||a===Nu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Q0(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Js=4,Fd=[.125,.215,.35,.446,.526,.582],fs=20,eu=new lf,Bd=new Xe;let tu=null,nu=0,iu=0,ru=!1;const os=(1+Math.sqrt(5))/2,Ys=1/os,kd=[new z(-os,Ys,0),new z(os,Ys,0),new z(-Ys,0,os),new z(Ys,0,os),new z(0,os,-Ys),new z(0,os,Ys),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],IM=new z;class zd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=IM}=r;tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ka,format:di,colorSpace:Un,depthBuffer:!1},i=Hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(r)),this._blurMaterial=NM(r,e,t)}return i}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,eu)}_sceneToCubeUV(e,t,n,i,r){const l=new dn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Bd),h.toneMapping=Hr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const g=new ds({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),m=new Pn(new za,g);let p=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(Bd),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const w=this._cubeSize;pl(i,v*w,S>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===po||e.mapping===mo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;pl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,eu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kd[(i-r-1)%kd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*fs-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);const p=[];let T=0;for(let b=0;b<fs;++b){const P=b/g,y=Math.exp(-P*P/2);p.push(y),b===0?T+=y:b<m&&(T+=2*y)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const v=this._sizeLods[i],w=3*v*(i>S-Js?i-S+Js:0),R=4*(this._cubeSize-v);pl(t,w,R,3*v,2*v),l.setRenderTarget(t),l.render(h,eu)}}function UM(s){const e=[],t=[],n=[];let i=s;const r=s-Js+1+Fd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Js?l=Fd[o-s+Js-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,T=new Float32Array(g*_*d),S=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let R=0;R<d;R++){const b=R%3*2/3-1,P=R>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];T.set(y,g*_*R),S.set(f,m*_*R);const M=[R,R,R,R,R,R];v.set(M,p*_*R)}const w=new Li;w.setAttribute("position",new In(T,g)),w.setAttribute("uv",new In(S,m)),w.setAttribute("faceIndex",new In(v,p)),e.push(w),i>Js&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hd(s,e,t){const n=new Xr(s,e,t);return n.texture.mapping=pc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function NM(s,e,t){const n=new Float32Array(fs),i=new z(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:hf(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Vd(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

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
		`,blending:zr,depthTest:!1,depthWrite:!1})}function Gd(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zr,depthTest:!1,depthWrite:!1})}function hf(){return`

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
	`}function OM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uu||l===Nu,u=l===po||l===mo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new zd(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new zd(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function FM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function BM(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const T=d.array;g=d.version;for(let S=0,v=T.length;S<v;S+=3){const w=T[S+0],R=T[S+1],b=T[S+2];f.push(w,R,R,b,b,w)}}else if(_!==void 0){const T=_.array;g=_.version;for(let S=0,v=T.length/3-1;S<v;S+=3){const w=S+0,R=S+1,b=S+2;f.push(w,R,R,b,b,w)}}else return;const m=new(pm(f)?xm:vm)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function kM(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=d[T]*g[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function HM(s,e,t){const n=new WeakMap,i=new _t;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*R*4*h),P=new mm(b,w,R,h);P.type=Ai,P.needsUpdate=!0;const y=v*4;for(let C=0;C<h;C++){const U=p[C],H=T[C],V=S[C],j=w*R*4*C;for(let W=0;W<U.count;W++){const Y=W*y;_===!0&&(i.fromBufferAttribute(U,W),b[j+Y+0]=i.x,b[j+Y+1]=i.y,b[j+Y+2]=i.z,b[j+Y+3]=0),g===!0&&(i.fromBufferAttribute(H,W),b[j+Y+4]=i.x,b[j+Y+5]=i.y,b[j+Y+6]=i.z,b[j+Y+7]=0),m===!0&&(i.fromBufferAttribute(V,W),b[j+Y+8]=i.x,b[j+Y+9]=i.y,b[j+Y+10]=i.z,b[j+Y+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:P,size:new dt(w,R)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function VM(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Om=new rn,Wd=new Rm(1,1),Fm=new mm,Bm=new O0,km=new Sm,Xd=[],Yd=[],qd=new Float32Array(16),Kd=new Float32Array(9),$d=new Float32Array(4);function Uo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Xd[i];if(r===void 0&&(r=new Float32Array(i),Xd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function _c(s,e){let t=Yd[e];t===void 0&&(t=new Int32Array(e),Yd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function GM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function XM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function qM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;$d.set(n),s.uniformMatrix2fv(this.addr,!1,$d),Qt(t,n)}}function KM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Kd.set(n),s.uniformMatrix3fv(this.addr,!1,Kd),Qt(t,n)}}function $M(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;qd.set(n),s.uniformMatrix4fv(this.addr,!1,qd),Qt(t,n)}}function jM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function eS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function nS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function iS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function rS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wd.compareFunction=dm,r=Wd):r=Om,t.setTexture2D(e||r,i)}function sS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bm,i)}function oS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||km,i)}function aS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fm,i)}function lS(s){switch(s){case 5126:return GM;case 35664:return WM;case 35665:return XM;case 35666:return YM;case 35674:return qM;case 35675:return KM;case 35676:return $M;case 5124:case 35670:return jM;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return QM;case 5125:return eS;case 36294:return tS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}function cS(s,e){s.uniform1fv(this.addr,e)}function uS(s,e){const t=Uo(e,this.size,2);s.uniform2fv(this.addr,t)}function hS(s,e){const t=Uo(e,this.size,3);s.uniform3fv(this.addr,t)}function fS(s,e){const t=Uo(e,this.size,4);s.uniform4fv(this.addr,t)}function dS(s,e){const t=Uo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function pS(s,e){const t=Uo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mS(s,e){const t=Uo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gS(s,e){s.uniform1iv(this.addr,e)}function _S(s,e){s.uniform2iv(this.addr,e)}function vS(s,e){s.uniform3iv(this.addr,e)}function xS(s,e){s.uniform4iv(this.addr,e)}function yS(s,e){s.uniform1uiv(this.addr,e)}function MS(s,e){s.uniform2uiv(this.addr,e)}function SS(s,e){s.uniform3uiv(this.addr,e)}function TS(s,e){s.uniform4uiv(this.addr,e)}function ES(s,e,t){const n=this.cache,i=e.length,r=_c(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Om,r[o])}function bS(s,e,t){const n=this.cache,i=e.length,r=_c(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bm,r[o])}function wS(s,e,t){const n=this.cache,i=e.length,r=_c(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||km,r[o])}function AS(s,e,t){const n=this.cache,i=e.length,r=_c(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Fm,r[o])}function RS(s){switch(s){case 5126:return cS;case 35664:return uS;case 35665:return hS;case 35666:return fS;case 35674:return dS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return yS;case 36294:return MS;case 36295:return SS;case 36296:return TS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return bS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return AS}}class CS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lS(t.type)}}class PS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RS(t.type)}}class DS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const su=/(\w+)(\])?(\[|\.)?/g;function jd(s,e){s.seq.push(e),s.map[e.id]=e}function LS(s,e,t){const n=s.name,i=n.length;for(su.lastIndex=0;;){const r=su.exec(n),o=su.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jd(t,c===void 0?new CS(a,s,e):new PS(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new DS(a),jd(t,h)),t=h}}}class kl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);LS(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const IS=37297;let US=0;function NS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Jd=new tt;function OS(s){mt._getMatrix(Jd,mt.workingColorSpace,s);const e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(s)){case jl:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+NS(s.getShaderSource(e),a)}else return r}function FS(s,e){const t=OS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function BS(s,e){let t;switch(e){case Y_:t="Linear";break;case q_:t="Reinhard";break;case K_:t="Cineon";break;case $_:t="ACESFilmic";break;case Z_:t="AgX";break;case J_:t="Neutral";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ml=new z;function kS(){mt.getLuminanceCoefficients(ml);const s=ml.x.toFixed(4),e=ml.y.toFixed(4),t=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function HS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function jo(s){return s!==""}function ep(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GS=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(s){return s.replace(GS,XS)}const WS=new Map;function XS(s,e){let t=rt[e];if(t===void 0){const n=WS.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}const YS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(s){return s.replace(YS,qS)}function qS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ip(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===im?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sr&&(e="SHADOWMAP_TYPE_VSM"),e}function $S(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function ZS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case W_:e="ENVMAP_BLENDING_MIX";break;case X_:e="ENVMAP_BLENDING_ADD";break}return e}function JS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function QS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KS(t),c=$S(t),u=jS(t),h=ZS(t),f=JS(t),d=zS(t),_=HS(r),g=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(jo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(jo).join(`
`),p.length>0&&(p+=`
`)):(m=[ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),p=[ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hr?"#define TONE_MAPPING":"",t.toneMapping!==Hr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Hr?BS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,FS("linearToOutputTexel",t.outputColorSpace),kS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),o=hh(o),o=ep(o,t),o=tp(o,t),a=hh(a),a=ep(a,t),a=tp(a,t),o=np(o),a=np(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+o,v=T+p+a,w=Zd(i,i.VERTEX_SHADER,S),R=Zd(i,i.FRAGMENT_SHADER,v);i.attachShader(g,w),i.attachShader(g,R),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(C){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(g)||"",H=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(R)||"",j=U.trim(),W=H.trim(),Y=V.trim();let G=!0,oe=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,R);else{const L=Qd(i,w,"vertex"),ge=Qd(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+j+`
`+L+`
`+ge)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(W===""||Y==="")&&(oe=!1);oe&&(C.diagnostics={runnable:G,programLog:j,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(w),i.deleteShader(R),P=new kl(i,g),y=VS(i,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,IS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=US++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=R,this}let eT=0;class tT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nT(e),t.set(e,n)),n}}class nT{constructor(e){this.id=eT++,this.code=e,this.usedTimes=0}}function iT(s,e,t,n,i,r,o){const a=new gm,l=new tT,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,C,U,H){const V=U.fog,j=H.geometry,W=y.isMeshStandardMaterial?U.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),G=Y&&Y.mapping===pc?Y.image.height:null,oe=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const L=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=L!==void 0?L.length:0;let Ue=0;j.morphAttributes.position!==void 0&&(Ue=1),j.morphAttributes.normal!==void 0&&(Ue=2),j.morphAttributes.color!==void 0&&(Ue=3);let Ze,Fe,Z,fe;if(oe){const ye=Fi[oe];Ze=ye.vertexShader,Fe=ye.fragmentShader}else Ze=y.vertexShader,Fe=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);const ae=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),we=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,nt=!!y.map,Ve=!!y.matcap,D=!!Y,Ye=!!y.aoMap,Ee=!!y.lightMap,qe=!!y.bumpMap,O=!!y.normalMap,Je=!!y.displacementMap,X=!!y.emissiveMap,N=!!y.metalnessMap,re=!!y.roughnessMap,ve=y.anisotropy>0,A=y.clearcoat>0,x=y.dispersion>0,F=y.iridescence>0,J=y.sheen>0,Q=y.transmission>0,K=ve&&!!y.anisotropyMap,de=A&&!!y.clearcoatMap,ne=A&&!!y.clearcoatNormalMap,xe=A&&!!y.clearcoatRoughnessMap,te=F&&!!y.iridescenceMap,ue=F&&!!y.iridescenceThicknessMap,pe=J&&!!y.sheenColorMap,Le=J&&!!y.sheenRoughnessMap,Re=!!y.specularMap,me=!!y.specularColorMap,He=!!y.specularIntensityMap,I=Q&&!!y.transmissionMap,le=Q&&!!y.thicknessMap,ce=!!y.gradientMap,he=!!y.alphaMap,ie=y.alphaTest>0,ee=!!y.alphaHash,Te=!!y.extensions;let De=Hr;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(De=s.toneMapping);const ot={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:Fe,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Un,alphaToCoverage:!!y.alphaToCoverage,map:nt,matcap:Ve,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:G,aoMap:Ye,lightMap:Ee,bumpMap:qe,normalMap:O,displacementMap:f&&Je,emissiveMap:X,normalMapObjectSpace:O&&y.normalMapType===r0,normalMapTangentSpace:O&&y.normalMapType===jh,metalnessMap:N,roughnessMap:re,anisotropy:ve,anisotropyMap:K,clearcoat:A,clearcoatMap:de,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:x,iridescence:F,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:J,sheenColorMap:pe,sheenRoughnessMap:Le,specularMap:Re,specularColorMap:me,specularIntensityMap:He,transmission:Q,transmissionMap:I,thicknessMap:le,gradientMap:ce,opaque:y.transparent===!1&&y.blending===no&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:ie,alphaHash:ee,combine:y.combine,mapUv:nt&&g(y.map.channel),aoMapUv:Ye&&g(y.aoMap.channel),lightMapUv:Ee&&g(y.lightMap.channel),bumpMapUv:qe&&g(y.bumpMap.channel),normalMapUv:O&&g(y.normalMap.channel),displacementMapUv:Je&&g(y.displacementMap.channel),emissiveMapUv:X&&g(y.emissiveMap.channel),metalnessMapUv:N&&g(y.metalnessMap.channel),roughnessMapUv:re&&g(y.roughnessMap.channel),anisotropyMapUv:K&&g(y.anisotropyMap.channel),clearcoatMapUv:de&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(y.sheenRoughnessMap.channel),specularMapUv:Re&&g(y.specularMap.channel),specularColorMapUv:me&&g(y.specularColorMap.channel),specularIntensityMapUv:He&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:le&&g(y.thicknessMap.channel),alphaMapUv:he&&g(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(O||ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(nt||he),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ue,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:nt&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===Tt,decodeVideoTextureEmissive:X&&y.emissiveMap.isVideoTexture===!0&&mt.getTransfer(y.emissiveMap.colorSpace)===Tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ki,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Te&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&y.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(T(M,y),S(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const M=_[y.type];let C;if(M){const U=Fi[M];C=$0.clone(U.uniforms)}else C=y.uniforms;return C}function w(y,M){let C;for(let U=0,H=u.length;U<H;U++){const V=u[U];if(V.cacheKey===M){C=V,++C.usedTimes;break}}return C===void 0&&(C=new QS(s,M,y,r),u.push(C)),C}function R(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:P}}function rT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function sT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||sT),n.length>1&&n.sort(f||rp),i.length>1&&i.sort(f||rp)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function oT(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new sp,s.set(n,[o])):i>=r.length?(o=new sp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function aT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Xe};break;case"SpotLight":t={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function lT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cT=0;function uT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hT(s){const e=new aT,t=lT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,r=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,T=0,S=0,v=0,w=0,R=0,b=0;c.sort(uT);for(let y=0,M=c.length;y<M;y++){const C=c[y],U=C.color,H=C.intensity,V=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*H,h+=U.g*H,f+=U.b*H;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],H);b++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=C.shadow.matrix,T++}n.directional[d]=W,d++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(U).multiplyScalar(H),W.distance=V,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[g]=W;const Y=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,Y.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[g]=Y.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=j,v++}g++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy(U).multiplyScalar(H),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const Y=C.shadow,G=t.get(C);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=C.shadow.matrix,S++}n.point[_]=W,_++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(H),W.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,P.directionalLength=d,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=b,n.version=cT++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function op(s){const e=new hT(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fT(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new op(s),e.set(i,[a])):r>=o.length?(a=new op(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
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
}`;function mT(s,e,t){let n=new tf;const i=new dt,r=new dt,o=new _t,a=new pv({depthPacking:i0}),l=new mv,c={},u=t.maxTextureSize,h={[gr]:Dn,[Dn]:gr,[ki]:ki},f=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:dT,fragmentShader:pT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Li;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=im;let p=this.type;this.render=function(R,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),U=s.state;U.setBlending(zr),U.buffers.depth.getReversed()?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==sr&&this.type===sr,V=p===sr&&this.type!==sr;for(let j=0,W=R.length;j<W;j++){const Y=R[j],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const oe=G.getFrameExtents();if(i.multiply(oe),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/oe.x),i.x=r.x*oe.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/oe.y),i.y=r.y*oe.y,G.mapSize.y=r.y)),G.map===null||H===!0||V===!0){const ge=this.type!==sr?{minFilter:Ln,magFilter:Ln}:{};G.map!==null&&G.map.dispose(),G.map=new Xr(i.x,i.y,ge),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const L=G.getViewportCount();for(let ge=0;ge<L;ge++){const Ue=G.getViewport(ge);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),U.viewport(o),G.updateMatrices(Y,ge),n=G.getFrustum(),v(b,P,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===sr&&T(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,C)};function T(R,b){const P=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xr(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(b,null,P,f,g,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(b,null,P,d,g,null)}function S(R,b,P,y){let M=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const U=M.uuid,H=b.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let j=V[H];j===void 0&&(j=M.clone(),V[H]=j,b.addEventListener("dispose",w)),M=j}if(M.visible=b.visible,M.wireframe=b.wireframe,y===sr?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=s.properties.get(M);U.light=P}return M}function v(R,b,P,y,M){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===sr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const H=e.update(R),V=R.material;if(Array.isArray(V)){const j=H.groups;for(let W=0,Y=j.length;W<Y;W++){const G=j[W],oe=V[G.materialIndex];if(oe&&oe.visible){const L=S(R,oe,y,M);R.onBeforeShadow(s,R,b,P,H,L,G),s.renderBufferDirect(P,null,H,L,R,G),R.onAfterShadow(s,R,b,P,H,L,G)}}}else if(V.visible){const j=S(R,V,y,M);R.onBeforeShadow(s,R,b,P,H,j,null),s.renderBufferDirect(P,null,H,j,R,null),R.onAfterShadow(s,R,b,P,H,j,null)}}const U=R.children;for(let H=0,V=U.length;H<V;H++)v(U[H],b,P,y,M)}function w(R){R.target.removeEventListener("dispose",w);for(const P in c){const y=c[P],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const gT={[Au]:Ru,[Cu]:Lu,[Pu]:Iu,[fo]:Du,[Ru]:Au,[Lu]:Cu,[Iu]:Pu,[Du]:fo};function _T(s,e){function t(){let I=!1;const le=new _t;let ce=null;const he=new _t(0,0,0,0);return{setMask:function(ie){ce!==ie&&!I&&(s.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){I=ie},setClear:function(ie,ee,Te,De,ot){ot===!0&&(ie*=De,ee*=De,Te*=De),le.set(ie,ee,Te,De),he.equals(le)===!1&&(s.clearColor(ie,ee,Te,De),he.copy(le))},reset:function(){I=!1,ce=null,he.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,ce=null,he=null,ie=null;return{setReversed:function(ee){if(le!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const De=ie;ie=null,this.setClear(De)}},getReversed:function(){return le},setTest:function(ee){ee?ae(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(ee){ce!==ee&&!I&&(s.depthMask(ee),ce=ee)},setFunc:function(ee){if(le&&(ee=gT[ee]),he!==ee){switch(ee){case Au:s.depthFunc(s.NEVER);break;case Ru:s.depthFunc(s.ALWAYS);break;case Cu:s.depthFunc(s.LESS);break;case fo:s.depthFunc(s.LEQUAL);break;case Pu:s.depthFunc(s.EQUAL);break;case Du:s.depthFunc(s.GEQUAL);break;case Lu:s.depthFunc(s.GREATER);break;case Iu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=ee}},setLocked:function(ee){I=ee},setClear:function(ee){ie!==ee&&(le&&(ee=1-ee),s.clearDepth(ee),ie=ee)},reset:function(){I=!1,ce=null,he=null,ie=null,le=!1}}}function i(){let I=!1,le=null,ce=null,he=null,ie=null,ee=null,Te=null,De=null,ot=null;return{setTest:function(ye){I||(ye?ae(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(ye){le!==ye&&!I&&(s.stencilMask(ye),le=ye)},setFunc:function(ye,Ie,je){(ce!==ye||he!==Ie||ie!==je)&&(s.stencilFunc(ye,Ie,je),ce=ye,he=Ie,ie=je)},setOp:function(ye,Ie,je){(ee!==ye||Te!==Ie||De!==je)&&(s.stencilOp(ye,Ie,je),ee=ye,Te=Ie,De=je)},setLocked:function(ye){I=ye},setClear:function(ye){ot!==ye&&(s.clearStencil(ye),ot=ye)},reset:function(){I=!1,le=null,ce=null,he=null,ie=null,ee=null,Te=null,De=null,ot=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,S=null,v=null,w=null,R=null,b=new Xe(0,0,0),P=0,y=!1,M=null,C=null,U=null,H=null,V=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=Y>=2);let oe=null,L={};const ge=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),Ze=new _t().fromArray(ge),Fe=new _t().fromArray(Ue);function Z(I,le,ce,he){const ie=new Uint8Array(4),ee=s.createTexture();s.bindTexture(I,ee),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<ce;Te++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(le+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return ee}const fe={};fe[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(s.DEPTH_TEST),o.setFunc(fo),qe(!1),O(Gf),ae(s.CULL_FACE),Ye(zr);function ae(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function be(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function we(I,le){return h[I]!==le?(s.bindFramebuffer(I,le),h[I]=le,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=le),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=le),!0):!1}function ke(I,le){let ce=d,he=!1;if(I){ce=f.get(le),ce===void 0&&(ce=[],f.set(le,ce));const ie=I.textures;if(ce.length!==ie.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,Te=ie.length;ee<Te;ee++)ce[ee]=s.COLOR_ATTACHMENT0+ee;ce.length=ie.length,he=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,he=!0);he&&s.drawBuffers(ce)}function nt(I){return _!==I?(s.useProgram(I),_=I,!0):!1}const Ve={[hs]:s.FUNC_ADD,[A_]:s.FUNC_SUBTRACT,[R_]:s.FUNC_REVERSE_SUBTRACT};Ve[C_]=s.MIN,Ve[P_]=s.MAX;const D={[D_]:s.ZERO,[L_]:s.ONE,[I_]:s.SRC_COLOR,[bu]:s.SRC_ALPHA,[k_]:s.SRC_ALPHA_SATURATE,[F_]:s.DST_COLOR,[N_]:s.DST_ALPHA,[U_]:s.ONE_MINUS_SRC_COLOR,[wu]:s.ONE_MINUS_SRC_ALPHA,[B_]:s.ONE_MINUS_DST_COLOR,[O_]:s.ONE_MINUS_DST_ALPHA,[z_]:s.CONSTANT_COLOR,[H_]:s.ONE_MINUS_CONSTANT_COLOR,[V_]:s.CONSTANT_ALPHA,[G_]:s.ONE_MINUS_CONSTANT_ALPHA};function Ye(I,le,ce,he,ie,ee,Te,De,ot,ye){if(I===zr){g===!0&&(be(s.BLEND),g=!1);return}if(g===!1&&(ae(s.BLEND),g=!0),I!==w_){if(I!==m||ye!==y){if((p!==hs||v!==hs)&&(s.blendEquation(s.FUNC_ADD),p=hs,v=hs),ye)switch(I){case no:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wf:s.blendFunc(s.ONE,s.ONE);break;case Xf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case no:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,S=null,w=null,R=null,b.set(0,0,0),P=0,m=I,y=ye}return}ie=ie||le,ee=ee||ce,Te=Te||he,(le!==p||ie!==v)&&(s.blendEquationSeparate(Ve[le],Ve[ie]),p=le,v=ie),(ce!==T||he!==S||ee!==w||Te!==R)&&(s.blendFuncSeparate(D[ce],D[he],D[ee],D[Te]),T=ce,S=he,w=ee,R=Te),(De.equals(b)===!1||ot!==P)&&(s.blendColor(De.r,De.g,De.b,ot),b.copy(De),P=ot),m=I,y=!1}function Ee(I,le){I.side===ki?be(s.CULL_FACE):ae(s.CULL_FACE);let ce=I.side===Dn;le&&(ce=!ce),qe(ce),I.blending===no&&I.transparent===!1?Ye(zr):Ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const he=I.stencilWrite;a.setTest(he),he&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),X(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function O(I){I!==T_?(ae(s.CULL_FACE),I!==C&&(I===Gf?s.cullFace(s.BACK):I===E_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),C=I}function Je(I){I!==U&&(W&&s.lineWidth(I),U=I)}function X(I,le,ce){I?(ae(s.POLYGON_OFFSET_FILL),(H!==le||V!==ce)&&(s.polygonOffset(le,ce),H=le,V=ce)):be(s.POLYGON_OFFSET_FILL)}function N(I){I?ae(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function re(I){I===void 0&&(I=s.TEXTURE0+j-1),oe!==I&&(s.activeTexture(I),oe=I)}function ve(I,le,ce){ce===void 0&&(oe===null?ce=s.TEXTURE0+j-1:ce=oe);let he=L[ce];he===void 0&&(he={type:void 0,texture:void 0},L[ce]=he),(he.type!==I||he.texture!==le)&&(oe!==ce&&(s.activeTexture(ce),oe=ce),s.bindTexture(I,le||fe[I]),he.type=I,he.texture=le)}function A(){const I=L[oe];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(I){Ze.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function Le(I){Fe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Re(I,le){let ce=c.get(le);ce===void 0&&(ce=new WeakMap,c.set(le,ce));let he=ce.get(I);he===void 0&&(he=s.getUniformBlockIndex(le,I.name),ce.set(I,he))}function me(I,le){const he=c.get(le).get(I);l.get(le)!==he&&(s.uniformBlockBinding(le,he,I.__bindingPointIndex),l.set(le,he))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},oe=null,L={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,T=null,S=null,v=null,w=null,R=null,b=new Xe(0,0,0),P=0,y=!1,M=null,C=null,U=null,H=null,V=null,Ze.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:be,bindFramebuffer:we,drawBuffers:ke,useProgram:nt,setBlending:Ye,setMaterial:Ee,setFlipSided:qe,setCullFace:O,setLineWidth:Je,setPolygonOffset:X,setScissorTest:N,activeTexture:re,bindTexture:ve,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:te,texImage3D:ue,updateUBOMapping:Re,uniformBlockBinding:me,texStorage2D:ne,texStorage3D:xe,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:de,scissor:pe,viewport:Le,reset:He}}function vT(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return d?new OffscreenCanvas(A,x):Aa("canvas")}function g(A,x,F){let J=1;const Q=ve(A);if((Q.width>F||Q.height>F)&&(J=F/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(J*Q.width),de=Math.floor(J*Q.height);h===void 0&&(h=_(K,de));const ne=x?_(K,de):h;return ne.width=K,ne.height=de,ne.getContext("2d").drawImage(A,0,0,K,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+de+")."),ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(A,x,F,J,Q=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=x;if(x===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),x===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),x===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),x===s.RGBA){const de=Q?jl:mt.getTransfer(J);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=de===Tt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(A,x){let F;return A?x===null||x===Ts||x===Sa?F=s.DEPTH24_STENCIL8:x===Ai?F=s.DEPTH32F_STENCIL8:x===Ma&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ts||x===Sa?F=s.DEPTH_COMPONENT24:x===Ai?F=s.DEPTH_COMPONENT32F:x===Ma&&(F=s.DEPTH_COMPONENT16),F}function w(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ln&&A.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),P(x),x.isVideoTexture&&u.delete(x)}function b(A){const x=A.target;x.removeEventListener("dispose",b),M(x)}function P(A){const x=n.get(A);if(x.__webglInit===void 0)return;const F=A.source,J=f.get(F);if(J){const Q=J[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(A),Object.keys(J).length===0&&f.delete(F)}n.remove(A)}function y(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const F=A.source,J=f.get(F);delete J[x.__cacheKey],o.memory.textures--}function M(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let Q=0;Q<x.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)s.deleteFramebuffer(x.__webglFramebuffer[J]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let J=0,Q=F.length;J<Q;J++){const K=n.get(F[J]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(F[J])}n.remove(A)}let C=0;function U(){C=0}function H(){const A=C;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function j(A,x){const F=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(F,A,x);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function W(A,x){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){fe(F,A,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function Y(A,x){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){fe(F,A,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function G(A,x){const F=n.get(A);if(A.version>0&&F.__version!==A.version){ae(F,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const oe={[go]:s.REPEAT,[Ur]:s.CLAMP_TO_EDGE,[$l]:s.MIRRORED_REPEAT},L={[Ln]:s.NEAREST,[sm]:s.NEAREST_MIPMAP_NEAREST,[$o]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[Il]:s.LINEAR_MIPMAP_NEAREST,[ur]:s.LINEAR_MIPMAP_LINEAR},ge={[s0]:s.NEVER,[h0]:s.ALWAYS,[o0]:s.LESS,[dm]:s.LEQUAL,[a0]:s.EQUAL,[u0]:s.GEQUAL,[l0]:s.GREATER,[c0]:s.NOTEQUAL};function Ue(A,x){if(x.type===Ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===Il||x.magFilter===$o||x.magFilter===ur||x.minFilter===Cn||x.minFilter===Il||x.minFilter===$o||x.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,oe[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,oe[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,oe[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,L[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,L[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ln||x.minFilter!==$o&&x.minFilter!==ur||x.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const J=x.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const K=V(x);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[K].usedTimes++;const de=Q[A.__cacheKey];de!==void 0&&(Q[A.__cacheKey].usedTimes--,de.usedTimes===0&&y(x)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return F}function Fe(A,x,F){return Math.floor(Math.floor(A/F)/x)}function Z(A,x,F,J){const K=A.updateRanges;if(K.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,F,J,x.data);else{K.sort((ue,pe)=>ue.start-pe.start);let de=0;for(let ue=1;ue<K.length;ue++){const pe=K[de],Le=K[ue],Re=pe.start+pe.count,me=Fe(Le.start,x.width,4),He=Fe(pe.start,x.width,4);Le.start<=Re+1&&me===He&&Fe(Le.start+Le.count-1,x.width,4)===me?pe.count=Math.max(pe.count,Le.start+Le.count-pe.start):(++de,K[de]=Le)}K.length=de+1;const ne=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let ue=0,pe=K.length;ue<pe;ue++){const Le=K[ue],Re=Math.floor(Le.start/4),me=Math.ceil(Le.count/4),He=Re%x.width,I=Math.floor(Re/x.width),le=me,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,He,I,le,ce,F,J,x.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,te)}}function fe(A,x,F){let J=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=s.TEXTURE_3D);const Q=Ze(A,x),K=x.source;t.bindTexture(J,A.__webglTexture,s.TEXTURE0+F);const de=n.get(K);if(K.version!==de.__version||Q===!0){t.activeTexture(s.TEXTURE0+F);const ne=mt.getPrimaries(mt.workingColorSpace),xe=x.colorSpace===Ir?null:mt.getPrimaries(x.colorSpace),te=x.colorSpace===Ir||ne===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ue=g(x.image,!1,i.maxTextureSize);ue=re(x,ue);const pe=r.convert(x.format,x.colorSpace),Le=r.convert(x.type);let Re=S(x.internalFormat,pe,Le,x.colorSpace,x.isVideoTexture);Ue(J,x);let me;const He=x.mipmaps,I=x.isVideoTexture!==!0,le=de.__version===void 0||Q===!0,ce=K.dataReady,he=w(x,ue);if(x.isDepthTexture)Re=v(x.format===Ea,x.type),le&&(I?t.texStorage2D(s.TEXTURE_2D,1,Re,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Re,ue.width,ue.height,0,pe,Le,null));else if(x.isDataTexture)if(He.length>0){I&&le&&t.texStorage2D(s.TEXTURE_2D,he,Re,He[0].width,He[0].height);for(let ie=0,ee=He.length;ie<ee;ie++)me=He[ie],I?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,me.width,me.height,pe,Le,me.data):t.texImage2D(s.TEXTURE_2D,ie,Re,me.width,me.height,0,pe,Le,me.data);x.generateMipmaps=!1}else I?(le&&t.texStorage2D(s.TEXTURE_2D,he,Re,ue.width,ue.height),ce&&Z(x,ue,pe,Le)):t.texImage2D(s.TEXTURE_2D,0,Re,ue.width,ue.height,0,pe,Le,ue.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Re,He[0].width,He[0].height,ue.depth);for(let ie=0,ee=He.length;ie<ee;ie++)if(me=He[ie],x.format!==di)if(pe!==null)if(I){if(ce)if(x.layerUpdates.size>0){const Te=Od(me.width,me.height,x.format,x.type);for(const De of x.layerUpdates){const ot=me.data.subarray(De*Te/me.data.BYTES_PER_ELEMENT,(De+1)*Te/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,De,me.width,me.height,1,pe,ot)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ue.depth,pe,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Re,me.width,me.height,ue.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ue.depth,pe,Le,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Re,me.width,me.height,ue.depth,0,pe,Le,me.data)}else{I&&le&&t.texStorage2D(s.TEXTURE_2D,he,Re,He[0].width,He[0].height);for(let ie=0,ee=He.length;ie<ee;ie++)me=He[ie],x.format!==di?pe!==null?I?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,me.width,me.height,pe,Le,me.data):t.texImage2D(s.TEXTURE_2D,ie,Re,me.width,me.height,0,pe,Le,me.data)}else if(x.isDataArrayTexture)if(I){if(le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Re,ue.width,ue.height,ue.depth),ce)if(x.layerUpdates.size>0){const ie=Od(ue.width,ue.height,x.format,x.type);for(const ee of x.layerUpdates){const Te=ue.data.subarray(ee*ie/ue.data.BYTES_PER_ELEMENT,(ee+1)*ie/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,ue.width,ue.height,1,pe,Le,Te)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,pe,Le,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ue.width,ue.height,ue.depth,0,pe,Le,ue.data);else if(x.isData3DTexture)I?(le&&t.texStorage3D(s.TEXTURE_3D,he,Re,ue.width,ue.height,ue.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,pe,Le,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ue.width,ue.height,ue.depth,0,pe,Le,ue.data);else if(x.isFramebufferTexture){if(le)if(I)t.texStorage2D(s.TEXTURE_2D,he,Re,ue.width,ue.height);else{let ie=ue.width,ee=ue.height;for(let Te=0;Te<he;Te++)t.texImage2D(s.TEXTURE_2D,Te,Re,ie,ee,0,pe,Le,null),ie>>=1,ee>>=1}}else if(He.length>0){if(I&&le){const ie=ve(He[0]);t.texStorage2D(s.TEXTURE_2D,he,Re,ie.width,ie.height)}for(let ie=0,ee=He.length;ie<ee;ie++)me=He[ie],I?ce&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,pe,Le,me):t.texImage2D(s.TEXTURE_2D,ie,Re,pe,Le,me);x.generateMipmaps=!1}else if(I){if(le){const ie=ve(ue);t.texStorage2D(s.TEXTURE_2D,he,Re,ie.width,ie.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Le,ue)}else t.texImage2D(s.TEXTURE_2D,0,Re,pe,Le,ue);m(x)&&p(J),de.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ae(A,x,F){if(x.image.length!==6)return;const J=Ze(A,x),Q=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const K=n.get(Q);if(Q.version!==K.__version||J===!0){t.activeTexture(s.TEXTURE0+F);const de=mt.getPrimaries(mt.workingColorSpace),ne=x.colorSpace===Ir?null:mt.getPrimaries(x.colorSpace),xe=x.colorSpace===Ir||de===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const te=x.isCompressedTexture||x.image[0].isCompressedTexture,ue=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!te&&!ue?pe[ee]=g(x.image[ee],!0,i.maxCubemapSize):pe[ee]=ue?x.image[ee].image:x.image[ee],pe[ee]=re(x,pe[ee]);const Le=pe[0],Re=r.convert(x.format,x.colorSpace),me=r.convert(x.type),He=S(x.internalFormat,Re,me,x.colorSpace),I=x.isVideoTexture!==!0,le=K.__version===void 0||J===!0,ce=Q.dataReady;let he=w(x,Le);Ue(s.TEXTURE_CUBE_MAP,x);let ie;if(te){I&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,He,Le.width,Le.height);for(let ee=0;ee<6;ee++){ie=pe[ee].mipmaps;for(let Te=0;Te<ie.length;Te++){const De=ie[Te];x.format!==di?Re!==null?I?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,De.width,De.height,Re,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,He,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,De.width,De.height,Re,me,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,He,De.width,De.height,0,Re,me,De.data)}}}else{if(ie=x.mipmaps,I&&le){ie.length>0&&he++;const ee=ve(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ue){I?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,Re,me,pe[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,pe[ee].width,pe[ee].height,0,Re,me,pe[ee].data);for(let Te=0;Te<ie.length;Te++){const ot=ie[Te].image[ee].image;I?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,ot.width,ot.height,Re,me,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,He,ot.width,ot.height,0,Re,me,ot.data)}}else{I?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,me,pe[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,Re,me,pe[ee]);for(let Te=0;Te<ie.length;Te++){const De=ie[Te];I?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Re,me,De.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,He,Re,me,De.image[ee])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),K.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function be(A,x,F,J,Q,K){const de=r.convert(F.format,F.colorSpace),ne=r.convert(F.type),xe=S(F.internalFormat,de,ne,F.colorSpace),te=n.get(x),ue=n.get(F);if(ue.__renderTarget=x,!te.__hasExternalTextures){const pe=Math.max(1,x.width>>K),Le=Math.max(1,x.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,xe,pe,Le,x.depth,0,de,ne,null):t.texImage2D(Q,K,xe,pe,Le,0,de,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),X(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,ue.__webglTexture,0,Je(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,ue.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(A,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const J=x.depthTexture,Q=J&&J.isDepthTexture?J.type:null,K=v(x.stencilBuffer,Q),de=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=Je(x);X(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,K,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,K,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,K,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,A)}else{const J=x.textures;for(let Q=0;Q<J.length;Q++){const K=J[Q],de=r.convert(K.format,K.colorSpace),ne=r.convert(K.type),xe=S(K.internalFormat,de,ne,K.colorSpace),te=Je(x);F&&X(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,te,xe,x.width,x.height):X(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,xe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,xe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const Q=J.__webglTexture,K=Je(x);if(x.depthTexture.format===Ta)X(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Ea)X(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function nt(A){const x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=J}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const J=A.texture.mipmaps;J&&J.length>0?ke(x.__webglFramebuffer[0],A):ke(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=s.createRenderbuffer(),we(x.__webglDepthbuffer[J],A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),we(x.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(A,x,F){const J=n.get(A);x!==void 0&&be(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&nt(A)}function D(A){const x=A.texture,F=n.get(A),J=n.get(x);A.addEventListener("dispose",b);const Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=x.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let xe=0;xe<x.mipmaps.length;xe++)F.__webglFramebuffer[ne][xe]=s.createFramebuffer()}else F.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)F.__webglFramebuffer[ne]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(de)for(let ne=0,xe=Q.length;ne<xe;ne++){const te=n.get(Q[ne]);te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&X(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<Q.length;ne++){const xe=Q[ne];F.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const te=r.convert(xe.format,xe.colorSpace),ue=r.convert(xe.type),pe=S(xe.internalFormat,te,ue,xe.colorSpace,A.isXRRenderTarget===!0),Le=Je(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,pe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),we(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)be(F.__webglFramebuffer[ne][xe],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe);else be(F.__webglFramebuffer[ne],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ne=0,xe=Q.length;ne<xe;ne++){const te=Q[ne],ue=n.get(te);let pe=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,ue.__webglTexture),Ue(pe,te),be(F.__webglFramebuffer,A,te,s.COLOR_ATTACHMENT0+ne,pe,0),m(te)&&p(pe)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,J.__webglTexture),Ue(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)be(F.__webglFramebuffer[xe],A,x,s.COLOR_ATTACHMENT0,ne,xe);else be(F.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,ne,0);m(x)&&p(ne),t.unbindTexture()}A.depthBuffer&&nt(A)}function Ye(A){const x=A.textures;for(let F=0,J=x.length;F<J;F++){const Q=x[F];if(m(Q)){const K=T(A),de=n.get(Q).__webglTexture;t.bindTexture(K,de),p(K),t.unbindTexture()}}}const Ee=[],qe=[];function O(A){if(A.samples>0){if(X(A)===!1){const x=A.textures,F=A.width,J=A.height;let Q=s.COLOR_BUFFER_BIT;const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=n.get(A),ne=x.length>1;if(ne)for(let te=0;te<x.length;te++)t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const xe=A.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let te=0;te<x.length;te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,de.__webglColorRenderbuffer[te]);const ue=n.get(x[te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ue,0)}s.blitFramebuffer(0,0,F,J,0,0,F,J,Q,s.NEAREST),l===!0&&(Ee.length=0,qe.length=0,Ee.push(s.COLOR_ATTACHMENT0+te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ee.push(K),qe.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let te=0;te<x.length;te++){t.bindFramebuffer(s.FRAMEBUFFER,de.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,de.__webglColorRenderbuffer[te]);const ue=n.get(x[te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,de.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.TEXTURE_2D,ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Je(A){return Math.min(i.maxSamples,A.samples)}function X(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function re(A,x){const F=A.colorSpace,J=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Un&&F!==Ir&&(mt.getTransfer(F)===Tt?(J!==di||Q!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Ve,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=X}function xT(s,e){function t(n,i=Ir){let r;const o=mt.getTransfer(i);if(n===qi)return s.UNSIGNED_BYTE;if(n===Gh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===om)return s.BYTE;if(n===am)return s.SHORT;if(n===Ma)return s.UNSIGNED_SHORT;if(n===Vh)return s.INT;if(n===Ts)return s.UNSIGNED_INT;if(n===Ai)return s.FLOAT;if(n===ka)return s.HALF_FLOAT;if(n===cm)return s.ALPHA;if(n===Xh)return s.RGB;if(n===di)return s.RGBA;if(n===Ta)return s.DEPTH_COMPONENT;if(n===Ea)return s.DEPTH_STENCIL;if(n===Yh)return s.RED;if(n===qh)return s.RED_INTEGER;if(n===um)return s.RG;if(n===Kh)return s.RG_INTEGER;if(n===$h)return s.RGBA_INTEGER;if(n===Ul||n===Nl||n===Ol||n===Fl)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ol)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ou||n===Fu||n===Bu||n===ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zu||n===Hu||n===Vu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zu||n===Hu)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===Ku||n===$u||n===ju||n===Zu||n===Ju||n===Qu||n===eh||n===th||n===nh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ku)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$u)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ju)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ju)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===th)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===ih||n===rh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hm||n===sh||n===oh||n===ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class zm extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const yT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`;class ST{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new zm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:yT,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TT extends Co{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new ST,m={},p=t.getContextAttributes();let T=null,S=null;const v=[],w=[],R=new dt;let b=null;const P=new dn;P.viewport=new _t;const y=new dn;y.viewport=new _t;const M=[P,y],C=new Uv;let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=v[Z];return fe===void 0&&(fe=new Yc,v[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=v[Z];return fe===void 0&&(fe=new Yc,v[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=v[Z];return fe===void 0&&(fe=new Yc,v[Z]=fe),fe.getHandSpace()};function V(Z){const fe=w.indexOf(Z.inputSource);if(fe===-1)return;const ae=v[fe];ae!==void 0&&(ae.update(Z.inputSource,Z.frame,c||o),ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<v.length;Z++){const fe=w[Z];fe!==null&&(w[Z]=null,v[Z].disconnect(fe))}U=null,H=null,g.reset();for(const Z in m)delete m[Z];e.setRenderTarget(T),d=null,f=null,h=null,i=null,S=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",j),i.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(i,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,be=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?Ea:Ta,be=p.stencil?Sa:Ts);const ke={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=h.createProjectionLayer(ke),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xr(f.textureWidth,f.textureHeight,{format:di,type:qi,depthTexture:new Rm(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xr(d.framebufferWidth,d.framebufferHeight,{format:di,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Z){for(let fe=0;fe<Z.removed.length;fe++){const ae=Z.removed[fe],be=w.indexOf(ae);be>=0&&(w[be]=null,v[be].disconnect(ae))}for(let fe=0;fe<Z.added.length;fe++){const ae=Z.added[fe];let be=w.indexOf(ae);if(be===-1){for(let ke=0;ke<v.length;ke++)if(ke>=w.length){w.push(ae),be=ke;break}else if(w[ke]===null){w[ke]=ae,be=ke;break}if(be===-1)break}const we=v[be];we&&we.connect(ae)}}const Y=new z,G=new z;function oe(Z,fe,ae){Y.setFromMatrixPosition(fe.matrixWorld),G.setFromMatrixPosition(ae.matrixWorld);const be=Y.distanceTo(G),we=fe.projectionMatrix.elements,ke=ae.projectionMatrix.elements,nt=we[14]/(we[10]-1),Ve=we[14]/(we[10]+1),D=(we[9]+1)/we[5],Ye=(we[9]-1)/we[5],Ee=(we[8]-1)/we[0],qe=(ke[8]+1)/ke[0],O=nt*Ee,Je=nt*qe,X=be/(-Ee+qe),N=X*-Ee;if(fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(N),Z.translateZ(X),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const re=nt+X,ve=Ve+X,A=O-N,x=Je+(be-N),F=D*Ve/ve*re,J=Ye*Ve/ve*re;Z.projectionMatrix.makePerspective(A,x,F,J,re,ve),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function L(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let fe=Z.near,ae=Z.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),C.near=y.near=P.near=fe,C.far=y.far=P.far=ae,(U!==C.near||H!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,H=C.far),C.layers.mask=Z.layers.mask|6,P.layers.mask=C.layers.mask&3,y.layers.mask=C.layers.mask&5;const be=Z.parent,we=C.cameras;L(C,be);for(let ke=0;ke<we.length;ke++)L(we[ke],be);we.length===2?oe(C,P,y):C.projectionMatrix.copy(P.projectionMatrix),ge(Z,C,be)};function ge(Z,fe,ae){ae===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_o*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(Z){return m[Z]};let Ue=null;function Ze(Z,fe){if(u=fe.getViewerPose(c||o),_=fe,u!==null){const ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let be=!1;ae.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let Ve=0;Ve<ae.length;Ve++){const D=ae[Ve];let Ye=null;if(d!==null)Ye=d.getViewport(D);else{const qe=h.getViewSubImage(f,D);Ye=qe.viewport,Ve===0&&(e.setRenderTargetTextures(S,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(S))}let Ee=M[Ve];Ee===void 0&&(Ee=new dn,Ee.layers.enable(Ve),Ee.viewport=new _t,M[Ve]=Ee),Ee.matrix.fromArray(D.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(D.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ve===0&&(C.matrix.copy(Ee.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(Ee)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ve=h.getDepthInformation(ae[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,i.renderState)}if(we&&we.includes("camera-access")&&(e.state.unbindTexture(),h))for(let Ve=0;Ve<ae.length;Ve++){const D=ae[Ve].camera;if(D){let Ye=m[D];Ye||(Ye=new zm,m[D]=Ye);const Ee=h.getCameraImage(D);Ye.sourceTexture=Ee}}}for(let ae=0;ae<v.length;ae++){const be=w[ae],we=v[ae];be!==null&&we!==void 0&&we.update(be,fe,c||o)}Ue&&Ue(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Fe=new Nm;Fe.setAnimationLoop(Ze),this.setAnimationLoop=function(Z){Ue=Z},this.dispose=function(){}}}const ns=new Pi,ET=new $e;function bT(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ym(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),S=T.envMap,v=T.envMapRotation;S&&(m.envMap.value=S,ns.copy(v),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(ET.makeRotationFromEuler(ns)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wT(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const v=S.program;n.uniformBlockBinding(T,v)}function c(T,S){let v=i[T.id];v===void 0&&(_(T),v=u(T),i[T.id]=v,T.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(T,w);const R=e.render.frame;r[T.id]!==R&&(f(T),r[T.id]=R)}function u(T){const S=h();T.__bindingPointIndex=S;const v=s.createBuffer(),w=T.__size,R=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=i[T.id],v=T.uniforms,w=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,b=v.length;R<b;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,M=P.length;y<M;y++){const C=P[y];if(d(C,R,y,w)===!0){const U=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let j=0;j<H.length;j++){const W=H[j],Y=g(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,U+V,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(T,S,v,w){const R=T.value,b=S+"_"+v;if(w[b]===void 0)return typeof R=="number"||typeof R=="boolean"?w[b]=R:w[b]=R.clone(),!0;{const P=w[b];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return w[b]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function _(T){const S=T.uniforms;let v=0;const w=16;for(let b=0,P=S.length;b<P;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,C=y.length;M<C;M++){const U=y[M],H=Array.isArray(U.value)?U.value:[U.value];for(let V=0,j=H.length;V<j;V++){const W=H[V],Y=g(W),G=v%w,oe=G%Y.boundary,L=G+oe;v+=oe,L!==0&&w-L<Y.storage&&(v+=w-L),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const R=v%w;return R>0&&(v+=w-R),T.__size=v,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class AT{constructor(e={}){const{canvas:t=C0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=on;let R=0,b=0,P=null,y=-1,M=null;const C=new _t,U=new _t;let H=null;const V=new Xe(0);let j=0,W=t.width,Y=t.height,G=1,oe=null,L=null;const ge=new _t(0,0,W,Y),Ue=new _t(0,0,W,Y);let Ze=!1;const Fe=new tf;let Z=!1,fe=!1;const ae=new $e,be=new z,we=new _t,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function Ve(){return P===null?G:1}let D=n;function Ye(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){const B="webgl2";if(D=Ye(B,E),D===null)throw Ye(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,qe,O,Je,X,N,re,ve,A,x,F,J,Q,K,de,ne,xe,te,ue,pe,Le,Re,me,He;function I(){Ee=new FM(D),Ee.init(),Re=new xT(D,Ee),qe=new PM(D,Ee,e,Re),O=new _T(D,Ee),qe.reversedDepthBuffer&&f&&O.buffers.depth.setReversed(!0),Je=new zM(D),X=new rT,N=new vT(D,Ee,O,X,qe,Re,Je),re=new LM(v),ve=new OM(v),A=new Yv(D),me=new RM(D,A),x=new BM(D,A,Je,me),F=new VM(D,x,A,Je),ue=new HM(D,qe,N),ne=new DM(X),J=new iT(v,re,ve,Ee,qe,me,ne),Q=new bT(v,X),K=new oT,de=new fT(Ee),te=new AM(v,re,ve,O,F,d,l),xe=new mT(v,F,qe),He=new wT(D,Je,qe,O),pe=new CM(D,Ee,Je),Le=new kM(D,Ee,Je),Je.programs=J.programs,v.capabilities=qe,v.extensions=Ee,v.properties=X,v.renderLists=K,v.shadowMap=xe,v.state=O,v.info=Je}I();const le=new TT(v,D);this.xr=le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(W,Y,!1))},this.getSize=function(E){return E.set(W,Y)},this.setSize=function(E,B,q=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Y=B,t.width=Math.floor(E*G),t.height=Math.floor(B*G),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(W*G,Y*G).floor()},this.setDrawingBufferSize=function(E,B,q){W=E,Y=B,G=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(ge)},this.setViewport=function(E,B,q,$){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,B,q,$),O.viewport(C.copy(ge).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,B,q,$){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,B,q,$),O.scissor(U.copy(Ue).multiplyScalar(G).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){O.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let $=0;if(E){let k=!1;if(P!==null){const se=P.texture.format;k=se===$h||se===Kh||se===qh}if(k){const se=P.texture.type,_e=se===qi||se===Ts||se===Ma||se===Sa||se===Gh||se===Wh,Ce=te.getClearColor(),Ae=te.getClearAlpha(),ze=Ce.r,Oe=Ce.g,Ne=Ce.b;_e?(_[0]=ze,_[1]=Oe,_[2]=Ne,_[3]=Ae,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=ze,g[1]=Oe,g[2]=Ne,g[3]=Ae,D.clearBufferiv(D.COLOR,0,g))}else $|=D.COLOR_BUFFER_BIT}B&&($|=D.DEPTH_BUFFER_BIT),q&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),te.dispose(),K.dispose(),de.dispose(),X.dispose(),re.dispose(),ve.dispose(),F.dispose(),me.dispose(),He.dispose(),J.dispose(),le.dispose(),le.removeEventListener("sessionstart",je),le.removeEventListener("sessionend",Me),Ge.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=Je.autoReset,B=xe.enabled,q=xe.autoUpdate,$=xe.needsUpdate,k=xe.type;I(),Je.autoReset=E,xe.enabled=B,xe.autoUpdate=q,xe.needsUpdate=$,xe.type=k}function ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ee(E){const B=E.target;B.removeEventListener("dispose",ee),Te(B)}function Te(E){De(E),X.remove(E)}function De(E){const B=X.get(E).programs;B!==void 0&&(B.forEach(function(q){J.releaseProgram(q)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,$,k,se){B===null&&(B=ke);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Ce=yt(E,B,q,$,k);O.setMaterial($,_e);let Ae=q.index,ze=1;if($.wireframe===!0){if(Ae=x.getWireframeAttribute(q),Ae===void 0)return;ze=2}const Oe=q.drawRange,Ne=q.attributes.position;let Qe=Oe.start*ze,ct=(Oe.start+Oe.count)*ze;se!==null&&(Qe=Math.max(Qe,se.start*ze),ct=Math.min(ct,(se.start+se.count)*ze)),Ae!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Ae.count)):Ne!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Ne.count));const kt=ct-Qe;if(kt<0||kt===1/0)return;me.setup(k,$,Ce,q,Ae);let Dt,bt=pe;if(Ae!==null&&(Dt=A.get(Ae),bt=Le,bt.setIndex(Dt)),k.isMesh)$.wireframe===!0?(O.setLineWidth($.wireframeLinewidth*Ve()),bt.setMode(D.LINES)):bt.setMode(D.TRIANGLES);else if(k.isLine){let We=$.linewidth;We===void 0&&(We=1),O.setLineWidth(We*Ve()),k.isLineSegments?bt.setMode(D.LINES):k.isLineLoop?bt.setMode(D.LINE_LOOP):bt.setMode(D.LINE_STRIP)}else k.isPoints?bt.setMode(D.POINTS):k.isSprite&&bt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)io("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))bt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const We=k._multiDrawStarts,Ut=k._multiDrawCounts,gt=k._multiDrawCount,Gn=Ae?A.get(Ae).bytesPerElement:1,Ps=X.get($).currentProgram.getUniforms();for(let Wn=0;Wn<gt;Wn++)Ps.setValue(D,"_gl_DrawID",Wn),bt.render(We[Wn]/Gn,Ut[Wn])}else if(k.isInstancedMesh)bt.renderInstances(Qe,kt,k.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ut=Math.min(q.instanceCount,We);bt.renderInstances(Qe,kt,Ut)}else bt.render(Qe,kt)};function ot(E,B,q){E.transparent===!0&&E.side===ki&&E.forceSinglePass===!1?(E.side=Dn,E.needsUpdate=!0,Vt(E,B,q),E.side=gr,E.needsUpdate=!0,Vt(E,B,q),E.side=ki):Vt(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),p=de.get(q),p.init(B),S.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==q&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const $=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){const Ce=se[_e];ot(Ce,q,k),$.add(Ce)}else ot(se,q,k),$.add(se)}),p=S.pop(),$},this.compileAsync=function(E,B,q=null){const $=this.compile(E,B,q);return new Promise(k=>{function se(){if($.forEach(function(_e){X.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){k(E);return}setTimeout(se,10)}Ee.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ye=null;function Ie(E){ye&&ye(E)}function je(){Ge.stop()}function Me(){Ge.start()}const Ge=new Nm;Ge.setAnimationLoop(Ie),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(E){ye=E,le.setAnimationLoop(E),E===null?Ge.stop():Ge.start()},le.addEventListener("sessionstart",je),le.addEventListener("sessionend",Me),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(B),B=le.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,P),p=de.get(E,S.length),p.init(B),S.push(p),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Fe.setFromProjectionMatrix(ae,Hi,B.reversedDepth),fe=this.localClippingEnabled,Z=ne.init(this.clippingPlanes,fe),m=K.get(E,T.length),m.init(),T.push(m),le.enabled===!0&&le.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&Be(se,B,-1/0,v.sortObjects)}Be(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,L),nt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,nt&&te.addToRenderList(m,E),this.info.render.frame++,Z===!0&&ne.beginShadows();const q=p.state.shadowsArray;xe.render(q,E,B),Z===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const se=B.cameras;if(k.length>0)for(let _e=0,Ce=se.length;_e<Ce;_e++){const Ae=se[_e];Ht($,k,E,Ae)}nt&&te.render(E);for(let _e=0,Ce=se.length;_e<Ce;_e++){const Ae=se[_e];Ke(m,E,Ae,Ae.viewport)}}else k.length>0&&Ht($,k,E,B),nt&&te.render(E),Ke(m,E,B);P!==null&&b===0&&(N.updateMultisampleRenderTarget(P),N.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,B),me.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],Z===!0&&ne.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Be(E,B,q,$){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){$&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const _e=F.update(E),Ce=E.material;Ce.visible&&m.push(E,_e,Ce,q,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const _e=F.update(E),Ce=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),we.copy(_e.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(Ce)){const Ae=_e.groups;for(let ze=0,Oe=Ae.length;ze<Oe;ze++){const Ne=Ae[ze],Qe=Ce[Ne.materialIndex];Qe&&Qe.visible&&m.push(E,_e,Qe,q,we.z,Ne)}}else Ce.visible&&m.push(E,_e,Ce,q,we.z,null)}}const se=E.children;for(let _e=0,Ce=se.length;_e<Ce;_e++)Be(se[_e],B,q,$)}function Ke(E,B,q,$){const k=E.opaque,se=E.transmissive,_e=E.transparent;p.setupLightsView(q),Z===!0&&ne.setGlobalState(v.clippingPlanes,q),$&&O.viewport(C.copy($)),k.length>0&&it(k,B,q),se.length>0&&it(se,B,q),_e.length>0&&it(_e,B,q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ht(E,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Xr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?ka:qi,minFilter:ur,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const se=p.state.transmissionRenderTarget[$.id],_e=$.viewport||C;se.setSize(_e.z*v.transmissionResolutionScale,_e.w*v.transmissionResolutionScale);const Ce=v.getRenderTarget(),Ae=v.getActiveCubeFace(),ze=v.getActiveMipmapLevel();v.setRenderTarget(se),v.getClearColor(V),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),nt&&te.render(q);const Oe=v.toneMapping;v.toneMapping=Hr;const Ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Z===!0&&ne.setGlobalState(v.clippingPlanes,$),it(E,q,$),N.updateMultisampleRenderTarget(se),N.updateRenderTargetMipmap(se),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,kt=B.length;ct<kt;ct++){const Dt=B[ct],bt=Dt.object,We=Dt.geometry,Ut=Dt.material,gt=Dt.group;if(Ut.side===ki&&bt.layers.test($.layers)){const Gn=Ut.side;Ut.side=Dn,Ut.needsUpdate=!0,Lt(bt,q,$,We,Ut,gt),Ut.side=Gn,Ut.needsUpdate=!0,Qe=!0}}Qe===!0&&(N.updateMultisampleRenderTarget(se),N.updateRenderTargetMipmap(se))}v.setRenderTarget(Ce,Ae,ze),v.setClearColor(V,j),Ne!==void 0&&($.viewport=Ne),v.toneMapping=Oe}function it(E,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let k=0,se=E.length;k<se;k++){const _e=E[k],Ce=_e.object,Ae=_e.geometry,ze=_e.group;let Oe=_e.material;Oe.allowOverride===!0&&$!==null&&(Oe=$),Ce.layers.test(q.layers)&&Lt(Ce,B,q,Ae,Oe,ze)}}function Lt(E,B,q,$,k,se){E.onBeforeRender(v,B,q,$,k,se),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,B,q,$,E,se),k.transparent===!0&&k.side===ki&&k.forceSinglePass===!1?(k.side=Dn,k.needsUpdate=!0,v.renderBufferDirect(q,B,$,k,E,se),k.side=gr,k.needsUpdate=!0,v.renderBufferDirect(q,B,$,k,E,se),k.side=ki):v.renderBufferDirect(q,B,$,k,E,se),E.onAfterRender(v,B,q,$,k,se)}function Vt(E,B,q){B.isScene!==!0&&(B=ke);const $=X.get(E),k=p.state.lights,se=p.state.shadowsArray,_e=k.state.version,Ce=J.getParameters(E,k.state,se,B,q),Ae=J.getProgramCacheKey(Ce);let ze=$.programs;$.environment=E.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(E.isMeshStandardMaterial?ve:re).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",ee),ze=new Map,$.programs=ze);let Oe=ze.get(Ae);if(Oe!==void 0){if($.currentProgram===Oe&&$.lightsStateVersion===_e)return Et(E,Ce),Oe}else Ce.uniforms=J.getUniforms(E),E.onBeforeCompile(Ce,v),Oe=J.acquireProgram(Ce,Ae),ze.set(Ae,Oe),$.uniforms=Ce.uniforms;const Ne=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=ne.uniform),Et(E,Ce),$.needsLights=Pt(E),$.lightsStateVersion=_e,$.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Oe,$.uniformsList=null,Oe}function Ct(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=kl.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Et(E,B){const q=X.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function yt(E,B,q,$,k){B.isScene!==!0&&(B=ke),N.resetTextureUnits();const se=B.fog,_e=$.isMeshStandardMaterial?B.environment:null,Ce=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Un,Ae=($.isMeshStandardMaterial?ve:re).get($.envMap||_e),ze=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color;let kt=Hr;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(kt=v.toneMapping);const Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=Dt!==void 0?Dt.length:0,We=X.get($),Ut=p.state.lights;if(Z===!0&&(fe===!0||E!==M)){const vn=E===M&&$.id===y;ne.setState($,E,vn)}let gt=!1;$.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ut.state.version||We.outputColorSpace!==Ce||k.isBatchedMesh&&We.batching===!1||!k.isBatchedMesh&&We.batching===!0||k.isBatchedMesh&&We.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&We.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&We.instancing===!1||!k.isInstancedMesh&&We.instancing===!0||k.isSkinnedMesh&&We.skinning===!1||!k.isSkinnedMesh&&We.skinning===!0||k.isInstancedMesh&&We.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&We.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&We.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&We.instancingMorph===!1&&k.morphTexture!==null||We.envMap!==Ae||$.fog===!0&&We.fog!==se||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ne.numPlanes||We.numIntersection!==ne.numIntersection)||We.vertexAlphas!==ze||We.vertexTangents!==Oe||We.morphTargets!==Ne||We.morphNormals!==Qe||We.morphColors!==ct||We.toneMapping!==kt||We.morphTargetsCount!==bt)&&(gt=!0):(gt=!0,We.__version=$.version);let Gn=We.currentProgram;gt===!0&&(Gn=Vt($,B,k));let Ps=!1,Wn=!1,No=!1;const Nt=Gn.getUniforms(),oi=We.uniforms;if(O.useProgram(Gn.program)&&(Ps=!0,Wn=!0,No=!0),$.id!==y&&(y=$.id,Wn=!0),Ps||M!==E){O.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Nt.setValue(D,"projectionMatrix",E.projectionMatrix),Nt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Nn=Nt.map.cameraPosition;Nn!==void 0&&Nn.setValue(D,be.setFromMatrixPosition(E.matrixWorld)),qe.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Wn=!0,No=!0)}if(k.isSkinnedMesh){Nt.setOptional(D,k,"bindMatrix"),Nt.setOptional(D,k,"bindMatrixInverse");const vn=k.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Nt.setValue(D,"boneTexture",vn.boneTexture,N))}k.isBatchedMesh&&(Nt.setOptional(D,k,"batchingTexture"),Nt.setValue(D,"batchingTexture",k._matricesTexture,N),Nt.setOptional(D,k,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",k._indirectTexture,N),Nt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",k._colorsTexture,N));const ai=q.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&ue.update(k,q,Gn),(Wn||We.receiveShadow!==k.receiveShadow)&&(We.receiveShadow=k.receiveShadow,Nt.setValue(D,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(oi.envMap.value=Ae,oi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(oi.envMapIntensity.value=B.environmentIntensity),Wn&&(Nt.setValue(D,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Vn(oi,No),se&&$.fog===!0&&Q.refreshFogUniforms(oi,se),Q.refreshMaterialUniforms(oi,$,G,Y,p.state.transmissionRenderTarget[E.id]),kl.upload(D,Ct(We),oi,N)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(kl.upload(D,Ct(We),oi,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Nt.setValue(D,"center",k.center),Nt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(D,"normalMatrix",k.normalMatrix),Nt.setValue(D,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const vn=$.uniformsGroups;for(let Nn=0,Ec=vn.length;Nn<Ec;Nn++){const jr=vn[Nn];He.update(jr,Gn),He.bind(jr,Gn)}}return Gn}function Vn(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Pt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,B,q){const $=X.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=B,X.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const q=X.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const _n=D.createFramebuffer();this.setRenderTarget=function(E,B=0,q=0){P=E,R=B,b=q;let $=!0,k=null,se=!1,_e=!1;if(E){const Ae=X.get(E);if(Ae.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Ae.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(Ae.__hasExternalTextures)N.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(Ae.__boundDepthTexture!==Ne){if(Ne!==null&&X.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);const Oe=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[B])?k=Oe[B][q]:k=Oe[B],se=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?k=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?k=Oe[q]:k=Oe,C.copy(E.viewport),U.copy(E.scissor),H=E.scissorTest}else C.copy(ge).multiplyScalar(G).floor(),U.copy(Ue).multiplyScalar(G).floor(),H=Ze;if(q!==0&&(k=_n),O.bindFramebuffer(D.FRAMEBUFFER,k)&&$&&O.drawBuffers(E,k),O.viewport(C),O.scissor(U),O.setScissorTest(H),se){const Ae=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,q)}else if(_e){const Ae=B;for(let ze=0;ze<E.textures.length;ze++){const Oe=X.get(E.textures[ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ze,Oe.__webglTexture,q,Ae)}}else if(E!==null&&q!==0){const Ae=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ae.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(E,B,q,$,k,se,_e,Ce=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){O.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const ze=E.textures[Ce],Oe=ze.format,Ne=ze.type;if(!qe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-$&&q>=0&&q<=E.height-k&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(B,q,$,k,Re.convert(Oe),Re.convert(Ne),se))}finally{const ze=P!==null?X.get(P).__webglFramebuffer:null;O.bindFramebuffer(D.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,$,k,se,_e,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae)if(B>=0&&B<=E.width-$&&q>=0&&q<=E.height-k){O.bindFramebuffer(D.FRAMEBUFFER,Ae);const ze=E.textures[Ce],Oe=ze.format,Ne=ze.type;if(!qe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(B,q,$,k,Re.convert(Oe),Re.convert(Ne),0);const ct=P!==null?X.get(P).__webglFramebuffer:null;O.bindFramebuffer(D.FRAMEBUFFER,ct);const kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await P0(D,kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Qe),D.deleteSync(kt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){const $=Math.pow(2,-q),k=Math.floor(E.image.width*$),se=Math.floor(E.image.height*$),_e=B!==null?B.x:0,Ce=B!==null?B.y:0;N.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,_e,Ce,k,se),O.unbindTexture()};const si=D.createFramebuffer(),$t=D.createFramebuffer();this.copyTextureToTexture=function(E,B,q=null,$=null,k=0,se=null){se===null&&(k!==0?(io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let _e,Ce,Ae,ze,Oe,Ne,Qe,ct,kt;const Dt=E.isCompressedTexture?E.mipmaps[se]:E.image;if(q!==null)_e=q.max.x-q.min.x,Ce=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,Oe=q.min.y,Ne=q.isBox3?q.min.z:0;else{const ai=Math.pow(2,-k);_e=Math.floor(Dt.width*ai),Ce=Math.floor(Dt.height*ai),E.isDataArrayTexture?Ae=Dt.depth:E.isData3DTexture?Ae=Math.floor(Dt.depth*ai):Ae=1,ze=0,Oe=0,Ne=0}$!==null?(Qe=$.x,ct=$.y,kt=$.z):(Qe=0,ct=0,kt=0);const bt=Re.convert(B.format),We=Re.convert(B.type);let Ut;B.isData3DTexture?(N.setTexture3D(B,0),Ut=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(N.setTexture2DArray(B,0),Ut=D.TEXTURE_2D_ARRAY):(N.setTexture2D(B,0),Ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const gt=D.getParameter(D.UNPACK_ROW_LENGTH),Gn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ps=D.getParameter(D.UNPACK_SKIP_PIXELS),Wn=D.getParameter(D.UNPACK_SKIP_ROWS),No=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne);const Nt=E.isDataArrayTexture||E.isData3DTexture,oi=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const ai=X.get(E),vn=X.get(B),Nn=X.get(ai.__renderTarget),Ec=X.get(vn.__renderTarget);O.bindFramebuffer(D.READ_FRAMEBUFFER,Nn.__webglFramebuffer),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ec.__webglFramebuffer);for(let jr=0;jr<Ae;jr++)Nt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(E).__webglTexture,k,Ne+jr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(B).__webglTexture,se,kt+jr)),D.blitFramebuffer(ze,Oe,_e,Ce,Qe,ct,_e,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);O.bindFramebuffer(D.READ_FRAMEBUFFER,null),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||X.has(E)){const ai=X.get(E),vn=X.get(B);O.bindFramebuffer(D.READ_FRAMEBUFFER,si),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,$t);for(let Nn=0;Nn<Ae;Nn++)Nt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ai.__webglTexture,k,Ne+Nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ai.__webglTexture,k),oi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,se,kt+Nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,se),k!==0?D.blitFramebuffer(ze,Oe,_e,Ce,Qe,ct,_e,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):oi?D.copyTexSubImage3D(Ut,se,Qe,ct,kt+Nn,ze,Oe,_e,Ce):D.copyTexSubImage2D(Ut,se,Qe,ct,ze,Oe,_e,Ce);O.bindFramebuffer(D.READ_FRAMEBUFFER,null),O.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else oi?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ut,se,Qe,ct,kt,_e,Ce,Ae,bt,We,Dt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,se,Qe,ct,kt,_e,Ce,Ae,bt,Dt.data):D.texSubImage3D(Ut,se,Qe,ct,kt,_e,Ce,Ae,bt,We,Dt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,Qe,ct,_e,Ce,bt,We,Dt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,Qe,ct,Dt.width,Dt.height,bt,Dt.data):D.texSubImage2D(D.TEXTURE_2D,se,Qe,ct,_e,Ce,bt,We,Dt);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Gn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ps),D.pixelStorei(D.UNPACK_SKIP_ROWS,Wn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,No),se===0&&B.generateMipmaps&&D.generateMipmap(Ut),O.unbindTexture()},this.copyTextureToTexture3D=function(E,B,q=null,$=null,k=0){return io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,q,$,k)},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),O.unbindTexture()},this.resetState=function(){R=0,b=0,P=null,O.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}function ap(s,e){if(e===t0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===lh||e===fm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===lh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class RT extends Io{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new qT(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=aa.extractUrlBase(e);o=aa.resolveURL(c,this.path)}else o=aa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Lm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hm){try{o[ht.KHR_BINARY_GLTF]=new KT(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new aE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new DT;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new $T(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new jT;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new ZT;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function CT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class PT{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Un);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dv(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Um(u),c.distance=h;break;case"spot":c=new af(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),or(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class DT{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return ds}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Un),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,on))}return Promise.all(i)}}class LT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class IT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new dt(a,a)}return Promise.all(r)}}class UT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class NT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class OT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,on)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class FT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],Un),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class zT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],Un),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,on)),Promise.all(r)}}class HT{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Zi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class GT{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class WT{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class XT{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class YT{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class qT{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ui.TRIANGLES&&c.mode!==ui.TRIANGLE_STRIP&&c.mode!==ui.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new $e,m=new z,p=new Di,T=new z(1,1,1),S=new bm(_.geometry,_.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&T.fromBufferAttribute(l.SCALE,v),S.setMatrixAt(v,g.compose(m,p,T));for(const v in l)if(v==="_COLOR_0"){const w=l[v];S.instanceColor=new Ra(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);Bt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Hm="glTF",Wo=12,lp={JSON:1313821514,BIN:5130562};class KT{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Wo,r=new DataView(e,Wo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===lp.JSON){const c=new Uint8Array(e,Wo+o,a);this.content=n.decode(c)}else if(l===lp.BIN){const c=Wo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $T{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=fh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=fh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=so[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(d)},a,c,Un,f)})})}}class jT{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ZT{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class Vm extends Ha{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,T=1-m,S=p-f+h;for(let v=0;v!==a;v++){const w=o[g+v+a],R=o[g+v+l]*u,b=o[_+v+a],P=o[_+v]*u;r[v]=T*w+S*R+m*b+p*P}return r}}const JT=new Di;class QT extends Vm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return JT.fromArray(r).normalize().toArray(r),r}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cp={9728:Ln,9729:Cn,9984:sm,9985:Il,9986:$o,9987:ur},up={33071:Ur,33648:$l,10497:go},ou={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Rr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eE={CUBICSPLINE:void 0,LINEAR:wa,STEP:ba},au={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new sf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gr})),s.DefaultMaterial}function is(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function or(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function iE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rE(s){let e;const t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lu(t.attributes):e=s.indices+":"+lu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+lu(s.targets[n]);return e}function lu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const oE=new $e;class aE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new CT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Im(this.options.manager):this.textureLoader=new Iv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return is(r,a,i),or(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(aa.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ou[i.type],a=so[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new In(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ou[i.type],c=so[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(T);S||(g=new c(a,p*d,i.count*d/u),S=new nv(g,d/u),t.cache.add(T,S)),m=new Qh(S,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),m=new In(g,l,_);if(i.sparse!==void 0){const p=ou.SCALAR,T=so[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new T(o[1],S,i.sparse.count*p),R=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new In(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let b=0,P=w.length;b<P;b++){const y=w[b];if(m.setX(y,R[b*l]),l>=2&&m.setY(y,R[b*l+1]),l>=3&&m.setZ(y,R[b*l+2]),l>=4&&m.setW(y,R[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=cp[f.magFilter]||Cn,u.minFilter=cp[f.minFilter]||ur,u.wrapS=up[f.wrapS]||go,u.wrapT=up[f.wrapT]||go,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ln&&u.minFilter!==Cn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new rn(g);m.needsUpdate=!0,f(m)}),t.load(aa.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),or(h,o),h.userData.mimeType=o.mimeType||sE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Am,Ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wm,Ci.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return sf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Un),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,on)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ki);const u=r.alphaMode||au.OPAQUE;if(u===au.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===au.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ds&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new dt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==ds&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ds){const h=r.emissiveFactor;a.emissive=new Xe().setRGB(h[0],h[1],h[2],Un)}return r.emissiveTexture!==void 0&&o!==ds&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,on)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),or(h,r),t.associations.set(h,{materials:e}),r.extensions&&is(i,h,r),h})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=rE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=hp(new Li,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?tE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let p;const T=c[d];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new rv(g,T):new Pn(g,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?p.geometry=ap(p.geometry,fm):m.mode===ui.TRIANGLE_FAN&&(p.geometry=ap(p.geometry,lh));else if(m.mode===ui.LINES)p=new uv(g,T);else if(m.mode===ui.LINE_STRIP)p=new nf(g,T);else if(m.mode===ui.LINE_LOOP)p=new hv(g,T);else if(m.mode===ui.POINTS)p=new fv(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),or(p,r),m.extensions&&is(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&is(i,h[0],r),h[0];const f=new hr;r.extensions&&is(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dn(R0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new lf(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),or(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new $e;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ef(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let T=0,S=f.length;T<S;T++){const v=f[T],w=d[T],R=_[T],b=g[T],P=m[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=n._createAnimationTracks(v,w,R,b,P);if(y)for(let M=0;M<y.length;M++)p.push(y[M])}return new Sv(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,oE)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Tm:c.length>1?u=new hr:c.length===1?u=c[0]:u=new Bt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),or(u,r),r.extensions&&is(n,u,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new hr;n.name&&(r.name=i.createUniqueName(n.name)),or(r,n),n.extensions&&is(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ci||f instanceof rn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Rr[r.path]===Rr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Rr[r.path]){case Rr.weights:c=xo;break;case Rr.rotation:c=yo;break;case Rr.translation:case Rr.scale:c=Mo;break;default:switch(n.itemSize){case 1:c=xo;break;case 2:case 3:default:c=Mo;break}break}const u=i.interpolation!==void 0?eE[i.interpolation]:wa,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Rr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof yo?QT:Vm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lE(s,e,t){const n=e.attributes,i=new xr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const u=dh(so[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=dh(so[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ji;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function hp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=fh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return mt.workingColorSpace!==Un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),or(s,e),lE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?nE(s,e.targets,t):s})}function ar(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Gm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},So={duration:.5,overwrite:!1,delay:0},ff,ln,It,pi=1e8,At=1/pi,ph=Math.PI*2,cE=ph/4,uE=0,Wm=Math.sqrt,hE=Math.cos,fE=Math.sin,sn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},_r=function(e){return typeof e=="number"},df=function(e){return typeof e>"u"},$i=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},pf=function(){return typeof window<"u"},gl=function(e){return zt(e)||sn(e)},Xm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,mh=/(?:-?\.?\d|\.)+/gi,Ym=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qm=/[+-]=-?[.\d]+/,Km=/[^,'"\[\]\s]+/gi,dE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Ni,gh,mf,ni={},ec={},$m,jm=function(e){return(ec=To(e,ni))&&Hn},gf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ca=function(e,t){return!t&&console.warn(e)},Zm=function(e,t){return e&&(ni[e]=t)&&ec&&(ec[e]=t)||ni},Pa=function(){return 0},pE={suppressEvents:!0,isStart:!0,kill:!1},zl={suppressEvents:!0,kill:!1},mE={suppressEvents:!0},_f={},Vr=[],_h={},Jm,$n={},uu={},fp=30,Hl=[],vf="",xf=function(e){var t=e[0],n,i;if($i(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Hl.length;i--&&!Hl[i].targetTest(t););n=Hl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Sg(e[i],n)))||e.splice(i,1);return e},gs=function(e){return e._gsap||xf(mi(e))[0]._gsap},Qm=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():df(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},oo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},tc=function(){var e=Vr.length,t=Vr.slice(0),n,i;for(_h={},Vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yf=function(e){return!!(e._initted||e._startAt||e.add)},eg=function(e,t,n,i){Vr.length&&!ln&&tc(),e.render(t,n,!!(ln&&t<0&&yf(e))),Vr.length&&!ln&&tc()},tg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Km).length<2?t:sn(e)?e.trim():e},ng=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_E=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},To=function(e,t){for(var n in t)e[n]=t[n];return e},dp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$i(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},nc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},la=function(e){var t=e.parent||Ot,n=e.keyframes?_E(gn(e.keyframes)):ii;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ig=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},vc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vh=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(zl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yE=function s(e){return!e||e._ts&&s(e.parent)},pp=function(e){return e._repeat?Eo(e._tTime,e=e.duration()+e._rDelay)*e:0},Eo=function(e,t){var n=Math.floor(e=Kt(e/t));return e&&n===e?n-1:n},ic=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},xc=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},yc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),xc(e),n._dirty||_s(n,e)),e},rg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ic(e.rawTime(),t),(!t._dur||Va(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},zi=function(e,t,n,i){return t.parent&&Yr(t),t._start=Kt((_r(n)?n:n||e!==Ot?ci(e,n,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ig(e,t,"_first","_last",e._sort?"_start":0),xh(t)||(e._recent=t),i||rg(e,t),e._ts<0&&yc(e,e._tTime),e},sg=function(e,t){return(ni.ScrollTrigger||gf("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},og=function(e,t,n,i,r){if(Sf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jm!==Zn.frame)return Vr.push(e),e._lazy=[r,i],1},ME=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},xh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},SE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&ME(e)&&!(!e._initted&&xh(e))||(e._ts<0||e._dp._ts<0)&&!xh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Va(0,e._tDur,t),u=Eo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Eo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ln||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&og(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vh(e,t,n,!0),e._onUpdate&&!n&&Qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yr(e,1),!n&&!ln&&(Qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},TE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bo=function(e,t,n,i){var r=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Kt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&yc(e,e._tTime=e._tDur*a),e.parent&&xc(e),n||_s(e.parent,e),e},mp=function(e){return e instanceof An?_s(e):bo(e,e._dur)},EE={_start:0,endTime:Pa,totalDuration:Pa},ci=function s(e,t,n){var i=e.labels,r=e._recent||EE,o=e.duration()>=pi?r.endTime(!1):e._dur,a,l,c;return sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ca=function(e,t,n){var i=_r(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;o.immediateRender=Fn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new qt(t[0],o,t[r+1])},$r=function(e,t){return e||e===0?t(e):t},Va=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!sn(e)||!(t=dE.exec(e))?"":t[1]},bE=function(e,t,n){return $r(n,function(i){return Va(e,t,i)})},yh=[].slice,ag=function(e,t){return e&&$i(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$i(e[0]))&&!e.nodeType&&e!==Ni},wE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return sn(i)&&!t||ag(i,1)?(r=n).push.apply(r,mi(i)):n.push(i)})||n},mi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):sn(e)&&!n&&(gh||!wo())?yh.call((t||mf).querySelectorAll(e),0):gn(e)?wE(e,n):ag(e)?yh.call(e,0):e?[e]:[]},Mh=function(e){return e=mi(e)[0]||Ca("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Ca("Invalid scope")||mf.createElement("div"):e)}},lg=function(e){return e.sort(function(){return .5-Math.random()})},cg=function(e){if(zt(e))return e;var t=$i(e)?e:{each:e},n=vs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,T,S,v,w,R,b,P,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,pi])[1],!y){for(b=-pi;b<(b=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,T=y===pi?0:l?g*h/y-.5:i/y|0,b=0,P=pi,R=0;R<g;R++)S=R%y-p,v=T-(R/y|0),m[R]=w=c?Math.abs(c==="y"?v:S):Wm(S*S+v*v),w>b&&(b=w),w<P&&(P=w);i==="random"&&lg(m),m.max=b-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=pn(t.amount||t.each)||0,n=n&&g<0?xg(n):n}return g=(m[f]-m.min)/m.max||0,Kt(m.b+(n?n(g):g)*m.v)+m.u}},Sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_r(n)?0:pn(n))}},ug=function(e,t){var n=gn(e),i,r;return!n&&$i(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(r=!_r(e[0]))&&(i*=i)):e=Sh(e.increment)),$r(t,n?zt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=pi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||_r(o)?u:u+pn(o)}:Sh(e))},hg=function(e,t,n,i){return $r(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},AE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},RE=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},CE=function(e,t,n){return dg(e,t,0,1,n)},fg=function(e,t,n){return $r(n,function(i){return e[~~t(i)]})},PE=function s(e,t,n){var i=t-e;return gn(e)?fg(e,s(0,e.length),t):$r(n,function(r){return(i+(r-e)%i)%i+e})},DE=function s(e,t,n){var i=t-e,r=i*2;return gn(e)?fg(e,s(0,e.length-1),t):$r(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Da=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Km:mh),n+=e.substr(t,i-t)+hg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},dg=function(e,t,n,i,r){var o=t-e,a=i-n;return $r(r,function(l){return n+((l-e)/o*a||0)})},LE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=sn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=To(gn(e)?[]:{},e));if(!u){for(l in t)Mf.call(a,e,l,"get",t[l]);r=function(_){return bf(_,a)||(o?e.p:e)}}}return $r(n,r)},gp=function(e,t,n){var i=e.labels,r=pi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Qn=function(e,t,n){var i=e.vars,r=i[t],o=It,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Vr.length&&tc(),a&&(It=a),u=l?r.apply(c,l):r.call(c),It=o,u},Zo=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Qn(e,"onInterrupt"),e},eo,pg=[],mg=function(e){if(e)if(e=!e.name&&e.default||e,pf()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Pa,render:bf,add:Mf,kill:KE,modifier:qE,rawVars:0},o={targetTest:0,get:0,getSetter:Ef,aliases:{},register:0};if(wo(),e!==i){if($n[t])return;ii(i,ii(nc(e,r),o)),To(i.prototype,To(r,nc(e,o))),$n[i.prop=t]=i,e.targetTest&&(Hl.push(i),_f[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zm(t,i),e.register&&e.register(Hn,i,kn)}else pg.push(e)},wt=255,Jo={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},hu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},gg=function(e,t,n){var i=e?_r(e)?[e>>16,e>>8&wt,e&wt]:0:Jo.black,r,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Jo[e])i=Jo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(mh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=hu(l+1/3,r,o),i[1]=hu(l,r,o),i[2]=hu(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Ym),n&&i.length<4&&(i[3]=1),i}else i=e.match(mh)||Jo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/wt,o=i[1]/wt,a=i[2]/wt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_g=function(e){var t=[],n=[],i=-1;return e.split(Gr).forEach(function(r){var o=r.match(Qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},_p=function(e,t,n){var i="",r=(e+i).match(Gr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=gg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=_g(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gr,"1").split(Qs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Gr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Gr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Jo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),IE=/hsl[a]?\(/,vg=function(e){var t=e.join(" "),n;if(Gr.lastIndex=0,Gr.test(t))return n=IE.test(t),e[1]=_p(e[1],n),e[0]=_p(e[0],n,_g(e[1])),!0},La,Zn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,_=function g(m){var p=s()-i,T=m===!0,S,v,w,R;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,S=w-o,(S>0||T)&&(R=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=S+(S>=r?4:r-S),v=1),T||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](w,f,R,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){$m&&(!gh&&pf()&&(Ni=gh=window,mf=Ni.document||{},ni.gsap=Hn,(Ni.gsapVersions||(Ni.gsapVersions=[])).push(Hn.version),jm(ec||Ni.GreenSockGlobals||!Ni.gsap&&Ni||{}),pg.forEach(mg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},La=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),La=0,c=Pa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,T){var S=p?function(v,w,R,b){m(v,w,R,b),h.remove(S)}:m;return h.remove(m),a[T?"unshift":"push"](S),wo(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),wo=function(){return!La&&Zn.wake()},pt={},UE=/^[\d.\-M][\d.\-,\s]/,NE=/["']/g,OE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(NE,"").trim():+c,i=l.substr(a+1).trim();return t},FE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},BE=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[OE(t[1])]:FE(e).split(",").map(tg)):pt._CE&&UE.test(e)?pt._CE("",e):n},xg=function(e){return function(t){return 1-e(1-t)}},yg=function s(e,t){for(var n=e._first,i;n;)n instanceof An?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vs=function(e,t){return e&&(zt(e)?e:pt[e]||BE(e))||t},Cs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Bn(e,function(a){pt[a]=ni[a]=r,pt[o=a.toLowerCase()]=n;for(var l in r)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=r[l]}),r},Mg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/ph*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*fE((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Mg(a);return r=ph/r,l.config=function(c,u){return s(e,c,u)},l},du=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Mg(n);return i.config=function(r){return s(e,r)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Cs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;Cs("Elastic",fu("in"),fu("out"),fu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Cs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Cs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Cs("Circ",function(s){return-(Wm(1-s*s)-1)});Cs("Sine",function(s){return s===1?1:-hE(s*cE)+1});Cs("Back",du("in"),du("out"),du());pt.SteppedEase=pt.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-At;return function(a){return((i*Va(0,o,a)|0)+r)*n}}};So.ease=pt["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return vf+=s+","+s+"Params,"});var Sg=function(e,t){this.id=uE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qm,this.set=t?t.getSetter:Ef},Ia=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bo(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),La||Zn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(yc(this,n),!r._dp||r.parent||rg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Eo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ic(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Va(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),xc(this),xE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ic(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mE);var i=ln;return ln=n,yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-At)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=zt(n)?n:ng,a=function(){var c=i.then;i.then=null,zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Zo(this)},s}();ii(Ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var An=function(s){Gm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Fn(n.sortChildren),Ot&&zi(n.parent||Ot,ar(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&sg(ar(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ca(0,arguments,this),this},t.from=function(i,r,o){return ca(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ca(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,la(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new qt(i,r,ci(this,o),1),this},t.call=function(i,r,o){return zi(this,qt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new qt(i,o,ci(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,la(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,la(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Kt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,T,S,v,w,R,b;if(this!==Ot&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Kt(u%m),u===l?(g=this._repeat,f=c):(w=Kt(u/m),g=~~w,g&&g===w&&(f=c,g--),f>c&&(f=c)),w=Eo(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),R&&g&1&&(f=c-f,b=1),g!==w&&!this._lock){var P=R&&w&1,y=P===(R&&g&1);if(g<w&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Kt(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;yg(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=TE(this,Kt(a),Kt(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!r&&!w&&(Qn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=-At);break}}d=_}else{d=this._last;for(var M=i<0?i:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,o||ln&&yf(d)),f!==this._time||!this._ts&&!p){T=0,_&&(u+=this._zTime=M?-At:At);break}}d=_}}if(T&&!r&&(this.pause(),T.render(f>=a?0:-At)._zTime=f>=a?1:-1,this._ts))return this._start=v,xc(this),this.render(i,r,o);this._onUpdate&&!r&&Qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Qn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(_r(r)||(r=ci(this,r,i)),!(i instanceof Ia)){if(gn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(sn(i))return this.addLabel(i,r);if(zt(i))i=qt.delayedCall(0,i);else return this}return this!==i?zi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return sn(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&vc(this,i),i===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ci(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=qt.delayedCall(0,r||Pa,o);return a.data="isPause",this._hasPause=1,zi(this,a,ci(this,i))},t.removePause=function(i){var r=this._first;for(i=ci(this,i);r;)r._start===i&&r.data==="isPause"&&Yr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Nr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=mi(i),l=this._first,c=_r(r),u;l;)l instanceof qt?gE(l._targets,a)&&(c?(!Nr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ci(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=qt.to(o,ii({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&bo(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ii({startAt:{time:ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gp(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gp(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return _s(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),_s(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=pi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;bo(o,o===Ot&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ot._ts&&(eg(Ot,ic(i,Ot)),Jm=Zn.frame),Zn.frame>=fp){fp+=ei.autoSleep||120;var r=Ot._first;if((!r||!r._ts)&&ei.autoSleep&&Zn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Zn.sleep()}}},e}(Ia);ii(An.prototype,{_lock:0,_hasPause:0,_forcing:0});var kE=function(e,t,n,i,r,o,a){var l=new kn(this._pt,e,t,0,1,Rg,null,r),c=0,u=0,h,f,d,_,g,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Da(i)),o&&(T=[n,i],o(T,e,t),n=T[0],i=T[1]),f=n.match(cu)||[];h=cu.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?oo(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=cu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(qm.test(i)||p)&&(l.e=0),this._pt=l,l},Mf=function(e,t,n,i,r,o,a,l,c,u){zt(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?WE:wg:Tf,_;if(sn(i)&&(~i.indexOf("random(")&&(i=Da(i)),i.charAt(1)==="="&&(_=oo(f,i)+(pn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Th)return!isNaN(f*i)&&i!==""?(_=new kn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?YE:Ag,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&gf(t,i),kE.call(this,e,t,f,i,d,l||ei.stringFilter,c))},zE=function(e,t,n,i,r){if(zt(e)&&(e=ua(e,r,t,n,i)),!$i(e)||e.style&&e.nodeType||gn(e)||Xm(e))return sn(e)?ua(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=ua(e[a],r,t,n,i);return o},Tg=function(e,t,n,i,r,o){var a,l,c,u;if($n[e]&&(a=new $n[e]).init(r,a.rawVars?t[e]:zE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new kn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==eo))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Nr,Th,Sf=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!ff,v=e.timeline,w,R,b,P,y,M,C,U,H,V,j,W,Y;if(v&&(!f||!r)&&(r="none"),e._ease=vs(r,So.ease),e._yEase=h?xg(vs(h===!0?r:h,So.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(U=m[0]?gs(m[0]).harness:0,W=U&&i[U.prop],w=nc(i,_f),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?zl:pE),g._lazy=0),o){if(Yr(e._startAt=qt.set(m,ii({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Fn(l),startAt:null,delay:0,onUpdate:c&&function(){return Qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!d)&&e._startAt.revert(zl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),b=ii({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Fn(l),immediateRender:a,stagger:0,parent:p},w),W&&(b[U.prop]=W),Yr(e._startAt=qt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(zl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Fn(l)||l&&!_,R=0;R<m.length;R++){if(y=m[R],C=y._gsap||xf(m)[R]._gsap,e._ptLookup[R]=V={},_h[C.id]&&Vr.length&&tc(),j=T===m?R:T.indexOf(y),U&&(H=new U).init(y,W||w,e,j,T)!==!1&&(e._pt=P=new kn(e._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(G){V[G]=P}),H.priority&&(M=1)),!U||W)for(b in w)$n[b]&&(H=Tg(b,w,e,j,y,T))?H.priority&&(M=1):V[b]=P=Mf.call(e,y,b,"get",w[b],j,T,0,i.stringFilter);e._op&&e._op[R]&&e.kill(y,e._op[R]),S&&e._pt&&(Nr=e,Ot.killTweensOf(y,V,e.globalTime(t)),Y=!e.parent,Nr=0),e._pt&&l&&(_h[C.id]=1)}M&&Cg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&v.render(pi,!0,!0)},HE=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Th=1,e.vars[t]="+=0",Sf(e,a),Th=0,l?Ca(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+pn(h.e)),h.b&&(h.b=u.s+pn(h.b))},VE=function(e,t){var n=e[0]?gs(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=To({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},GE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},ua=function(e,t,n,i,r){return zt(e)?e.call(t,n,i,r):sn(e)&&~e.indexOf("random(")?Da(e):e},Eg=vf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bg={};Bn(Eg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return bg[s]=1});var qt=function(s){Gm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:la(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||Ot,S=(gn(n)||Xm(n)?_r(n[0]):"length"in i)?[n]:mi(n),v,w,R,b,P,y,M,C;if(a._targets=S.length?xf(S):Ca("GSAP target "+n+" not found. https://gsap.com",!ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||gl(c)||gl(u)){if(i=a.vars,v=a.timeline=new An({data:"nested",defaults:g||{},targets:T&&T.data==="nested"?T.vars.targets:S}),v.kill(),v.parent=v._dp=ar(a),v._start=0,f||gl(c)||gl(u)){if(b=S.length,M=f&&cg(f),$i(f))for(P in f)~Eg.indexOf(P)&&(C||(C={}),C[P]=f[P]);for(w=0;w<b;w++)R=nc(i,bg),R.stagger=0,p&&(R.yoyoEase=p),C&&To(R,C),y=S[w],R.duration=+ua(c,ar(a),w,y,S),R.delay=(+ua(u,ar(a),w,y,S)||0)-a._delay,!f&&b===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),v.to(y,R,M?M(w,y,S):0),v._ease=pt.none;v.duration()?c=u=0:a.timeline=0}else if(_){la(ii(v.vars.defaults,{ease:"none"})),v._ease=vs(_.ease||i.ease||"none");var U=0,H,V,j;if(gn(_))_.forEach(function(W){return v.to(S,W,">")}),v.duration();else{R={};for(P in _)P==="ease"||P==="easeEach"||GE(P,_[P],R,_.easeEach);for(P in R)for(H=R[P].sort(function(W,Y){return W.t-Y.t}),U=0,w=0;w<H.length;w++)V=H[w],j={ease:V.e,duration:(V.t-(w?H[w-1].t:0))/100*c},j[P]=V.v,v.to(S,j,U),U+=j.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!ff&&(Nr=ar(a),Ot.killTweensOf(S),Nr=0),zi(T,ar(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Kt(T._time)&&Fn(h)&&yE(ar(a))&&T.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),m&&sg(ar(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-At&&!u?l:i<At?0:i,f,d,_,g,m,p,T,S,v;if(!c)SE(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(f=Kt(h%g),h===l?(_=this._repeat,f=c):(m=Kt(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,f=c-f),m=Eo(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(S&&this._yEase&&yg(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Kt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(og(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(f/c),this._from&&(this.ratio=T=1-T),!a&&h&&!r&&!m&&(Qn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&vh(this,i,r,o),Qn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Qn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!r&&!(u&&!a)&&(h||a||p)&&(Qn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){La||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sf(this,c),u=this._ease(c/this._dur),HE(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(yc(this,0),this.parent||ig(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Zo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Nr&&Nr.vars.overwrite!==!0)._first||Zo(this),this.parent&&o!==this.timeline.totalDuration()&&bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mi(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!r||r==="all")&&vE(a,l))return r==="all"&&(this._pt=0),Zo(this);for(h=this._op=this._op||[],r!=="all"&&(sn(r)&&(g={},Bn(r,function(T){return g[T]=1}),r=g),r=VE(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(h[p]=r,_=f,d={}):(d=h[p]=h[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&vc(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Zo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ca(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ca(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ot.killTweensOf(i,r,o)},e}(Ia);ii(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(s){qt[s]=function(){var e=new An,t=yh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Tf=function(e,t,n){return e[t]=n},wg=function(e,t,n){return e[t](n)},WE=function(e,t,n,i){return e[t](i.fp,n)},XE=function(e,t,n){return e.setAttribute(t,n)},Ef=function(e,t){return zt(e[t])?wg:df(e[t])&&e.setAttribute?XE:Tf},Ag=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},YE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},bf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qE=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},KE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$E=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Cg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},kn=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ag,this.d=l||this,this.set=c||Tf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=$E,this.m=n,this.mt=r,this.tween=i},s}();Bn(vf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return _f[s]=1});ni.TweenMax=ni.TweenLite=qt;ni.TimelineLite=ni.TimelineMax=An;Ot=new An({sortChildren:!1,defaults:So,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=vg;var xs=[],Vl={},jE=[],vp=0,ZE=0,pu=function(e){return(Vl[e]||jE).map(function(t){return t()})},Eh=function(){var e=Date.now(),t=[];e-vp>2&&(pu("matchMediaInit"),xs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ni.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vp=e,pu("matchMedia"))},Pg=function(){function s(t,n){this.selector=n&&Mh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ZE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){zt(n)&&(r=i,i=n,n=zt);var o=this,a=function(){var c=It,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Mh(r)),It=o,h=i.apply(o,arguments),zt(h)&&o._r.push(h),It=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof An?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=xs.length;o--;)xs[o].id===this.id&&xs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),JE=function(){function s(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){$i(n)||(n={matches:n});var o=new Pg(0,r||this.scope),a=o.conditions={},l,c,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ni.matchMedia(n[c]),l&&(xs.indexOf(o)<0&&xs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Eh):l.addEventListener("change",Eh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),rc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return mg(i)})},timeline:function(e){return new An(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){sn(e)&&(e=mi(e)[0]);var r=gs(e||{}).get,o=n?ng:tg;return n==="native"&&(n=""),e&&(t?o(($n[t]&&$n[t].get||r)(e,t,n,i)):function(a,l,c){return o(($n[a]&&$n[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Hn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=$n[t],a=gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;eo._pt=0,h.init(e,n?u+n:u,eo,0,[e]),h.render(1,h),eo._pt&&bf(1,eo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Hn.to(e,ii((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vs(e.ease,So.ease)),dp(So,e||{})},config:function(e){return dp(ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!$n[a]&&!ni[a]&&Ca(t+" effect requires "+a+" plugin.")}),uu[t]=function(a,l,c){return n(mi(a),ii(l||{},r),c)},o&&(An.prototype[t]=function(a,l,c){return this.add(uu[t](a,$i(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=vs(t)},parseEase:function(e,t){return arguments.length?vs(e,t):pt},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new An(e),i,r;for(n.smoothChildTiming=Fn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,i=Ot._first;i;)r=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&zi(n,i,i._start-i._delay),i=r;return zi(Ot,n,0),n},context:function(e,t){return e?new Pg(e,t):It},matchMedia:function(e){return new JE(e)},matchMediaRefresh:function(){return xs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Eh()},addEventListener:function(e,t){var n=Vl[e]||(Vl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Vl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:PE,wrapYoyo:DE,distribute:cg,random:hg,snap:ug,normalize:CE,getUnit:pn,clamp:bE,splitColor:gg,toArray:mi,selector:Mh,mapRange:dg,pipe:AE,unitize:RE,interpolate:LE,shuffle:lg},install:jm,effects:uu,ticker:Zn,updateRoot:An.updateRoot,plugins:$n,globalTimeline:Ot,core:{PropTween:kn,globals:Zm,Tween:qt,Timeline:An,Animation:Ia,getCache:gs,_removeLinkedListItem:vc,reverting:function(){return ln},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return ff=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return rc[s]=qt[s]});Zn.add(An.updateRoot);eo=rc.to({},{duration:0});var QE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},eb=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=QE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},mu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(sn(r)&&(l={},Bn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}eb(a,r)}}}},Hn=rc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},mu("roundProps",Sh),mu("modifiers"),mu("snap",ug))||rc;qt.version=An.version=Hn.version="3.13.0";$m=1;pf()&&wo();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xp,Or,ao,wf,ps,yp,Af,tb=function(){return typeof window<"u"},vr={},as=180/Math.PI,lo=Math.PI/180,qs=Math.atan2,Mp=1e8,Rf=/([A-Z])/g,nb=/(left|right|width|margin|padding|x)/i,ib=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ob=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Dg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ab=function(e,t,n){return e.style[t]=n},lb=function(e,t,n){return e.style.setProperty(t,n)},cb=function(e,t,n){return e._gsap[t]=n},ub=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hb=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},fb=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ft="transform",zn=Ft+"Origin",db=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in vr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=lr(i,a)}):this.tfm[e]=o.x?o[e]:lr(i,e),e===zn&&(this.tfm.zOrigin=o.zOrigin);else return Vi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,t,"")),e=Ft}(r||t)&&this.props.push(e,t,r[e])},Ig=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Rf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Af(),(!r||!r.isStart)&&!n[Ft]&&(Ig(n),i.zOrigin&&n[zn]&&(n[zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ug=function(e,t){var n={target:e,props:[],revert:pb,save:db};return e._gsap||Hn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ng,wh=function(e,t){var n=Or.createElementNS?Or.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Or.createElement(e);return n&&n.style?n:Or.createElement(e)},gi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ao(t)||t,1)||""},Sp="O,Moz,ms,Ms,Webkit".split(","),Ao=function(e,t,n){var i=t||ps,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Sp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Sp[o]:"")+e},Ah=function(){tb()&&window.document&&(xp=window,Or=xp.document,ao=Or.documentElement,ps=wh("div")||{style:{}},wh("div"),Ft=Ao(Ft),zn=Ft+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ng=!!Ao("perspective"),Af=Hn.core.reverting,wf=1)},Tp=function(e){var t=e.ownerSVGElement,n=wh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ao.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ao.removeChild(n),r},Ep=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Og=function(e){var t,n;try{t=e.getBBox()}catch{t=Tp(e),n=1}return t&&(t.width||t.height)||n||(t=Tp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ep(e,["x","cx","x1"])||0,y:+Ep(e,["y","cy","y1"])||0,width:0,height:0}:t},Fg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Og(e))},Es=function(e,t){if(t){var n=e.style,i;t in vr&&t!==zn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rf,"-$1").toLowerCase())):n.removeAttribute(t)}},Fr=function(e,t,n,i,r,o){var a=new kn(e._pt,t,n,0,1,o?Lg:Dg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},bp={deg:1,rad:1,turn:1},mb={grid:1,flex:1},qr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ps.style,l=nb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!r||bp[i]||bp[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&Fg(e),(d||o==="%")&&(vr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Gt(d?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Or||!g.appendChild)&&(g=Or.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Zn.time&&!m.uncache)return Gt(r/m.width*h);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+i,_=e[u],T?e.style[t]=T:Es(e,t)}else(d||o==="%")&&!mb[gi(g,"display")]&&(a.position=gi(e,"position")),g===e&&(a.position="static"),g.appendChild(ps),_=ps[u],g.removeChild(ps),a.position="absolute";return l&&d&&(m=gs(g),m.time=Zn.time,m.width=g[u]),Gt(f?_*r/h:_&&r?h/_*r:0)},lr=function(e,t,n,i){var r;return wf||Ah(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),vr[t]&&t!=="transform"?(r=Na(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:oc(gi(e,zn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=sc[t]&&sc[t](e,t,n)||gi(e,t)||Qm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qr(e,t,r,n)+n:r},gb=function(e,t,n,i){if(!n||n==="none"){var r=Ao(t,e,1),o=r&&gi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=gi(e,"borderTopColor"))}var a=new kn(this._pt,e.style,t,0,1,Rg),l=0,c=0,u,h,f,d,_,g,m,p,T,S,v,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=gi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=gi(e,t)||i,g?e.style[t]=g:Es(e,t)),u=[n,i],vg(u),n=u[0],i=u[1],f=n.match(Qs)||[],w=i.match(Qs)||[],w.length){for(;h=Qs.exec(i);)m=h[0],T=i.substring(l,h.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=oo(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=Qs.lastIndex-S.length,S||(S=S||ei.units[t]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(d=qr(e,t,g,S)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Lg:Dg;return qm.test(i)&&(a.e=0),this._pt=a,a},wp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_b=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=wp[n]||n,t[1]=wp[i]||i,t.join(" ")},vb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],vr[a]&&(l=1,a=a==="transformOrigin"?zn:Ft),Es(n,a);l&&(Es(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Na(n,1),o.uncache=1,Ig(i)))}},sc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new kn(e._pt,t,n,0,0,vb);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ua=[1,0,0,1,0,0],Bg={},kg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ap=function(e){var t=gi(e,Ft);return kg(t)?Ua:t.substr(7).match(Ym).map(Gt)},Cf=function(e,t){var n=e._gsap||gs(e),i=e.style,r=Ap(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ua:r):(r===Ua&&!e.offsetParent&&e!==ao&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ao.appendChild(e)),r=Ap(e),l?i.display=l:Es(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Rh=function(e,t,n,i,r,o){var a=e._gsap,l=r||Cf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],T=l[5],S=t.split(" "),v=parseFloat(S[0])||0,w=parseFloat(S[1])||0,R,b,P,y;n?l!==Ua&&(b=d*m-_*g)&&(P=v*(m/b)+w*(-g/b)+(g*T-m*p)/b,y=v*(-_/b)+w*(d/b)-(d*T-_*p)/b,v=P,w=y):(R=Og(e),v=R.x+(~S[0].indexOf("%")?v/100*R.width:v),w=R.y+(~(S[1]||S[0]).indexOf("%")?w/100*R.height:w)),i||i!==!1&&a.smooth?(p=v-c,T=w-u,a.xOffset=h+(p*d+T*g)-p,a.yOffset=f+(p*_+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[zn]="0px 0px",o&&(Fr(o,a,"xOrigin",c,v),Fr(o,a,"yOrigin",u,w),Fr(o,a,"xOffset",h,a.xOffset),Fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},Na=function(e,t){var n=e._gsap||new Sg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=gi(e,zn)||"0",u,h,f,d,_,g,m,p,T,S,v,w,R,b,P,y,M,C,U,H,V,j,W,Y,G,oe,L,ge,Ue,Ze,Fe,Z;return u=h=f=g=m=p=T=S=v=0,d=_=1,n.svg=!!(e.getCTM&&Fg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),b=Cf(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Rh(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,R=n.yOrigin||0,b!==Ua&&(C=b[0],U=b[1],H=b[2],V=b[3],u=j=b[4],h=W=b[5],b.length===6?(d=Math.sqrt(C*C+U*U),_=Math.sqrt(V*V+H*H),g=C||U?qs(U,C)*as:0,T=H||V?qs(H,V)*as+g:0,T&&(_*=Math.abs(Math.cos(T*lo))),n.svg&&(u-=w-(w*C+R*H),h-=R-(w*U+R*V))):(Z=b[6],Ze=b[7],L=b[8],ge=b[9],Ue=b[10],Fe=b[11],u=b[12],h=b[13],f=b[14],P=qs(Z,Ue),m=P*as,P&&(y=Math.cos(-P),M=Math.sin(-P),Y=j*y+L*M,G=W*y+ge*M,oe=Z*y+Ue*M,L=j*-M+L*y,ge=W*-M+ge*y,Ue=Z*-M+Ue*y,Fe=Ze*-M+Fe*y,j=Y,W=G,Z=oe),P=qs(-H,Ue),p=P*as,P&&(y=Math.cos(-P),M=Math.sin(-P),Y=C*y-L*M,G=U*y-ge*M,oe=H*y-Ue*M,Fe=V*M+Fe*y,C=Y,U=G,H=oe),P=qs(U,C),g=P*as,P&&(y=Math.cos(P),M=Math.sin(P),Y=C*y+U*M,G=j*y+W*M,U=U*y-C*M,W=W*y-j*M,C=Y,j=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Gt(Math.sqrt(C*C+U*U+H*H)),_=Gt(Math.sqrt(W*W+Z*Z)),P=qs(j,W),T=Math.abs(P)>2e-4?P*as:0,v=Fe?1/(Fe<0?-Fe:Fe):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!kg(gi(e,Ft)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(r?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Gt(d),n.scaleY=Gt(_),n.rotation=Gt(g)+a,n.rotationX=Gt(m)+a,n.rotationY=Gt(p)+a,n.skewX=T+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[zn]=oc(c)),n.xOffset=n.yOffset=0,n.force3D=ei.force3D,n.renderTransform=n.svg?yb:Ng?zg:xb,n.uncache=0,n},oc=function(e){return(e=e.split(" "))[0]+" "+e[1]},gu=function(e,t,n){var i=pn(t);return Gt(parseFloat(t)+parseFloat(qr(e,"x",n+"px",i)))+i},xb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zg(e,t)},rs="0deg",Xo="0px",ss=") ",zg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,S=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==rs||u!==rs)){var R=parseFloat(u)*lo,b=Math.sin(R),P=Math.cos(R),y;R=parseFloat(h)*lo,y=Math.cos(R),o=gu(T,o,b*y*-S),a=gu(T,a,-Math.sin(R)*-S),l=gu(T,l,P*y*-S+S)}m!==Xo&&(v+="perspective("+m+ss),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(w||o!==Xo||a!==Xo||l!==Xo)&&(v+=l!==Xo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ss),c!==rs&&(v+="rotate("+c+ss),u!==rs&&(v+="rotateY("+u+ss),h!==rs&&(v+="rotateX("+h+ss),(f!==rs||d!==rs)&&(v+="skew("+f+", "+d+ss),(_!==1||g!==1)&&(v+="scale("+_+", "+g+ss),T.style[Ft]=v||"translate(0, 0)"},yb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,S=parseFloat(o),v=parseFloat(a),w,R,b,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=lo,c*=lo,w=Math.cos(l)*h,R=Math.sin(l)*h,b=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=lo,y=Math.tan(c-u),y=Math.sqrt(1+y*y),b*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),w*=y,R*=y)),w=Gt(w),R=Gt(R),b=Gt(b),P=Gt(P)):(w=h,P=f,R=b=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=qr(d,"x",o,"px"),v=qr(d,"y",a,"px")),(_||g||m||p)&&(S=Gt(S+_-(_*w+g*b)+m),v=Gt(v+g-(_*R+g*P)+p)),(i||r)&&(y=d.getBBox(),S=Gt(S+i/100*y.width),v=Gt(v+r/100*y.height)),y="matrix("+w+","+R+","+b+","+P+","+S+","+v+")",d.setAttribute("transform",y),T&&(d.style[Ft]=y)},Mb=function(e,t,n,i,r){var o=360,a=sn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?as:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Mp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Mp)%o-~~(c/o)*o)),e._pt=f=new kn(e._pt,t,n,i,c,rb),f.e=u,f.u="deg",e._props.push(n),f},Rp=function(e,t){for(var n in t)e[n]=t[n];return e},Sb=function(e,t,n){var i=Rp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=Na(n,1),Es(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=Na(n,1),o[Ft]=c);for(l in vr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=pn(c),_=pn(u),h=d!==_?qr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new kn(e._pt,a,l,h,f-h,bh),e._pt.u=_||0,e._props.push(l));Rp(a,i)};Bn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});sc[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return lr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Hg={name:"css",register:Ah,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,T,S,v,w,R,b,P;wf||Ah(),this.styles=this.styles||Ug(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!($n[g]&&Tg(g,t,n,i,e,r)))){if(d=typeof u,_=sc[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Da(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Gr.lastIndex=0,Gr.test(c)||(m=pn(c),p=pn(u)),p?m!==p&&(c=qr(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),P.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],sn(c)&&~c.indexOf("random(")&&(c=Da(c)),pn(c+"")||c==="auto"||(c+=ei.units[g]||pn(lr(e,g))||""),(c+"").charAt(1)==="="&&(c=lr(e,g))):c=lr(e,g),f=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),g in Vi&&(g==="autoAlpha"&&(f===1&&lr(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Fr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in vr,S){if(this.styles.save(g),d==="string"&&u.substring(0,6)==="var(--"&&(u=gi(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(w=e._gsap,w.renderTransform&&!t.parseTransform||Na(e,t.parseTransform),R=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new kn(this._pt,a,Ft,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new kn(this._pt,w,"scaleY",w.scaleY,(T?oo(w.scaleY,T+h):h)-w.scaleY||0,bh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(zn,0,a[zn]),u=_b(u),w.svg?Rh(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Fr(this,w,"zOrigin",w.zOrigin,p),Fr(this,a,g,oc(c),oc(u)));continue}else if(g==="svgOrigin"){Rh(e,u,1,R,0,this);continue}else if(g in Bg){Mb(this,w,g,f,T?oo(f,T+u):u);continue}else if(g==="smoothOrigin"){Fr(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){Sb(this,u,e);continue}}else g in a||(g=Ao(g)||g);if(S||(h||h===0)&&(f||f===0)&&!ib.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=pn(u)||(g in ei.units?ei.units[g]:m),m!==p&&(f=qr(e,g,c,p)),this._pt=new kn(this._pt,S?w:a,g,f,(T?oo(f,T+h):h)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?ob:bh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=sb);else if(g in a)gb.call(this,e,g,c,T?T+u:u);else if(g in e)this.add(e,g,c||e[g],T?T+u:u,i,r);else if(g!=="parseTransform"){gf(g,u);continue}S||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),o.push(g)}}b&&Cg(this)},render:function(e,t){if(t.tween._time||!Af())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:lr,aliases:Vi,getSetter:function(e,t,n){var i=Vi[t];return i&&i.indexOf(",")<0&&(t=i),t in vr&&t!==zn&&(e._gsap.x||lr(e,"x"))?n&&yp===n?t==="scale"?ub:cb:(yp=n||{})&&(t==="scale"?hb:fb):e.style&&!df(e.style[t])?ab:~t.indexOf("-")?lb:Ef(e,t)},core:{_removeProperty:Es,_getMatrix:Cf}};Hn.utils.checkPrefix=Ao;Hn.core.getStyleSaver=Ug;(function(s,e,t,n){var i=Bn(s+","+e+","+t,function(r){vr[r]=1});Bn(e,function(r){ei.units[r]="deg",Bg[r]=1}),Vi[i[13]]=s+","+e,Bn(n,function(r){var o=r.split(":");Vi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ei.units[s]="px"});Hn.registerPlugin(Hg);var bi=Hn.registerPlugin(Hg)||Hn;bi.core.Tween;function Tb(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Eb(s,e,t){return e&&Tb(s.prototype,e),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an,Gl,Jn,Br,kr,co,Vg,ls,ha,Gg,dr,Si,Wg,Xg=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},Yg=1,to=[],lt=[],Yi=[],fa=Date.now,Ch=function(e,t){return t},bb=function(){var e=ha.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Yi),lt=n,Yi=i,Ch=function(o,a){return t[o](a)}},Wr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},da=function(e){return!!~Gg.indexOf(e)},Mn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},_l="scrollLeft",vl="scrollTop",Ph=function(){return dr&&dr.isPressed||lt.cache++},ac=function(e,t){var n=function i(r){if(r||r===0){Yg&&(Jn.history.scrollRestoration="manual");var o=dr&&dr.isPressed;r=i.v=Math.round(r)||(dr&&dr.iOS?1:0),e(r),i.cacheID=lt.cache,o&&Ch("ss",r)}else(t||lt.cache!==i.cacheID||Ch("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Rn={s:_l,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ac(function(s){return arguments.length?Jn.scrollTo(s,Zt.sc()):Jn.pageXOffset||Br[_l]||kr[_l]||co[_l]||0})},Zt={s:vl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:ac(function(s){return arguments.length?Jn.scrollTo(Rn.sc(),s):Jn.pageYOffset||Br[vl]||kr[vl]||co[vl]||0})},On=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},wb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Kr=function(e,t){var n=t.s,i=t.sc;da(e)&&(e=Br.scrollingElement||kr);var r=lt.indexOf(e),o=i===Zt.sc?1:2;!~r&&(r=lt.push(e)-1),lt[r+o]||Mn(e,"scroll",Ph);var a=lt[r+o],l=a||(lt[r+o]=ac(Wr(e,n),!0)||(da(e)?i:ac(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},Dh=function(e,t,n){var i=e,r=e,o=fa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=fa();g||m-o>l?(r=i,i=_,a=o,o=m):n?i+=_:i=r+(_-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(_){var g=a,m=r,p=fa();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},Yo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},qg=function(){ha=an.core.globals().ScrollTrigger,ha&&ha.core&&bb()},Kg=function(e){return an=e||Xg(),!Gl&&an&&typeof document<"u"&&document.body&&(Jn=window,Br=document,kr=Br.documentElement,co=Br.body,Gg=[Jn,Br,kr,co],an.utils.clamp,Wg=an.core.context||function(){},ls="onpointerenter"in co?"pointer":"mouse",Vg=Wt.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Si=Wt.eventTypes=("ontouchstart"in kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Yg=0},500),qg(),Gl=1),Gl};Rn.op=Zt;lt.cache=0;var Wt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Gl||Kg(an)||console.warn("Please gsap.registerPlugin(Observer)"),ha||qg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,S=n.onPress,v=n.onRelease,w=n.onRight,R=n.onLeft,b=n.onUp,P=n.onDown,y=n.onChangeX,M=n.onChangeY,C=n.onChange,U=n.onToggleX,H=n.onToggleY,V=n.onHover,j=n.onHoverEnd,W=n.onMove,Y=n.ignoreCheck,G=n.isNormalizer,oe=n.onGestureStart,L=n.onGestureEnd,ge=n.onWheel,Ue=n.onEnable,Ze=n.onDisable,Fe=n.onClick,Z=n.scrollSpeed,fe=n.capture,ae=n.allowClicks,be=n.lockAxis,we=n.onLockAxis;this.target=a=On(a)||kr,this.vars=n,d&&(d=an.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,Z=Z||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(co).lineHeight)||22);var ke,nt,Ve,D,Ye,Ee,qe,O=this,Je=0,X=0,N=n.passive||!u&&n.passive!==!1,re=Kr(a,Rn),ve=Kr(a,Zt),A=re(),x=ve(),F=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Si[0]==="pointerdown",J=da(a),Q=a.ownerDocument||Br,K=[0,0,0],de=[0,0,0],ne=0,xe=function(){return ne=fa()},te=function(Ie,je){return(O.event=Ie)&&d&&wb(Ie.target,d)||je&&F&&Ie.pointerType!=="touch"||Y&&Y(Ie,je)},ue=function(){O._vx.reset(),O._vy.reset(),nt.pause(),h&&h(O)},pe=function(){var Ie=O.deltaX=Cp(K),je=O.deltaY=Cp(de),Me=Math.abs(Ie)>=i,Ge=Math.abs(je)>=i;C&&(Me||Ge)&&C(O,Ie,je,K,de),Me&&(w&&O.deltaX>0&&w(O),R&&O.deltaX<0&&R(O),y&&y(O),U&&O.deltaX<0!=Je<0&&U(O),Je=O.deltaX,K[0]=K[1]=K[2]=0),Ge&&(P&&O.deltaY>0&&P(O),b&&O.deltaY<0&&b(O),M&&M(O),H&&O.deltaY<0!=X<0&&H(O),X=O.deltaY,de[0]=de[1]=de[2]=0),(D||Ve)&&(W&&W(O),Ve&&(m&&Ve===1&&m(O),T&&T(O),Ve=0),D=!1),Ee&&!(Ee=!1)&&we&&we(O),Ye&&(ge(O),Ye=!1),ke=0},Le=function(Ie,je,Me){K[Me]+=Ie,de[Me]+=je,O._vx.update(Ie),O._vy.update(je),c?ke||(ke=requestAnimationFrame(pe)):pe()},Re=function(Ie,je){be&&!qe&&(O.axis=qe=Math.abs(Ie)>Math.abs(je)?"x":"y",Ee=!0),qe!=="y"&&(K[2]+=Ie,O._vx.update(Ie,!0)),qe!=="x"&&(de[2]+=je,O._vy.update(je,!0)),c?ke||(ke=requestAnimationFrame(pe)):pe()},me=function(Ie){if(!te(Ie,1)){Ie=Yo(Ie,u);var je=Ie.clientX,Me=Ie.clientY,Ge=je-O.x,Be=Me-O.y,Ke=O.isDragging;O.x=je,O.y=Me,(Ke||(Ge||Be)&&(Math.abs(O.startX-je)>=r||Math.abs(O.startY-Me)>=r))&&(Ve=Ke?2:1,Ke||(O.isDragging=!0),Re(Ge,Be))}},He=O.onPress=function(ye){te(ye,1)||ye&&ye.button||(O.axis=qe=null,nt.pause(),O.isPressed=!0,ye=Yo(ye),Je=X=0,O.startX=O.x=ye.clientX,O.startY=O.y=ye.clientY,O._vx.reset(),O._vy.reset(),Mn(G?a:Q,Si[1],me,N,!0),O.deltaX=O.deltaY=0,S&&S(O))},I=O.onRelease=function(ye){if(!te(ye,1)){yn(G?a:Q,Si[1],me,!0);var Ie=!isNaN(O.y-O.startY),je=O.isDragging,Me=je&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Ge=Yo(ye);!Me&&Ie&&(O._vx.reset(),O._vy.reset(),u&&ae&&an.delayedCall(.08,function(){if(fa()-ne>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(Q.createEvent){var Be=Q.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Jn,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(Be)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,h&&je&&!G&&nt.restart(!0),Ve&&pe(),p&&je&&p(O),v&&v(O,Me)}},le=function(Ie){return Ie.touches&&Ie.touches.length>1&&(O.isGesturing=!0)&&oe(Ie,O.isDragging)},ce=function(){return(O.isGesturing=!1)||L(O)},he=function(Ie){if(!te(Ie)){var je=re(),Me=ve();Le((je-A)*Z,(Me-x)*Z,1),A=je,x=Me,h&&nt.restart(!0)}},ie=function(Ie){if(!te(Ie)){Ie=Yo(Ie,u),ge&&(Ye=!0);var je=(Ie.deltaMode===1?l:Ie.deltaMode===2?Jn.innerHeight:1)*_;Le(Ie.deltaX*je,Ie.deltaY*je,0),h&&!G&&nt.restart(!0)}},ee=function(Ie){if(!te(Ie)){var je=Ie.clientX,Me=Ie.clientY,Ge=je-O.x,Be=Me-O.y;O.x=je,O.y=Me,D=!0,h&&nt.restart(!0),(Ge||Be)&&Re(Ge,Be)}},Te=function(Ie){O.event=Ie,V(O)},De=function(Ie){O.event=Ie,j(O)},ot=function(Ie){return te(Ie)||Yo(Ie,u)&&Fe(O)};nt=O._dc=an.delayedCall(f||.25,ue).pause(),O.deltaX=O.deltaY=0,O._vx=Dh(0,50,!0),O._vy=Dh(0,50,!0),O.scrollX=re,O.scrollY=ve,O.isDragging=O.isGesturing=O.isPressed=!1,Wg(this),O.enable=function(ye){return O.isEnabled||(Mn(J?Q:a,"scroll",Ph),o.indexOf("scroll")>=0&&Mn(J?Q:a,"scroll",he,N,fe),o.indexOf("wheel")>=0&&Mn(a,"wheel",ie,N,fe),(o.indexOf("touch")>=0&&Vg||o.indexOf("pointer")>=0)&&(Mn(a,Si[0],He,N,fe),Mn(Q,Si[2],I),Mn(Q,Si[3],I),ae&&Mn(a,"click",xe,!0,!0),Fe&&Mn(a,"click",ot),oe&&Mn(Q,"gesturestart",le),L&&Mn(Q,"gestureend",ce),V&&Mn(a,ls+"enter",Te),j&&Mn(a,ls+"leave",De),W&&Mn(a,ls+"move",ee)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=D=Ve=!1,O._vx.reset(),O._vy.reset(),A=re(),x=ve(),ye&&ye.type&&He(ye),Ue&&Ue(O)),O},O.disable=function(){O.isEnabled&&(to.filter(function(ye){return ye!==O&&da(ye.target)}).length||yn(J?Q:a,"scroll",Ph),O.isPressed&&(O._vx.reset(),O._vy.reset(),yn(G?a:Q,Si[1],me,!0)),yn(J?Q:a,"scroll",he,fe),yn(a,"wheel",ie,fe),yn(a,Si[0],He,fe),yn(Q,Si[2],I),yn(Q,Si[3],I),yn(a,"click",xe,!0),yn(a,"click",ot),yn(Q,"gesturestart",le),yn(Q,"gestureend",ce),yn(a,ls+"enter",Te),yn(a,ls+"leave",De),yn(a,ls+"move",ee),O.isEnabled=O.isPressed=O.isDragging=!1,Ze&&Ze(O))},O.kill=O.revert=function(){O.disable();var ye=to.indexOf(O);ye>=0&&to.splice(ye,1),dr===O&&(dr=0)},to.push(O),G&&da(a)&&(dr=O),O.enable(g)},Eb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Wt.version="3.13.0";Wt.create=function(s){return new Wt(s)};Wt.register=Kg;Wt.getAll=function(){return to.slice()};Wt.getById=function(s){return to.filter(function(e){return e.vars.id===s})[0]};Xg()&&an.registerPlugin(Wt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pe,js,at,Rt,jn,xt,Pf,lc,Oa,pa,Qo,xl,hn,Mc,Lh,bn,Pp,Dp,Zs,$g,_u,jg,En,Ih,Zg,Jg,Pr,Uh,Df,uo,Lf,cc,Nh,vu,yl=1,fn=Date.now,xu=fn(),vi=0,ea=0,Lp=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ip=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ab=function s(){return ea&&requestAnimationFrame(s)},Up=function(){return Mc=1},Np=function(){return Mc=0},Oi=function(e){return e},ta=function(e){return Math.round(e*1e5)/1e5||0},Qg=function(){return typeof window<"u"},e_=function(){return Pe||Qg()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},bs=function(e){return!!~Pf.indexOf(e)},t_=function(e){return(e==="Height"?Lf:at["inner"+e])||jn["client"+e]||xt["client"+e]},n_=function(e){return Wr(e,"getBoundingClientRect")||(bs(e)?function(){return Kl.width=at.innerWidth,Kl.height=Lf,Kl}:function(){return cr(e)})},Rb=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Wr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?t_(r):e["client"+r])||0}},Cb=function(e,t){return!t||~Yi.indexOf(e)?n_(e):function(){return Kl}},Gi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Wr(e,n))?o()-n_(e)()[r]:bs(e)?(jn[n]||xt[n])-t_(i):e[n]-e["offset"+i])},Ml=function(e,t){for(var n=0;n<Zs.length;n+=3)(!t||~t.indexOf(Zs[n+1]))&&e(Zs[n],Zs[n+1],Zs[n+2])},Kn=function(e){return typeof e=="string"},mn=function(e){return typeof e=="function"},na=function(e){return typeof e=="number"},cs=function(e){return typeof e=="object"},qo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},yu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ks=Math.abs,i_="left",r_="top",If="right",Uf="bottom",ys="width",Ms="height",ma="Right",ga="Left",_a="Top",va="Bottom",Yt="padding",hi="margin",Ro="Width",Nf="Height",jt="px",fi=function(e){return at.getComputedStyle(e)},Pb=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Op=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cr=function(e,t){var n=t&&fi(e)[Lh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},uc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},s_=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Db=function(e){return function(t){return Pe.utils.snap(s_(e),t)}},Of=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Lb=function(e){return function(t,n){return Of(s_(e))(t,n.direction)}},Sl=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},nn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Tl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Fp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},El={toggleActions:"play",anticipatePin:0},hc={top:0,left:0,center:.5,bottom:1,right:1},Wl=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hc?hc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},bl=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,_=Rt.createElement("div"),g=bs(n)||Wr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?xt:n,T=e.indexOf("start")!==-1,S=T?c:u,v="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Zt?If:Uf)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=T,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Xl(_,0,i,T),_},Xl=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Ro]=1,r["border"+a+Ro]=0,r[n.p]=t+"px",Pe.set(e,r)},st=[],Oh={},Fa,Bp=function(){return fn()-vi>34&&(Fa||(Fa=requestAnimationFrame(mr)))},$s=function(){(!En||!En.isPressed||En.startX>xt.clientWidth)&&(lt.cache++,En?Fa||(Fa=requestAnimationFrame(mr)):mr(),vi||As("scrollStart"),vi=fn())},Mu=function(){Jg=at.innerWidth,Zg=at.innerHeight},ia=function(e){lt.cache++,(e===!0||!hn&&!jg&&!Rt.fullscreenElement&&!Rt.webkitFullscreenElement&&(!Ih||Jg!==at.innerWidth||Math.abs(at.innerHeight-Zg)>at.innerHeight*.25))&&lc.restart(!0)},ws={},Ib=[],o_=function s(){return tn(ft,"scrollEnd",s)||ms(!0)},As=function(e){return ws[e]&&ws[e].map(function(t){return t()})||Ib},qn=[],a_=function(e){for(var t=0;t<qn.length;t+=5)(!e||qn[t+4]&&qn[t+4].query===e)&&(qn[t].style.cssText=qn[t+1],qn[t].getBBox&&qn[t].setAttribute("transform",qn[t+2]||""),qn[t+3].uncache=1)},Ff=function(e,t){var n;for(bn=0;bn<st.length;bn++)n=st[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));cc=!0,t&&a_(t),t||As("revert")},l_=function(e,t){lt.cache++,(t||!wn)&&lt.forEach(function(n){return mn(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(at.history.scrollRestoration=Df=e)},wn,Ss=0,kp,Ub=function(){if(kp!==Ss){var e=kp=Ss;requestAnimationFrame(function(){return e===Ss&&ms(!0)})}},c_=function(){xt.appendChild(uo),Lf=!En&&uo.offsetHeight||at.innerHeight,xt.removeChild(uo)},zp=function(e){return Oa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ms=function(e,t){if(jn=Rt.documentElement,xt=Rt.body,Pf=[at,Rt,jn,xt],vi&&!e&&!cc){nn(ft,"scrollEnd",o_);return}c_(),wn=ft.isRefreshing=!0,lt.forEach(function(i){return mn(i)&&++i.cacheID&&(i.rec=i())});var n=As("refreshInit");$g&&ft.sort(),t||Ff(),lt.forEach(function(i){mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),cc=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Nh=1,zp(!0),st.forEach(function(i){var r=Gi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),zp(!1),Nh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),l_(Df,1),lc.pause(),Ss++,wn=2,mr(2),st.forEach(function(i){return mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=ft.isRefreshing=!1,As("refresh")},Fh=0,Yl=1,xa,mr=function(e){if(e===2||!wn&&!cc){ft.isUpdating=!0,xa&&xa.update(0);var t=st.length,n=fn(),i=n-xu>=50,r=t&&st[0].scroll();if(Yl=Fh>r?-1:1,wn||(Fh=r),i&&(vi&&!Mc&&n-vi>200&&(vi=0,As("scrollEnd")),Qo=xu,xu=n),Yl<0){for(bn=t;bn-- >0;)st[bn]&&st[bn].update(0,i);Yl=1}else for(bn=0;bn<t;bn++)st[bn]&&st[bn].update(0,i);ft.isUpdating=!1}Fa=0},Bh=[i_,r_,Uf,If,hi+va,hi+ma,hi+_a,hi+ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ql=Bh.concat([ys,Ms,"boxSizing","max"+Ro,"max"+Nf,"position",hi,Yt,Yt+_a,Yt+ma,Yt+va,Yt+ga]),Nb=function(e,t,n){ho(n);var i=e._gsap;if(i.spacerIsNative)ho(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Su=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Bh.length,o=t.style,a=e.style,l;r--;)l=Bh[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Uf]=a[If]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ys]=uc(e,Rn)+jt,o[Ms]=uc(e,Zt)+jt,o[Yt]=a[hi]=a[r_]=a[i_]="0",ho(i),a[ys]=a["max"+Ro]=n[ys],a[Ms]=a["max"+Nf]=n[Ms],a[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ob=/([A-Z])/g,ho=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Ob,"-$1").toLowerCase())}},wl=function(e){for(var t=ql.length,n=e.style,i=[],r=0;r<t;r++)i.push(ql[r],n[ql[r]]);return i.t=e,i},Fb=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Kl={left:0,top:0},Hp=function(e,t,n,i,r,o,a,l,c,u,h,f,d,_){mn(e)&&(e=e(l)),Kn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Wl("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,T;if(d&&d.seek(0),isNaN(e)||(e=+e),na(e))d&&(e=Pe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Xl(a,n,i,!0);else{mn(t)&&(t=t(l));var S=(e||"0").split(" "),v,w,R,b;T=On(t,l)||xt,v=cr(T)||{},(!v||!v.left&&!v.top)&&fi(T).display==="none"&&(b=T.style.display,T.style.display="block",v=cr(T),b?T.style.display=b:T.style.removeProperty("display")),w=Wl(S[0],v[i.d]),R=Wl(S[1]||"0",n),e=v[i.p]-c[i.p]-u+w+r-R,a&&Xl(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,y=o._isStart;m="scroll"+i.d2,Xl(o,P,i,y&&P>20||!y&&(h?Math.max(xt[m],jn[m]):o.parentNode[m])<=P+1),h&&(c=cr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+jt))}return d&&T&&(m=cr(T),d.seek(f),p=cr(T),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Bb=/(webkit|moz|length|cssText|inset)/i,Vp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===xt){e._stOrig=r.cssText,a=fi(e);for(o in a)!+o&&!Bb.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},u_=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Al=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},Gp=function(e,t){var n=Kr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=u_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&mr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},nn(e,"wheel",n.wheelHandler),ft.isTouch&&nn(e,"touchmove",n.wheelHandler),r},ft=function(){function s(t,n){js||s.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Uh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ea){this.update=this.refresh=this.kill=Oi;return}n=Op(Kn(n)||na(n)||n.nodeType?{trigger:n}:n,El);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,T=r.onSnapComplete,S=r.once,v=r.snap,w=r.pinReparent,R=r.pinSpacer,b=r.containerAnimation,P=r.fastScrollEnd,y=r.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Zt,C=!h&&h!==0,U=On(n.scroller||at),H=Pe.core.getCache(U),V=bs(U),j=("pinType"in n?n.pinType:Wr(U,"pinType")||V&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=C&&n.toggleActions.split(" "),G="markers"in n?n.markers:El.markers,oe=V?0:parseFloat(fi(U)["border"+M.p2+Ro])||0,L=this,ge=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ue=Rb(U,V,M),Ze=Cb(U,V),Fe=0,Z=0,fe=0,ae=Kr(U,M),be,we,ke,nt,Ve,D,Ye,Ee,qe,O,Je,X,N,re,ve,A,x,F,J,Q,K,de,ne,xe,te,ue,pe,Le,Re,me,He,I,le,ce,he,ie,ee,Te,De;if(L._startClamp=L._endClamp=!1,L._dir=M,m*=45,L.scroller=U,L.scroll=b?b.time.bind(b):ae,nt=ae(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&($g=1,n.refreshPriority===-9999&&(xa=L)),H.tweenScroll=H.tweenScroll||{top:Gp(U,Zt),left:Gp(U,Rn)},L.tweenTo=be=H.tweenScroll[M.p],L.scrubDuration=function(Me){le=na(Me)&&Me,le?I?I.duration(Me):I=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),me=0,l||(l=i.vars.id)),v&&((!cs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in xt.style&&Pe.set(V?[xt,jn]:U,{scrollBehavior:"auto"}),lt.forEach(function(Me){return mn(Me)&&Me.target===(V?Rt.scrollingElement||jn:U)&&(Me.smooth=!1)}),ke=mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Db(i):v.snapTo==="labelsDirectional"?Lb(i):v.directional!==!1?function(Me,Ge){return Of(v.snapTo)(Me,fn()-Z<500?0:Ge.direction)}:Pe.utils.snap(v.snapTo),ce=v.duration||{min:.1,max:2},ce=cs(ce)?pa(ce.min,ce.max):pa(ce,ce),he=Pe.delayedCall(v.delay||le/2||.1,function(){var Me=ae(),Ge=fn()-Z<500,Be=be.tween;if((Ge||Math.abs(L.getVelocity())<10)&&!Be&&!Mc&&Fe!==Me){var Ke=(Me-D)/re,Ht=i&&!C?i.totalProgress():Ke,it=Ge?0:(Ht-He)/(fn()-Qo)*1e3||0,Lt=Pe.utils.clamp(-Ke,1-Ke,Ks(it/2)*it/.185),Vt=Ke+(v.inertia===!1?0:Lt),Ct,Et,yt=v,Vn=yt.onStart,Pt=yt.onInterrupt,_n=yt.onComplete;if(Ct=ke(Vt,L),na(Ct)||(Ct=Vt),Et=Math.max(0,Math.round(D+Ct*re)),Me<=Ye&&Me>=D&&Et!==Me){if(Be&&!Be._initted&&Be.data<=Ks(Et-Me))return;v.inertia===!1&&(Lt=Ct-Ke),be(Et,{duration:ce(Ks(Math.max(Ks(Vt-Ht),Ks(Ct-Ht))*.185/it/.05||0)),ease:v.ease||"power3",data:Ks(Et-Me),onInterrupt:function(){return he.restart(!0)&&Pt&&Pt(L)},onComplete:function(){L.update(),Fe=ae(),i&&!C&&(I?I.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),me=He=i&&!C?i.totalProgress():L.progress,T&&T(L),_n&&_n(L)}},Me,Lt*re,Et-Me-Lt*re),Vn&&Vn(L,be.tween)}}else L.isActive&&Fe!==Me&&he.restart(!0)}).pause()),l&&(Oh[l]=L),f=L.trigger=On(f||d!==!0&&d),De=f&&f._gsap&&f._gsap.stRevert,De&&(De=De(L)),d=d===!0?f:On(d),Kn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===hi||(_=!_&&d.parentNode&&d.parentNode.style&&fi(d.parentNode).display==="flex"?!1:Yt),L.pin=d,we=Pe.core.getCache(d),we.spacer?ve=we.pinState:(R&&(R=On(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),we.spacerIsNative=!!R,R&&(we.spacerState=wl(R))),we.spacer=F=R||Rt.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),we.pinState=ve=wl(d)),n.force3D!==!1&&Pe.set(d,{force3D:!0}),L.spacer=F=we.spacer,Re=fi(d),xe=Re[_+M.os2],Q=Pe.getProperty(d),K=Pe.quickSetter(d,M.a,jt),Su(d,F,Re),x=wl(d)),G){X=cs(G)?Op(G,Fp):Fp,O=bl("scroller-start",l,U,M,X,0),Je=bl("scroller-end",l,U,M,X,0,O),J=O["offset"+M.op.d2];var ot=On(Wr(U,"content")||U);Ee=this.markerStart=bl("start",l,ot,M,X,J,0,b),qe=this.markerEnd=bl("end",l,ot,M,X,J,0,b),b&&(Te=Pe.quickSetter([Ee,qe],M.a,jt)),!j&&!(Yi.length&&Wr(U,"fixedMarkers")===!0)&&(Pb(V?xt:U),Pe.set([O,Je],{force3D:!0}),ue=Pe.quickSetter(O,M.a,jt),Le=Pe.quickSetter(Je,M.a,jt))}if(b){var ye=b.vars.onUpdate,Ie=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),ye&&ye.apply(b,Ie||[])})}if(L.previous=function(){return st[st.indexOf(L)-1]},L.next=function(){return st[st.indexOf(L)+1]},L.revert=function(Me,Ge){if(!Ge)return L.kill(!0);var Be=Me!==!1||!L.enabled,Ke=hn;Be!==L.isReverted&&(Be&&(ie=Math.max(ae(),L.scroll.rec||0),fe=L.progress,ee=i&&i.progress()),Ee&&[Ee,qe,O,Je].forEach(function(Ht){return Ht.style.display=Be?"none":"block"}),Be&&(hn=L,L.update(Be)),d&&(!w||!L.isActive)&&(Be?Nb(d,F,ve):Su(d,F,fi(d),te)),Be||L.update(Be),hn=Ke,L.isReverted=Be)},L.refresh=function(Me,Ge,Be,Ke){if(!((hn||!L.enabled)&&!Ge)){if(d&&Me&&vi){nn(s,"scrollEnd",o_);return}!wn&&ge&&ge(L),hn=L,be.tween&&!Be&&(be.tween.kill(),be.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)})),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ht=Ue(),it=Ze(),Lt=b?b.duration():Gi(U,M),Vt=re<=.01||!re,Ct=0,Et=Ke||0,yt=cs(Be)?Be.end:n.end,Vn=n.endTrigger||f,Pt=cs(Be)?Be.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),_n=L.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,L),si=f&&Math.max(0,st.indexOf(L))||0,$t=si,E,B,q,$,k,se,_e,Ce,Ae,ze,Oe,Ne,Qe;for(G&&cs(Be)&&(Ne=Pe.getProperty(O,M.p),Qe=Pe.getProperty(Je,M.p));$t-- >0;)se=st[$t],se.end||se.refresh(0,1)||(hn=L),_e=se.pin,_e&&(_e===f||_e===d||_e===_n)&&!se.isReverted&&(ze||(ze=[]),ze.unshift(se),se.revert(!0,!0)),se!==st[$t]&&(si--,$t--);for(mn(Pt)&&(Pt=Pt(L)),Pt=Lp(Pt,"start",L),D=Hp(Pt,f,Ht,M,ae(),Ee,O,L,it,oe,j,Lt,b,L._startClamp&&"_startClamp")||(d?-.001:0),mn(yt)&&(yt=yt(L)),Kn(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(Kn(Pt)?Pt.split(" ")[0]:"")+yt:(Ct=Wl(yt.substr(2),Ht),yt=Kn(Pt)?Pt:(b?Pe.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,D):D)+Ct,Vn=f)),yt=Lp(yt,"end",L),Ye=Math.max(D,Hp(yt||(Vn?"100% 0":Lt),Vn,Ht,M,ae()+Ct,qe,Je,L,it,oe,j,Lt,b,L._endClamp&&"_endClamp"))||-.001,Ct=0,$t=si;$t--;)se=st[$t],_e=se.pin,_e&&se.start-se._pinPush<=D&&!b&&se.end>0&&(E=se.end-(L._startClamp?Math.max(0,se.start):se.start),(_e===f&&se.start-se._pinPush<D||_e===_n)&&isNaN(Pt)&&(Ct+=E*(1-se.progress)),_e===d&&(Et+=E));if(D+=Ct,Ye+=Ct,L._startClamp&&(L._startClamp+=Ct),L._endClamp&&!wn&&(L._endClamp=Ye||-.001,Ye=Math.min(Ye,Gi(U,M))),re=Ye-D||(D-=.01)&&.001,Vt&&(fe=Pe.utils.clamp(0,1,Pe.utils.normalize(D,Ye,ie))),L._pinPush=Et,Ee&&Ct&&(E={},E[M.a]="+="+Ct,_n&&(E[M.p]="-="+ae()),Pe.set([Ee,qe],E)),d&&!(Nh&&L.end>=Gi(U,M)))E=fi(d),$=M===Zt,q=ae(),de=parseFloat(Q(M.a))+Et,!Lt&&Ye>1&&(Oe=(V?Rt.scrollingElement||jn:U).style,Oe={style:Oe,value:Oe["overflow"+M.a.toUpperCase()]},V&&fi(xt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Oe.style["overflow"+M.a.toUpperCase()]="scroll")),Su(d,F,E),x=wl(d),B=cr(d,!0),Ce=j&&Kr(U,$?Rn:Zt)(),_?(te=[_+M.os2,re+Et+jt],te.t=F,$t=_===Yt?uc(d,M)+re+Et:0,$t&&(te.push(M.d,$t+jt),F.style.flexBasis!=="auto"&&(F.style.flexBasis=$t+jt)),ho(te),_n&&st.forEach(function(ct){ct.pin===_n&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),j&&ae(ie)):($t=uc(d,M),$t&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=$t+jt)),j&&(k={top:B.top+($?q-D:Ce)+jt,left:B.left+($?Ce:q-D)+jt,boxSizing:"border-box",position:"fixed"},k[ys]=k["max"+Ro]=Math.ceil(B.width)+jt,k[Ms]=k["max"+Nf]=Math.ceil(B.height)+jt,k[hi]=k[hi+_a]=k[hi+ma]=k[hi+va]=k[hi+ga]="0",k[Yt]=E[Yt],k[Yt+_a]=E[Yt+_a],k[Yt+ma]=E[Yt+ma],k[Yt+va]=E[Yt+va],k[Yt+ga]=E[Yt+ga],A=Fb(ve,k,w),wn&&ae(0)),i?(Ae=i._initted,_u(1),i.render(i.duration(),!0,!0),ne=Q(M.a)-de+re+Et,pe=Math.abs(re-ne)>1,j&&pe&&A.splice(A.length-2,2),i.render(0,!0,!0),Ae||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),_u(0)):ne=re,Oe&&(Oe.value?Oe.style["overflow"+M.a.toUpperCase()]=Oe.value:Oe.style.removeProperty("overflow-"+M.a));else if(f&&ae()&&!b)for(B=f.parentNode;B&&B!==xt;)B._pinOffset&&(D-=B._pinOffset,Ye-=B._pinOffset),B=B.parentNode;ze&&ze.forEach(function(ct){return ct.revert(!1,!0)}),L.start=D,L.end=Ye,nt=Ve=wn?ie:ae(),!b&&!wn&&(nt<ie&&ae(ie),L.scroll.rec=0),L.revert(!1,!0),Z=fn(),he&&(Fe=-1,he.restart(!0)),hn=0,i&&C&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(Vt||fe!==L.progress||b||g||i&&!i._initted)&&(i&&!C&&(i._initted||fe||i.vars.immediateRender!==!1)&&i.totalProgress(b&&D<-.001&&!fe?Pe.utils.normalize(D,Ye,0):fe,!0),L.progress=Vt||(nt-D)/re===fe?0:fe),d&&_&&(F._pinOffset=Math.round(L.progress*ne)),I&&I.invalidate(),isNaN(Ne)||(Ne-=Pe.getProperty(O,M.p),Qe-=Pe.getProperty(Je,M.p),Al(O,M,Ne),Al(Ee,M,Ne-(Ke||0)),Al(Je,M,Qe),Al(qe,M,Qe-(Ke||0))),Vt&&!wn&&L.update(),u&&!wn&&!N&&(N=!0,u(L),N=!1)}},L.getVelocity=function(){return(ae()-Ve)/(fn()-Qo)*1e3||0},L.endAnimation=function(){qo(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?C||qo(i,L.direction<0,1):qo(i,i.reversed()))},L.labelToScroll=function(Me){return i&&i.labels&&(D||L.refresh()||D)+i.labels[Me]/i.duration()*re||0},L.getTrailing=function(Me){var Ge=st.indexOf(L),Be=L.direction>0?st.slice(0,Ge).reverse():st.slice(Ge+1);return(Kn(Me)?Be.filter(function(Ke){return Ke.vars.preventOverlaps===Me}):Be).filter(function(Ke){return L.direction>0?Ke.end<=D:Ke.start>=Ye})},L.update=function(Me,Ge,Be){if(!(b&&!Be&&!Me)){var Ke=wn===!0?ie:L.scroll(),Ht=Me?0:(Ke-D)/re,it=Ht<0?0:Ht>1?1:Ht||0,Lt=L.progress,Vt,Ct,Et,yt,Vn,Pt,_n,si;if(Ge&&(Ve=nt,nt=b?ae():Ke,v&&(He=me,me=i&&!C?i.totalProgress():it)),m&&d&&!hn&&!yl&&vi&&(!it&&D<Ke+(Ke-Ve)/(fn()-Qo)*m?it=1e-4:it===1&&Ye>Ke+(Ke-Ve)/(fn()-Qo)*m&&(it=.9999)),it!==Lt&&L.enabled){if(Vt=L.isActive=!!it&&it<1,Ct=!!Lt&&Lt<1,Pt=Vt!==Ct,Vn=Pt||!!it!=!!Lt,L.direction=it>Lt?1:-1,L.progress=it,Vn&&!hn&&(Et=it&&!Lt?0:it===1?1:Lt===1?2:3,C&&(yt=!Pt&&Y[Et+1]!=="none"&&Y[Et+1]||Y[Et],si=i&&(yt==="complete"||yt==="reset"||yt in i))),y&&(Pt||si)&&(si||h||!i)&&(mn(y)?y(L):L.getTrailing(y).forEach(function(q){return q.endAnimation()})),C||(I&&!hn&&!yl?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",it,i._tTime/i._tDur):(I.vars.totalProgress=it,I.invalidate().restart())):i&&i.totalProgress(it,!!(hn&&(Z||Me)))),d){if(Me&&_&&(F.style[_+M.os2]=xe),!j)K(ta(de+ne*it));else if(Vn){if(_n=!Me&&it>Lt&&Ye+1>Ke&&Ke+1>=Gi(U,M),w)if(!Me&&(Vt||_n)){var $t=cr(d,!0),E=Ke-D;Vp(d,xt,$t.top+(M===Zt?E:0)+jt,$t.left+(M===Zt?0:E)+jt)}else Vp(d,F);ho(Vt||_n?A:x),pe&&it<1&&Vt||K(de+(it===1&&!_n?ne:0))}}v&&!be.tween&&!hn&&!yl&&he.restart(!0),a&&(Pt||S&&it&&(it<1||!vu))&&Oa(a.targets).forEach(function(q){return q.classList[Vt||S?"add":"remove"](a.className)}),o&&!C&&!Me&&o(L),Vn&&!hn?(C&&(si&&(yt==="complete"?i.pause().totalProgress(1):yt==="reset"?i.restart(!0).pause():yt==="restart"?i.restart(!0):i[yt]()),o&&o(L)),(Pt||!vu)&&(c&&Pt&&yu(L,c),W[Et]&&yu(L,W[Et]),S&&(it===1?L.kill(!1,1):W[Et]=0),Pt||(Et=it===1?1:3,W[Et]&&yu(L,W[Et]))),P&&!Vt&&Math.abs(L.getVelocity())>(na(P)?P:2500)&&(qo(L.callbackAnimation),I?I.progress(1):qo(i,yt==="reverse"?1:!it,1))):C&&o&&!hn&&o(L)}if(Le){var B=b?Ke/b.duration()*(b._caScrollDist||0):Ke;ue(B+(O._isFlipped?1:0)),Le(B)}Te&&Te(-Ke/b.duration()*(b._caScrollDist||0))}},L.enable=function(Me,Ge){L.enabled||(L.enabled=!0,nn(U,"resize",ia),V||nn(U,"scroll",$s),ge&&nn(s,"refreshInit",ge),Me!==!1&&(L.progress=fe=0,nt=Ve=Fe=ae()),Ge!==!1&&L.refresh())},L.getTween=function(Me){return Me&&be?be.tween:I},L.setPositions=function(Me,Ge,Be,Ke){if(b){var Ht=b.scrollTrigger,it=b.duration(),Lt=Ht.end-Ht.start;Me=Ht.start+Lt*Me/it,Ge=Ht.start+Lt*Ge/it}L.refresh(!1,!1,{start:Ip(Me,Be&&!!L._startClamp),end:Ip(Ge,Be&&!!L._endClamp)},Ke),L.update()},L.adjustPinSpacing=function(Me){if(te&&Me){var Ge=te.indexOf(M.d)+1;te[Ge]=parseFloat(te[Ge])+Me+jt,te[1]=parseFloat(te[1])+Me+jt,ho(te)}},L.disable=function(Me,Ge){if(L.enabled&&(Me!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Ge||I&&I.pause(),ie=0,we&&(we.uncache=1),ge&&tn(s,"refreshInit",ge),he&&(he.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!V)){for(var Be=st.length;Be--;)if(st[Be].scroller===U&&st[Be]!==L)return;tn(U,"resize",ia),V||tn(U,"scroll",$s)}},L.kill=function(Me,Ge){L.disable(Me,Ge),I&&!Ge&&I.kill(),l&&delete Oh[l];var Be=st.indexOf(L);Be>=0&&st.splice(Be,1),Be===bn&&Yl>0&&bn--,Be=0,st.forEach(function(Ke){return Ke.scroller===L.scroller&&(Be=1)}),Be||wn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,Me&&i.revert({kill:!1}),Ge||i.kill()),Ee&&[Ee,qe,O,Je].forEach(function(Ke){return Ke.parentNode&&Ke.parentNode.removeChild(Ke)}),xa===L&&(xa=0),d&&(we&&(we.uncache=1),Be=0,st.forEach(function(Ke){return Ke.pin===d&&Be++}),Be||(we.spacer=0)),n.onKill&&n.onKill(L)},st.push(L),L.enable(!1,!1),De&&De(L),i&&i.add&&!re){var je=L.update;L.update=function(){L.update=je,lt.cache++,D||Ye||L.refresh()},Pe.delayedCall(.01,L.update),re=.01,D=Ye=0}else L.refresh();d&&Ub()},s.register=function(n){return js||(Pe=n||e_(),Qg()&&window.document&&s.enable(),js=ea),js},s.defaults=function(n){if(n)for(var i in n)El[i]=n[i];return El},s.disable=function(n,i){ea=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(at,"wheel",$s),tn(Rt,"scroll",$s),clearInterval(xl),tn(Rt,"touchcancel",Oi),tn(xt,"touchstart",Oi),Sl(tn,Rt,"pointerdown,touchstart,mousedown",Up),Sl(tn,Rt,"pointerup,touchend,mouseup",Np),lc.kill(),Ml(tn);for(var r=0;r<lt.length;r+=3)Tl(tn,lt[r],lt[r+1]),Tl(tn,lt[r],lt[r+2])},s.enable=function(){if(at=window,Rt=document,jn=Rt.documentElement,xt=Rt.body,Pe&&(Oa=Pe.utils.toArray,pa=Pe.utils.clamp,Uh=Pe.core.context||Oi,_u=Pe.core.suppressOverwrites||Oi,Df=at.history.scrollRestoration||"auto",Fh=at.pageYOffset||0,Pe.core.globals("ScrollTrigger",s),xt)){ea=1,uo=document.createElement("div"),uo.style.height="100vh",uo.style.position="absolute",c_(),Ab(),Wt.register(Pe),s.isTouch=Wt.isTouch,Pr=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ih=Wt.isTouch===1,nn(at,"wheel",$s),Pf=[at,Rt,jn,xt],Pe.matchMedia?(s.matchMedia=function(c){var u=Pe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Pe.addEventListener("matchMediaInit",function(){return Ff()}),Pe.addEventListener("matchMediaRevert",function(){return a_()}),Pe.addEventListener("matchMedia",function(){ms(0,1),As("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return Mu(),Mu})):console.warn("Requires GSAP 3.11.0 or later"),Mu(),nn(Rt,"scroll",$s);var n=xt.hasAttribute("style"),i=xt.style,r=i.borderTopStyle,o=Pe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=cr(xt),Zt.m=Math.round(a.top+Zt.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),xl=setInterval(Bp,250),Pe.delayedCall(.5,function(){return yl=0}),nn(Rt,"touchcancel",Oi),nn(xt,"touchstart",Oi),Sl(nn,Rt,"pointerdown,touchstart,mousedown",Up),Sl(nn,Rt,"pointerup,touchend,mouseup",Np),Lh=Pe.utils.checkPrefix("transform"),ql.push(Lh),js=fn(),lc=Pe.delayedCall(.2,ms).pause(),Zs=[Rt,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;Rt.hidden?(Pp=c,Dp=u):(Pp!==c||Dp!==u)&&ia()},Rt,"DOMContentLoaded",ms,at,"load",ms,at,"resize",ia],Ml(nn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Tl(tn,lt[l],lt[l+1]),Tl(tn,lt[l],lt[l+2])}},s.config=function(n){"limitCallbacks"in n&&(vu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(xl)||(xl=i)&&setInterval(Bp,i),"ignoreMobileResize"in n&&(Ih=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ml(tn)||Ml(nn,n.autoRefreshEvents||"none"),jg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=On(n),o=lt.indexOf(r),a=bs(r);~o&&lt.splice(o,a?6:2),i&&(a?Yi.unshift(at,i,xt,i,jn,i):Yi.unshift(r,i))},s.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Kn(n)?On(n):n).getBoundingClientRect(),a=o[r?ys:Ms]*i||0;return r?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},s.positionInViewport=function(n,i,r){Kn(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[r?ys:Ms],l=i==null?a/2:i in hc?hc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},s.killAll=function(n){if(st.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ws.killAll||[];ws={},i.forEach(function(r){return r()})}},s}();ft.version="3.13.0";ft.saveStyles=function(s){return s?Oa(s).forEach(function(e){if(e&&e.style){var t=qn.indexOf(e);t>=0&&qn.splice(t,5),qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),Uh())}}):qn};ft.revert=function(s,e){return Ff(!s,e)};ft.create=function(s,e){return new ft(s,e)};ft.refresh=function(s){return s?ia(!0):(js||ft.register())&&ms(!0)};ft.update=function(s){return++lt.cache&&mr(s===!0?2:0)};ft.clearScrollMemory=l_;ft.maxScroll=function(s,e){return Gi(s,e?Rn:Zt)};ft.getScrollFunc=function(s,e){return Kr(On(s),e?Rn:Zt)};ft.getById=function(s){return Oh[s]};ft.getAll=function(){return st.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!vi};ft.snapDirectional=Of;ft.addEventListener=function(s,e){var t=ws[s]||(ws[s]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(s,e){var t=ws[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Pe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&mn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return mn(r)&&(r=r(),nn(ft,"refresh",function(){return r=e.batchMax()})),Oa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ft.create(c))}),t};var Wp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Tu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Wt.isTouch?" pinch-zoom":""):"none",e===jn&&s(xt,t)},Rl={auto:1,scroll:1},kb=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Pe.core.getCache(r),a=fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Rl[(l=fi(r)).overflowY]||Rl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!bs(r)&&(Rl[(l=fi(r)).overflowY]||Rl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},h_=function(e,t,n,i){return Wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&kb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(Rt,Wt.eventTypes[0],Yp,!1,!0)},onDisable:function(){return tn(Rt,Wt.eventTypes[0],Yp,!0)}})},zb=/(input|label|select|textarea)/i,Xp,Yp=function(e){var t=zb.test(e.target.tagName);(t||Xp)&&(e._gsapAllow=!0,Xp=t)},Hb=function(e){cs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=On(e.target)||jn,u=Pe.core.globals().ScrollSmoother,h=u&&u.get(),f=Pr&&(e.content&&On(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Kr(c,Zt),_=Kr(c,Rn),g=1,m=(Wt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,T=mn(i)?function(){return i(a)}:function(){return i||2.8},S,v,w=h_(c,e.type,!0,r),R=function(){return v=!1},b=Oi,P=Oi,y=function(){l=Gi(c,Zt),P=pa(Pr?1:0,l),n&&(b=pa(0,Gi(c,Rn))),S=Ss},M=function(){f._gsap.y=ta(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(v){requestAnimationFrame(R);var G=ta(a.deltaY/2),oe=P(d.v-G);if(f&&oe!==d.v+d.offset){d.offset=oe-d.v;var L=ta((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=lt.cache,mr()}return!0}d.offset&&M(),v=!0},U,H,V,j,W=function(){y(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return Pr&&Y.type==="touchmove"&&C()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=g;g=ta((at.visualViewport&&at.visualViewport.scale||1)/m),U.pause(),Y!==g&&Tu(c,g>1.01?!0:n?!1:"x"),H=_(),V=d(),y(),S=Ss},e.onRelease=e.onGestureStart=function(Y,G){if(d.offset&&M(),!G)j.restart(!0);else{lt.cache++;var oe=T(),L,ge;n&&(L=_(),ge=L+oe*.05*-Y.velocityX/.227,oe*=Wp(_,L,ge,Gi(c,Rn)),U.vars.scrollX=b(ge)),L=d(),ge=L+oe*.05*-Y.velocityY/.227,oe*=Wp(d,L,ge,Gi(c,Zt)),U.vars.scrollY=P(ge),U.invalidate().duration(oe).play(.01),(Pr&&U.vars.scrollY>=l||L>=l-1)&&Pe.to({},{onUpdate:W,duration:oe})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),fn()-p>1e3&&(S=0,p=fn())},e.onChange=function(Y,G,oe,L,ge){if(Ss!==S&&y(),G&&n&&_(b(L[2]===G?H+(Y.startX-Y.x):_()+G-L[1])),oe){d.offset&&M();var Ue=ge[2]===oe,Ze=Ue?V+Y.startY-Y.y:d()+oe-ge[1],Fe=P(Ze);Ue&&Ze!==Fe&&(V+=Fe-Ze),d(Fe)}(oe||G)&&mr()},e.onEnable=function(){Tu(c,n?!1:"x"),ft.addEventListener("refresh",W),nn(at,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){Tu(c,!0),tn(at,"resize",W),ft.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Wt(e),a.iOS=Pr,Pr&&!d()&&d(1),Pr&&Pe.ticker.add(Oi),j=a._dc,U=Pe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:u_(d,d(),function(){return U.pause()})},onUpdate:mr,onComplete:j.vars.onComplete}),a};ft.sort=function(s){if(mn(s))return st.sort(s);var e=at.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(s){return new Wt(s)};ft.normalizeScroll=function(s){if(typeof s>"u")return En;if(s===!0&&En)return En.enable();if(s===!1){En&&En.kill(),En=s;return}var e=s instanceof Wt?s:Hb(s);return En&&En.target===e.target&&En.kill(),bs(e.target)&&(En=e),e};ft.core={_getVelocityProp:Dh,_inputObserver:h_,_scrollers:lt,_proxies:Yi,bridge:{ss:function(){vi||As("scrollStart"),vi=fn()},ref:function(){return hn}}};e_()&&Pe.registerPlugin(ft);function Vb(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Gb(s,e,t){return e&&Vb(s.prototype,e),s}/*!
 * ScrollSmoother 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vt,Cl,Tn,Lr,ra,rr,us,qp,et,Bi,Pl,Kp,$p,jp,Zp,f_=function(){return typeof window<"u"},d_=function(){return vt||f_()&&(vt=window.gsap)&&vt.registerPlugin&&vt},Wb=function(e){return Math.round(e*1e5)/1e5||0},Cr=function(e){return et.maxScroll(e||Tn)},Xb=function(e,t){var n=e.parentNode||ra,i=e.getBoundingClientRect(),r=n.getBoundingClientRect(),o=r.top-i.top,a=r.bottom-i.bottom,l=(Math.abs(o)>Math.abs(a)?o:a)/(1-t),c=-l*t,u,h;return l>0&&(u=r.height/(Tn.innerHeight+r.height),h=u===.5?r.height*2:Math.min(r.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-h*t:-h/2,l+=h),{change:l,offset:c}},Yb=function(e){var t=Lr.querySelector(".ScrollSmoother-wrapper");return t||(t=Lr.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},Rs=function(){function s(e){var t=this;Cl||s.register(vt)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},Bi&&Bi.kill(),Bi=this,jp(this);var n=e,i=n.smoothTouch,r=n.onUpdate,o=n.onStop,a=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,h,f,d,_,g,m,p,T,S,v,w,R,b,P,y=this,M=e.effectsPrefix||"",C=et.getScrollFunc(Tn),U=et.isTouch===1?i===!0?.8:parseFloat(i)||0:a===0||a===!1?0:parseFloat(a)||.8,H=U&&+e.speed||1,V=0,j=0,W=1,Y=Kp(0),G=function(){return Y.update(-V)},oe={y:0},L=function(){return h.style.overflow="visible"},ge,Ue=function(N){N.update();var re=N.getTween();re&&(re.pause(),re._time=re._dur,re._tTime=re._tDur),ge=!1,N.animation.progress(N.progress,!0)},Ze=function(N,re){(N!==V&&!v||re)&&(u&&(N=Math.round(N)),U&&(h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",h._gsap.y=N+"px"),j=N-V,V=N,et.isUpdating||s.isRefreshing||et.update())},Fe=function(N){return arguments.length?(N<0&&(N=0),oe.y=-N,ge=!0,v?V=-N:Ze(-N),et.isRefreshing?_.update():C(N/H),this):-V},Z=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!et.isRefreshing){var X=Cr(f)*H;X<-V&&Fe(X),Zp.restart(!0)}}),fe,ae=function(N){f.scrollTop=0,!(N.target.contains&&N.target.contains(f)||l&&l(t,N)===!1)&&(et.isInViewport(N.target)||N.target===fe||t.scrollTo(N.target,!1,"center center"),fe=N.target)},be=function(N,re){if(N<re.start)return N;var ve=isNaN(re.ratio)?1:re.ratio,A=re.end-re.start,x=N-re.start,F=re.offset||0,J=re.pins||[],Q=J.offset||0,K=re._startClamp&&re.start<=0||re.pins&&re.pins.offset?0:re._endClamp&&re.end===Cr()?1:.5;return J.forEach(function(de){A-=de.distance,de.nativeStart<=N&&(x-=de.distance)}),Q&&(x*=(A-Q/ve)/A),N+(x-F*K)/ve-x},we=function X(N,re,ve){ve||(N.pins.length=N.pins.offset=0);var A=N.pins,x=N.markers,F,J,Q,K,de,ne,xe,te;for(xe=0;xe<re.length;xe++)if(te=re[xe],N.trigger&&te.trigger&&N!==te&&(te.trigger===N.trigger||te.pinnedContainer===N.trigger||N.trigger.contains(te.trigger))&&(de=te._startNative||te._startClamp||te.start,ne=te._endNative||te._endClamp||te.end,Q=be(de,N),K=te.pin&&ne>0?Q+(ne-de):be(ne,N),te.setPositions(Q,K,!0,(te._startClamp?Math.max(0,Q):Q)-de),te.markerStart&&x.push(vt.quickSetter([te.markerStart,te.markerEnd],"y","px")),te.pin&&te.end>0&&!ve)){if(F=te.end-te.start,J=N._startClamp&&te.start<0,J){if(N.start>0){N.setPositions(0,N.end+(N._startNative-N.start),!0),X(N,re);return}F+=te.start,A.offset=-te.start}A.push({start:te.start,nativeStart:de,end:te.end,distance:F,trig:te}),N.setPositions(N.start,N.end+(J?-te.start:F),!0)}},ke=function(N,re){g.forEach(function(ve){return we(ve,N,re)})},nt=function(){ra=Lr.documentElement,rr=Lr.body,L(),requestAnimationFrame(L),g&&(et.getAll().forEach(function(N){N._startNative=N.start,N._endNative=N.end}),g.forEach(function(N){var re=N._startClamp||N.start,ve=N.autoSpeed?Math.min(Cr(),N.end):re+Math.abs((N.end-re)/N.ratio),A=ve-N.end;if(re-=A/2,ve-=A/2,re>ve){var x=re;re=ve,ve=x}N._startClamp&&re<0?(ve=N.ratio<0?Cr():N.end/N.ratio,A=ve-N.end,re=0):(N.ratio<0||N._endClamp&&ve>=Cr())&&(ve=Cr(),re=N.ratio<0||N.ratio>1?0:ve-(ve-N.start)/N.ratio,A=(ve-re)*N.ratio-(N.end-N.start)),N.offset=A||1e-4,N.pins.length=N.pins.offset=0,N.setPositions(re,ve,!0)}),ke(et.sort())),Y.reset()},Ve=function(){return et.addEventListener("refresh",nt)},D=function(){return g&&g.forEach(function(N){return N.vars.onRefresh(N)})},Ye=function(){return g&&g.forEach(function(N){return N.vars.onRefreshInit(N)}),D},Ee=function(N,re,ve,A){return function(){var x=typeof re=="function"?re(ve,A):re;x||x===0||(x=A.getAttribute("data-"+M+N)||(N==="speed"?1:0)),A.setAttribute("data-"+M+N,x);var F=(x+"").substr(0,6)==="clamp(";return{clamp:F,value:F?x.substr(6,x.length-7):x}}},qe=function(N,re,ve,A,x){x=(typeof x=="function"?x(A,N):x)||0;var F=Ee("speed",re,A,N),J=Ee("lag",ve,A,N),Q=vt.getProperty(N,"y"),K=N._gsap,de,ne,xe,te,ue,pe,Le=[],Re=function(){re=F(),ve=parseFloat(J().value),de=parseFloat(re.value)||1,xe=re.value==="auto",ue=xe||ne&&ne._startClamp&&ne.start<=0||Le.offset?0:ne&&ne._endClamp&&ne.end===Cr()?1:.5,te&&te.kill(),te=ve&&vt.to(N,{ease:Pl,overwrite:!1,y:"+=0",duration:ve}),ne&&(ne.ratio=de,ne.autoSpeed=xe)},me=function(){K.y=Q+"px",K.renderTransform(1),Re()},He=[],I=0,le=function(he){if(xe){me();var ie=Xb(N,qp(0,1,-he.start/(he.end-he.start)));I=ie.change,pe=ie.offset}else pe=Le.offset||0,I=(he.end-he.start-pe)*(1-de);Le.forEach(function(ee){return I-=ee.distance*(1-de)}),he.offset=I||.001,he.vars.onUpdate(he),te&&te.progress(1)};return Re(),(de!==1||xe||te)&&(ne=et.create({trigger:xe?N.parentNode:N,start:function(){return re.clamp?"clamp(top bottom+="+x+")":"top bottom+="+x},end:function(){return re.value<0?"max":re.clamp?"clamp(bottom top-="+x+")":"bottom top-="+x},scroller:f,scrub:!0,refreshPriority:-999,onRefreshInit:me,onRefresh:le,onKill:function(he){var ie=g.indexOf(he);ie>=0&&g.splice(ie,1),me()},onUpdate:function(he){var ie=Q+I*(he.progress-ue),ee=Le.length,Te=0,De,ot,ye;if(he.offset){if(ee){for(ot=-V,ye=he.end;ee--;){if(De=Le[ee],De.trig.isActive||ot>=De.start&&ot<=De.end){te&&(De.trig.progress+=De.trig.direction<0?.001:-.001,De.trig.update(0,0,1),te.resetTo("y",parseFloat(K.y),-j,!0),W&&te.progress(1));return}ot>De.end&&(Te+=De.distance),ye-=De.distance}ie=Q+Te+I*((vt.utils.clamp(he.start,he.end,ot)-he.start-Te)/(ye-he.start)-ue)}He.length&&!xe&&He.forEach(function(Ie){return Ie(ie-Te)}),ie=Wb(ie+pe),te?(te.resetTo("y",ie,-j,!0),W&&te.progress(1)):(K.y=ie+"px",K.renderTransform(1))}}}),le(ne),vt.core.getCache(ne.trigger).stRevert=Ye,ne.startY=Q,ne.pins=Le,ne.markers=He,ne.ratio=de,ne.autoSpeed=xe,N.style.willChange="transform"),ne};Ve(),et.addEventListener("killAll",Ve),vt.delayedCall(.5,function(){return W=0}),this.scrollTop=Fe,this.scrollTo=function(X,N,re){var ve=vt.utils.clamp(0,Cr(),isNaN(X)?t.offset(X,re,!!N&&!v):+X);N?v?vt.to(t,{duration:U,scrollTop:ve,overwrite:"auto",ease:Pl}):C(ve):Fe(ve)},this.offset=function(X,N,re){X=us(X)[0];var ve=X.style.cssText,A=et.create({trigger:X,start:N||"top top"}),x;return g&&(W?et.refresh():ke([A],!0)),x=A.start/(re?H:1),A.kill(!1),X.style.cssText=ve,vt.core.getCache(X).uncache=1,x};function O(){return d=h.clientHeight,h.style.overflow="visible",rr.style.height=Tn.innerHeight+(d-Tn.innerHeight)/H+"px",d-Tn.innerHeight}this.content=function(X){if(arguments.length){var N=us(X||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||rr.children[0];return N!==h&&(h=N,S=h.getAttribute("style")||"",Z&&Z.observe(h),vt.set(h,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),U||vt.set(h,{clearProps:"transform"})),this}return h},this.wrapper=function(X){return arguments.length?(f=us(X||"#smooth-wrapper")[0]||Yb(h),T=f.getAttribute("style")||"",O(),vt.set(f,U?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):f},this.effects=function(X,N){var re;if(g||(g=[]),!X)return g.slice(0);X=us(X),X.forEach(function(de){for(var ne=g.length;ne--;)g[ne].trigger===de&&g[ne].kill()}),N=N||{};var ve=N,A=ve.speed,x=ve.lag,F=ve.effectsPadding,J=[],Q,K;for(Q=0;Q<X.length;Q++)K=qe(X[Q],A,x,Q,F),K&&J.push(K);return(re=g).push.apply(re,J),N.refresh!==!1&&et.refresh(),J},this.sections=function(X,N){var re;if(m||(m=[]),!X)return m.slice(0);var ve=us(X).map(function(A){return et.create({trigger:A,start:"top 120%",end:"bottom -20%",onToggle:function(F){A.style.opacity=F.isActive?"1":"0",A.style.pointerEvents=F.isActive?"all":"none"}})});return N&&N.add?(re=m).push.apply(re,ve):m=ve.slice(0),ve},this.content(e.content),this.wrapper(e.wrapper),this.render=function(X){return Ze(X||X===0?X:V)},this.getVelocity=function(){return Y.getVelocity(-V)},et.scrollerProxy(f,{scrollTop:Fe,scrollHeight:function(){return O()&&rr.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!U,content:h,getBoundingClientRect:function(){return{top:0,left:0,width:Tn.innerWidth,height:Tn.innerHeight}}}),et.defaults({scroller:f});var Je=et.getAll().filter(function(X){return X.scroller===Tn||X.scroller===f});Je.forEach(function(X){return X.revert(!0,!0)}),_=et.create({animation:vt.fromTo(oe,{y:function(){return P=0,0}},{y:function(){return P=1,-O()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(P){var N=ge;N&&(Ue(_),oe.y=V),Ze(oe.y,N),G(),r&&!v&&r(y)}}}),onRefreshInit:function(N){if(!s.isRefreshing){if(s.isRefreshing=!0,g){var re=et.getAll().filter(function(A){return!!A.pin});g.forEach(function(A){A.vars.pinnedContainer||re.forEach(function(x){if(x.pin.contains(A.trigger)){var F=A.vars;F.pinnedContainer=x.pin,A.vars=null,A.init(F,A.animation)}})})}var ve=N.getTween();b=ve&&ve._end>ve._dp._time,R=V,oe.y=0,U&&(et.isTouch===1&&(f.style.position="absolute"),f.scrollTop=0,et.isTouch===1&&(f.style.position="fixed"))}},onRefresh:function(N){N.animation.invalidate(),N.setPositions(N.start,O()/H),b||Ue(N),oe.y=-C()*H,Ze(oe.y),W||(b&&(ge=!1),N.animation.progress(vt.utils.clamp(0,1,R/H/-N.end))),b&&(N.progress-=.001,N.update()),s.isRefreshing=!1},id:"ScrollSmoother",scroller:Tn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return O()/H},onScrubComplete:function(){Y.reset(),o&&o(t)},scrub:U||!0}),this.smooth=function(X){return arguments.length&&(U=X||0,H=U&&+e.speed||1,_.scrubDuration(X)),_.getTween()?_.getTween().duration():0},_.getTween()&&(_.getTween().vars.ease=e.ease||Pl),this.scrollTrigger=_,e.effects&&this.effects(e.effects===!0?"[data-"+M+"speed], [data-"+M+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),Je.forEach(function(X){X.vars.scroller=f,X.revert(!1,!0),X.init(X.vars,X.animation)}),this.paused=function(X,N){return arguments.length?(!!v!==X&&(X?(_.getTween()&&_.getTween().pause(),C(-V/H),Y.reset(),w=et.normalizeScroll(),w&&w.disable(),v=et.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return Fe(-V)}}),v.nested=$p(ra,"wheel,touch,scroll",!0,N!==!1)):(v.nested.kill(),v.kill(),v=0,w&&w.enable(),_.progress=(-V/H-_.start)/(_.end-_.start),Ue(_))),this):!!v},this.kill=this.revert=function(){t.paused(!1),Ue(_),_.kill();for(var X=(g||[]).concat(m||[]),N=X.length;N--;)X[N].kill();et.scrollerProxy(f),et.removeEventListener("killAll",Ve),et.removeEventListener("refresh",nt),f.style.cssText=T,h.style.cssText=S;var re=et.defaults({});re&&re.scroller===f&&et.defaults({scroller:Tn}),t.normalizer&&et.normalizeScroll(!1),clearInterval(p),Bi=null,Z&&Z.disconnect(),rr.style.removeProperty("height"),Tn.removeEventListener("focusin",ae)},this.refresh=function(X,N){return _.refresh(X,N)},c&&(this.normalizer=et.normalizeScroll(c===!0?{debounce:!0,content:!U&&h}:c)),et.config(e),"scrollBehavior"in Tn.getComputedStyle(rr)&&vt.set([rr,ra],{scrollBehavior:"auto"}),Tn.addEventListener("focusin",ae),p=setInterval(G,250),Lr.readyState==="loading"||requestAnimationFrame(function(){return et.refresh()})}return s.register=function(t){return Cl||(vt=t||d_(),f_()&&window.document&&(Tn=window,Lr=document,ra=Lr.documentElement,rr=Lr.body),vt&&(us=vt.utils.toArray,qp=vt.utils.clamp,Pl=vt.parseEase("expo"),jp=vt.core.context||function(){},et=vt.core.globals().ScrollTrigger,vt.core.globals("ScrollSmoother",s),rr&&et&&(Zp=vt.delayedCall(.2,function(){return et.isRefreshing||Bi&&Bi.refresh()}).pause(),Kp=et.core._getVelocityProp,$p=et.core._inputObserver,s.refresh=et.refresh,Cl=1))),Cl},Gb(s,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),s}();Rs.version="3.13.0";Rs.create=function(s){return Bi&&s&&Bi.content()===us(s.content)[0]?Bi:new Rs(s)};Rs.get=function(){return Bi};d_()&&vt.registerPlugin(Rs);const Eu=(s,e)=>{"updateRanges"in s?s.updateRanges[0]=e:s.updateRange=e},Jp=new $e,Dl=new z,Ll=new Di,Qp=new z,em=new Di,Ko=new z,qb=s=>class extends s{constructor(){super();const e=parseInt(dc.replace(/\D+/g,""))>=154?"opaque_fragment":"output_fragment";this.onBeforeCompile=t=>{t.vertexShader=`attribute float cloudOpacity;
               varying float vOpacity;
              `+t.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
                 vOpacity = cloudOpacity;
                `),t.fragmentShader=`varying float vOpacity;
              `+t.fragmentShader.replace(`#include <${e}>`,`#include <${e}>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `)}}};class Kb extends hr{constructor({limit:e=200,range:t,material:n=dv,texture:i,frustumCulled:r=!0}={}){super(),this.name="Clouds",this.ref=this;const o=this,a=new Po(1,1),l=new Float32Array(Array.from({length:e},()=>1)),c=new Float32Array(Array.from({length:e},()=>[1,1,1]).flat()),u=new Ra(l,1);u.setUsage(Jf),a.setAttribute("cloudOpacity",u);const h=qb(n),f=new h;f.map=i,f.transparent=!0,f.depthWrite=!1,f.needsUpdate=!0,this.cloudMaterial=f,this.instance=new bm(a,f,e);const d=this.instance;d.matrixAutoUpdate=!1,d.frustumCulled=r,d.instanceColor=new Ra(c,3),d.instanceColor.setUsage(Jf),o.add(d);const _=[],g=()=>{const b=_.length;let P=0;for(let y=0;y<this.ref.children.length;y++){const M=this.ref.children[y];M.cloudStateArray&&(P+=M.cloudStateArray.length)}if(b===P)return _;_.length=0;for(let y=0;y<this.ref.children.length;y++){const M=this.ref.children[y];M.cloudStateArray&&_.push(...M.cloudStateArray)}return m(),_},m=()=>{const b=Math.min(e,t!==void 0?t:e,_.length);d.count=b,Eu(d.instanceMatrix,{offset:0,count:b*16}),d.instanceColor&&Eu(d.instanceColor,{offset:0,count:b*3}),Eu(d.geometry.attributes.cloudOpacity,{offset:0,count:b})};let p=0,T=0,S;const v=new Di,w=new z(0,0,1),R=new z;this.update=(b,P,y)=>{p=P,Jp.copy(d.matrixWorld).invert(),b.matrixWorld.decompose(Qp,em,Ko);const M=g();for(T=0;T<M.length;T++)S=M[T],S.ref.matrixWorld.decompose(Dl,Ll,Ko),Dl.add(R.copy(S.position).applyQuaternion(Ll).multiply(Ko)),Ll.copy(em).multiply(v.setFromAxisAngle(w,S.rotation+=y*S.rotationFactor)),Ko.multiplyScalar(S.volume+(1+Math.sin(p*S.density*S.speed))/2*S.growth),S.matrix.compose(Dl,Ll,Ko).premultiply(Jp),S.dist=Dl.distanceTo(Qp);for(M.sort((C,U)=>U.dist-C.dist),T=0;T<M.length;T++)S=M[T],l[T]=S.opacity*(S.dist<S.fade-1?S.dist/S.fade:1),d.setMatrixAt(T,S.matrix),d.setColorAt(T,S.color);d.geometry.attributes.cloudOpacity.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0)}}}let $b=0;class jb extends hr{constructor({opacity:e=1,speed:t=0,bounds:n=new z().fromArray([5,1,1]),segments:i=20,color:r=new Xe("#ffffff"),fade:o=10,volume:a=6,smallestVolume:l=.25,distribute:c=null,growth:u=4,concentrate:h="inside",seed:f=Math.random()}={}){super(),this.name="cloud_"+$b++,this.seed=f,this.segments=i,this.bounds=n,this.concentrate=h,this.volume=a,this.smallestVolume=l,this.distribute=c,this.growth=u,this.speed=t,this.fade=o,this.opacity=e,this.color=r,this.ref=this,this.cloudStateArray=[],this.updateCloud()}updateCloudStateArray(){if(this.cloudStateArray.length===this.segments)return;const{segments:e,uuid:t}=this;if(this.cloudStateArray.length>this.segments)this.cloudStateArray.splice(0,this.cloudStateArray.length-this.segments);else for(let n=this.cloudStateArray.length;n<e;n++)this.cloudStateArray.push({segments:e,bounds:new z(1,1,1),position:new z,uuid:t,index:n,ref:this,dist:0,matrix:new $e,volume:0,length:0,speed:0,growth:0,opacity:1,fade:0,density:0,rotation:n*(Math.PI/e),rotationFactor:0,color:new Xe})}updateCloud(){const{volume:e,color:t,speed:n,growth:i,opacity:r,fade:o,bounds:a,seed:l,cloudStateArray:c,distribute:u,segments:h,concentrate:f,smallestVolume:d}=this;this.updateCloudStateArray();let _=0;function g(){const m=Math.sin(l+_)*1e4;return _++,m-Math.floor(m)}c.forEach((m,p)=>{m.segments=h,m.volume=e,m.color=t,m.speed=n,m.growth=i,m.opacity=r,m.fade=o,m.bounds.copy(a),m.density=Math.max(.5,g()),m.rotationFactor=Math.max(.2,.5*g())*n;const T=u?.(m,p);if(T||h>1){var S;m.position.copy(m.bounds).multiply((S=T?.point)!==null&&S!==void 0?S:{x:g()*2-1,y:g()*2-1,z:g()*2-1})}const v=Math.abs(m.position.x),w=Math.abs(m.position.y),R=Math.abs(m.position.z),b=Math.max(v,w,R);m.length=1,v===b&&(m.length-=v/m.bounds.x),w===b&&(m.length-=w/m.bounds.y),R===b&&(m.length-=R/m.bounds.z),m.volume=(T?.volume!==void 0?T.volume:Math.max(Math.max(0,d),f==="random"?g():f==="inside"?m.length:1-m.length))*e})}}const Zb=`uniform sampler2D uReflectionTexture;
uniform mat4 textureMatrix;

varying vec4 vReflectionCoord;
varying vec3 vWorldPosition;
varying vec3 vNormal;

void main() {
    vec2 reflectionUV = vReflectionCoord.xy / vReflectionCoord.w;
    vec3 reflection = texture2D(uReflectionTexture, reflectionUV).rgb;
    
    //colore base dell'acqua
    vec3 waterColor = vec3(0.0, 0.0, 0.0);
    
    // Mixa il riflesso con il colore dell'acqua (0.4 = 40% riflesso, 60% acqua)
    vec3 finalColor = mix(waterColor, reflection, 1.0);
    
    gl_FragColor = vec4(finalColor, 1.0); // Semi-trasparente
}`,Jb=`uniform float uTime;
uniform float uFrequency;
uniform float uAmplitude;
uniform mat4 textureMatrix;

varying vec3 vWorldPosition;
varying vec3 vNormal;
varying vec4 vReflectionCoord;

//	Classic Perlin 3D Noise 
//	by Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

float getElevation(vec3 pos) {
    // Onda principale che si muove nel tempo
    float e = cnoise(pos * uFrequency - vec3(0.0, 0.0, uTime * 0.85)) * uAmplitude;
    
    // Onde secondarie per dettaglio
    e += cnoise(pos * uFrequency * 4.0 + uTime * 2.0) * (uAmplitude * 0.2);
    
    return e;
}

void main() {
    vec3 pos = position;
    vec4 wPosition = modelMatrix * vec4(pos, 1.0);
    
    // Calcola posizioni adiacenti per il calcolo delle normali
    vec3 wPositionX = wPosition.xyz + vec3(1.0, 0.0, 0.0);
    vec3 wPositionZ = wPosition.xyz + vec3(0.0, 0.0, 1.0);

    // Applica l'elevazione delle onde
    wPosition.y += getElevation(wPosition.xyz);
    wPositionX.y += getElevation(wPositionX);
    wPositionZ.y += getElevation(wPositionZ);
    
    // Calcola la normale usando il cross product
    vNormal = normalize(cross(wPositionZ - wPosition.xyz, wPositionX - wPosition.xyz));

    vWorldPosition = wPosition.xyz;

    gl_Position = projectionMatrix * viewMatrix * wPosition;

    vReflectionCoord = textureMatrix * vec4(wPosition.xyz, 1.0);
}`,Qb=`varying vec3 vWorldPosition;

void main() {
    vWorldPosition = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ew=`uniform vec3 topColor;
uniform vec3 bottomColor;
uniform float gradientSharpness;
uniform float gradientOffset;
varying vec3 vWorldPosition;

void main() {
    // Normalizziamo Y in [0,1] e applichiamo offset
    float h = (vWorldPosition.y + gradientOffset) * 0.5 + 0.5;

    // Rende la transizione più netta attorno a h=0.5
    h = smoothstep(
        0.5 - 0.5 / gradientSharpness,
        0.5 + 0.5 / gradientSharpness,
        h
    );

    gl_FragColor = vec4(mix(bottomColor, topColor, h), 1.0);
}`,p_="./";bi.registerPlugin(ft,Rs);const m_=Rs.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.5,effects:!0});m_.scrollTo(0,!0);m_.paused(!0);const kh=document.querySelector(".scroll-indicator");let tm=!1;const Sc=new Dm;Sc.onLoad=()=>{tm||(tm=!0,window.parent.postMessage({type:"threejs-scene-loaded"},"*"),console.log("loading complete"))};Sc.onProgress=(s,e,t)=>{const n=Math.round(e/t*100);window.parent.postMessage({type:"threejs-scene-progress",progress:n},"*"),console.log(`loading ${n}% (${e}/${t})`)};const ri=new tv;ri.background=new Xe(0);const tw=new rf(300,300,15),nw=new Ki({side:Dn,uniforms:{topColor:{value:new Xe(0)},bottomColor:{value:new Xe(16777215)},gradientSharpness:{value:8},gradientOffset:{value:-.05}},vertexShader:Qb,fragmentShader:ew}),iw=new Pn(tw,nw);ri.add(iw);const rw=new Lv(16777215,.5);ri.add(rw);const yr=new af(16774893,400);yr.position.set(0,8,15);yr.angle=Math.PI/6;yr.penumbra=.2;yr.decay=2;yr.distance=30;yr.castShadow=!0;yr.target.position.set(0,.5,0);ri.add(yr.target);ri.add(yr);const ti=new z(0,14,-170),Mr=new af(16774893,2500);Mr.position.set(ti.x,ti.y+8,ti.z+2);Mr.angle=Math.PI/2;Mr.penumbra=.2;Mr.decay=2;Mr.distance=30;Mr.castShadow=!0;Mr.target.position.set(ti.x,ti.y,ti.z);ri.add(Mr.target);ri.add(Mr);const Bf=new Um(16774893,400);Bf.position.set(0,15,15);Bf.castShadow=!0;ri.add(Bf);const sw=new RT(Sc);sw.load(`${p_}gltf/frame_wall.glb`,s=>{s.scene.traverse(e=>{e.isMesh&&(e.name==="wall"&&(e.receiveShadow=!0),e.name==="frame"&&(e.castShadow=!0),e.name==="passpartout"&&(e.receiveShadow=!0),(e.name==="mount"||e.name==="mount001")&&(e.castShadow=!0))}),s.scene.position.set(0,0,0),ri.add(s.scene)},void 0,s=>{console.error("Errore nel caricamento del modello:",s)});const kf=new Xr(window.innerWidth,window.innerHeight,{minFilter:Cn,magFilter:Cn,format:Xh}),Ui=new dn(75,window.innerWidth/window.innerHeight,.1,1e3),ow=new Dr(new z(0,1,0),4),zf=new Ki({fragmentShader:Zb,vertexShader:Jb,transparent:!0,uniforms:{uTime:{value:0},uFrequency:{value:.1},uAmplitude:{value:.6},uReflectionTexture:{value:kf.texture},textureMatrix:{value:new $e}}}),g_=new Po(300,300,1024,1024);g_.rotateX(-Math.PI*.5);const ya=new Pn(g_,zf);ya.position.set(0,-4,-150.85);ri.add(ya);function aw(){const s=ya.position.y;Wi.position.clone(),Wi.rotation.clone(),Ui.position.copy(Wi.position),Ui.position.y=2*s-Wi.position.y,Ui.lookAt(ti.x,ti.y,ti.z),Ui.updateMatrixWorld(),Ui.updateProjectionMatrix();const e=new $e;e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(Ui.projectionMatrix),e.multiply(Ui.matrixWorldInverse),zf.uniforms.textureMatrix.value=e,ya.visible=!1,wi.clippingPlanes=[ow],wi.setRenderTarget(kf),wi.render(ri,Ui),wi.setRenderTarget(null),wi.clippingPlanes=[],ya.visible=!0}const lw=new Im(Sc).load(`${p_}textures/cloud.png`),Tc=new Kb({texture:lw});Tc.position.set(ti.x,ti.y,ti.z);ri.add(Tc);const cw=new jb({seed:5,segments:80,volume:10,bounds:new z(12,4,2),opacity:.7,speed:.2,color:new Xe("white")});Tc.add(cw);let fc=ti.z+35;const uw=10,hw=6e3;window.innerWidth<768&&(fc+=4);const Wi=new dn(75,window.innerWidth/window.innerHeight,.1,1e3);Wi.position.set(.1,0,fc);const Hf=document.createElement("div");Hf.className="spacer";Hf.style.height="calc(100vh + "+hw+"px)";document.getElementById("smooth-content").appendChild(Hf);const wi=new AT({antialias:!0});wi.setSize(window.innerWidth,window.innerHeight);wi.shadowMap.enabled=!0;wi.domElement.id="webgl";document.body.appendChild(wi.domElement);const nm=new Nv;function __(){const s=nm.getElapsedTime(),e=nm.getDelta();zf.uniforms.uTime.value=s,aw(),requestAnimationFrame(__),Tc.update(Wi,s,e),wi.render(ri,Wi)}__();window.addEventListener("resize",()=>{Wi.aspect=window.innerWidth/window.innerHeight,Wi.updateProjectionMatrix(),wi.setSize(window.innerWidth,window.innerHeight),kf.setSize(window.innerWidth,window.innerHeight),Ui.aspect=window.innerWidth/window.innerHeight,Ui.updateProjectionMatrix()});function fw(s){const e=Array.from(s.childNodes);s.textContent="",e.forEach(t=>{if(t.nodeType===Node.TEXT_NODE)t.textContent.split(/(\s+)/).forEach(i=>{if(i.match(/^\s+$/))s.appendChild(document.createTextNode(i));else if(i.trim()!==""){const r=document.createElement("span");r.textContent=i,s.appendChild(r)}});else if(t.nodeType===Node.ELEMENT_NODE){const n=t.cloneNode(!1);t.textContent.split(/(\s+)/).forEach(r=>{if(r.match(/^\s+$/))n.appendChild(document.createTextNode(r));else if(r.trim()!==""){const o=document.createElement("span");o.textContent=r,n.appendChild(o)}}),s.appendChild(n)}})}let Xi=1,Vf=1,Ba=!0;window.addEventListener("load",()=>{const s=document.querySelector(".intro1"),e=document.querySelector(".intro2"),t=document.querySelector(".intro3");[s,e,t].forEach(n=>fw(n)),bi.set(".intro1 span, .intro2 span, .intro3 span",{opacity:0}),bi.set(".intro1, .intro2, .intro3",{opacity:1})});window.addEventListener("message",s=>{s.data?.type==="start-scene-animation"&&(console.log("received start"),bi.to(".intro1 span",{opacity:1,duration:1,stagger:{each:.15,onComplete:function(){console.log("span animation complete"),bi.to(kh,{opacity:1,duration:1}),console.log("enabling scroll"),Ba=!1}},delay:.5,ease:"power1.out"}))});const dw=1,zh=3;function v_(){console.log("Going to phase: ",Xi),Ba=!0,bi.to(kh,{opacity:0,duration:.5}),bi.to(".intro"+Vf+" span",{opacity:0,duration:1});const s=fc+(Xi-1)/(zh-1)*(uw-fc);bi.to(Wi.position,{z:s,duration:3,ease:"power1.inOut",onComplete:()=>{bi.to(".intro"+Xi+" span",{opacity:1,duration:1.5,delay:0,stagger:{each:.15,onComplete:function(){}},onComplete:()=>{Ba=!1,bi.to(kh,{opacity:1,duration:1}),Xi===zh&&(window.parent.postMessage({type:"iframeScrolledToEnd"},"*"),console.log("iframeScrolledToEnd message"))}})}})}function x_(){Xi<zh&&(Vf=Xi,Xi++,v_())}function y_(){Xi>dw&&(Vf=Xi,Xi--,v_())}window.addEventListener("wheel",s=>{Ba||(s.deltaY>0?(console.log("scroll verso il basso"),x_()):s.deltaY<0&&(console.log("scroll verso l’alto"),y_()))});let M_=0,S_=0;window.addEventListener("touchstart",s=>{M_=s.touches[0].clientY});window.addEventListener("touchend",s=>{S_=s.changedTouches[0].clientY,pw()});function pw(){const s=M_-S_;Math.abs(s)<50||Ba||(s>0?(console.log("swipe verso l’alto"),x_()):(console.log("swipe verso il basso"),y_()))}
