/* File generated on Tue Jun 07 2016 22:03:10 GMT-0400 (EDT) */
/* Version 2016-05-10.1 */
/* Expires on 2016/07/07 */
/*
Copyright 2014-2015-2016 ChartIQ LLC
*/

(function(){
	var trialExpiration =  "2016/07/07";
	if (trialExpiration != "undefined") {
		var expiration = new Date(trialExpiration);
		var now = new Date();
		if (now.getTime() > expiration.getTime()) {
			alert("This license has expired!");
			console.log("This license has expired!");
		} else {
			var diffDays = (expiration.getTime() - now.getTime());
			diffDays = Math.round(Math.abs(diffDays/(1000*60*60*24)));
			if ( diffDays < 3) {
				alert("This license expires in " + diffDays + " days!");
				console.log("This license expires in " + diffDays + " days!");
			}
		}
	}
	var version=["Version 2016-05-10.1"];
	if(version.length>0 && window.STXChart && STXChart.version.length>0){
		if(version[0]!=STXChart.version[0])
		console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
	}

	var domains=[/*<domains>*/];
	if(domains.length){
		var href=document.location.href;
		var foundOne=false;
		for(var i=0;i<domains.length;i++){
			var domain=domains[i];
			if(href.indexOf(domain)!=-1){
				foundOne=true;
			}
		}
		if(!foundOne){
			console.log("!!!! Not licensed for domain " + document.location.href);
		}
	}
})();
var v9S={'A7I':function(w7I,L7I){return w7I/L7I;}
,'U68':function(P68,Q68){return P68<=Q68;}
,'e3P':function(T3P,A3P){return T3P==A3P;}
,'T38':function(A38,w38){return A38<=w38;}
,'w0n':function(L0n,p0n){return L0n==p0n;}
,'L1T':function(p1T,o1T){return p1T/o1T;}
,'t1Q':function(q1Q,i1Q){return q1Q<i1Q;}
,'E9g':function(l9g,t9g){return l9g!==t9g;}
,'j0T':function(S8T,Y8T){return S8T*Y8T;}
,'m8u':function(z8u,u8u){return z8u>u8u;}
,'K3n':function(m3n,z3n){return m3n<z3n;}
,'B3T':function(f3T,M3T){return f3T>M3T;}
,'k0J':function(c0J,X0J){return c0J<X0J;}
,'n3T':function(x3T,K3T){return x3T*K3T;}
,'I3u':function(C3u,e3u){return C3u==e3u;}
,'U9n':function(P9n,Q9n){return P9n<Q9n;}
,'o5I':function(D5I,h5I){return D5I>=h5I;}
,'S28':function(Y28,v28,V28,y28){return Y28-v28+V28-y28;}
,'m7b':function(z7b,u7b){return z7b<u7b;}
,'f0n':function(M0n,Z0n){return M0n<Z0n;}
,'h8u':function(G8u,s8u){return G8u-s8u;}
,'h78':function(G78,s78){return G78>s78;}
,'r7Q':function(g7Q,I7Q){return g7Q/I7Q;}
,'U0q':function(P0q,Q0q){return P0q<Q0q;}
,'n2b':function(x2b,K2b){return x2b!=K2b;}
,'L4J':function(p4J,o4J){return p4J>=o4J;}
,'A28':function(w28,L28){return w28<L28;}
,'O9J':function(U9J,P9J){return U9J>P9J;}
,'O6P':function(U6P,P6P){return U6P==P6P;}
,'m9':function(z9,u9){return z9<=u9;}
,'k9P':function(c9P,X9P){return c9P<X9P;}
,'u58':function(b58,N58){return b58<N58;}
,'P4u':function(Q4u,H4u){return Q4u in H4u;}
,'H6u':function(n6u,x6u){return n6u==x6u;}
,'k0I':function(c0I,X0I){return c0I<X0I;}
,'i2q':function(a2q,k2q){return a2q===k2q;}
,'u8q':function(b8q,N8q){return b8q==N8q;}
,'p4u':function(o4u,D4u){return o4u==D4u;}
,'r5':function(g5,I5){return g5<I5;}
,'s9u':function(B9u,f9u){return B9u>f9u;}
,'d1I':function(E1I,l1I){return E1I*l1I;}
,'w8P':function(L8P,p8P){return L8P>p8P;}
,'T6T':function(A6T,w6T){return A6T==w6T;}
,'q6I':function(i6I,a6I){return i6I!=a6I;}
,'p3q':function(o3q,D3q){return o3q<D3q;}
,'u1I':function(b1I,N1I){return b1I==N1I;}
,'F4n':function(W4n,j4n){return W4n-j4n;}
,'N9I':function(F9I,W9I){return F9I===W9I;}
,'v9P':function(V9P,y9P){return V9P==y9P;}
,'z4P':function(u4P,b4P){return u4P*b4P;}
,'z5Q':function(u5Q,b5Q){return u5Q==b5Q;}
,'L3n':function(p3n,o3n){return p3n<o3n;}
,'T4I':function(A4I,w4I){return A4I/w4I;}
,'i6g':function(a6g,k6g){return a6g>=k6g;}
,'m2b':function(z2b,u2b){return z2b==u2b;}
,'i9J':function(a9J,k9J){return a9J<k9J;}
,'Q48':function(H48,n48){return H48<=n48;}
,'Y1n':function(v1n,V1n){return v1n!==V1n;}
,'h7J':function(G7J,s7J){return G7J<s7J;}
,'W7Q':function(j7Q,S4Q){return j7Q/S4Q;}
,'b1g':function(N1g,F1g){return N1g==F1g;}
,'k2n':function(c2n,X2n){return c2n<X2n;}
,'y6T':function(R6T,J6T){return R6T==J6T;}
,'O4':function(U4,P4){return U4-P4;}
,'R2I':function(J2I,d2I){return J2I>d2I;}
,'l9Q':function(t9Q,q9Q){return t9Q!=q9Q;}
,'P8n':function(Q8n,H8n){return Q8n*H8n;}
,'s1u':function(B1u,f1u){return B1u-f1u;}
,'b4u':function(N4u,F4u){return N4u!==F4u;}
,'Y3Q':function(v3Q,V3Q){return v3Q==V3Q;}
,'l6b':function(t6b,q6b){return t6b===q6b;}
,'u6u':function(b6u,N6u){return b6u==N6u;}
,'W3q':function(j3q,S6Q){return j3q-S6Q;}
,'H6Q':function(n6Q,x6Q){return n6Q-x6Q;}
,'Y3n':function(v3n,V3n){return v3n===V3n;}
,'E4T':function(l4T,t4T){return l4T<t4T;}
,'A5':function(w5,L5){return w5<L5;}
,'I4Q':function(C4Q,e4Q){return C4Q<e4Q;}
,'T4Q':function(A4Q,w4Q){return A4Q/w4Q;}
,'d6Q':function(E6Q,l6Q){return E6Q<l6Q;}
,'R7g':function(J7g,d7g){return J7g!=d7g;}
,'E8Q':function(l8Q,t8Q){return l8Q<t8Q;}
,'F4q':function(W4q,j4q){return W4q<j4q;}
,'t3Q':function(q3Q,i3Q){return q3Q-i3Q;}
,'o3':function(D3,h3){return D3==h3;}
,'Y4g':function(v4g,V4g){return v4g!==V4g;}
,'F1T':function(W1T,j1T){return W1T-j1T;}
,'Y6q':function(v6q,V6q){return v6q==V6q;}
,'s1P':function(B1P,f1P){return B1P/f1P;}
,'m2u':function(z2u,u2u){return z2u*u2u;}
,'D6q':function(h6q,G6q){return h6q==G6q;}
,'f6g':function(M6g,Z6g){return M6g!==Z6g;}
,'s1I':function(B1I,f1I){return B1I*f1I;}
,'K6q':function(m6q,z6q,u6q){return m6q-z6q+u6q;}
,'m7n':function(z7n,u7n){return z7n===u7n;}
,'H5q':function(n5q,x5q){return n5q>x5q;}
,'T4J':function(A4J,w4J){return A4J/w4J;}
,'X0g':function(r0g,g0g){return r0g-g0g;}
,'T1q':function(A1q,w1q){return A1q<w1q;}
,'b2n':function(N2n,F2n){return N2n==F2n;}
,'r9P':function(g9P,I9P){return g9P===I9P;}
,'T9n':function(A9n,w9n){return A9n==w9n;}
,'y1T':function(R1T,J1T){return R1T-J1T;}
,'N8g':function(F8g,W8g){return F8g-W8g;}
,'Z28':function(O28,U28){return O28==U28;}
,'B7n':function(f7n,M7n){return f7n/M7n;}
,'B8b':function(f8b,M8b){return f8b>=M8b;}
,'i6P':function(a6P,k6P){return a6P<k6P;}
,'X88':function(r88,g88){return r88<g88;}
,'X5g':function(r5g,g5g){return r5g===g5g;}
,'t9T':function(q9T,i9T){return q9T>i9T;}
,'b9g':function(N9g,F9g){return N9g-F9g;}
,'m5':function(z5,u5){return z5==u5;}
,'R4T':function(J4T,d4T){return J4T-d4T;}
,'S2g':function(Y2g,v2g){return Y2g<v2g;}
,'H3I':function(n3I,x3I){return n3I>x3I;}
,'L88':function(p88,o88){return p88*o88;}
,'S4q':function(Y4q,v4q){return Y4q<v4q;}
,'Z2b':function(O2b,U2b){return O2b<U2b;}
,'q0P':function(i0P,a0P){return i0P-a0P;}
,'C1g':function(e1g,T1g){return e1g>T1g;}
,'v7g':function(V7g,y7g){return V7g in y7g;}
,'G4q':function(s4q,B4q){return s4q-B4q;}
,'L5g':function(p5g,o5g){return p5g>=o5g;}
,'w6g':function(L6g,p6g){return L6g<p6g;}
,'o5u':function(D5u,h5u){return D5u<h5u;}
,'z4':function(u4,b4){return u4===b4;}
,'I4I':function(C4I,e4I){return C4I<e4I;}
,'m7g':function(z7g,u7g){return z7g==u7g;}
,'w8g':function(L8g,p8g){return L8g-p8g;}
,'i9q':function(a9q,k9q){return a9q>=k9q;}
,'h7b':function(G7b,s7b){return G7b>s7b;}
,'b7I':function(N7I,F7I){return N7I/F7I;}
,'M6q':function(Z6q,O6q){return Z6q==O6q;}
,'B0b':function(f0b,M0b,Z0b){return f0b-M0b-Z0b;}
,'l2q':function(t2q,q2q){return t2q!==q2q;}
,'O2q':function(U2q,P2q){return U2q===P2q;}
,'h1g':function(G1g,s1g){return G1g<s1g;}
,'r4u':function(g4u,I4u){return g4u*I4u;}
,'v8T':function(V8T,y8T){return V8T/y8T;}
,'e18':function(T18,A18){return T18<=A18;}
,'o7u':function(D7u,h7u){return D7u-h7u;}
,'w6P':function(L6P,p6P){return L6P==p6P;}
,'M1n':function(Z1n,O1n){return Z1n==O1n;}
,'o6g':function(D6g,h6g){return D6g==h6g;}
,'e6b':function(T6b,A6b){return T6b<=A6b;}
,'k6I':function(c6I,X6I){return c6I-X6I;}
,'p2b':function(o2b,D2b){return o2b==D2b;}
,'g8P':function(I8P,C8P){return I8P!=C8P;}
,'o3P':function(D3P,h3P){return D3P-h3P;}
,'I1u':function(C1u,e1u){return C1u<e1u;}
,'f4P':function(M4P,Z4P){return M4P!=Z4P;}
,'d58':function(E58,l58){return E58*l58;}
,'M9q':function(Z9q,O9q){return Z9q/O9q;}
,'x48':function(K48,m48){return K48-m48;}
,'V3':function(y3,R3){return y3/R3;}
,'F88':function(W88,j88){return W88<j88;}
,'s88':function(B88,f88){return B88*f88;}
,'f6P':function(M6P,Z6P){return M6P<Z6P;}
,'i3P':function(a3P,k3P){return a3P>=k3P;}
,'O5u':function(U5u,P5u){return U5u==P5u;}
,'A9g':function(w9g,L9g){return w9g!=L9g;}
,'A0J':function(w0J,L0J){return w0J-L0J;}
,'P78':function(Q78,H78){return Q78<=H78;}
,'m78':function(z78,u78,b78,N78){return z78-u78+b78-N78;}
,'k8u':function(c8u,X8u){return c8u-X8u;}
,'w9b':function(L9b,p9b){return L9b==p9b;}
,'Y6n':function(v6n,V6n){return v6n-V6n;}
,'P8T':function(Q8T,H8T){return Q8T===H8T;}
,'b7J':function(N7J,F7J){return N7J<F7J;}
,'U6q':function(P6q,Q6q){return P6q*Q6q;}
,'P9':function(Q9,H9){return Q9<H9;}
,'q1':function(i1,a1){return i1<a1;}
,'T1P':function(A1P,w1P){return A1P<=w1P;}
,'F6n':function(W6n,j6n){return W6n-j6n;}
,'j4P':function(S9P,Y9P){return S9P>=Y9P;}
,'Q0I':function(H0I,n0I){return H0I>n0I;}
,'m7J':function(z7J,u7J){return z7J<u7J;}
,'v2Q':function(V2Q,y2Q){return V2Q==y2Q;}
,'Y5q':function(v5q,V5q){return v5q>V5q;}
,'A8n':function(w8n,L8n){return w8n>L8n;}
,'n8b':function(x8b,K8b){return x8b-K8b;}
,'S5u':function(Y5u,v5u){return Y5u-v5u;}
,'v5':function(V5,y5){return V5>y5;}
,'b2u':function(N2u,F2u){return N2u>F2u;}
,'O5T':function(U5T,P5T){return U5T<=P5T;}
,'k8n':function(c8n,X8n){return c8n===X8n;}
,'I9n':function(C9n,e9n){return C9n<=e9n;}
,'D68':function(h68,G68){return h68-G68;}
,'K6':function(m6,z6){return m6>z6;}
,'J3':function(d3,E3){return d3==E3;}
,'d3b':function(E3b,l3b){return E3b<l3b;}
,'c6P':function(X6P,r6P){return X6P>r6P;}
,'l2':function(q2,i2){return q2==i2;}
,'r9g':function(g9g,I9g){return g9g!==I9g;}
,'x0T':function(K0T,m0T){return K0T<=m0T;}
,'R7b':function(J7b,d7b){return J7b/d7b;}
,'p8n':function(o8n,D8n){return o8n>D8n;}
,'U1u':function(P1u,Q1u){return P1u/Q1u;}
,'M0g':function(Z0g,O0g){return Z0g==O0g;}
,'z5I':function(u5I,b5I){return u5I<b5I;}
,'j0u':function(S8u,Y8u){return S8u*Y8u;}
,'A7g':function(w7g,L7g){return w7g<L7g;}
,'V9b':function(y9b,R9b){return y9b==R9b;}
,'y3I':function(R3I,J3I){return R3I/J3I;}
,'o9q':function(D9q,h9q){return D9q<h9q;}
,'J5I':function(d5I,E5I){return d5I!==E5I;}
,'R2':function(J2,E2){return J2*E2;}
,'V5I':function(y5I,R5I){return y5I===R5I;}
,'U0P':function(P0P,Q0P){return P0P/Q0P;}
,'u68':function(b68,N68){return b68==N68;}
,'p2':function(o2,D2){return o2>D2;}
,'E8T':function(l8T,t8T){return l8T<t8T;}
,'Y0':function(v0,V0){return v0<V0;}
,'b8n':function(N8n,F8n){return N8n*F8n;}
,'Q0u':function(H0u,n0u){return H0u==n0u;}
,'k3g':function(c3g,X3g){return c3g==X3g;}
,'W2I':function(j2I,S3I){return j2I==S3I;}
,'E7I':function(l7I,t7I){return l7I/t7I;}
,'u9q':function(b9q,N9q){return b9q<N9q;}
,'X2P':function(r2P,g2P){return r2P<=g2P;}
,'z6P':function(u6P,b6P){return u6P===b6P;}
,'r2I':function(g2I,I2I){return g2I==I2I;}
,'a4n':function(k4n,c4n){return k4n<c4n;}
,'E2b':function(l2b,t2b){return l2b>t2b;}
,'f3':function(M3,Z3){return M3>=Z3;}
,'g08':function(I08,C08){return I08/C08;}
,'T68':function(A68,w68){return A68<w68;}
,'L1b':function(p1b,o1b){return p1b<o1b;}
,'W3Q':function(j3Q,S6T){return j3Q<S6T;}
,'E8b':function(l8b,t8b){return l8b==t8b;}
,'B8n':function(f8n,M8n){return f8n<M8n;}
,'b8I':function(N8I,F8I){return N8I>F8I;}
,'Y4J':function(v4J,V4J){return v4J>=V4J;}
,'K3u':function(m3u,z3u){return m3u!==z3u;}
,'c4P':function(X4P,r4P){return X4P>r4P;}
,'g0q':function(I0q,C0q){return I0q*C0q;}
,'J9I':function(d9I,E9I){return d9I===E9I;}
,'O9I':function(U9I,P9I){return U9I-P9I;}
,'d9T':function(E9T,l9T){return E9T<l9T;}
,'u3u':function(b3u,N3u){return b3u>N3u;}
,'W1q':function(j1q,S5q){return j1q===S5q;}
,'G5T':function(s5T,B5T){return s5T==B5T;}
,'G9b':function(s9b,B9b){return s9b-B9b;}
,'G8P':function(s8P,B8P){return s8P*B8P;}
,'f6I':function(M6I,Z6I){return M6I<=Z6I;}
,'X3I':function(r3I,g3I){return r3I===g3I;}
,'W48':function(j48,S98){return j48<S98;}
,'X3b':function(r3b,g3b){return r3b==g3b;}
,'c6g':function(X6g,r6g){return X6g<r6g;}
,'b08':function(N08,F08){return N08<=F08;}
,'n78':function(x78,K78){return x78-K78;}
,'H7P':function(n7P,x7P){return n7P*x7P;}
,'i5b':function(a5b,k5b){return a5b/k5b;}
,'A6I':function(w6I,L6I){return w6I*L6I;}
,'j4g':function(S9g,Y9g){return S9g/Y9g;}
,'n7I':function(x7I,K7I){return x7I==K7I;}
,'q8n':function(i8n,a8n){return i8n===a8n;}
,'q2I':function(i2I,a2I){return i2I>a2I;}
,'V5J':0,'t4b':function(q4b,i4b){return q4b===i4b;}
,'y9T':function(R9T,J9T){return R9T>J9T;}
,'I8J':function(C8J,e8J){return C8J<e8J;}
,'M2P':function(Z2P,O2P){return Z2P!=O2P;}
,'L1q':function(p1q,o1q){return p1q===o1q;}
,'F9n':function(W9n,j9n){return W9n/j9n;}
,'N5I':function(F5I,W5I){return F5I<W5I;}
,'W08':function(j08,S88){return j08&S88;}
,'a5q':function(k5q,c5q){return k5q<c5q;}
,'x0Q':function(K0Q,m0Q){return K0Q===m0Q;}
,'R0Q':function(J0Q,d0Q){return J0Q-d0Q;}
,'Y7Q':function(v7Q,V7Q,y7Q){return v7Q-V7Q+y7Q;}
,'h8T':function(G8T,s8T){return G8T>s8T;}
,'L1u':function(p1u,o1u){return p1u*o1u;}
,'E0':function(l0,q0){return l0/q0;}
,'Q6g':function(H6g,n6g){return H6g-n6g;}
,'M9n':function(Z9n,O9n){return Z9n>O9n;}
,'H2P':function(n2P,x2P){return n2P>x2P;}
,'J8q':function(d8q,E8q){return d8q*E8q;}
,'z6I':function(u6I,b6I){return u6I!=b6I;}
,'A8Q':function(w8Q,L8Q){return w8Q<L8Q;}
,'T2':function(A2,L2){return A2==L2;}
,'R3g':function(J3g,d3g){return J3g>d3g;}
,'S9b':function(Y9b,v9b){return Y9b<=v9b;}
,'D6Q':function(h6Q,G6Q){return h6Q==G6Q;}
,'v2I':function(V2I,y2I){return V2I===y2I;}
,'u1T':function(b1T,N1T){return b1T>=N1T;}
,'r2b':function(g2b,I2b){return g2b-I2b;}
,'F4J':function(W4J,j4J){return W4J===j4J;}
,'l4P':function(t4P,q4P){return t4P===q4P;}
,'t4J':function(q4J,i4J){return q4J/i4J;}
,'B2n':function(f2n,M2n){return f2n<M2n;}
,'q1P':function(i1P,a1P){return i1P-a1P;}
,'G7T':function(s7T,B7T){return s7T==B7T;}
,'r4T':function(g4T,I4T){return g4T<I4T;}
,'z3':function(u3,b3){return u3==b3;}
,'k3q':function(c3q,X3q){return c3q===X3q;}
,'O0n':function(U0n,P0n){return U0n===P0n;}
,'o5T':function(D5T,h5T){return D5T<h5T;}
,'e7u':function(T7u,A7u){return T7u>A7u;}
,'M1T':function(Z1T,O1T){return Z1T-O1T;}
,'a2P':function(k2P,c2P){return k2P&c2P;}
,'J8g':function(d8g,E8g){return d8g!=E8g;}
,'a98':function(k98,c98){return k98<c98;}
,'N4g':function(F4g,W4g){return F4g<W4g;}
,'l0n':function(t0n,q0n){return t0n===q0n;}
,'A9':function(w9,L9){return w9==L9;}
,'z9b':function(u9b,b9b){return u9b==b9b;}
,'o6b':function(D6b,h6b){return D6b<=h6b;}
,'y6u':function(R6u,J6u){return R6u==J6u;}
,'F4Q':function(W4Q,j4Q){return W4Q!==j4Q;}
,'S9J':function(Y9J,v9J){return Y9J<v9J;}
,'A3q':function(w3q,L3q){return w3q===L3q;}
,'K4g':function(m4g,z4g,u4g,b4g){return m4g-z4g+u4g-b4g;}
,'W7n':function(j7n,S4n){return j7n<S4n;}
,'S8q':function(Y8q,v8q){return Y8q==v8q;}
,'g8':function(I8,C8){return I8>C8;}
,'Y6':function(v6,V6){return v6==V6;}
,'G0n':function(s0n,B0n){return s0n-B0n;}
,'U6n':function(P6n,Q6n){return P6n-Q6n;}
,'C7n':function(e7n,T7n){return e7n/T7n;}
,'E1P':function(l1P,t1P){return l1P!=t1P;}
,'I1':function(C1,e1){return C1===e1;}
,'x4q':function(K4q,m4q){return K4q>m4q;}
,'P4T':function(Q4T,H4T){return Q4T==H4T;}
,'g0':function(I0,C0){return I0/C0;}
,'o6J':function(D6J,h6J){return D6J<h6J;}
,'X8J':function(r8J,g8J){return r8J>=g8J;}
,'V6P':function(y6P,R6P){return y6P-R6P;}
,'I6q':function(C6q,e6q){return C6q<e6q;}
,'z2q':function(u2q,b2q){return u2q>=b2q;}
,'B8I':function(f8I,M8I){return f8I*M8I;}
,'I98':function(C98,e98){return C98*e98;}
,'Q8g':function(H8g,n8g){return H8g-n8g;}
,'J4q':function(d4q,E4q){return d4q<E4q;}
,'M1u':function(Z1u,O1u){return Z1u<O1u;}
,'e2q':function(T2q,A2q){return T2q/A2q;}
,'y6Q':function(R6Q,J6Q){return R6Q<=J6Q;}
,'x5b':function(K5b,m5b){return K5b<m5b;}
,'y3n':function(R3n,J3n){return R3n==J3n;}
,'t0g':function(q0g,i0g){return q0g-i0g;}
,'H1I':function(n1I,x1I){return n1I<x1I;}
,'M6u':function(Z6u,O6u){return Z6u<O6u;}
,'W4u':function(j4u,S9u){return j4u*S9u;}
,'p8Q':function(o8Q,D8Q){return o8Q===D8Q;}
,'V7T':function(y7T,R7T){return y7T-R7T;}
,'z48':function(u48,b48,N48,F48){return u48-b48+N48-F48;}
,'L6T':function(p6T,o6T){return p6T<o6T;}
,'C2b':function(e2b,T2b){return e2b-T2b;}
,'S7T':function(Y7T,v7T){return Y7T-v7T;}
,'W9':function(j9,S0){return j9==S0;}
,'V9q':function(y9q,R9q){return y9q<R9q;}
,'M7P':function(Z7P,O7P){return Z7P>=O7P;}
,'Y4Q':function(v4Q,V4Q){return v4Q-V4Q;}
,'S18':function(Y18,v18){return Y18>v18;}
,'Z2n':function(O2n,U2n){return O2n*U2n;}
,'v8I':function(V8I,y8I){return V8I===y8I;}
,'V18':function(y18,R18){return y18-R18;}
,'c48':function(X48,r48){return X48<r48;}
,'e08':function(T08,A08){return T08-A08;}
,'X1I':function(r1I,g1I){return r1I<g1I;}
,'G8g':function(s8g,B8g){return s8g-B8g;}
,'E0P':function(l0P,t0P){return l0P>=t0P;}
,'w5n':function(L5n,p5n){return L5n-p5n;}
,'O8P':function(U8P,P8P){return U8P<P8P;}
,'s5q':function(B5q,f5q){return B5q/f5q;}
,'l8':function(t8,q8){return t8<q8;}
,'F':function(W,S6){return W==S6;}
,'Z7J':function(O7J,U7J){return O7J!==U7J;}
,'L68':function(p68,o68){return p68<o68;}
,'u1u':function(b1u,N1u){return b1u-N1u;}
,'o7T':function(D7T,h7T){return D7T-h7T;}
,'a4J':function(k4J,c4J){return k4J>=c4J;}
,'o0n':function(D0n,h0n){return D0n-h0n;}
,'P2u':function(Q2u,H2u){return Q2u==H2u;}
,'N5Q':function(F5Q,W5Q){return F5Q==W5Q;}
,'b1q':function(N1q,F1q){return N1q*F1q;}
,'L98':function(p98,o98){return p98/o98;}
,'W2u':function(j2u,S3u){return j2u==S3u;}
,'g9J':function(I9J,C9J){return I9J<=C9J;}
,'t98':function(q98,i98){return q98<i98;}
,'T7P':function(A7P,w7P){return A7P===w7P;}
,'u3Q':function(b3Q,N3Q,F3Q){return b3Q-N3Q+F3Q;}
,'Z1g':function(O1g,U1g){return O1g in U1g;}
,'d6':function(E6,l6){return E6==l6;}
,'H3u':function(n3u,x3u){return n3u==x3u;}
,'x6b':function(K6b,m6b){return K6b<=m6b;}
,'D1':function(h1,G1){return h1-G1;}
,'K9u':function(m9u,z9u){return m9u==z9u;}
,'L1Q':function(p1Q,o1Q){return p1Q-o1Q;}
,'u5g':function(b5g,N5g){return b5g!=N5g;}
,'C0b':function(e0b,T0b){return e0b!==T0b;}
,'c8':function(X8,r8){return X8*r8;}
,'c9Q':function(X9Q,r9Q){return X9Q===r9Q;}
,'X4I':function(r4I,g4I){return r4I<g4I;}
,'l9n':function(t9n,q9n){return t9n-q9n;}
,'Y68':function(v68,V68){return v68/V68;}
,'d2P':function(E2P,l2P){return E2P&l2P;}
,'A7n':function(w7n,L7n){return w7n-L7n;}
,'u2':function(b2,N2){return b2*N2;}
,'q8Q':function(i8Q,a8Q){return i8Q===a8Q;}
,'p9P':function(o9P,D9P,h9P){return o9P-D9P+h9P;}
,'j1':function(S5,Y5){return S5<=Y5;}
,'i0':function(a0,k0){return a0/k0;}
,'T6Q':function(A6Q,w6Q){return A6Q-w6Q;}
,'c5Q':function(X5Q,r5Q){return X5Q-r5Q;}
,'t4Q':function(q4Q,i4Q){return q4Q/i4Q;}
,'f2g':function(M2g,Z2g){return M2g==Z2g;}
,'N3':function(F3,W3){return F3==W3;}
,'S4P':function(Y4P,v4P){return Y4P==v4P;}
,'g8q':function(I8q,C8q){return I8q>C8q;}
,'Q5b':function(H5b,n5b){return H5b-n5b;}
,'x2g':function(K2g,m2g){return K2g>m2g;}
,'F4b':function(W4b,j4b){return W4b==j4b;}
,'n8I':function(x8I,K8I){return x8I>K8I;}
,'k0Q':function(c0Q,X0Q,r0Q,g0Q,I0Q){return c0Q/X0Q/r0Q/g0Q/I0Q;}
,'D0g':function(h0g,G0g){return h0g==G0g;}
,'Z8u':function(O8u,U8u){return O8u===U8u;}
,'s7q':function(B7q,f7q){return B7q-f7q;}
,'r8T':function(g8T,I8T){return g8T>I8T;}
,'D7P':function(h7P,G7P){return h7P-G7P;}
,'v0P':function(V0P,y0P){return V0P-y0P;}
,'V5u':function(y5u,R5u){return y5u/R5u;}
,'Y2':function(v2,V2){return v2<=V2;}
,'a3T':function(k3T,c3T){return k3T*c3T;}
,'i2g':function(a2g,k2g){return a2g<k2g;}
,'g7T':function(I7T,C7T){return I7T==C7T;}
,'u6':function(b6,N6){return b6>=N6;}
,'h8b':function(G8b,s8b){return G8b<=s8b;}
,'Y98':function(v98,V98){return v98==V98;}
,'M5q':function(Z5q,O5q){return Z5q/O5q;}
,'n4n':function(x4n,K4n,m4n,z4n){return x4n-K4n+m4n-z4n;}
,'V0q':function(y0q,R0q){return y0q<R0q;}
,'T5g':function(A5g,w5g){return A5g===w5g;}
,'F1J':3,'X7P':function(r7P,g7P){return r7P===g7P;}
,'a6n':function(k6n,c6n){return k6n/c6n;}
,'T4g':function(A4g,w4g){return A4g>w4g;}
,'k8Q':function(c8Q,X8Q){return c8Q<X8Q;}
,'n7Q':function(x7Q,K7Q){return x7Q/K7Q;}
,'W7b':function(j7b,S4b){return j7b<=S4b;}
,'I4g':function(C4g,e4g){return C4g*e4g;}
,'k7J':function(c7J,X7J){return c7J===X7J;}
,'k0b':function(c0b,X0b){return c0b-X0b;}
,'Z2':function(O2,U2){return O2==U2;}
,'N8P':function(F8P,W8P){return F8P>=W8P;}
,'V4P':function(y4P,R4P){return y4P==R4P;}
,'n2T':function(x2T,K2T){return x2T*K2T;}
,'U3Q':function(P3Q,Q3Q){return P3Q/Q3Q;}
,'J9q':function(d9q,E9q){return d9q>=E9q;}
,'J5Q':function(d5Q,E5Q){return d5Q!==E5Q;}
,'A2u':function(w2u,L2u){return w2u==L2u;}
,'z8g':function(u8g,b8g){return u8g<b8g;}
,'Q0Q':function(H0Q,n0Q){return H0Q<n0Q;}
,'X1u':function(r1u,g1u){return r1u>g1u;}
,'p9g':function(o9g,D9g){return o9g<=D9g;}
,'k4':function(c4,X4){return c4>X4;}
,'b7b':function(N7b,F7b){return N7b>F7b;}
,'v3g':function(V3g,y3g){return V3g==y3g;}
,'s4n':function(B4n,f4n,M4n){return B4n-f4n+M4n;}
,'Q9I':function(H9I,n9I){return H9I/n9I;}
,'X1Q':function(r1Q,g1Q){return r1Q<g1Q;}
,'N4P':function(F4P,W4P){return F4P==W4P;}
,'G5I':function(s5I,B5I){return s5I-B5I;}
,'M5g':function(Z5g,O5g){return Z5g<=O5g;}
,'g8g':function(I8g,C8g){return I8g>C8g;}
,'x3':function(K3,m3){return K3==m3;}
,'V9Q':function(y9Q,R9Q){return y9Q==R9Q;}
,'B7Q':function(f7Q,M7Q){return f7Q==M7Q;}
,'N6I':function(F6I,W6I){return F6I/W6I;}
,'Q5I':function(H5I,n5I){return H5I>=n5I;}
,'J5J':5,'l0q':function(t0q,q0q){return t0q*q0q;}
,'j9Q':function(S0Q,Y0Q){return S0Q-Y0Q;}
,'l3P':function(t3P,q3P){return t3P>q3P;}
,'z4q':function(u4q,b4q,N4q){return u4q-b4q-N4q;}
,'C3g':function(e3g,T3g){return e3g|T3g;}
,'t3T':function(q3T,i3T){return q3T<i3T;}
,'Z3q':function(O3q,U3q){return O3q===U3q;}
,'w6J':function(L6J,p6J){return L6J==p6J;}
,'u0q':function(b0q,N0q){return b0q===N0q;}
,'K1Q':function(m1Q,z1Q){return m1Q/z1Q;}
,'d68':function(E68,l68){return E68<l68;}
,'d1u':function(E1u,l1u){return E1u==l1u;}
,'O3P':function(U3P,P3P){return U3P>=P3P;}
,'n08':function(x08,K08){return x08/K08;}
,'H0P':function(n0P,x0P){return n0P==x0P;}
,'C7b':function(e7b,T7b){return e7b<T7b;}
,'X9u':function(r9u,g9u){return r9u==g9u;}
,'I4b':function(C4b,e4b){return C4b>e4b;}
,'m0J':function(z0J,u0J){return z0J>u0J;}
,'H1Q':function(n1Q,x1Q){return n1Q>x1Q;}
,'w08':function(L08,p08){return L08-p08;}
,'V5P':function(y5P,R5P){return y5P*R5P;}
,'n8Q':function(x8Q,K8Q){return x8Q===K8Q;}
,'K6u':function(m6u,z6u){return m6u-z6u;}
,'u3n':function(b3n,N3n){return b3n>N3n;}
,'g5u':function(I5u,C5u){return I5u==C5u;}
,'x6J':function(K6J,m6J){return K6J!=m6J;}
,'I1q':function(C1q,e1q){return C1q-e1q;}
,'I2':function(C2,e2){return C2>e2;}
,'x9P':function(K9P,m9P){return K9P-m9P;}
,'l8P':function(t8P,q8P){return t8P&q8P;}
,'K3b':function(m3b,z3b){return m3b<z3b;}
,'Z8n':function(O8n,U8n){return O8n<U8n;}
,'u7q':function(b7q,N7q){return b7q<N7q;}
,'l2g':function(t2g,q2g){return t2g<q2g;}
,'O7':function(U7,P7){return U7*P7;}
,'R8T':function(J8T,d8T){return J8T-d8T;}
,'D6T':function(h6T,G6T){return h6T===G6T;}
,'s6':function(B6,f6){return B6==f6;}
,'k1P':function(c1P,X1P){return c1P/X1P;}
,'E6I':function(l6I,t6I){return l6I-t6I;}
,'o9I':function(D9I,h9I){return D9I>=h9I;}
,'S0T':function(Y0T,v0T){return Y0T==v0T;}
,'v1g':function(V1g,y1g){return V1g-y1g;}
,'c2g':function(X2g,r2g){return X2g>=r2g;}
,'s38':function(B38,f38){return B38!==f38;}
,'P8Q':function(Q8Q,H8Q){return Q8Q===H8Q;}
,'D9n':function(h9n,G9n){return h9n/G9n;}
,'T3I':function(A3I,w3I){return A3I==w3I;}
,'H6n':function(n6n,x6n){return n6n!=x6n;}
,'K9n':function(m9n,z9n){return m9n>z9n;}
,'r6I':function(g6I,I6I){return g6I/I6I;}
,'y1b':function(R1b,J1b){return R1b!=J1b;}
,'M1b':function(Z1b,O1b){return Z1b*O1b;}
,'T1T':function(A1T,w1T){return A1T-w1T;}
,'I3Q':function(C3Q,e3Q){return C3Q/e3Q;}
,'q2n':function(i2n,a2n){return i2n===a2n;}
,'K8q':function(m8q,z8q){return m8q==z8q;}
,'T3u':function(A3u,w3u){return A3u==w3u;}
,'J6g':function(d6g,E6g){return d6g>=E6g;}
,'F7q':function(W7q,j7q){return W7q/j7q;}
,'C8n':function(e8n,T8n){return e8n<T8n;}
,'E8u':function(l8u,t8u){return l8u-t8u;}
,'K5g':function(m5g,z5g){return m5g<z5g;}
,'F9u':function(W9u,j9u){return W9u==j9u;}
,'l6P':function(t6P,q6P){return t6P*q6P;}
,'s3n':function(B3n,f3n){return B3n-f3n;}
,'W1g':function(j1g,S5g){return j1g<S5g;}
,'v9':function(V9,y9){return V9===y9;}
,'Z4n':function(O4n,U4n){return O4n==U4n;}
,'E7g':function(l7g,t7g){return l7g<t7g;}
,'A7J':function(w7J,L7J){return w7J<L7J;}
,'j0I':function(S8I,Y8I){return S8I==Y8I;}
,'H5g':function(n5g,x5g){return n5g!=x5g;}
,'C0J':function(e0J,T0J){return e0J==T0J;}
,'J9n':function(d9n,E9n){return d9n*E9n;}
,'I3b':function(C3b,e3b){return C3b>e3b;}
,'h7g':function(G7g,s7g){return G7g==s7g;}
,'M1q':function(Z1q,O1q){return Z1q<O1q;}
,'L6':function(p6,o6){return p6<o6;}
,'y1n':function(R1n,J1n){return R1n>J1n;}
,'p7Q':function(o7Q,D7Q){return o7Q/D7Q;}
,'l9I':function(t9I,q9I){return t9I!==q9I;}
,'w7T':function(L7T,p7T){return L7T<p7T;}
,'k7g':function(c7g,X7g){return c7g==X7g;}
,'U98':function(P98,Q98){return P98==Q98;}
,'a4Q':function(k4Q,c4Q){return k4Q*c4Q;}
,'n9g':function(x9g,K9g){return x9g!=K9g;}
,'W7J':function(j7J,S4J){return j7J===S4J;}
,'E3g':function(l3g,t3g){return l3g<t3g;}
,'p0b':function(o0b,D0b){return o0b===D0b;}
,'k7b':function(c7b,X7b){return c7b>X7b;}
,'j5b':function(S2b,Y2b){return S2b==Y2b;}
,'J9b':function(d9b,E9b){return d9b<E9b;}
,'a1T':function(k1T,c1T){return k1T/c1T;}
,'G9I':function(s9I,B9I){return s9I==B9I;}
,'e8q':function(T8q,A8q){return T8q-A8q;}
,'e4P':function(T4P,A4P){return T4P>A4P;}
,'I38':function(C38,e38){return C38-e38;}
,'n8u':function(x8u,K8u){return x8u!==K8u;}
,'Z2I':function(O2I,U2I){return O2I<U2I;}
,'n0J':function(x0J,K0J){return x0J<=K0J;}
,'a3u':function(k3u,c3u){return k3u>=c3u;}
,'s4J':function(B4J,f4J){return B4J>=f4J;}
,'T1I':function(A1I,w1I){return A1I<w1I;}
,'s2P':function(B2P,f2P){return B2P&f2P;}
,'B78':function(f78,M78){return f78-M78;}
,'d9u':function(E9u,l9u){return E9u in l9u;}
,'Q0n':function(H0n,n0n){return H0n-n0n;}
,'A78':function(w78,L78){return w78<L78;}
,'K7P':function(m7P,z7P){return m7P-z7P;}
,'T58':function(A58,w58){return A58>w58;}
,'C4T':function(e4T,T4T){return e4T-T4T;}
,'w2g':function(L2g,p2g){return L2g<=p2g;}
,'f5I':function(M5I,Z5I){return M5I!==Z5I;}
,'s6n':function(B6n,f6n){return B6n/f6n;}
,'u1P':function(b1P,N1P){return b1P<N1P;}
,'F3b':function(W3b,j3b,S6n){return W3b-j3b-S6n;}
,'n7g':function(x7g,K7g){return x7g==K7g;}
,'R8Q':function(J8Q,d8Q){return J8Q!==d8Q;}
,'D1b':function(h1b,G1b){return h1b/G1b;}
,'P8b':function(Q8b,H8b){return Q8b>H8b;}
,'A8I':function(w8I,L8I){return w8I==L8I;}
,'m9g':function(z9g,u9g){return z9g*u9g;}
,'q9P':function(i9P,a9P){return i9P-a9P;}
,'W8b':function(j8b,S1b){return j8b===S1b;}
,'i7':function(a7,k7){return a7>=k7;}
,'V6b':function(y6b,R6b){return y6b*R6b;}
,'p7g':function(o7g,D7g){return o7g-D7g;}
,'c9n':function(X9n,r9n,g9n){return X9n*r9n/g9n;}
,'m8':function(z8,u8){return z8-u8;}
,'a6Q':function(k6Q,c6Q){return k6Q>c6Q;}
,'l3':function(t3,q3){return t3==q3;}
,'c9b':function(X9b,r9b){return X9b==r9b;}
,'H68':function(n68,x68){return n68==x68;}
,'R8I':function(J8I,d8I){return J8I-d8I;}
,'P2b':function(Q2b,H2b){return Q2b<H2b;}
,'a1I':function(k1I,c1I){return k1I>c1I;}
,'u3I':function(b3I,N3I){return b3I-N3I;}
,'o2q':function(D2q,h2q){return D2q<h2q;}
,'L6u':function(p6u,o6u){return p6u==o6u;}
,'o2g':function(D2g,h2g){return D2g==h2g;}
,'s1T':function(B1T,f1T){return B1T/f1T;}
,'W8u':function(j8u,S1u){return j8u-S1u;}
,'W8n':function(j8n,S1n){return j8n!==S1n;}
,'L4b':function(p4b,o4b){return p4b<o4b;}
,'S3P':function(Y3P,v3P){return Y3P<v3P;}
,'r9':function(g9,I9){return g9==I9;}
,'b2Q':function(N2Q,F2Q){return N2Q==F2Q;}
,'D38':function(h38,G38){return h38>G38;}
,'U9q':function(P9q,Q9q){return P9q/Q9q;}
,'I1b':function(C1b,e1b){return C1b/e1b;}
,'T2P':function(A2P,w2P){return A2P<=w2P;}
,'h2Q':function(G2Q,s2Q){return G2Q==s2Q;}
,'m18':function(z18,u18){return z18/u18;}
,'y98':function(R98,J98){return R98>J98;}
,'b7Q':function(N7Q,F7Q){return N7Q/F7Q;}
,'C0I':function(e0I,T0I){return e0I-T0I;}
,'E3q':function(l3q,t3q){return l3q-t3q;}
,'D0q':function(h0q,G0q){return h0q===G0q;}
,'g6g':function(I6g,C6g){return I6g>=C6g;}
,'g7u':function(I7u,C7u){return I7u<C7u;}
,'b7n':function(N7n,F7n){return N7n>=F7n;}
,'t3b':function(q3b,i3b){return q3b>i3b;}
,'b5P':function(N5P,F5P){return N5P<=F5P;}
,'U4J':function(P4J,Q4J){return P4J===Q4J;}
,'H9T':function(n9T,x9T){return n9T<x9T;}
,'r7J':function(g7J,I7J){return g7J==I7J;}
,'X7n':function(r7n,g7n,I7n){return r7n-g7n-I7n;}
,'H0q':function(n0q,x0q){return n0q/x0q;}
,'f5n':function(M5n,Z5n){return M5n===Z5n;}
,'P2Q':function(Q2Q,H2Q){return Q2Q>H2Q;}
,'s5g':function(B5g,f5g){return B5g==f5g;}
,'M4b':function(Z4b,O4b){return Z4b<O4b;}
,'n28':function(x28,K28){return x28!=K28;}
,'y1u':function(R1u,J1u){return R1u==J1u;}
,'G0Q':function(s0Q,B0Q){return s0Q/B0Q;}
,'X3Q':function(r3Q,g3Q){return r3Q>g3Q;}
,'y4J':function(R4J,J4J){return R4J/J4J;}
,'M3Q':function(Z3Q,O3Q){return Z3Q!==O3Q;}
,'c6J':function(X6J,r6J){return X6J>r6J;}
,'U7P':function(P7P,Q7P){return P7P/Q7P;}
,'K4Q':function(m4Q,z4Q){return m4Q==z4Q;}
,'R3q':function(J3q,d3q){return J3q==d3q;}
,'q1g':function(i1g,a1g){return i1g<a1g;}
,'v3q':function(V3q,y3q){return V3q<y3q;}
,'q8T':function(i8T,a8T){return i8T<a8T;}
,'A0I':function(w0I,L0I){return w0I%L0I;}
,'p7n':function(o7n,D7n){return o7n/D7n;}
,'V2q':function(y2q,R2q){return y2q/R2q;}
,'P3q':function(Q3q,H3q){return Q3q===H3q;}
,'k2b':function(c2b,X2b){return c2b==X2b;}
,'x9b':function(K9b,m9b){return K9b==m9b;}
,'D1q':function(h1q,G1q){return h1q==G1q;}
,'l5I':function(t5I,q5I){return t5I!==q5I;}
,'J7T':function(d7T,E7T){return d7T>E7T;}
,'D4g':function(h4g,G4g){return h4g-G4g;}
,'R1P':function(J1P,d1P){return J1P-d1P;}
,'z2g':function(u2g,b2g){return u2g<b2g;}
,'C2u':function(e2u,T2u){return e2u==T2u;}
,'b7g':function(N7g,F7g){return N7g!==F7g;}
,'X98':function(r98,g98){return r98>g98;}
,'z0u':function(u0u,b0u){return u0u<=b0u;}
,'s6Q':function(B6Q,f6Q){return B6Q===f6Q;}
,'c9q':function(X9q,r9q){return X9q<r9q;}
,'D1Q':function(h1Q,G1Q){return h1Q-G1Q;}
,'N2g':function(F2g,W2g){return F2g==W2g;}
,'Y1T':function(v1T,V1T){return v1T<V1T;}
,'m2I':function(z2I,u2I){return z2I===u2I;}
,'H3Q':function(n3Q,x3Q){return n3Q>=x3Q;}
,'E2n':function(l2n,t2n){return l2n===t2n;}
,'F78':function(W78,j78){return W78<=j78;}
,'i8P':function(a8P,k8P){return a8P>=k8P;}
,'p3T':function(o3T,D3T){return o3T>D3T;}
,'Q3P':function(H3P,n3P){return H3P-n3P;}
,'H9q':function(n9q,x9q){return n9q-x9q;}
,'R2Q':function(J2Q,d2Q){return J2Q==d2Q;}
,'z9J':function(u9J,b9J){return u9J>b9J;}
,'P8I':function(Q8I,H8I){return Q8I-H8I;}
,'n3q':function(x3q,K3q){return x3q<K3q;}
,'E5':function(l5,t5){return l5>t5;}
,'p0J':function(o0J,D0J){return o0J>D0J;}
,'o4P':function(D4P,h4P){return D4P>h4P;}
,'o6P':function(D6P,h6P){return D6P<h6P;}
,'n8T':function(x8T,K8T){return x8T/K8T;}
,'F9q':function(W9q,j9q){return W9q==j9q;}
,'d4n':function(E4n,l4n){return E4n/l4n;}
,'n9':function(x9,K9){return x9>K9;}
,'m3T':function(z3T,u3T){return z3T-u3T;}
,'L1P':function(p1P,o1P){return p1P/o1P;}
,'a4g':function(k4g,c4g){return k4g-c4g;}
,'P18':function(Q18,H18){return Q18<=H18;}
,'J7P':function(d7P,E7P,l7P){return d7P*E7P/l7P;}
,'i7T':function(a7T,k7T){return a7T-k7T;}
,'E28':function(l28,t28){return l28/t28;}
,'B8Q':function(f8Q,M8Q){return f8Q===M8Q;}
,'H4Q':function(n4Q,x4Q){return n4Q!=x4Q;}
,'V7':function(y7,R7){return y7/R7;}
,'n2n':function(x2n,K2n){return x2n*K2n;}
,'e0u':function(T0u,A0u){return T0u!=A0u;}
,'G5Q':function(s5Q,B5Q){return s5Q-B5Q;}
,'a1n':function(k1n,c1n){return k1n<c1n;}
,'k8T':function(c8T,X8T){return c8T<X8T;}
,'B7b':function(f7b,M7b){return f7b/M7b;}
,'G3P':function(s3P,B3P){return s3P*B3P;}
,'d3n':function(E3n,l3n){return E3n==l3n;}
,'Z7n':function(O7n,U7n){return O7n<U7n;}
,'f5P':function(M5P,Z5P){return M5P!=Z5P;}
,'D88':function(h88,G88){return h88-G88;}
,'f7T':function(M7T,Z7T){return M7T/Z7T;}
,'P2':function(Q2,H2){return Q2==H2;}
,'M38':function(Z38,O38){return Z38*O38;}
,'K1I':function(m1I,z1I){return m1I-z1I;}
,'q7q':function(i7q,a7q,k7q){return i7q-a7q+k7q;}
,'Q5n':function(H5n,n5n){return H5n==n5n;}
,'D1I':function(h1I,G1I){return h1I<G1I;}
,'B3q':function(f3q,M3q){return f3q===M3q;}
,'E0I':function(l0I,t0I){return l0I==t0I;}
,'A8T':function(w8T,L8T){return w8T<L8T;}
,'Q0b':function(H0b,n0b){return H0b!=n0b;}
,'n2Q':function(x2Q,K2Q){return x2Q-K2Q;}
,'E0J':function(l0J,t0J){return l0J<t0J;}
,'p4T':function(o4T,D4T){return o4T*D4T;}
,'o9J':function(D9J,h9J){return D9J<=h9J;}
,'x5P':function(K5P,m5P,z5P,u5P){return K5P-m5P+z5P-u5P;}
,'K7q':function(m7q,z7q){return m7q/z7q;}
,'n1g':function(x1g,K1g){return x1g*K1g;}
,'H98':function(n98,x98,K98){return n98-x98+K98;}
,'T3n':function(A3n,w3n){return A3n>w3n;}
,'b3q':function(N3q,F3q){return N3q<F3q;}
,'g48':function(I48,C48){return I48<C48;}
,'d0g':function(E0g,l0g){return E0g-l0g;}
,'d3Q':function(E3Q,l3Q){return E3Q*l3Q;}
,'i5u':function(a5u,k5u){return a5u!=k5u;}
,'m8b':function(z8b,u8b){return z8b-u8b;}
,'y3Q':function(R3Q,J3Q){return R3Q/J3Q;}
,'A2I':function(w2I,L2I){return w2I-L2I;}
,'k5':function(c5,X5){return c5<X5;}
,'E4':function(l4,t4){return l4<t4;}
,'A1g':function(w1g,L1g){return w1g*L1g;}
,'A2T':function(w2T,L2T){return w2T-L2T;}
,'l18':function(t18,q18){return t18<q18;}
,'r8n':function(g8n,I8n){return g8n<I8n;}
,'D1T':function(h1T,G1T){return h1T-G1T;}
,'N0u':function(F0u,W0u){return F0u>W0u;}
,'O6I':function(U6I,P6I){return U6I===P6I;}
,'a3b':function(k3b,c3b){return k3b==c3b;}
,'F3I':function(W3I,j3I){return W3I==j3I;}
,'e2g':function(T2g,A2g){return T2g<A2g;}
,'l5T':function(t5T,q5T){return t5T/q5T;}
,'V7n':function(y7n,R7n){return y7n-R7n;}
,'x5Q':function(K5Q,m5Q){return K5Q==m5Q;}
,'W2T':function(j2T,S3T){return j2T-S3T;}
,'Y1I':function(v1I,V1I){return v1I<V1I;}
,'g4q':function(I4q,C4q){return I4q-C4q;}
,'Q6J':function(H6J,n6J){return H6J/n6J;}
,'c5I':function(X5I,r5I){return X5I<r5I;}
,'K88':function(m88,z88){return m88-z88;}
,'k2Q':function(c2Q,X2Q){return c2Q==X2Q;}
,'t88':function(q88,i88){return q88&i88;}
,'L4g':function(p4g,o4g){return p4g-o4g;}
,'E9P':function(l9P,t9P){return l9P*t9P;}
,'G0':function(s0,B0){return s0<=B0;}
,'F5g':function(W5g,j5g){return W5g>j5g;}
,'U38':function(P38,Q38){return P38*Q38;}
,'V7P':function(y7P,R7P){return y7P<=R7P;}
,'R7Q':function(J7Q,d7Q){return J7Q>d7Q;}
,'z9Q':function(u9Q,b9Q){return u9Q-b9Q;}
,'K0q':function(m0q,z0q){return m0q-z0q;}
,'b5':function(N5,F5){return N5==F5;}
,'z6b':function(u6b,b6b){return u6b>b6b;}
,'D3b':function(h3b,G3b){return h3b>G3b;}
,'i0q':function(a0q,k0q){return a0q===k0q;}
,'m8T':function(z8T,u8T){return z8T<u8T;}
,'q2b':function(i2b,a2b){return i2b==a2b;}
,'V9J':function(y9J,R9J){return y9J==R9J;}
,'y6q':function(R6q,J6q){return R6q>J6q;}
,'I6u':function(C6u,e6u){return C6u==e6u;}
,'e0n':function(T0n,A0n){return T0n==A0n;}
,'u4n':function(b4n,N4n){return b4n-N4n;}
,'w3P':function(L3P,p3P){return L3P/p3P;}
,'J2q':function(d2q,E2q){return d2q!==E2q;}
,'j6b':function(S7b,Y7b){return S7b*Y7b;}
,'N0I':function(F0I,W0I){return F0I==W0I;}
,'t4I':function(q4I,i4I){return q4I<i4I;}
,'L1I':function(p1I,o1I){return p1I===o1I;}
,'q7g':function(i7g,a7g){return i7g<a7g;}
,'O7u':function(U7u,P7u){return U7u-P7u;}
,'K68':function(m68,z68){return m68!==z68;}
,'S5P':function(Y5P,v5P){return Y5P*v5P;}
,'y2P':function(R2P,J2P){return R2P/J2P;}
,'B0I':function(f0I,M0I){return f0I*M0I;}
,'t6Q':function(q6Q,i6Q){return q6Q<i6Q;}
,'F6u':function(W6u,j6u){return W6u==j6u;}
,'t3I':function(q3I,i3I){return q3I===i3I;}
,'d1n':function(E1n,l1n){return E1n<l1n;}
,'M3n':function(Z3n,O3n){return Z3n!==O3n;}
,'f0Q':function(M0Q,Z0Q){return M0Q-Z0Q;}
,'O08':function(U08,P08,Q08,H08){return U08-P08+Q08-H08;}
,'Q3':function(H3,n3){return H3==n3;}
,'M9T':function(Z9T,O9T){return Z9T===O9T;}
,'g5P':function(I5P,C5P){return I5P>C5P;}
,'c8P':function(X8P,r8P){return X8P&r8P;}
,'I3I':function(C3I,e3I){return C3I===e3I;}
,'U3u':function(P3u,Q3u){return P3u==Q3u;}
,'x4':function(K4,m4){return K4/m4;}
,'g6b':function(I6b,C6b){return I6b<=C6b;}
,'u0g':function(b0g,N0g){return b0g*N0g;}
,'q2T':function(i2T,a2T){return i2T==a2T;}
,'Z4T':function(O4T,U4T){return O4T==U4T;}
,'l5n':function(t5n,q5n){return t5n==q5n;}
,'N7u':function(F7u,W7u){return F7u<=W7u;}
,'P3g':function(Q3g,H3g){return Q3g==H3g;}
,'A2b':function(w2b,L2b){return w2b<L2b;}
,'X3u':function(r3u,g3u){return r3u==g3u;}
,'v7J':function(V7J,y7J){return V7J/y7J;}
,'R0b':function(J0b,d0b){return J0b-d0b;}
,'d5q':function(E5q,l5q){return E5q<l5q;}
,'E2Q':function(l2Q,t2Q){return l2Q==t2Q;}
,'T4n':function(A4n,w4n){return A4n<w4n;}
,'l8q':function(t8q,q8q){return t8q*q8q;}
,'F0g':function(W0g,j0g){return W0g==j0g;}
,'O8g':function(U8g,P8g){return U8g>P8g;}
,'D4J':function(h4J,G4J){return h4J>=G4J;}
,'U58':function(P58,Q58){return P58<Q58;}
,'K58':function(m58,z58){return m58>z58;}
,'e9I':function(T9I,A9I){return T9I/A9I;}
,'D1n':function(h1n,G1n){return h1n==G1n;}
,'X6u':function(r6u,g6u){return r6u==g6u;}
,'k7Q':function(c7Q,X7Q){return c7Q==X7Q;}
,'w9Q':function(L9Q,p9Q){return L9Q===p9Q;}
,'t1b':function(q1b,i1b){return q1b===i1b;}
,'P4n':function(Q4n,H4n){return Q4n/H4n;}
,'F6T':function(W6T,j6T){return W6T<j6T;}
,'y4Q':function(R4Q,J4Q){return R4Q<J4Q;}
,'e9q':function(T9q,A9q){return T9q<A9q;}
,'t68':function(q68,i68){return q68>i68;}
,'o9b':function(D9b,h9b){return D9b==h9b;}
,'l5P':function(t5P,q5P){return t5P<q5P;}
,'e7':function(T7,A7){return T7==A7;}
,'V6g':function(y6g,R6g){return y6g!==R6g;}
,'l6J':function(t6J,q6J){return t6J<q6J;}
,'V6J':function(y6J,R6J){return y6J-R6J;}
,'C04':(function(){var A04=(16<=(6.060E2,27)?(9.26E2,0):0x1FE>(0x209,8.86E2)?0xFD:(95.,0x14D)),w04='',L04=[-(6>(0x212,68.2E1)?(7.80E1,0.9):(0x24A,112.)<=(0x247,3.0E1)?(114.5E1,0x135):(35.80E1,133.1E1)>91?(3.6E2,1):(110.4E1,0xEE)),/ /,(0x192>(60.5E1,141.)?(97.2E1,false):(0x13,10)),/ /,NaN,{}
,'',{}
,-((1.244E3,0xD1)<=(41.,16.5E1)?148.:0x127<(129.,0x255)?(0x17B,1):(0x15E,0x18B)),NaN,NaN,{}
,/ /,((0x1CC,0xD8)<(39,0x106)?(25.8E1,null):(133,0x4D)),((28.70E1,0xF1)>0x1E7?(0x1C0,115.):(60,37)<(0xD6,0x166)?(6.3E2,null):(99.2E1,92.10E1)),'',((73.0E1,0)>0x1A3?(57.90E1,23):(0x1AB,0x78)<(66,0x1E6)?(50,null):(0x10D,0x157)<56?1.43E2:(14.,0x2F)),((27,0x10C)<=(1.201E3,145.)?(13.200E2,0x192):(0x8A,0x23F)>(148.,4.9E1)?(100,null):(114.,11.09E2)),'','',((18.,1.479E3)<=55.2E1?'I':(0x20D,0x107)<26.6E1?(0x17F,false):(0x1BA,0x27)),[],{}
,[],{}
,/ /,(17<(142.5E1,62)?(0xBD,false):(6.520E2,0x19B)),'',((0x68,71.3E1)<(0xB4,0xD0)?(0x161,97.):90<(31,0x21E)?(7E0,false):1.456E3<(100.,6.93E2)?83.5E1:(133,0x141)),-((0x1E0,6.520E2)>(0xB3,106.)?(149.4E1,1):(148.,39.90E1)>=(13.23E2,120.0E1)?(0x15A,'w'):(11.1E2,10.22E2)),NaN,null,-1,NaN,/ /,((0x143,72.10E1)>=129?(116.,null):(0x14B,69.9E1)),[],null,null,[],{}
],p04=L04["length"];for(;A04<p04;){w04+=+(typeof L04[A04++]!=='object');}
var o04=parseInt(w04,(85.>=(58.40E1,36)?(142.,2):(41.2E1,118)<=10.3E1?(0x119,30.):(61,8.64E2))),D04='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',h04=D04.constructor.constructor(unescape(/;.+/["exec"](D04))["split"]('')["reverse"]()["join"](''))();return {e04:function(G04){var s04,A04=0,B04=o04-h04>p04,f04;for(;A04<G04["length"];A04++){f04=parseInt(G04["charAt"](A04),16)["toString"](2);var M04=f04["charAt"](f04["length"]-1);s04=A04===0?M04:s04^M04;}
return s04?B04:!B04;}
}
;}
)(),'C0Q':function(e0Q,T0Q,A0Q){return e0Q*T0Q/A0Q;}
,'J3P':function(d3P,E3P){return d3P-E3P;}
,'m2T':function(z2T,u2T){return z2T-u2T;}
,'X3T':function(r3T,g3T,I3T){return r3T*g3T/I3T;}
,'r7b':function(g7b,I7b){return g7b/I7b;}
,'H3n':function(n3n,x3n){return n3n>=x3n;}
,'a7n':function(k7n,c7n){return k7n==c7n;}
,'e4q':function(T4q,A4q){return T4q>=A4q;}
,'e9Q':function(T9Q,A9Q){return T9Q==A9Q;}
,'g0T':function(I0T,C0T){return I0T==C0T;}
,'f5u':function(M5u,Z5u){return M5u!=Z5u;}
,'q0Q':function(i0Q,a0Q){return i0Q-a0Q;}
,'I5g':function(C5g,e5g){return C5g%e5g;}
,'S48':function(Y48,v48){return Y48<v48;}
,'R28':function(J28,d28){return J28<=d28;}
,'D4b':function(h4b,G4b){return h4b<G4b;}
,'m4T':function(z4T,u4T){return z4T!=u4T;}
,'Z5':function(O5,U5){return O5==U5;}
,'C2n':function(e2n,T2n){return e2n>T2n;}
,'x7':function(K7,m7){return K7>m7;}
,'K38':function(m38,z38){return m38/z38;}
,'y6n':function(R6n,J6n){return R6n-J6n;}
,'Z7g':function(O7g,U7g){return O7g>=U7g;}
,'h2u':function(G2u,s2u){return G2u-s2u;}
,'c0T':function(X0T,r0T){return X0T<r0T;}
,'D5q':function(h5q,G5q){return h5q<G5q;}
,'R6I':function(J6I,d6I){return J6I==d6I;}
,'U4Q':function(P4Q,Q4Q){return P4Q/Q4Q;}
,'R7I':function(J7I,d7I){return J7I-d7I;}
,'x9J':function(K9J,m9J){return K9J<m9J;}
,'H1P':function(n1P,x1P){return n1P!==x1P;}
,'i0n':function(a0n,k0n){return a0n==k0n;}
,'s0P':function(B0P,f0P){return B0P/f0P;}
,'J6b':function(d6b,E6b){return d6b-E6b;}
,'v4':function(V4,y4){return V4>=y4;}
,'G6g':function(s6g,B6g){return s6g==B6g;}
,'T1u':function(A1u,w1u){return A1u<=w1u;}
,'y8J':function(R8J,J8J){return R8J!=J8J;}
,'i5T':function(a5T,k5T){return a5T<k5T;}
,'d6u':function(E6u,l6u){return E6u-l6u;}
,'U1':function(P1,Q1){return P1<Q1;}
,'h2T':function(G2T,s2T){return G2T>s2T;}
,'T88':function(A88,w88){return A88*w88;}
,'e5P':function(T5P,A5P){return T5P>=A5P;}
,'H0g':function(n0g,x0g){return n0g==x0g;}
,'m8I':function(z8I,u8I){return z8I==u8I;}
,'q3g':function(i3g,a3g){return i3g==a3g;}
,'e8':function(T8,A8){return T8*A8;}
,'n8':function(x8,K8){return x8-K8;}
,'Y4I':function(v4I,V4I){return v4I>=V4I;}
,'f8P':function(M8P,Z8P){return M8P-Z8P;}
,'Q5P':function(H5P,n5P){return H5P-n5P;}
,'w5b':function(L5b,p5b){return L5b-p5b;}
,'L5q':function(p5q,o5q){return p5q-o5q;}
,'s4I':function(B4I,f4I){return B4I/f4I;}
,'J18':function(d18,E18){return d18>E18;}
,'o0Q':function(D0Q,h0Q){return D0Q<h0Q;}
,'y9u':function(R9u,J9u){return R9u*J9u;}
,'c8g':function(X8g,r8g){return X8g-r8g;}
,'S9n':function(Y9n,v9n){return Y9n<v9n;}
,'g5b':function(I5b,C5b){return I5b<C5b;}
,'D9u':function(h9u,G9u){return h9u in G9u;}
,'e6J':function(T6J,A6J){return T6J<=A6J;}
,'R9':function(J9,d9){return J9===d9;}
,'h3T':function(G3T,s3T){return G3T<s3T;}
,'M3b':function(Z3b,O3b){return Z3b<O3b;}
,'N6J':function(F6J,W6J){return F6J/W6J;}
,'A7Q':function(w7Q,L7Q){return w7Q/L7Q;}
,'V0T':function(y0T,R0T){return y0T-R0T;}
,'h4u':function(G4u,s4u){return G4u>=s4u;}
,'z6g':function(u6g,b6g){return u6g>b6g;}
,'n4T':function(x4T,K4T){return x4T==K4T;}
,'z5b':function(u5b,b5b){return u5b>=b5b;}
,'P1g':function(Q1g,H1g){return Q1g!==H1g;}
,'c18':function(X18,r18){return X18>r18;}
,'e0q':function(T0q,A0q,w0q){return T0q-A0q+w0q;}
,'g7':function(I7,C7){return I7==C7;}
,'K3Q':function(m3Q,z3Q){return m3Q==z3Q;}
,'a6u':function(k6u,c6u){return k6u<c6u;}
,'L3I':function(p3I,o3I){return p3I!=o3I;}
,'Z4u':function(O4u,U4u){return O4u!=U4u;}
,'w7':function(L7,p7){return L7==p7;}
,'h3q':function(G3q,s3q){return G3q===s3q;}
,'M9u':function(Z9u,O9u){return Z9u in O9u;}
,'p2Q':function(o2Q,D2Q){return o2Q>D2Q;}
,'O5I':function(U5I,P5I){return U5I!==P5I;}
,'p3g':function(o3g,D3g){return o3g|D3g;}
,'k4T':function(c4T,X4T){return c4T-X4T;}
,'H6q':function(n6q,x6q){return n6q!==x6q;}
,'R0J':function(J0J,d0J){return J0J>d0J;}
,'s1b':function(B1b,f1b){return B1b>f1b;}
,'V4q':function(y4q,R4q){return y4q/R4q;}
,'o8P':function(D8P,h8P){return D8P*h8P;}
,'N5u':function(F5u,W5u){return F5u==W5u;}
,'B8T':function(f8T,M8T){return f8T>M8T;}
,'U1b':function(P1b,Q1b){return P1b*Q1b;}
,'a1u':function(k1u,c1u){return k1u*c1u;}
,'U6T':function(P6T,Q6T){return P6T<Q6T;}
,'t6n':function(q6n,i6n){return q6n===i6n;}
,'K6n':function(m6n,z6n){return m6n!=z6n;}
,'S5b':function(Y5b,v5b){return Y5b!=v5b;}
,'s58':function(B58,f58){return B58-f58;}
,'i18':function(a18,k18){return a18-k18;}
,'T8J':function(A8J,w8J){return A8J===w8J;}
,'V5Q':function(y5Q,R5Q){return y5Q in R5Q;}
,'P8u':function(Q8u,H8u){return Q8u===H8u;}
,'F1b':function(W1b,j1b){return W1b-j1b;}
,'h28':function(G28,s28){return G28*s28;}
,'j3':function(S6I,Y6I){return S6I==Y6I;}
,'K1u':function(m1u,z1u){return m1u-z1u;}
,'B2':function(f2,M2){return f2>=M2;}
,'C8I':function(e8I,T8I){return e8I===T8I;}
,'N5b':function(F5b,W5b){return F5b*W5b;}
,'N6g':function(F6g,W6g){return F6g>W6g;}
,'f48':function(M48,Z48){return M48===Z48;}
,'K9q':function(m9q,z9q){return m9q<z9q;}
,'f6b':function(M6b,Z6b){return M6b<Z6b;}
,'g9Q':function(I9Q,C9Q){return I9Q==C9Q;}
,'c6b':function(X6b,r6b){return X6b>r6b;}
,'a8J':function(k8J,c8J){return k8J-c8J;}
,'s3Q':function(B3Q,f3Q){return B3Q>f3Q;}
,'v0I':function(V0I,y0I){return V0I===y0I;}
,'E7J':function(l7J,t7J){return l7J/t7J;}
,'V3P':function(y3P,R3P){return y3P<R3P;}
,'t4g':function(q4g,i4g){return q4g!==i4g;}
,'D5g':function(h5g,G5g){return h5g==G5g;}
,'O4q':function(U4q,P4q){return U4q<P4q;}
,'D1u':function(h1u,G1u){return h1u<G1u;}
,'T6u':function(A6u,w6u){return A6u==w6u;}
,'C7g':function(e7g,T7g){return e7g>=T7g;}
,'L3u':function(p3u,o3u){return p3u*o3u;}
,'d5g':function(E5g,l5g){return E5g!=l5g;}
,'c7T':function(X7T,r7T){return X7T<r7T;}
,'d88':function(E88,l88){return E88>=l88;}
,'r2Q':function(g2Q,I2Q){return g2Q-I2Q;}
,'x3P':function(K3P,m3P,z3P,u3P){return K3P-m3P+z3P-u3P;}
,'E8n':function(l8n,t8n){return l8n/t8n;}
,'q8b':function(i8b,a8b){return i8b<a8b;}
,'c5P':function(X5P,r5P){return X5P-r5P;}
,'i4P':function(a4P,k4P){return a4P==k4P;}
,'H1T':function(n1T,x1T){return n1T-x1T;}
,'M3I':function(Z3I,O3I){return Z3I<O3I;}
,'N9Q':function(F9Q,W9Q){return F9Q==W9Q;}
,'T9u':function(A9u,w9u){return A9u>w9u;}
,'M4I':function(Z4I,O4I){return Z4I-O4I;}
,'I9u':function(C9u,e9u){return C9u==e9u;}
,'j6P':function(S7P,Y7P,v7P){return S7P*Y7P/v7P;}
,'G5b':function(s5b,B5b){return s5b<B5b;}
,'i8g':function(a8g,k8g){return a8g<=k8g;}
,'O4P':function(U4P,P4P){return U4P==P4P;}
,'N0Q':function(F0Q,W0Q){return F0Q<W0Q;}
,'a38':function(k38,c38){return k38==c38;}
,'t3u':function(q3u,i3u){return q3u>i3u;}
,'g18':function(I18,C18){return I18<C18;}
,'m8Q':function(z8Q,u8Q){return z8Q==u8Q;}
,'k28':function(c28,X28){return c28/X28;}
,'f5T':function(M5T,Z5T){return M5T>=Z5T;}
,'j4':function(S9,Y9){return S9===Y9;}
,'r0J':function(g0J,I0J){return g0J!=I0J;}
,'p0I':function(o0I,D0I){return o0I<D0I;}
,'N7':function(F7,W7){return F7===W7;}
,'u0':function(b0,N0){return b0/N0;}
,'Z8T':function(O8T,U8T){return O8T<U8T;}
,'o4':function(D4,h4){return D4<=h4;}
,'E7q':function(l7q,t7q){return l7q!==t7q;}
,'T0g':function(A0g,w0g){return A0g==w0g;}
,'I4n':function(C4n,e4n){return C4n-e4n;}
,'B9':function(f9,M9){return f9>=M9;}
,'w0T':function(L0T,p0T){return L0T===p0T;}
,'s6q':function(B6q,f6q){return B6q!=f6q;}
,'B5':function(f5,M5){return f5==M5;}
,'C5':function(e5,T5){return e5/T5;}
,'s1Q':function(B1Q,f1Q){return B1Q-f1Q;}
,'U4I':function(P4I,Q4I){return P4I-Q4I;}
,'Y6T':function(v6T,V6T){return v6T==V6T;}
,'k1g':function(c1g,X1g){return c1g/X1g;}
,'Z2u':function(O2u,U2u){return O2u<U2u;}
,'A3g':function(w3g,L3g){return w3g|L3g;}
,'V0n':function(y0n,R0n){return y0n==R0n;}
,'q3q':function(i3q,a3q){return i3q<a3q;}
,'h2b':function(G2b,s2b){return G2b!=s2b;}
,'x6g':function(K6g,m6g){return K6g<m6g;}
,'T3Q':function(A3Q,w3Q){return A3Q-w3Q;}
,'g6P':function(I6P,C6P){return I6P-C6P;}
,'L7P':function(p7P,o7P){return p7P-o7P;}
,'I6Q':function(C6Q,e6Q){return C6Q>e6Q;}
,'d4J':function(E4J,l4J){return E4J>=l4J;}
,'G4':function(s4,B4){return s4==B4;}
,'b6Q':function(N6Q,F6Q){return N6Q<F6Q;}
,'Q2g':function(H2g,n2g){return H2g==n2g;}
,'t1n':function(q1n,i1n){return q1n!==i1n;}
,'h5':function(G5,s5){return G5==s5;}
,'a3I':function(k3I,c3I){return k3I-c3I;}
,'h8n':function(G8n,s8n){return G8n>s8n;}
,'u1Q':function(b1Q,N1Q){return b1Q/N1Q;}
,'Q5T':function(H5T,n5T){return H5T>=n5T;}
,'o0T':function(D0T,h0T){return D0T==h0T;}
,'W8I':function(j8I,S1I){return j8I>=S1I;}
,'L2P':function(p2P,o2P){return p2P&o2P;}
,'j9P':function(S0P,Y0P){return S0P-Y0P;}
,'L0q':function(p0q,o0q){return p0q===o0q;}
,'u88':function(b88,N88){return b88>N88;}
,'Y3I':function(v3I,V3I){return v3I/V3I;}
,'i3':function(a3,k3){return a3==k3;}
,'w8':function(L8,p8){return L8/p8;}
,'U8q':function(P8q,Q8q){return P8q-Q8q;}
,'Y1':function(V1,R1){return V1*R1;}
,'d3T':function(E3T,l3T){return E3T-l3T;}
,'d3u':function(E3u,l3u){return E3u<l3u;}
,'a1q':function(k1q,c1q){return k1q-c1q;}
,'R5':function(J5,d5){return J5<d5;}
,'n2':function(K2,z2){return K2/z2;}
,'z0n':function(u0n,b0n){return u0n-b0n;}
,'w48':function(L48,p48){return L48>p48;}
,'A2Q':function(w2Q,L2Q){return w2Q/L2Q;}
,'X6':function(r6,g6){return r6==g6;}
,'b2I':function(N2I,F2I){return N2I*F2I;}
,'c7q':function(X7q,r7q,g7q){return X7q-r7q+g7q;}
,'v1P':function(V1P,y1P){return V1P-y1P;}
,'o4q':function(D4q,h4q){return D4q>h4q;}
,'q28':function(i28,a28){return i28/a28;}
,'o18':function(D18,h18){return D18/h18;}
,'r3g':function(g3g,I3g){return g3g==I3g;}
,'w8q':function(L8q,p8q){return L8q<p8q;}
,'M68':function(Z68,O68){return Z68>=O68;}
,'b2b':function(N2b,F2b){return N2b<F2b;}
,'M98':function(Z98,O98){return Z98>=O98;}
,'p2u':function(o2u,D2u){return o2u>D2u;}
,'D58':function(h58,G58){return h58>G58;}
,'p78':function(o78,D78){return o78<D78;}
,'l78':function(t78,q78){return t78>=q78;}
,'d38':function(E38,l38){return E38==l38;}
,'f4q':function(M4q,Z4q){return M4q>Z4q;}
,'n7J':function(x7J,K7J){return x7J/K7J;}
,'Y5g':function(v5g,V5g){return v5g==V5g;}
,'K1P':function(m1P,z1P){return m1P==z1P;}
,'h7Q':function(G7Q,s7Q){return G7Q/s7Q;}
,'f7':function(M7,Z7){return M7*Z7;}
,'y5g':function(R5g,J5g){return R5g!=J5g;}
,'d6T':function(E6T,l6T){return E6T==l6T;}
,'J7n':function(d7n,E7n,l7n){return d7n-E7n+l7n;}
,'O5Q':function(U5Q,P5Q){return U5Q==P5Q;}
,'v0b':function(V0b,y0b){return V0b<y0b;}
,'S08':function(Y08,v08,V08,y08){return Y08-v08+V08+y08;}
,'r8b':function(g8b,I8b){return g8b<=I8b;}
,'v2b':function(V2b,y2b){return V2b-y2b;}
,'j1J':2,'O0T':function(U0T,P0T){return U0T<=P0T;}
,'w0u':function(L0u,p0u){return L0u<p0u;}
,'z9I':function(u9I,b9I){return u9I/b9I;}
,'k8I':function(c8I,X8I){return c8I===X8I;}
,'M1P':function(Z1P,O1P){return Z1P==O1P;}
,'l5Q':function(t5Q,q5Q){return t5Q-q5Q;}
,'M0P':function(Z0P,O0P){return Z0P==O0P;}
,'V8P':function(y8P,R8P){return y8P&R8P;}
,'A3T':function(w3T,L3T){return w3T*L3T;}
,'O5n':function(U5n,P5n){return U5n-P5n;}
,'J1':function(E1,l1){return E1/l1;}
,'G5u':function(s5u,B5u){return s5u!=B5u;}
,'O5b':function(U5b,P5b){return U5b/P5b;}
,'i5P':function(a5P,k5P){return a5P<k5P;}
,'h8Q':function(G8Q,s8Q){return G8Q===s8Q;}
,'q9g':function(i9g,a9g){return i9g!==a9g;}
,'s4b':function(B4b,f4b){return B4b===f4b;}
,'r78':function(g78,I78){return g78<=I78;}
,'p28':function(o28,D28){return o28>D28;}
,'D6':function(h6,G6){return h6<G6;}
,'s4Q':function(B4Q,f4Q){return B4Q-f4Q;}
,'i7u':function(a7u,k7u){return a7u/k7u;}
,'J5n':function(d5n,E5n){return d5n==E5n;}
,'y4g':function(R4g,J4g){return R4g!==J4g;}
,'S9Q':function(Y9Q,v9Q){return Y9Q!=v9Q;}
,'C78':function(e78,T78){return e78 in T78;}
,'c5u':function(X5u,r5u){return X5u<r5u;}
,'G2q':function(s2q,B2q){return s2q===B2q;}
,'O0b':function(U0b,P0b){return U0b!==P0b;}
,'Q5Q':function(H5Q,n5Q){return H5Q<n5Q;}
,'H58':function(n58,x58){return n58-x58;}
,'I68':function(C68,e68){return C68-e68;}
,'L3b':function(p3b,o3b){return p3b===o3b;}
,'t4n':function(q4n,i4n){return q4n-i4n;}
,'g0u':function(I0u,C0u){return I0u==C0u;}
,'F1P':function(W1P,j1P){return W1P>j1P;}
,'f5b':function(M5b,Z5b){return M5b===Z5b;}
,'U1q':function(P1q,Q1q){return P1q==Q1q;}
,'D9T':function(h9T,G9T){return h9T==G9T;}
,'r28':function(g28,I28){return g28/I28;}
,'g2g':function(I2g,C2g){return I2g<C2g;}
,'l0u':function(t0u,q0u){return t0u<q0u;}
,'T1':function(A1,w1){return A1==w1;}
,'r1g':function(g1g,I1g){return g1g in I1g;}
,'b3g':function(N3g,F3g){return N3g>F3g;}
,'T6':function(A6,w6){return A6<w6;}
,'O0':function(U0,P0){return U0<=P0;}
,'w5u':function(L5u,p5u){return L5u!=p5u;}
,'v9g':function(V9g,y9g){return V9g/y9g;}
,'c9J':function(X9J,r9J){return X9J>=r9J;}
,'l0T':function(t0T,q0T){return t0T*q0T;}
,'L9n':function(p9n,o9n){return p9n*o9n;}
,'L4n':function(p4n,o4n){return p4n>=o4n;}
,'G6P':function(s6P,B6P){return s6P<B6P;}
,'B2b':function(f2b,M2b){return f2b!=M2b;}
,'n2u':function(x2u,K2u){return x2u-K2u;}
,'D3n':function(h3n,G3n){return h3n>G3n;}
,'v7I':function(V7I,y7I){return V7I<=y7I;}
,'r8u':function(g8u,I8u){return g8u-I8u;}
,'h7I':function(G7I,s7I){return G7I/s7I;}
,'w5P':function(L5P,p5P){return L5P<=p5P;}
,'F1u':function(W1u,j1u){return W1u-j1u;}
,'C8u':function(e8u,T8u){return e8u-T8u;}
,'r4':function(g4,I4){return g4-I4;}
,'g4P':function(I4P,C4P){return I4P-C4P;}
,'s98':function(B98,f98){return B98/f98;}
,'i0u':function(a0u,k0u){return a0u===k0u;}
,'W8T':function(j8T,S1T){return j8T<S1T;}
,'k2I':function(c2I,X2I){return c2I<X2I;}
,'A4u':function(w4u,L4u){return w4u==L4u;}
,'a9u':function(k9u,c9u){return k9u>c9u;}
,'M6Q':function(Z6Q,O6Q){return Z6Q>=O6Q;}
,'C9P':function(e9P,T9P){return e9P/T9P;}
,'Y1b':function(v1b,V1b){return v1b>V1b;}
,'w5T':function(L5T,p5T){return L5T==p5T;}
,'d8J':function(E8J,l8J){return E8J!=l8J;}
,'S8P':function(Y8P,v8P){return Y8P<=v8P;}
,'t8J':function(q8J,i8J){return q8J<i8J;}
,'J9Q':function(d9Q,E9Q){return d9Q!=E9Q;}
,'F6':function(W6,j6){return W6-j6;}
,'a9T':function(k9T,c9T){return k9T<c9T;}
,'N2q':function(F2q,W2q){return F2q<W2q;}
,'i0T':function(a0T,k0T){return a0T*k0T;}
,'L3Q':function(p3Q,o3Q){return p3Q-o3Q;}
,'R8n':function(J8n,d8n){return J8n-d8n;}
,'K6T':function(m6T,z6T){return m6T==z6T;}
,'q0J':function(i0J,a0J){return i0J==a0J;}
,'J0u':function(d0u,E0u){return d0u==E0u;}
,'L58':function(p58,o58){return p58<o58;}
,'n2I':function(x2I,K2I){return x2I===K2I;}
,'j5u':function(S2u,Y2u){return S2u<Y2u;}
,'Q6I':function(H6I,n6I){return H6I===n6I;}
,'f8q':function(M8q,Z8q,O8q){return M8q-Z8q-O8q;}
,'j5n':function(S2n,Y2n){return S2n==Y2n;}
,'E8I':function(l8I,t8I){return l8I/t8I;}
,'Z3g':function(O3g,U3g){return O3g|U3g;}
,'Z0J':function(O0J,U0J){return O0J>U0J;}
,'j5T':function(S2T,Y2T){return S2T>=Y2T;}
,'w64':16,'C7I':function(e7I,T7I){return e7I*T7I;}
,'T9T':function(A9T,w9T){return A9T>w9T;}
,'x0b':function(K0b,m0b){return K0b!=m0b;}
,'s1':function(B1,f1){return B1-f1;}
,'s6u':function(B6u,f6u){return B6u==f6u;}
,'h2n':function(G2n,s2n){return G2n<s2n;}
,'n7n':function(x7n,K7n){return x7n/K7n;}
,'v2n':function(V2n,y2n){return V2n-y2n;}
,'h8I':function(G8I,s8I){return G8I<s8I;}
,'a6T':function(k6T,c6T){return k6T==c6T;}
,'Q6b':function(H6b,n6b){return H6b-n6b;}
,'t6T':function(q6T,i6T){return q6T==i6T;}
,'y4b':function(R4b,J4b){return R4b==J4b;}
,'u9n':function(b9n,N9n){return b9n<N9n;}
,'l5b':function(t5b,q5b){return t5b!=q5b;}
,'H38':function(n38,x38){return n38==x38;}
,'m2Q':function(z2Q,u2Q){return z2Q<=u2Q;}
,'N0T':function(F0T,W0T){return F0T*W0T;}
,'W9g':function(j9g,S0g){return j9g!==S0g;}
,'r7g':function(g7g,I7g){return g7g<I7g;}
,'w9I':function(L9I,p9I){return L9I<p9I;}
,'i08':function(a08,k08){return a08==k08;}
,'T6q':function(A6q,w6q){return A6q==w6q;}
,'x8g':function(K8g,m8g){return K8g>=m8g;}
,'x5u':function(K5u,m5u){return K5u==m5u;}
,'L4Q':function(p4Q,o4Q){return p4Q<o4Q;}
,'e8g':function(T8g,A8g){return T8g<A8g;}
,'h0b':function(G0b,s0b){return G0b-s0b;}
,'A8b':function(w8b,L8b){return w8b<=L8b;}
,'c0n':function(X0n,r0n){return X0n<r0n;}
,'Q9b':function(H9b,n9b){return H9b==n9b;}
,'q5J':8,'L0P':function(p0P,o0P){return p0P/o0P;}
,'u6n':function(b6n,N6n){return b6n-N6n;}
,'x9Q':function(K9Q,m9Q){return K9Q==m9Q;}
,'t1u':function(q1u,i1u){return q1u-i1u;}
,'G7':function(s7,B7){return s7==B7;}
,'e5T':function(T5T,A5T){return T5T==A5T;}
,'i9I':function(a9I,k9I){return a9I==k9I;}
,'C4':function(e4,T4){return e4<T4;}
,'B2I':function(f2I,M2I){return f2I-M2I;}
,'p5':function(o5,D5){return o5==D5;}
,'i6J':function(a6J,k6J){return a6J==k6J;}
,'r2T':function(g2T,I2T){return g2T!==I2T;}
,'b3T':function(N3T,F3T){return N3T>F3T;}
,'H7q':function(n7q,x7q){return n7q-x7q;}
,'t1I':function(q1I,i1I){return q1I-i1I;}
,'d4b':function(E4b,l4b){return E4b<l4b;}
,'x6I':function(K6I,m6I){return K6I-m6I;}
,'u1b':function(b1b,N1b){return b1b-N1b;}
,'Q9P':function(H9P,n9P){return H9P-n9P;}
,'O9Q':function(U9Q,P9Q){return U9Q==P9Q;}
,'L6q':function(p6q,o6q){return p6q!==o6q;}
,'t6q':function(q6q,i6q){return q6q==i6q;}
,'B7I':function(f7I,M7I){return f7I<M7I;}
,'w0Q':function(L0Q,p0Q){return L0Q/p0Q;}
,'K4I':function(m4I,z4I){return m4I==z4I;}
,'q8I':function(i8I,a8I){return i8I===a8I;}
,'x4P':function(K4P,m4P){return K4P<m4P;}
,'M7q':function(Z7q,O7q){return Z7q-O7q;}
,'k7I':function(c7I,X7I){return c7I*X7I;}
,'V48':function(y48,R48){return y48>R48;}
,'X58':function(r58,g58){return r58<g58;}
,'C8T':function(e8T,T8T){return e8T>T8T;}
,'D4n':function(h4n,G4n){return h4n/G4n;}
,'v6I':function(V6I,y6I){return V6I==y6I;}
,'P5':function(Q5,H5){return Q5/H5;}
,'a2':function(X2,g2){return X2==g2;}
,'p2n':function(o2n,D2n){return o2n>D2n;}
,'p8T':function(o8T,D8T){return o8T<D8T;}
,'z0T':function(u0T,b0T){return u0T==b0T;}
,'C2T':function(e2T,T2T){return e2T-T2T;}
,'X6T':function(r6T,g6T){return r6T==g6T;}
,'T0P':function(A0P,w0P){return A0P<=w0P;}
,'O9b':function(U9b,P9b){return U9b==P9b;}
,'R7J':function(J7J,d7J){return J7J===d7J;}
,'L4I':function(p4I,o4I){return p4I!=o4I;}
,'p7J':function(o7J,D7J){return o7J/D7J;}
,'S9q':function(Y9q,v9q){return Y9q<v9q;}
,'F1Q':function(W1Q,j1Q){return W1Q<j1Q;}
,'G6b':function(s6b,B6b){return s6b-B6b;}
,'W7I':function(j7I,S4I){return j7I<S4I;}
,'Y8J':function(v8J,V8J){return v8J!==V8J;}
,'S8g':function(Y8g,v8g){return Y8g!=v8g;}
,'T1n':function(A1n,w1n){return A1n==w1n;}
,'u38':function(b38,N38){return b38===N38;}
,'K1n':function(m1n,z1n){return m1n==z1n;}
,'v8Q':function(V8Q,y8Q){return V8Q===y8Q;}
,'p2I':function(o2I,D2I){return o2I/D2I;}
,'J48':function(d48,E48){return d48*E48;}
,'U4b':function(P4b,Q4b){return P4b<Q4b;}
,'s3I':function(B3I,f3I){return B3I===f3I;}
,'g5T':function(I5T,C5T){return I5T==C5T;}
,'d98':function(E98,l98){return E98==l98;}
,'W3g':function(j3g,S6q){return j3g<S6q;}
,'q9':function(i9,a9){return i9-a9;}
,'J7':function(d7,E7){return d7/E7;}
,'q8u':function(i8u,a8u){return i8u-a8u;}
,'j0n':function(S8n,Y8n){return S8n-Y8n;}
,'v4u':function(V4u,y4u){return V4u/y4u;}
,'y4I':function(R4I,J4I){return R4I===J4I;}
,'b3P':function(N3P,F3P){return N3P<=F3P;}
,'a5g':function(k5g,c5g){return k5g===c5g;}
,'s9n':function(B9n,f9n){return B9n-f9n;}
,'i5I':function(a5I,k5I){return a5I<k5I;}
,'q4u':function(i4u,a4u){return i4u<a4u;}
,'C7J':function(e7J,T7J){return e7J==T7J;}
,'b9':function(N9,F9){return N9===F9;}
,'j7':function(S4,Y4){return S4-Y4;}
,'s1n':function(B1n,f1n){return B1n==f1n;}
,'y88':function(R88,J88){return R88&J88;}
,'E0Q':function(l0Q,t0Q){return l0Q==t0Q;}
,'E4u':function(l4u,t4u){return l4u==t4u;}
,'y1Q':function(R1Q,J1Q){return R1Q===J1Q;}
,'R9g':function(J9g,d9g){return J9g/d9g;}
,'D7q':function(h7q,G7q){return h7q-G7q;}
,'c2q':function(X2q,r2q){return X2q-r2q;}
,'j2g':function(S3g,Y3g){return S3g==Y3g;}
,'N5n':function(F5n,W5n){return F5n-W5n;}
,'B2T':function(f2T,M2T){return f2T>M2T;}
,'K5q':function(m5q,z5q){return m5q>z5q;}
,'R0P':function(J0P,d0P){return J0P<d0P;}
,'L9T':function(p9T,o9T){return p9T==o9T;}
,'Z0I':function(O0I,U0I,P0I){return O0I-U0I-P0I;}
,'S2q':function(Y2q,v2q){return Y2q<v2q;}
,'u0P':function(b0P,N0P){return b0P>=N0P;}
,'t7P':function(q7P,i7P){return q7P-i7P;}
,'Q4':function(H4,n4){return H4/n4;}
,'P28':function(Q28,H28){return Q28/H28;}
,'C9g':function(e9g,T9g){return e9g===T9g;}
,'m2n':function(z2n,u2n){return z2n*u2n;}
,'C28':function(e28,T28){return e28!==T28;}
,'g6J':function(I6J,C6J){return I6J<=C6J;}
,'G18':function(s18,B18){return s18/B18;}
,'a3Q':function(k3Q,c3Q){return k3Q==c3Q;}
,'M1I':function(Z1I,O1I){return Z1I>O1I;}
,'M4Q':function(Z4Q,O4Q){return Z4Q/O4Q;}
,'R2u':function(J2u,d2u){return J2u-d2u;}
,'F8q':function(W8q,j8q,S1q){return W8q-j8q+S1q;}
,'w6b':function(L6b,p6b){return L6b*p6b;}
,'L1':function(p1,o1){return p1>o1;}
,'Y38':function(v38,V38){return v38-V38;}
,'w0':function(L0,p0){return L0<p0;}
,'Z9g':function(O9g,U9g){return O9g-U9g;}
,'K0P':function(m0P,z0P){return m0P&z0P;}
,'Y9u':function(v9u,V9u){return v9u in V9u;}
,'d6n':function(E6n,l6n){return E6n!=l6n;}
,'F2':function(W2,j2){return W2<j2;}
,'o5n':function(D5n,h5n){return D5n-h5n;}
,'e5u':function(T5u,A5u){return T5u!=A5u;}
,'Y1u':function(v1u,V1u){return v1u==V1u;}
,'M1Q':function(Z1Q,O1Q){return Z1Q<O1Q;}
,'z7':function(u7,b7){return u7==b7;}
,'L1n':function(p1n,o1n){return p1n==o1n;}
,'o5b':function(D5b,h5b){return D5b<=h5b;}
,'G0T':function(s0T,B0T){return s0T==B0T;}
,'d5J':4,'I2P':function(C2P,e2P){return C2P&e2P;}
,'q7b':function(i7b,a7b){return i7b<a7b;}
,'c0u':function(X0u,r0u){return X0u!=r0u;}
,'k9g':function(c9g,X9g){return c9g/X9g;}
,'s0q':function(B0q,f0q){return B0q>f0q;}
,'V8q':function(y8q,R8q){return y8q==R8q;}
,'Q7u':function(H7u,n7u){return H7u-n7u;}
,'j9J':function(S0J,Y0J){return S0J>Y0J;}
,'R2n':function(J2n,d2n){return J2n/d2n;}
,'X1b':function(r1b,g1b){return r1b==g1b;}
,'W18':function(j18,S58){return j18<S58;}
,'O48':function(U48,P48){return U48<P48;}
,'W8':function(j8,S1){return j8*S1;}
,'I88':function(C88,e88){return C88>e88;}
,'e0':function(T0,A0){return T0<A0;}
,'v8b':function(V8b,y8b){return V8b!=y8b;}
,'l7':function(t7,q7){return t7!=q7;}
,'q2u':function(i2u,a2u){return i2u-a2u;}
,'Q9Q':function(H9Q,n9Q){return H9Q<n9Q;}
,'H1q':function(n1q,x1q){return n1q<x1q;}
,'r2n':function(g2n,I2n){return g2n<I2n;}
,'p2T':function(o2T,D2T){return o2T<D2T;}
,'t5q':function(q5q,i5q){return q5q>i5q;}
,'t7n':function(q7n,i7n){return q7n*i7n;}
,'y3b':function(R3b,J3b){return R3b!==J3b;}
,'b8':function(N8,F8){return N8===F8;}
,'P7n':function(Q7n,H7n){return Q7n-H7n;}
,'y0g':function(R0g,J0g){return R0g>=J0g;}
,'b18':function(N18,F18){return N18/F18;}
,'W2Q':function(j2Q,S3Q){return j2Q==S3Q;}
,'M6':function(Z6,O6){return Z6<O6;}
,'Q4q':function(H4q,n4q){return H4q<n4q;}
,'Y1q':function(v1q,V1q){return v1q===V1q;}
,'H8q':function(n8q,x8q){return n8q-x8q;}
,'T4b':function(A4b,w4b){return A4b!==w4b;}
,'Y3T':function(v3T,V3T){return v3T-V3T;}
,'J5b':function(d5b,E5b){return d5b-E5b;}
,'r0P':function(g0P,I0P,C0P,e0P){return g0P-I0P+C0P-e0P;}
,'v2T':function(V2T,y2T){return V2T<=y2T;}
,'c3':function(X3,r3){return X3==r3;}
,'L7q':function(p7q,o7q){return p7q-o7q;}
,'T7q':function(A7q,w7q){return A7q<w7q;}
,'x2q':function(K2q,m2q){return K2q-m2q;}
,'Z8b':function(O8b,U8b){return O8b<=U8b;}
,'U3I':function(P3I,Q3I){return P3I/Q3I;}
,'u4J':function(b4J,N4J){return b4J<N4J;}
,'O9P':function(U9P,P9P){return U9P<P9P;}
,'r7I':function(g7I,I7I){return g7I*I7I;}
,'c5T':function(X5T,r5T){return X5T>r5T;}
,'S3':function(Y3,v3){return Y3==v3;}
,'C4u':function(e4u,T4u){return e4u<T4u;}
,'P7I':function(Q7I,H7I){return Q7I/H7I;}
,'F38':function(W38,j38){return W38===j38;}
,'e5b':function(T5b,A5b){return T5b>=A5b;}
,'F0q':function(W0q,j0q){return W0q<=j0q;}
,'c5n':function(X5n,r5n){return X5n*r5n;}
,'v7q':function(V7q,y7q){return V7q!==y7q;}
,'T5q':function(A5q,w5q){return A5q*w5q;}
,'X38':function(r38,g38){return r38==g38;}
,'P7g':function(Q7g,H7g){return Q7g===H7g;}
,'p9':function(o9,D9){return o9<D9;}
,'M6n':function(Z6n,O6n){return Z6n/O6n;}
,'a4I':function(k4I,c4I){return k4I/c4I;}
,'S6b':function(Y6b,v6b){return Y6b<=v6b;}
,'S0q':function(Y0q,v0q){return Y0q-v0q;}
,'U6':function(P6,Q6){return P6==Q6;}
,'n5':function(x5,K5){return x5==K5;}
,'C6I':function(e6I,T6I){return e6I*T6I;}
,'o5Q':function(D5Q,h5Q){return D5Q-h5Q;}
,'S0u':function(Y0u,v0u){return Y0u==v0u;}
,'q7I':function(i7I,a7I){return i7I===a7I;}
,'V5n':function(y5n,R5n){return y5n==R5n;}
,'K0g':function(m0g,z0g){return m0g==z0g;}
,'D3I':function(h3I,G3I){return h3I<G3I;}
,'V8':function(y8,R8){return y8<R8;}
,'h9':function(G9,s9){return G9==s9;}
,'u7P':function(b7P,N7P){return b7P<N7P;}
,'f08':function(M08,Z08){return M08-Z08;}
,'u9u':function(b9u,N9u){return b9u==N9u;}
,'v0Q':function(V0Q,y0Q){return V0Q==y0Q;}
,'s9T':function(B9T,f9T){return B9T!==f9T;}
,'m98':function(z98,u98){return z98-u98;}
,'z5n':function(u5n,b5n){return u5n==b5n;}
,'j6J':function(S7J,Y7J){return S7J===Y7J;}
,'e7T':function(T7T,A7T){return T7T>A7T;}
,'e6g':function(T6g,A6g){return T6g<=A6g;}
,'c7u':function(X7u,r7u){return X7u==r7u;}
,'d1q':function(E1q,l1q){return E1q==l1q;}
,'Q7':function(H7,n7){return H7/n7;}
,'J2g':function(d2g,E2g){return d2g>=E2g;}
,'l4q':function(t4q,q4q){return t4q/q4q;}
,'q4':function(i4,a4){return i4==a4;}
,'n4u':function(x4u,K4u){return x4u*K4u;}
,'o9Q':function(D9Q,h9Q){return D9Q===h9Q;}
,'F9T':function(W9T,j9T){return W9T<j9T;}
,'K2P':function(m2P,z2P){return m2P*z2P;}
,'G48':function(s48,B48){return s48<B48;}
,'v8n':function(V8n,y8n){return V8n==y8n;}
,'N6P':function(F6P,W6P){return F6P===W6P;}
,'J6J':function(d6J,E6J){return d6J-E6J;}
,'M58':function(Z58,O58){return Z58>O58;}
,'W4T':function(j4T,S9T){return j4T!==S9T;}
,'X9T':function(r9T,g9T){return r9T>g9T;}
,'R2b':function(J2b,d2b){return J2b!==d2b;}
,'o8q':function(D8q,h8q){return D8q/h8q;}
,'i4q':function(a4q,k4q){return a4q<k4q;}
,'Y4n':function(v4n,V4n){return v4n<V4n;}
,'s68':function(B68,f68){return B68>f68;}
,'e8P':function(T8P,A8P){return T8P<A8P;}
,'S6J':function(Y6J,v6J){return Y6J*v6J;}
,'U9T':function(P9T,Q9T){return P9T!=Q9T;}
,'q0I':function(i0I,a0I){return i0I==a0I;}
,'R0I':function(J0I,d0I){return J0I===d0I;}
,'x6P':function(K6P,m6P){return K6P<m6P;}
,'o8g':function(D8g,h8g){return D8g>=h8g;}
,'k2u':function(c2u,X2u){return c2u<X2u;}
,'C2Q':function(e2Q,T2Q){return e2Q-T2Q;}
,'M1':function(Z1,O1){return Z1<O1;}
,'E7b':function(l7b,t7b){return l7b<t7b;}
,'U9u':function(P9u,Q9u){return P9u<Q9u;}
,'i5n':function(a5n,k5n){return a5n==k5n;}
,'D4Q':function(h4Q,G4Q){return h4Q-G4Q;}
,'F1n':function(W1n,j1n){return W1n===j1n;}
,'D98':function(h98,G98){return h98/G98;}
,'w9q':function(L9q,p9q){return L9q<p9q;}
,'F2P':function(W2P,j2P){return W2P-j2P;}
,'G08':function(s08,B08){return s08<=B08;}
,'A4T':function(w4T,L4T){return w4T===L4T;}
,'P7Q':function(Q7Q,H7Q){return Q7Q==H7Q;}
,'O6g':function(U6g,P6g){return U6g-P6g;}
,'X4g':function(r4g,g4g){return r4g>g4g;}
,'y3u':function(R3u,J3u){return R3u==J3u;}
,'J0n':function(d0n,E0n){return d0n===E0n;}
,'j8g':function(S1g,Y1g){return S1g/Y1g;}
,'P2n':function(Q2n,H2n){return Q2n*H2n;}
,'J5P':function(d5P,E5P){return d5P-E5P;}
,'d4Q':function(E4Q,l4Q){return E4Q<=l4Q;}
,'S7':function(Y7,v7){return Y7<v7;}
,'w3':function(L3,p3){return L3-p3;}
,'E9':function(l9,t9){return l9-t9;}
,'H4I':function(n4I,x4I){return n4I/x4I;}
,'K1b':function(m1b,z1b){return m1b>z1b;}
,'U3b':function(P3b,Q3b){return P3b>Q3b;}
,'O8':function(U8,P8,Q8,H8){return U8*P8*Q8*H8;}
,'N4':function(F4,W4){return F4-W4;}
,'H9u':function(n9u,x9u){return n9u==x9u;}
,'G9Q':function(s9Q,B9Q){return s9Q===B9Q;}
,'N9J':function(F9J,W9J){return F9J<W9J;}
,'t38':function(q38,i38){return q38===i38;}
,'u4b':function(b4b,N4b){return b4b<=N4b;}
,'U7q':function(P7q,Q7q){return P7q>Q7q;}
,'u4I':function(b4I,N4I){return b4I!==N4I;}
,'B4T':function(f4T,M4T){return f4T-M4T;}
,'l7T':function(t7T,q7T){return t7T-q7T;}
,'Q7T':function(H7T,n7T){return H7T<n7T;}
,'p8b':function(o8b,D8b){return o8b>=D8b;}
,'p1g':function(o1g,D1g){return o1g in D1g;}
,'U6u':function(P6u,Q6u){return P6u==Q6u;}
,'n7b':function(x7b,K7b){return x7b/K7b;}
,'o08':function(D08,h08){return D08/h08;}
,'I58':function(C58,e58){return C58-e58;}
,'n8n':function(x8n,K8n){return x8n*K8n;}
,'B7g':function(f7g,M7g){return f7g-M7g;}
,'t9u':function(q9u,i9u){return q9u*i9u;}
,'a88':function(k88,c88){return k88!=c88;}
,'A7b':function(w7b,L7b){return w7b>L7b;}
,'J5T':function(d5T,E5T){return d5T-E5T;}
,'S5T':function(Y5T,v5T){return Y5T<=v5T;}
,'f0':function(M0,Z0){return M0<=Z0;}
,'o5P':function(D5P,h5P){return D5P-h5P;}
,'j7u':function(S4u,Y4u){return S4u<=Y4u;}
,'I0g':function(C0g,e0g){return C0g==e0g;}
,'j6I':function(S7I,Y7I){return S7I/Y7I;}
,'U1T':function(P1T,Q1T){return P1T*Q1T;}
,'H9n':function(n9n,x9n){return n9n*x9n;}
,'g5I':function(I5I,C5I){return I5I<C5I;}
,'r2u':function(g2u,I2u){return g2u==I2u;}
,'J6P':function(d6P,E6P){return d6P-E6P;}
,'a6q':function(k6q,c6q){return k6q==c6q;}
,'O5P':function(U5P,P5P){return U5P!=P5P;}
,'m4u':function(z4u,u4u){return z4u in u4u;}
,'X6q':function(r6q,g6q){return r6q>g6q;}
,'T1b':function(A1b,w1b){return A1b<=w1b;}
,'Z2T':function(O2T,U2T){return O2T==U2T;}
,'b4T':function(N4T,F4T){return N4T-F4T;}
,'e5I':function(T5I,A5I){return T5I!=A5I;}
,'h9g':function(G9g,s9g){return G9g==s9g;}
,'S6P':function(Y6P,v6P){return Y6P-v6P;}
,'b8T':function(N8T,F8T){return N8T==F8T;}
,'w4P':function(L4P,p4P){return L4P-p4P;}
,'j5I':function(S2I,Y2I){return S2I<Y2I;}
,'B9g':function(f9g,M9g){return f9g/M9g;}
,'y1q':function(R1q,J1q){return R1q==J1q;}
,'J9J':function(d9J,E9J){return d9J<E9J;}
,'f0u':function(M0u,Z0u){return M0u!==Z0u;}
,'k8b':function(c8b,X8b){return c8b>=X8b;}
,'Y3b':function(v3b,V3b){return v3b<V3b;}
,'I6n':function(C6n,e6n){return C6n>e6n;}
,'s7P':function(B7P,f7P){return B7P<f7P;}
,'w2q':function(L2q,p2q){return L2q==p2q;}
,'H88':function(n88,x88){return n88<x88;}
,'J8P':function(d8P,E8P){return d8P<=E8P;}
,'m3q':function(z3q,u3q){return z3q==u3q;}
,'r0b':function(g0b,I0b){return g0b===I0b;}
,'l7u':function(t7u,q7u){return t7u==q7u;}
,'t6':function(q6,i6){return q6<i6;}
,'Q6P':function(H6P,n6P){return H6P>n6P;}
,'G8':function(s8,B8){return s8==B8;}
,'F1I':function(W1I,j1I){return W1I>=j1I;}
,'u5q':function(b5q,N5q){return b5q/N5q;}
,'t1T':function(q1T,i1T){return q1T/i1T;}
,'C9':function(e9,T9){return e9<T9;}
,'B1g':function(f1g,M1g){return f1g*M1g;}
,'h0I':function(G0I,s0I){return G0I*s0I;}
,'E1g':function(l1g,t1g){return l1g<t1g;}
,'s1q':function(B1q,f1q){return B1q>f1q;}
,'U1n':function(P1n,Q1n){return P1n*Q1n;}
,'l5u':function(t5u,q5u){return t5u-q5u;}
,'J7u':function(d7u,E7u){return d7u-E7u;}
,'P3T':function(Q3T,H3T){return Q3T*H3T;}
,'m1g':function(z1g,u1g){return z1g-u1g;}
,'t6u':function(q6u,i6u){return q6u<i6u;}
,'x0n':function(K0n,m0n){return K0n==m0n;}
,'e0T':function(T0T,A0T){return T0T==A0T;}
,'Z8I':function(O8I,U8I){return O8I/U8I;}
,'H4b':function(n4b,x4b){return n4b<x4b;}
,'j9I':function(S0I,Y0I){return S0I===Y0I;}
,'Z7I':function(O7I,U7I){return O7I>U7I;}
,'w4q':function(L4q,p4q){return L4q-p4q;}
,'d1T':function(E1T,l1T){return E1T-l1T;}
,'Y6Q':function(v6Q,V6Q){return v6Q>=V6Q;}
,'L38':function(p38,o38){return p38<o38;}
,'o48':function(D48,h48){return D48>h48;}
,'j6q':function(S7q,Y7q){return S7q==Y7q;}
,'I4J':function(C4J,e4J){return C4J>=e4J;}
,'m28':function(z28,u28){return z28<=u28;}
,'z7T':function(u7T,b7T){return u7T-b7T;}
,'G0u':function(s0u,B0u){return s0u<B0u;}
,'Z7b':function(O7b,U7b){return O7b<U7b;}
,'P7J':function(Q7J,H7J){return Q7J/H7J;}
,'O6J':function(U6J,P6J){return U6J===P6J;}
,'S78':function(Y78,v78){return Y78-v78;}
,'W3P':function(j3P,S68){return j3P/S68;}
,'G7u':function(s7u,B7u){return s7u<B7u;}
,'K9T':function(m9T,z9T){return m9T<z9T;}
,'I6T':function(C6T,e6T){return C6T==e6T;}
,'F0P':function(W0P,j0P){return W0P&j0P;}
,'A0b':function(w0b,L0b){return w0b!=L0b;}
,'g5n':function(I5n,C5n){return I5n*C5n;}
,'u9T':function(b9T,N9T){return b9T==N9T;}
,'H4g':function(n4g,x4g){return n4g<x4g;}
,'D3u':function(h3u,G3u){return h3u==G3u;}
,'V0u':function(y0u,R0u){return y0u==R0u;}
,'H1b':function(n1b,x1b){return n1b<x1b;}
,'X4Q':function(r4Q,g4Q){return r4Q*g4Q;}
,'D3Q':function(h3Q,G3Q){return h3Q*G3Q;}
,'W5P':function(j5P,S2P){return j5P/S2P;}
,'b8b':function(N8b,F8b){return N8b===F8b;}
,'r1P':function(g1P,I1P,C1P,e1P){return g1P-I1P+C1P-e1P;}
,'K4b':function(m4b,z4b){return m4b<z4b;}
,'m8n':function(z8n,u8n){return z8n*u8n;}
,'W6Q':function(j6Q,S7Q){return j6Q/S7Q;}
,'g3':function(I3,C3){return I3==C3;}
,'s0g':function(B0g,f0g){return B0g<f0g;}
,'t5g':function(q5g,i5g){return q5g*i5g;}
,'d3I':function(E3I,l3I){return E3I===l3I;}
,'a0g':function(k0g,c0g){return k0g<=c0g;}
,'Y58':function(v58,V58){return v58>V58;}
,'e5n':function(T5n,A5n){return T5n<A5n;}
,'H1':function(n1,K1){return n1>K1;}
,'W28':function(j28,S38){return j28*S38;}
,'K1T':function(m1T,z1T){return m1T<z1T;}
,'F4I':function(W4I,j4I){return W4I<j4I;}
,'b6q':function(N6q,F6q,W6q){return N6q-F6q+W6q;}
,'B4u':function(f4u,M4u){return f4u/M4u;}
,'N1':function(F1,W1){return F1<W1;}
,'R7q':function(J7q,d7q){return J7q==d7q;}
,'e9b':function(T9b,A9b){return T9b==A9b;}
,'T3b':function(A3b,w3b){return A3b-w3b;}
,'S5Q':function(Y5Q,v5Q){return Y5Q in v5Q;}
,'J78':function(d78,E78){return d78<=E78;}
,'K3I':function(m3I,z3I){return m3I>z3I;}
,'b8u':function(N8u,F8u){return N8u>F8u;}
,'f9Q':function(M9Q,Z9Q){return M9Q===Z9Q;}
,'c08':function(X08,r08){return X08/r08;}
,'v2u':function(V2u,y2u){return V2u<y2u;}
,'v7b':function(V7b,y7b){return V7b*y7b;}
,'d6q':function(E6q,l6q){return E6q<l6q;}
,'a4b':function(k4b,c4b){return k4b<c4b;}
,'X4n':function(r4n,g4n){return r4n<g4n;}
,'f9P':function(M9P,Z9P){return M9P<Z9P;}
,'V7u':function(y7u,R7u){return y7u==R7u;}
,'G9J':function(s9J,B9J){return s9J>B9J;}
,'I7P':function(C7P,e7P){return C7P*e7P;}
,'Q0T':function(H0T,n0T){return H0T>=n0T;}
,'B2u':function(f2u,M2u){return f2u<M2u;}
,'h3g':function(G3g,s3g){return G3g|s3g;}
,'E0b':function(l0b,t0b){return l0b/t0b;}
,'Y9T':function(v9T,V9T){return v9T<V9T;}
,'v4T':function(V4T,y4T){return V4T<y4T;}
,'i5Q':function(a5Q,k5Q){return a5Q>=k5Q;}
,'B7J':function(f7J,M7J){return f7J===M7J;}
,'x7u':function(K7u,m7u){return K7u>=m7u;}
,'K1q':function(m1q,z1q,u1q){return m1q*z1q/u1q;}
,'B28':function(f28,M28){return f28<=M28;}
,'K4J':function(m4J,z4J){return m4J<=z4J;}
,'p7I':function(o7I,D7I){return o7I-D7I;}
,'h4T':function(G4T,s4T){return G4T/s4T;}
,'o8':function(D8,h8){return D8<h8;}
,'w5Q':function(L5Q,p5Q){return L5Q!==p5Q;}
,'f18':function(M18,Z18,O18,U18){return M18-Z18+O18-U18;}
,'F3u':function(W3u,j3u){return W3u/j3u;}
,'K6Q':function(m6Q,z6Q,u6Q){return m6Q-z6Q+u6Q;}
,'Q8P':function(H8P,n8P){return H8P<n8P;}
,'x0I':function(K0I,m0I){return K0I<m0I;}
,'h2I':function(G2I,s2I){return G2I<s2I;}
,'O3':function(U3,P3){return U3<P3;}
,'w18':function(L18,p18){return L18-p18;}
,'q5':function(i5,a5){return i5-a5;}
,'C7Q':function(e7Q,T7Q){return e7Q==T7Q;}
,'i6b':function(a6b,k6b){return a6b<k6b;}
,'V5b':function(y5b,R5b){return y5b/R5b;}
,'S8':function(Y8,v8){return Y8*v8;}
,'v5J':1,'f9I':function(M9I,Z9I){return M9I===Z9I;}
,'X1T':function(r1T,g1T){return r1T<g1T;}
,'G9P':function(s9P,B9P){return s9P/B9P;}
,'z0I':function(u0I,b0I){return u0I-b0I;}
,'g0n':function(I0n,C0n){return I0n==C0n;}
,'C2I':function(e2I,T2I){return e2I==T2I;}
,'b2T':function(N2T,F2T){return N2T-F2T;}
,'c0':function(X0,r0){return X0-r0;}
,'z8P':function(u8P,b8P){return u8P>b8P;}
,'E2u':function(l2u,t2u){return l2u>=t2u;}
,'v8u':function(V8u,y8u){return V8u/y8u;}
,'Q5u':function(H5u,n5u){return H5u==n5u;}
,'U3n':function(P3n,Q3n){return P3n>=Q3n;}
,'k9':function(c9,X9){return c9<X9;}
,'i8':function(a8,k8){return a8==k8;}
,'N6b':function(F6b,W6b){return F6b-W6b;}
,'L8J':(function(){var K8J={}
,h8J=function(G8J,s8J){var B8J=s8J&0xffff;var f8J=s8J-B8J;return ((f8J*G8J|0)+(B8J*G8J|0))|((0x107,64.9E1)<0x97?'c':(39,4.5E1)<=1.400E2?(0xBA,0):(0x6D,8.53E2)<=(30.3E1,6.)?(121.,39.1E1):(0xBF,14));}
,p8J=function(M8J,Z8J,O8J){if(K8J[O8J]!==undefined){return K8J[O8J];}
var U8J=0xcc9e2d51,P8J=(0x237>(86.0E1,1.87E2)?(0xF9,0x1b873593):(0x1F2,91.5E1)<17.?(70,8):(11.65E2,111.));var Q8J=O8J;var H8J=Z8J&~0x3;for(var n8J=((0x17A,0x1EA)>=(0x1A1,133.)?(14.01E2,0):(0x6E,9.81E2));n8J<H8J;n8J+=4){var x8J=(M8J.charCodeAt(n8J)&0xff)|((M8J.charCodeAt(n8J+1)&0xff)<<8)|((M8J.charCodeAt(n8J+((9.02E2,10.57E2)>=101.?(0x137,2):(69.,5.0E1)))&0xff)<<16)|((M8J.charCodeAt(n8J+3)&0xff)<<24);x8J=h8J(x8J,U8J);x8J=((x8J&0x1ffff)<<15)|(x8J>>>17);x8J=h8J(x8J,P8J);Q8J^=x8J;Q8J=((Q8J&0x7ffff)<<13)|(Q8J>>>((58.,0x3F)>=(0x201,52)?(68.,19):(0x25,80.4E1)));Q8J=(Q8J*5+0xe6546b64)|0;}
x8J=((42.,46)<=(0x26,8.700E2)?(53.,0):(93.60E1,5.10E1)>(0x1CF,10.33E2)?10.450E2:(0x1E6,0x16B)<=(8.870E2,1.)?(0x241,'W'):(109,1.339E3));switch(Z8J%4){case 3:x8J=(M8J.charCodeAt(H8J+(0x222>=(10.23E2,0x13F)?(0x56,2):5.58E2<(28.,113.)?(1E0,1.293E3):(8.67E2,43.80E1)<(11.790E2,60)?(0x2E,'e'):(0x192,6)))&0xff)<<16;case 2:x8J|=(M8J.charCodeAt(H8J+1)&0xff)<<8;case ((0x1AE,0x1BF)>(98.,0x19)?(109.,1):(7.15E2,80.80E1)):x8J|=(M8J.charCodeAt(H8J)&0xff);x8J=h8J(x8J,U8J);x8J=((x8J&((1.54E2,5.88E2)>=(7.05E2,0x14D)?(7.55E2,0x1ffff):(95,110.)<35?0xB5:(8.39E2,23)>=(132.,0x225)?(1.35E2,'m'):(44,0x1DA)))<<15)|(x8J>>>(5.11E2<(28,41.40E1)?0x1E6:(0x20,51.)>(9.6E2,0xC)?(108,17):(13.,0xC9)));x8J=h8J(x8J,P8J);Q8J^=x8J;}
Q8J^=Z8J;Q8J^=Q8J>>>16;Q8J=h8J(Q8J,0x85ebca6b);Q8J^=Q8J>>>13;Q8J=h8J(Q8J,0xc2b2ae35);Q8J^=Q8J>>>(8.9E1<(114,24)?" ":(52.,30)<0x37?(90,16):84.2E1<=(0x2B,5.34E2)?(105.5E1,132.0E1):(145.6E1,58.));K8J[O8J]=Q8J;return Q8J;}
;return {h8J:h8J,p8J:p8J}
;}
)(),'G5n':function(s5n,B5n){return s5n<B5n;}
,'D1P':function(h1P,G1P){return h1P/G1P;}
,'z0Q':function(u0Q,b0Q){return u0Q<b0Q;}
,'L0g':function(p0g,o0g){return p0g/o0g;}
,'z6J':function(u6J,b6J){return u6J===b6J;}
,'m7I':function(z7I,u7I){return z7I/u7I;}
,'c0q':function(X0q,r0q){return X0q===r0q;}
,'M4J':function(Z4J,O4J){return Z4J>=O4J;}
,'q2Q':function(i2Q,a2Q){return i2Q==a2Q;}
,'d1b':function(E1b,l1b){return E1b===l1b;}
,'t2P':function(q2P,i2P){return q2P>=i2P;}
,'P7b':function(Q7b,H7b){return Q7b>H7b;}
,'J0q':function(d0q,E0q){return d0q===E0q;}
,'O0Q':function(U0Q,P0Q){return U0Q===P0Q;}
,'s3u':function(B3u,f3u){return B3u==f3u;}
,'L6Q':function(p6Q,o6Q){return p6Q!=o6Q;}
,'R0':function(J0,d0){return J0<d0;}
,'B3g':function(f3g,M3g){return f3g|M3g;}
,'P9g':function(Q9g,H9g){return Q9g!==H9g;}
,'f7u':function(M7u,Z7u){return M7u>Z7u;}
,'f3P':function(M3P,Z3P){return M3P<=Z3P;}
,'Z3T':function(O3T,U3T){return O3T>U3T;}
,'Q4P':function(H4P,n4P){return H4P==n4P;}
,'S5n':function(Y5n,v5n){return Y5n<v5n;}
,'j6g':function(S7g,Y7g){return S7g==Y7g;}
,'G2g':function(s2g,B2g){return s2g==B2g;}
,'f8g':function(M8g,Z8g){return M8g-Z8g;}
,'U88':function(P88,Q88){return P88<Q88;}
,'Q0':function(H0,n0){return H0*n0;}
,'S6g':function(Y6g,v6g){return Y6g>v6g;}
,'f2q':function(M2q,Z2q){return M2q===Z2q;}
,'g9I':function(I9I,C9I){return I9I*C9I;}
,'a68':function(k68,c68){return k68*c68;}
,'G9q':function(s9q,B9q,f9q){return s9q*B9q/f9q;}
,'T98':function(A98,w98){return A98*w98;}
,'j8P':function(S1P,Y1P){return S1P<=Y1P;}
,'M4g':function(Z4g,O4g){return Z4g==O4g;}
,'U1I':function(P1I,Q1I){return P1I>Q1I;}
,'X68':function(r68,g68){return r68*g68;}
,'e3':function(T3,A3){return T3==A3;}
,'w9J':function(L9J,p9J){return L9J>=p9J;}
,'B2Q':function(f2Q,M2Q){return f2Q<M2Q;}
,'t1q':function(q1q,i1q){return q1q>i1q;}
,'F7P':function(W7P,j7P){return W7P==j7P;}
,'M0q':function(Z0q,O0q){return Z0q-O0q;}
,'b8Q':function(N8Q,F8Q){return N8Q==F8Q;}
,'x8P':function(K8P,m8P){return K8P-m8P;}
,'F0':function(W0,j0){return W0*j0;}
,'P2I':function(Q2I,H2I){return Q2I/H2I;}
,'X5q':function(r5q,g5q){return r5q/g5q;}
,'D2P':function(h2P,G2P){return h2P>=G2P;}
,'Y88':function(v88,V88){return v88<=V88;}
,'i9n':function(a9n,k9n){return a9n/k9n;}
,'C3T':function(e3T,T3T){return e3T*T3T;}
,'j0b':function(S8b,Y8b){return S8b>=Y8b;}
,'U0g':function(P0g,Q0g){return P0g==Q0g;}
,'R4u':function(J4u,d4u){return J4u===d4u;}
,'u6T':function(b6T,N6T){return b6T<N6T;}
,'j2q':function(S3q,Y3q){return S3q*Y3q;}
,'a6':function(k6,c6){return k6<c6;}
,'h0J':function(G0J,s0J){return G0J>=s0J;}
,'A9P':function(w9P,L9P){return w9P*L9P;}
,'G8q':function(s8q,B8q){return s8q-B8q;}
,'y38':function(R38,J38){return R38-J38;}
,'Y3u':function(v3u,V3u){return v3u==V3u;}
,'Z9':function(O9,U9){return O9<U9;}
,'u4Q':function(b4Q,N4Q){return b4Q==N4Q;}
,'i9b':function(a9b,k9b){return a9b<k9b;}
,'y1I':function(R1I,J1I){return R1I-J1I;}
,'W2n':function(j2n,S3n){return j2n===S3n;}
,'g3P':function(I3P,C3P){return I3P==C3P;}
,'d4g':function(E4g,l4g){return E4g!==l4g;}
,'W8Q':function(j8Q,S1Q){return j8Q<S1Q;}
,'E7Q':function(l7Q,t7Q){return l7Q>t7Q;}
,'u3b':function(b3b,N3b){return b3b!=N3b;}
,'z7u':function(u7u,b7u){return u7u<=b7u;}
,'s4g':function(B4g,f4g){return B4g/f4g;}
,'Y6u':function(v6u,V6u){return v6u<=V6u;}
,'W5':function(j5,S2){return j5!=S2;}
,'c8q':function(X8q,r8q){return X8q>r8q;}
,'J4P':function(d4P,E4P){return d4P>E4P;}
,'m3g':function(z3g,u3g){return z3g==u3g;}
,'a1b':function(k1b,c1b){return k1b==c1b;}
,'S9I':function(Y9I,v9I){return Y9I<v9I;}
,'x5n':function(K5n,m5n){return K5n-m5n;}
,'I6':function(C6,e6){return C6==e6;}
,'c9I':function(X9I,r9I){return X9I-r9I;}
,'u2P':function(b2P,N2P){return b2P*N2P;}
,'Q9J':function(H9J,n9J){return H9J>n9J;}
,'a1Q':function(k1Q,c1Q){return k1Q-c1Q;}
,'D4I':function(h4I,G4I){return h4I/G4I;}
,'z5u':function(u5u,b5u){return u5u==b5u;}
,'x7T':function(K7T,m7T){return K7T>m7T;}
,'E2I':function(l2I,t2I){return l2I<t2I;}
,'U5q':function(P5q,Q5q){return P5q*Q5q;}
,'H3b':function(n3b,x3b){return n3b!=x3b;}
,'H4J':function(n4J,x4J){return n4J==x4J;}
,'l6g':function(t6g,q6g){return t6g>=q6g;}
,'R08':function(J08,d08){return J08-d08;}
,'I1n':function(C1n,e1n){return C1n<e1n;}
,'i9Q':function(a9Q,k9Q){return a9Q==k9Q;}
,'V8g':function(y8g,R8g){return y8g!=R8g;}
,'u1n':function(b1n,N1n){return b1n===N1n;}
,'C3q':function(e3q,T3q){return e3q>T3q;}
,'N0n':function(F0n,W0n){return F0n==W0n;}
,'R9P':function(J9P,d9P){return J9P<=d9P;}
,'y5q':function(R5q,J5q){return R5q<J5q;}
,'j5Q':function(S2Q,Y2Q){return S2Q==Y2Q;}
,'G4P':function(s4P,B4P){return s4P===B4P;}
,'Q2q':function(H2q,n2q){return H2q===n2q;}
,'w5I':function(L5I,p5I){return L5I>p5I;}
,'n3g':function(x3g,K3g){return x3g!=K3g;}
,'y58':function(R58,J58){return R58-J58;}
,'Y1Q':function(v1Q,V1Q){return v1Q===V1Q;}
,'Z8Q':function(O8Q,U8Q){return O8Q<U8Q;}
,'j9b':function(S0b,Y0b){return S0b<Y0b;}
,'g9b':function(I9b,C9b){return I9b==C9b;}
,'A2n':function(w2n,L2n){return w2n>L2n;}
,'l48':function(t48,q48){return t48*q48;}
,'R8b':function(J8b,d8b){return J8b!=d8b;}
,'z9P':function(u9P,b9P){return u9P/b9P;}
,'f0T':function(M0T,Z0T){return M0T>=Z0T;}
,'a3n':function(k3n,c3n){return k3n==c3n;}
,'G5P':function(s5P,B5P){return s5P-B5P;}
,'R8u':function(J8u,d8u){return J8u<d8u;}
,'S0n':function(Y0n,v0n){return Y0n<v0n;}
,'o0':function(D0,h0){return D0<h0;}
,'g5Q':function(I5Q,C5Q){return I5Q>=C5Q;}
,'i48':function(a48,k48){return a48>k48;}
,'T1Q':function(A1Q,w1Q){return A1Q===w1Q;}
,'l9b':function(t9b,q9b){return t9b<q9b;}
,'L6n':function(p6n,o6n){return p6n>o6n;}
,'D6n':function(h6n,G6n){return h6n/G6n;}
,'W7g':function(j7g,S4g){return j7g==S4g;}
,'a58':function(k58,c58){return k58<c58;}
,'C8b':function(e8b,T8b){return e8b>=T8b;}
,'c4q':function(X4q,r4q){return X4q/r4q;}
,'f4':function(M4,Z4){return M4<Z4;}
,'i78':function(a78,k78,c78,X78){return a78-k78+c78-X78;}
,'U5g':function(P5g,Q5g){return P5g<Q5g;}
,'O7T':function(U7T,P7T){return U7T==P7T;}
,'C8Q':function(e8Q,T8Q){return e8Q==T8Q;}
,'F68':function(W68,j68){return W68/j68;}
,'y6':function(R6,J6){return R6==J6;}
,'c7':function(X7,r7){return X7/r7;}
,'X1':function(r1,g1){return r1>g1;}
,'k0P':function(c0P,X0P){return c0P/X0P;}
,'e9J':function(T9J,A9J){return T9J>A9J;}
,'X3n':function(r3n,g3n){return r3n*g3n;}
,'r8I':function(g8I,I8I){return g8I===I8I;}
,'Y2P':function(v2P,V2P){return v2P/V2P;}
,'I9T':function(C9T,e9T){return C9T<e9T;}
,'f9b':function(M9b,Z9b){return M9b>Z9b;}
,'F3n':function(W3n,j3n){return W3n<j3n;}
,'p8I':function(o8I,D8I){return o8I==D8I;}
,'X4J':function(r4J,g4J){return r4J/g4J;}
,'r0I':function(g0I,I0I){return g0I-I0I;}
,'y4n':function(R4n,J4n){return R4n/J4n;}
,'I1Q':function(C1Q,e1Q){return C1Q===e1Q;}
,'e5Q':function(T5Q,A5Q){return T5Q==A5Q;}
,'b28':function(N28,F28){return N28>F28;}
,'M6T':function(Z6T,O6T){return Z6T===O6T;}
,'E08':function(l08,t08,q08){return l08-t08+q08;}
,'b98':function(N98,F98,W98,j98){return N98-F98+W98+j98;}
,'q0b':function(i0b,a0b){return i0b*a0b;}
,'q7J':function(i7J,a7J){return i7J<a7J;}
,'K0':function(m0,z0){return m0-z0;}
,'R4':function(J4,d4){return J4<=d4;}
,'P0J':function(Q0J,H0J){return Q0J>=H0J;}
,'M88':function(Z88,O88){return Z88*O88;}
,'D0P':function(h0P,G0P){return h0P/G0P;}
,'y3T':function(R3T,J3T){return R3T==J3T;}
,'z0b':function(u0b,b0b){return u0b<b0b;}
,'O6b':function(U6b,P6b){return U6b>P6b;}
,'d1Q':function(E1Q,l1Q){return E1Q<l1Q;}
,'h2':function(G2,s2){return G2==s2;}
,'W2b':function(j2b,S3b){return j2b>S3b;}
,'s6T':function(B6T,f6T){return B6T<f6T;}
,'q4T':function(i4T,a4T){return i4T<a4T;}
,'I1I':function(C1I,e1I){return C1I!==e1I;}
,'z1':function(u1,b1){return u1==b1;}
,'U1P':function(P1P,Q1P){return P1P/Q1P;}
,'S7n':function(Y7n,v7n){return Y7n-v7n;}
,'l9q':function(t9q,q9q){return t9q===q9q;}
,'i8q':function(a8q,k8q){return a8q<k8q;}
,'z5T':function(u5T,b5T){return u5T>=b5T;}
,'J0T':function(d0T,E0T){return d0T-E0T;}
,'T6n':function(A6n,w6n){return A6n*w6n;}
,'c3P':function(X3P,r3P){return X3P<=r3P;}
,'X6n':function(r6n,g6n){return r6n/g6n;}
,'N9P':function(F9P,W9P){return F9P-W9P;}
,'B8u':function(f8u,M8u){return f8u>M8u;}
,'H6T':function(n6T,x6T){return n6T===x6T;}
,'t58':function(q58,i58){return q58*i58;}
,'V9I':function(y9I,R9I){return y9I===R9I;}
,'F58':function(W58,j58){return W58-j58;}
,'I1T':function(C1T,e1T){return C1T<e1T;}
,'N7T':function(F7T,W7T){return F7T==W7T;}
,'v0J':function(V0J,y0J){return V0J<y0J;}
,'f6J':function(M6J,Z6J){return M6J<Z6J;}
,'q7Q':function(i7Q,a7Q){return i7Q-a7Q;}
,'A8u':function(w8u,L8u){return w8u/L8u;}
,'U2P':function(P2P,Q2P){return P2P<Q2P;}
,'r3q':function(g3q,I3q){return g3q===I3q;}
,'N9b':function(F9b,W9b){return F9b==W9b;}
,'p6I':function(o6I,D6I){return o6I*D6I;}
,'n18':function(x18,K18){return x18/K18;}
,'S7u':function(Y7u,v7u){return Y7u/v7u;}
,'g9q':function(I9q,C9q){return I9q==C9q;}
,'r8Q':function(g8Q,I8Q){return g8Q===I8Q;}
,'Z2Q':function(O2Q,U2Q){return O2Q==U2Q;}
,'F5q':function(W5q,j5q){return W5q<j5q;}
,'p7b':function(o7b,D7b){return o7b<D7b;}
,'e48':function(T48,A48){return T48!=A48;}
,'d4I':function(E4I,l4I){return E4I/l4I;}
,'l9J':function(t9J,q9J){return t9J-q9J;}
,'l8g':function(t8g,q8g){return t8g/q8g;}
,'V9n':function(y9n,R9n){return y9n-R9n;}
,'S5I':function(Y5I,v5I){return Y5I<v5I;}
,'b0J':function(N0J,F0J){return N0J!=F0J;}
,'V5T':function(y5T,R5T){return y5T==R5T;}
,'s3b':function(B3b,f3b){return B3b<f3b;}
,'e6P':function(T6P,A6P){return T6P===A6P;}
,'U4g':function(P4g,Q4g){return P4g==Q4g;}
,'O0u':function(U0u,P0u){return U0u<P0u;}
,'j0Q':function(S8Q,Y8Q){return S8Q===Y8Q;}
,'h7n':function(G7n,s7n){return G7n>s7n;}
,'w7u':function(L7u,p7u){return L7u<p7u;}
,'E2T':function(l2T,t2T){return l2T!==t2T;}
,'U1Q':function(P1Q,Q1Q){return P1Q>Q1Q;}
,'x5T':function(K5T,m5T){return K5T<=m5T;}
,'f5Q':function(M5Q,Z5Q){return M5Q==Z5Q;}
,'f8':function(M8,Z8){return M8===Z8;}
,'j7T':function(S4T,Y4T){return S4T>Y4T;}
,'I5q':function(C5q,e5q){return C5q*e5q;}
,'k2T':function(c2T,X2T){return c2T==X2T;}
,'J8':function(d8,E8){return d8<E8;}
,'y68':function(R68,J68){return R68/J68;}
,'x0u':function(K0u,m0u){return K0u==m0u;}
,'o7':function(D7,h7){return D7==h7;}
,'g2q':function(I2q,C2q){return I2q>=C2q;}
,'J5u':function(d5u,E5u){return d5u-E5u;}
,'G3':function(s3,B3){return s3==B3;}
,'k4u':function(c4u,X4u){return c4u!=X4u;}
,'W0J':function(j0J,S8J){return j0J<S8J;}
,'t3n':function(q3n,i3n){return q3n==i3n;}
,'V2g':function(y2g,R2g){return y2g<R2g;}
,'V78':function(y78,R78){return y78*R78;}
,'R2T':function(J2T,d2T){return J2T<d2T;}
,'f9J':function(M9J,Z9J){return M9J<Z9J;}
,'a7P':function(k7P,c7P){return k7P<c7P;}
,'H6':function(n6,x6){return n6<x6;}
,'P2T':function(Q2T,H2T){return Q2T*H2T;}
,'U6Q':function(P6Q,Q6Q){return P6Q<=Q6Q;}
,'Y0g':function(v0g,V0g){return v0g-V0g;}
,'B0J':function(f0J,M0J){return f0J<=M0J;}
,'X4b':function(r4b,g4b){return r4b===g4b;}
,'x9I':function(K9I,m9I){return K9I/m9I;}
,'O2g':function(U2g,P2g){return U2g==P2g;}
,'N5T':function(F5T,W5T){return F5T<=W5T;}
,'L9u':function(p9u,o9u){return p9u-o9u;}
,'h6I':function(G6I,s6I,B6I){return G6I-s6I+B6I;}
,'X6Q':function(r6Q,g6Q){return r6Q<g6Q;}
,'I3n':function(C3n,e3n){return C3n*e3n;}
,'D6u':function(h6u,G6u){return h6u==G6u;}
,'G6J':function(s6J,B6J){return s6J>=B6J;}
,'p8u':function(o8u,D8u){return o8u-D8u;}
,'H1n':function(n1n,x1n){return n1n*x1n;}
,'x5I':function(K5I,m5I){return K5I-m5I;}
,'A4':function(w4,L4,p4){return w4-L4+p4;}
,'Z7Q':function(O7Q,U7Q){return O7Q/U7Q;}
,'o0u':function(D0u,h0u){return D0u-h0u;}
,'M3u':function(Z3u,O3u){return Z3u==O3u;}
,'I7q':function(C7q,e7q){return C7q==e7q;}
,'R1g':function(J1g,d1g){return J1g<d1g;}
,'c5b':function(X5b,r5b){return X5b-r5b;}
,'Y4b':function(v4b,V4b){return v4b==V4b;}
,'W3T':function(j3T,S6u){return j3T/S6u;}
,'m08':function(z08,u08){return z08/u08;}
,'m7Q':function(z7Q,u7Q){return z7Q==u7Q;}
,'H1u':function(n1u,x1u){return n1u-x1u;}
,'X1n':function(r1n,g1n){return r1n>g1n;}
,'X1q':function(r1q,g1q){return r1q>=g1q;}
,'N0b':function(F0b,W0b){return F0b<=W0b;}
,'Z78':function(O78,U78){return O78<=U78;}
}
;(function(){var g3J=v9S.C04.e04("c31b")?"function":"rounded",c5G=v9S.C04.e04("17")?"wasMouseDown":"stx",k5J=v9S.C04.e04("ee")?"month":"undefined";function _stxKernel_js(_stxThirdParty,_exports){var n64=v9S.C04.e04("47")?"createDataSegment":"maintainScroll",N1G=v9S.C04.e04("d65f")?"dataSet":"setRange",S5J=v9S.C04.e04("3c")?"dataSegment":"control",p2G=v9S.C04.e04("fcdc")?"leftTick":"minute",B94=v9S.C04.e04("5b6")?"myTimeZoneOffset":"Fe",g7G="mp",a6G=v9S.C04.e04("d28c")?"numeric":"lookup",e9G=0.3,s3G=33,W4G="vertical",d0G='tick',r6G=v9S.C04.e04("527")?"iphone":"uo",F7G="or",W2J=v9S.C04.e04("8d73")?"center":"touch4",t5J=v9S.C04.e04("b38")?"displaySticky":"top",e74="bottom",a9G="stx_watermark",K44=v9S.C04.e04("58")?"mouse":"grabMode",R5J=6,T9G=((0x16,0x1BD)<3.68E2?(0xD0,2):67>(0x8F,23.3E1)?0x1E8:(9.450E2,0x136)<(0x18,8.97E2)?(103.4E1,0.2):(0x113,68.9E1)),G9G=0.8,M64=((65,1.59E2)<0xEE?(0x7,20):(102.,0xB)),F3G="stx-show",z9G="ve",d64=30,b4G=v9S.C04.e04("abe")?"ut":"preAdjustScroll",r64=v9S.C04.e04("2f1a")?"attachQuoteFeed":"dl",Y1G="stx-grab",E2J="M",c9G=v9S.C04.e04("616")?"touchend":"High",Y6G="touchmove",K8G="touchstart",A4G="mousedown",D2J="se",m2J="mou",O9G="ed",B2G="*",j9G="ch",z6G="ay",G64=12,F44="all",T7G="object",x94="di",c74=(1.25E3>(120.5E1,95.2E1)?(108.,"C"):(130,4.65E2)<=0x130?21.:(0x77,0x6)),n5J=((73,0x65)>=33.?(1.419E3,"T"):0x1B2<=(105.,25.)?(8.0E1,0x71):(62,39)),A5G="je",M1J=((134,0xBD)<=(18.40E1,1.316E3)?(0xC6,"Q"):(0x18E,11.99E2)<=(7.17E2,0x14E)?2:120>=(3.14E2,77.7E1)?(5.76E2,0x23C):(0x0,99)),F64="#FFFFFF",o0G="#000000",V3G=((0x40,38)>=(132.,14.23E2)?(56.,46.):19.0E1>(121.,0xD8)?'A':(52,0x175)<123.9E1?(18.,"f"):(17,8.75E2)),s8G="/",h74="tx",l64=32,z4G="ate",q8G="ol",k9G="ee",u94="Compare To",i2G="re",p6G="D",T1G="ote",B8G="u",w94="ba",n0G="ta",o8G="he",b3J="ic",A5J="month",u9G="week",u8G="te",k6G="calculate",L1J="overlay",B6G="underlay",b5J="ie",H4G="ov",N7G="ries",o5J="S",P3J="day",V7G="gap",s2J="tap",x4G="stx-drag-chart",y04=250,b74="mouseup",d04="in",n6G="stx_crosshair",C7G="stx_crosshair_drawing",t2J="segment",I3G=")",K6G=" (",k2G=((57.6E1,0x1A3)>=(38,149)?(0x13F,"%"):(0x1D,0x226)<=(0x8B,0x86)?"G":(1.630E2,147.0E1)),B44=10000,H44=1000,C5J=0.01,L9G=0.1,X9G="measureUnlit",H74="mMeasure",R4G="inline-block",V44=50,m74=60,f1J="an",R9G="mousemove",W44="none",S6G="block",P9G="stx-crosshair-on",D1G="p",t74="px",V94=100,c64="second",h94=":",t1G="-",m8G="line",y9G="_",W5J="ar",w2G="h",e5G="x_",r5G=(2.<(64.,0x252)?(123.5E1,"l"):(8.72E2,1.154E3)),h2G="vo",G1J="Data",V2G="stx_candle_shadow",s5J="stx_candle_down",H1J="stx_candle_up",T2G="ha",d4G="c",v04="w",r9G="rror",y5G="n",c3G=((51,0x13A)>0?(0x7B,"g"):(6.01E2,43)),I0G="stx_",Q8G="le",M44="de",a5G="o",A7G="b",K2G="i",k64="left",I4G="er",l2J="id",m94="x",m7G="st",X04="border",j6G="fill",L8G="text",G4G="stx_grid",D3J="stroke",f64="grid",c2J="stx_yaxis",H9G="drawYAxis",I9G=(0x134<=(110,53.2E1)?(0x1DC,0.5):(35.5E1,145.70E1)),A8G="",j1G="0",S74=10,p7G="chart",t5G="1",s5G=((0x24B,145)<25.3E1?(1.342E3,"m"):134.6E1<=(107,34)?"all":(141.,6.41E2)>=10.24E2?0x2D:(0x6A,8.81E2)),X64=". ",P0G="on",F1G="ti",B7G="ss",Z74=": ",L44="it",a8G=((0x17F,0x20)>(0x14D,56.)?0xC3:(76.60E1,42.)<=(117.10E1,0xAE)?(0x36,"W"):(25.,24.)>84.?1.37:(10.4E1,7.05E2)),l9G="ck",e94=((47,103)>0x1B1?6:(0x1C3,0x207)<=(1.436E3,81)?0x14C:(0xA4,2.6E1)<=100?(89.,"y"):(0x5A,0x76)),f7G="a",E2G="k",c1G=(5.19E2<(7.99E2,65.10E1)?(0x139,"s"):(4.01E2,134.)>=(69,79.9E1)?(88.2E1,46.6E1):0x6>(89.,11.05E2)?1.048E3:(140,0x1F2)),y44="is",W6G="Ax",z74=((2.5E1,1.133E3)>=0x24B?(64.,"A"):49.30E1<(11.16E2,0xEE)?41:8.92E2<(0x1B6,0x93)?8.06E2:(77,1.356E3)),h8G="t",n1G="ec",u7G=(1.46E2>=(0x4F,0x20D)?'y':(8.13E2,27.)>(9.70E1,67.9E1)?0x122:(9.41E2,0x1D8)>29.?(106.,"d"):(62,0.)),v1G="r",J4G=((22.,66.)<=(0x51,0x231)?(133.3E1,"e"):(0xE6,0x6F)<=(0x65,17.)?(65.4E1,0xD3):0.>(42.40E1,0xEC)?(4.04E2,73.0E1):(6,48.5E1)),g04="v",a7G="drawing",M3J="vector",p5J="layout",I44=false,C4G=((0xB8,2.010E2)>=48?(8.45E2," "):(8.52E2,1.024E3)),W0G="transparent",G2J="div",t2G=((1.76E2,33.)<=(33.,20.)?(60.6E1,0x9B):110.>(0x6F,130)?(35.9E1,0x10A):(5.15E2,26)<1.385E3?(140,true):(0xDA,0x13F)),J8G="#zoomOut",l2G="#zoomIn",b5G="#",a4G='nd',k5G='line',h5J='os',E3J='ane',H2J='ow',Y4G='lass',U74='oc',K5J='it',B3J='> ',I2J='andle',S94='sp',f2J='oat',R64=((14.14E2,0x9E)<88.?(7.33E2,0x36):82.9E1>=(31.40E1,96.)?(0xF9,'f'):(0x120,0x19)),R7G='on',o1G='isplay',t7G='me',i8G='oday',j5J='x_jump',t8G=((126,0x9F)>=55?(13.,'I'):(70.,127.)),B5J='oom',v3J='mOut',L7G='z',S04='ze',H5J='tS',m64=';"><',z1G='px',N1J=(91.<(7.,0x70)?(2.58E2,'2'):(4.54E2,5.64E2)),r7G='om',p5G='pl',t9G='yl',H8G='nt',M2J='art_c',i6G='ay',X2G='ispl',k3G='r_y',U3G='ssh',v44='_c',w1G='tx',R04=';"></',n2G='splay',f1G='ty',f5J='_x',E44='ai',E04='h',L1G='ro',x74='_',P94='ha',m4G='tx_cr',M6G='iv',B64='>)</',s4G='ge',k74='li',z5G='ight',Q2G='xt',b8G='T',P1G='nage',a3G='Ma',c8G='u',f94='ick',R1G='ht',v8G='ig',U5J='">',K7G='leteT',j3G='se',Q1J='ou',l1G='><',Y9G='>(</',V0G='ons',z3J='stru',j2J='In',x7G='te',O74='De',b64='ouse',S0G='></',d3G=';</',K1G='bs',Y0G='">&',O4G='ra',v94='co',X2J='as',T8G='"><',e1G='isp',Q3G='le',z7G='C',s64='sh',o2G='yT',A9G=(133<=(0x204,0x27)?'j':(13.,75.)<=0x1EC?(143.,'r'):(1.29E3,102.)),Z3G='=""><',w5G='ass',b1G='tCl',d9G='gh',S1G='yR',R8G='Sti',l5G='pan',L2G='> <',u1G='"></',x5J='or',b0G='ri',F3J='ckyI',i5J='"> <',t4G='y',b44='k',j7G='ic',J1G='S',q74='ce',m0G='0px',o2J='1',s3J=((0x17C,8.91E2)<(0x15A,60.)?(130,109):(100.9E1,0x21D)>29.?(41.,':'):136>=(0x210,145)?1000:(6.51E2,78)),S44='eft',d94='l',r3G='gin',v2J='ar',t44='m',A64='; ',Z44='o',h3G='play',c94='i',N9G='tyle',x3J='el',T5G='nnotation_c',d1G='x_a',Z1J='ss',d7G='la',s0G='pa',g4G='>',i04='</',M3G='e',O0G='v',q5G=';">',V5G='one',o44='n',z2G=': ',Z7G='lay',n1J='is',Y74='d',I94='yle',V2J='" ',O5G='ave',C2G='on_',Z4G='ti',h6G='ota',u5G='nn',r74='a',z3G='x_',q9G='tn',G74=((0x7,69.3E1)<=(0x24F,129.)?(108,0x162):(75.,35.2E1)<=108.2E1?(0x1A4,'b'):(136.,0x157)),C2J='-',S4G=((0x54,142.)<(0x176,32.)?(5.41E2,52.):(12.82E2,20)<116.?(45.,'x'):(15,65.)>=(26.,20.70E1)?0x17C:(0x16E,3E0)),E8G='t',w3G='="',a0G='las',Q64='c',S64=' ',P1J='an',R0G='p',K9G='s',t6G=((115,0x81)>20?(5.060E2,'<'):(29,0x15)),J2G=null,H=function(K){STX.Comparison.mouseHasMoved=K;}
,P=function(Q){STXChart.CANDLEEVEN=Q;}
,O=function(U){STXChart.CANDLEDOWN=U;}
,M=function(Z){STXChart.CANDLEUP=Z;}
,G=function(B){STXChart.CLOSEEVEN=B;}
,L=function(D){STXChart.CLOSEDOWN=D;}
,T=function(A){STXChart.CLOSEUP=A;}
,X=function(C){STXChart.NONE=C;}
,E=function(k){STX.camelCaseRegExp=k;}
,plotSpline=_stxThirdParty.plotSpline,plotSplinePrimitive=_stxThirdParty.plotSplinePrimitive,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;if(STX.isSurface){var R=function(J){STX.gesturePointerId=J;}
,Y=function(V){STX.gesture.target=V.body;}
;STX.gesture=new MSGesture();Y(document);R(J2G);}
STXChart.htmlControls={"annotationSave":(t6G+K9G+R0G+P1J+S64+Q64+a0G+K9G+w3G+K9G+E8G+S4G+C2J+G74+q9G+S64+K9G+E8G+z3G+r74+u5G+h6G+Z4G+C2G+K9G+O5G+V2J+K9G+E8G+I94+w3G+Y74+n1J+R0G+Z7G+z2G+o44+V5G+q5G+K9G+r74+O0G+M3G+i04+K9G+R0G+r74+o44+g4G),"annotationCancel":(t6G+K9G+s0G+o44+S64+Q64+d7G+Z1J+w3G+K9G+E8G+S4G+C2J+G74+E8G+o44+S64+K9G+E8G+d1G+T5G+r74+o44+Q64+x3J+V2J+K9G+N9G+w3G+Y74+c94+K9G+h3G+z2G+o44+Z44+o44+M3G+A64+t44+v2J+r3G+C2J+d94+S44+s3J+o2J+m0G+q5G+Q64+r74+o44+q74+d94+i04+K9G+s0G+o44+g4G),"mSticky":(t6G+Y74+c94+O0G+S64+c94+Y74+w3G+t44+J1G+E8G+j7G+b44+t4G+i5J+K9G+s0G+o44+S64+c94+Y74+w3G+t44+J1G+Z4G+F3J+o44+E8G+M3G+b0G+x5J+u1G+K9G+R0G+P1J+L2G+K9G+l5G+S64+c94+Y74+w3G+t44+R8G+Q64+b44+S1G+c94+d9G+b1G+c94+Q64+b44+V2J+Q64+d94+w5G+Z3G+K9G+s0G+o44+S64+c94+Y74+w3G+Z44+O0G+M3G+A9G+d94+r74+o2G+A9G+r74+s64+z7G+P1J+V2J+Q64+d7G+K9G+K9G+w3G+K9G+E8G+S4G+C2J+G74+q9G+V2J+K9G+E8G+t4G+Q3G+w3G+Y74+e1G+d94+r74+t4G+s3J+o44+V5G+T8G+K9G+R0G+r74+o44+S64+Q64+d94+X2J+K9G+w3G+K9G+E8G+S4G+C2J+c94+v94+C2J+E8G+O4G+s64+Y0G+o44+K1G+R0G+d3G+K9G+s0G+o44+S0G+K9G+s0G+o44+L2G+K9G+l5G+S64+c94+Y74+w3G+t44+b64+O74+Q3G+x7G+j2J+z3J+Q64+E8G+c94+V0G+T8G+K9G+R0G+P1J+Y9G+K9G+R0G+r74+o44+l1G+K9G+s0G+o44+S64+c94+Y74+w3G+t44+Q1J+j3G+O74+K7G+M3G+S4G+E8G+U5J+A9G+v8G+R1G+C2J+Q64+d94+f94+S64+E8G+Z44+S64+Y74+x3J+M3G+x7G+i04+K9G+R0G+r74+o44+l1G+K9G+s0G+o44+S64+c94+Y74+w3G+t44+Z44+c8G+j3G+a3G+P1G+b8G+M3G+Q2G+U5J+A9G+z5G+C2J+Q64+k74+Q64+b44+S64+E8G+Z44+S64+t44+r74+o44+r74+s4G+i04+K9G+l5G+l1G+K9G+R0G+r74+o44+B64+K9G+s0G+o44+S0G+K9G+R0G+r74+o44+S0G+K9G+l5G+S0G+Y74+M6G+g4G),"crossX":(t6G+Y74+M6G+S64+Q64+a0G+K9G+w3G+K9G+m4G+Z44+K9G+K9G+P94+c94+A9G+S64+K9G+E8G+S4G+x74+Q64+L1G+Z1J+E04+E44+A9G+f5J+V2J+K9G+f1G+d94+M3G+w3G+Y74+c94+n2G+z2G+o44+Z44+o44+M3G+R04+Y74+M6G+g4G),"crossY":(t6G+Y74+M6G+S64+Q64+d94+r74+K9G+K9G+w3G+K9G+w1G+v44+A9G+Z44+Z1J+E04+E44+A9G+S64+K9G+E8G+S4G+x74+Q64+L1G+U3G+E44+k3G+V2J+K9G+f1G+d94+M3G+w3G+Y74+X2G+i6G+z2G+o44+V5G+R04+Y74+c94+O0G+g4G),"chartControls":(t6G+Y74+M6G+S64+Q64+d94+X2J+K9G+w3G+K9G+E8G+z3G+Q64+E04+M2J+Z44+H8G+L1G+d94+K9G+V2J+K9G+E8G+t9G+M3G+w3G+Y74+n1J+p5G+i6G+z2G+o44+Z44+o44+M3G+A64+G74+Z44+E8G+E8G+r7G+z2G+N1J+N1J+z1G+m64+Y74+M6G+S64+c94+Y74+w3G+Q64+E04+v2J+H5J+c94+S04+T8G+K9G+s0G+o44+S64+c94+Y74+w3G+L7G+Z44+Z44+v3J+V2J+Q64+d94+r74+K9G+K9G+w3G+K9G+E8G+S4G+C2J+L7G+Z44+Z44+t44+C2J+Z44+c8G+E8G+u1G+K9G+R0G+P1J+l1G+K9G+R0G+r74+o44+S64+c94+Y74+w3G+L7G+B5J+t8G+o44+V2J+Q64+d7G+Z1J+w3G+K9G+E8G+S4G+C2J+L7G+Z44+r7G+C2J+c94+o44+u1G+K9G+R0G+P1J+S0G+Y74+M6G+S0G+Y74+M6G+g4G),"home":(t6G+Y74+M6G+S64+c94+Y74+w3G+E04+Z44+t44+M3G+V2J+Q64+d7G+K9G+K9G+w3G+K9G+E8G+j5J+x74+E8G+i8G+S64+E04+Z44+t7G+V2J+K9G+f1G+Q3G+w3G+Y74+o1G+s3J+o44+R7G+M3G+T8G+K9G+l5G+S0G+K9G+s0G+o44+S0G+Y74+M6G+g4G),"floatDate":(t6G+Y74+M6G+S64+Q64+a0G+K9G+w3G+K9G+w1G+C2J+R64+d94+f2J+C2J+Y74+r74+E8G+M3G+V2J+K9G+E8G+I94+w3G+Y74+c94+S94+d94+i6G+z2G+o44+Z44+o44+M3G+R04+Y74+M6G+g4G),"handleTemplate":(t6G+Y74+M6G+S64+Q64+d7G+Z1J+w3G+K9G+E8G+S4G+C2J+c94+v94+C2J+E04+I2J+V2J+K9G+E8G+t9G+M3G+w3G+Y74+e1G+d94+r74+t4G+z2G+o44+Z44+o44+M3G+m64+K9G+R0G+r74+o44+S0G+K9G+R0G+r74+o44+S0G+Y74+M6G+B3J),"iconsTemplate":(t6G+Y74+M6G+S64+Q64+d94+r74+Z1J+w3G+K9G+E8G+S4G+C2J+R0G+P1J+x3J+C2J+Q64+Z44+H8G+A9G+Z44+d94+T8G+Y74+c94+O0G+S64+Q64+d94+w5G+w3G+K9G+E8G+S4G+C2J+R0G+r74+o44+x3J+C2J+E8G+K5J+Q3G+u1G+Y74+c94+O0G+l1G+Y74+c94+O0G+S64+Q64+a0G+K9G+w3G+K9G+w1G+C2J+G74+q9G+C2J+R0G+r74+o44+x3J+T8G+K9G+s0G+o44+S64+Q64+a0G+K9G+w3G+K9G+E8G+S4G+C2J+c94+Q64+Z44+C2J+c8G+R0G+u1G+K9G+s0G+o44+S0G+Y74+M6G+l1G+Y74+M6G+S64+Q64+d7G+Z1J+w3G+K9G+w1G+C2J+G74+q9G+C2J+R0G+P1J+x3J+T8G+K9G+s0G+o44+S64+Q64+d94+r74+Z1J+w3G+K9G+w1G+C2J+c94+Q64+Z44+C2J+R64+U74+c8G+K9G+u1G+K9G+l5G+S0G+Y74+c94+O0G+l1G+Y74+c94+O0G+S64+Q64+d94+r74+K9G+K9G+w3G+K9G+w1G+C2J+G74+E8G+o44+C2J+R0G+P1J+M3G+d94+T8G+K9G+R0G+r74+o44+S64+Q64+Y4G+w3G+K9G+w1G+C2J+c94+v94+C2J+Y74+H2J+o44+u1G+K9G+R0G+r74+o44+S0G+Y74+M6G+l1G+Y74+M6G+S64+Q64+a0G+K9G+w3G+K9G+w1G+C2J+G74+q9G+C2J+R0G+r74+o44+x3J+T8G+K9G+l5G+S64+Q64+d7G+Z1J+w3G+K9G+w1G+C2J+c94+v94+C2J+M3G+Y74+K5J+u1G+K9G+R0G+r74+o44+S0G+Y74+M6G+l1G+Y74+c94+O0G+S64+Q64+d94+r74+K9G+K9G+w3G+K9G+E8G+S4G+C2J+G74+E8G+o44+C2J+R0G+E3J+d94+T8G+K9G+s0G+o44+S64+Q64+Y4G+w3G+K9G+E8G+S4G+C2J+c94+Q64+Z44+C2J+Q64+d94+h5J+M3G+u1G+K9G+l5G+S0G+Y74+M6G+S0G+Y74+c94+O0G+g4G),"baselineHandle":(t6G+Y74+c94+O0G+S64+Q64+d7G+Z1J+w3G+K9G+w1G+C2J+G74+r74+K9G+M3G+k5G+C2J+E04+r74+a4G+Q3G+S64+R64+r74+V2J+K9G+f1G+d94+M3G+w3G+Y74+c94+S94+d94+i6G+z2G+o44+V5G+R04+Y74+M6G+g4G),}
;STXChart.prototype.registerHTMLElements=function(){var n74="DIV",q94="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==k5J&&typeof this.controls[control]==k5J){if(!this.allowZoom&&v9S.F(control,q94))continue;var el=$$$(b5G+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(n74);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$(l2G,this.controls.chartControls),zoomOut=$$$(J8G,this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){return function(e){self.zoomOut();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomIn.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);zoomOut.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomOut.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
if(this.controls.home){STX.safeClickTouch(this.controls.home,(function(self){return function(e){self.home({animate:t2G}
);e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);this.controls.home.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
}
;E(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[v9S.v5J].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var rc={}
,nativeCamelSupport=false;function capitalize(g){return g[1].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(v9S.Y6(i,"backgroundAttachment"))nativeCamelSupport=true;if(nativeCamelSupport){if(v&&v9S.y6(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split("-");var ii=0,jj=v.length,vcc=v[0];while(++ii<jj){vcc+=v[ii].charAt(0).toUpperCase()+v[ii].slice(1);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(G2J);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=J2G;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var C44="rgb(",q1G="rgba(";if(str.indexOf(b5G)!=-v9S.v5J)return str;if(str.indexOf(q1G)!=-v9S.v5J)return str;if(str.indexOf(C44)!=-v9S.v5J)return str;if(v9S.d6(str,W0G))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var T3J="bad css style for class ";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+C4G+style.fontWeight+C4G+style.fontSize+C4G+style.fontFamily;if(result.indexOf(k5J)==-v9S.v5J){ctx.font=result;}
else{this.styles[className]=J2G;console.log(T3J+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=k5J)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var F2J="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=F2J;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return I44;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;v9S.t6(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;v9S.a6(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);if(v9S.X6(change,p5J)){this.dispatch(p5J,this.layout);}
else if(v9S.I6(change,M3J)){this.dispatch(a7G,this.drawingObjects);}
}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.displayInitialized)this.draw();this.changeOccurred(p5J);}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;v9S.T6(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;v9S.L6(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){for(var i=0;v9S.D6(i,arr.length);i++){var rep=arr[i];if(v9S.s6(rep.name,"fibonacci"))rep.name="retracement";var Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(cantUndo){var T94="cto",before=STX.shallowClone(this.drawingObjects);this.abortDrawings();if(cantUndo){this.undoStamps=[];}
else{this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred((g04+J4G+T94+v1G));this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing[type]();drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;v9S.M6(i,this.drawingObjects.length);i++){if(v9S.U6(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,nativeDate){if(!chart)chart=this.chart;var data_len=chart.dataSet.length,dt,iter,ctr=0;if(v9S.H6(tick,0)){iter=this.standardMarketIterator(chart.dataSet[0].DT);while(v9S.K6(ctr,tick)){dt=iter.previous();ctr-=1;}
}
else if(v9S.u6(tick,data_len)){iter=this.standardMarketIterator(chart.dataSet[v9S.F6(data_len,1)].DT);while(v9S.S7(data_len-1+ctr,tick)){dt=iter.next();ctr+=1;}
}
else{dt=chart.dataSet[tick].DT;}
if(nativeDate){return new Date(dt.getTime());}
return STX.yyyymmddhhmm(dt);}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=v9S.V7((yAxis.initialMarginTop-yAxis.initialMarginBottom),v9S.j1J);}
;STXChart.prototype.home=function(params){var b2J="row",Y5J=((10.73E2,33.)<(1.331E3,0x72)?(4.93E2,"R"):(99.,77.5E1)),O8G="roun";this.swipe.amplitude=0;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(typeof params!="object"){params={maintainWhitespace:params}
;}
if(typeof params.maintainWhitespace=="undefined")params.maintainWhitespace=true;this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
this.micropixels=0;var barsDisplayedOnScreen=Math.floor(v9S.J7(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];if(params.chart&&v9S.l7(params.chart,chart))continue;var homeScroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)homeScroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace&&v9S.i7(this.preferences.whitespace,0)){wsInTicks=v9S.c7(this.preferences.whitespace,this.layout.candleWidth);homeScroll-=wsInTicks;}
if(v9S.g7(this.yaxisLabelStyle,(O8G+u7G+Y5J+n1G+h8G+z74+v1G+b2J))&&!((v9S.e7(this.layout.chartType,"line")||v9S.w7(this.layout.chartType,"colored_line")||v9S.o7(this.layout.chartType,"mountain")||v9S.G7(this.layout.chartType,"colored_mountain"))&&this.extendLastTick)){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+v9S.f7(margin,2),leftMargin=v9S.O7(height,0.66);wsInTicks=v9S.Q7(leftMargin,this.layout.candleWidth);if(v9S.x7(wsInTicks,1))homeScroll-=wsInTicks;}
homeScroll=Math.ceil(homeScroll);if(params.animate){var self=this;this.scrollTo(chart,homeScroll,function(self,chart,homeScroll){return function(){self.calculateYAxisMargins(chart.panel.yAxis);chart.scroll=homeScroll;self.draw();}
;}
(self,chart,homeScroll));}
else{chart.scroll=homeScroll;this.calculateYAxisMargins(chart.panel.yAxis);}
}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj,forward){if(!chart)chart=this.chart;if(!chart.dataSet||!chart.dataSet.length)return 0;if(!adj)adj=0;if(!chart){chart=this.chart;}
var target=v9S.z7(dt.constructor,Date)?dt:STX.strToDateTime(dt);if(!STXChart.isDailyInterval(this.layout.interval))target.setMinutes(target.getMinutes()+adj);var ms=target.getTime(),total=chart.tickCache[ms];if(total||v9S.N7(total,0)){return total;}
var firstDate=chart.dataSet[0].DT,lastDate=chart.dataSet[v9S.j7(chart.dataSet.length,1)].DT;if(v9S.v4(target,firstDate)&&v9S.R4(target,lastDate)){for(var i=0;v9S.E4(i,chart.dataSet.length);i++){var d=chart.dataSet[i].DT;if(v9S.q4(d.getTime(),target.getTime())){chart.tickCache[ms]=i;return i;}
if(v9S.k4(d,target)){chart.tickCache[ms]=forward?i:v9S.r4(i,1);return chart.tickCache[ms];}
}
}
var intoThePast=v9S.C4(target,firstDate),start=intoThePast?firstDate:lastDate,iter=this.standardMarketIterator(start),ticks=iter.futureTick({end:target}
);total=intoThePast?ticks*-1:v9S.A4(chart.dataSet.length,1,ticks);chart.tickCache[ms]=total;return total;}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){var I04="teX",D5G="crea";if(v9S.o4(chart.dataSegment.length,0))return null;if(STXChart.hideDates())return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval;if(v9S.G4(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
axisRepresentation=this.createTickXAxisWithDates(chart);this.runAppend((D5G+I04+W6G+y44),arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var r04="is_dar",u3J="ax",M7G="x_x",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign="center";context.textBaseline="middle";var obj;for(var j=0;v9S.f4(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text+"   ").width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=v9S.O4(obj.hz,(w2/2));obj.right=obj.hz+(v9S.Q4(w2,2));obj.unpaddedRight=obj.hz+(v9S.x4(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle("stx_grid_dark"));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=v9S.z4(this.xAxisAsFooter,true)?this.chart.canvasHeight:chart.panel.bottom,wPanel=this.whichPanel(v9S.N4(bottom,1));if(!wPanel)return ;var yAxis=wPanel.yAxis;this.adjustYAxisHeightOffset(wPanel,yAxis);var prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||v9S.j4(chart.xAxis.displayBorder,null);if(v9S.v9(this.axisBorders,true))drawBorders=true;if(v9S.R9(this.axisBorders,false))drawBorders=false;var b=drawBorders?v9S.E9(yAxis.bottom,0.5):yAxis.bottom,middle=v9S.q9(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;v9S.k9(nb,axisRepresentation.length);nb++){if(v9S.r9(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;v9S.C9(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(v9S.A9(i,nb)){for(nb++;v9S.p9(nb,axisRepresentation.length);nb++){if(v9S.h9(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(v9S.B9(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(v9S.Z9(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(v9S.P9(obj.left,prevRight))continue;}
if(v9S.n9(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((v9S.m9(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,v9S.b9(this.xAxisAsFooter,true)?0:yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(v9S.W9(obj.grid,"boundary")?(c1G+h8G+M7G+u3J+r04+E2G):"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;v9S.Y0(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;v9S.R0(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=v9S.E0((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(v9S.i0((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=v9S.c0(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=v9S.g0(range,Math.pow(10,exponent));if(round){if(v9S.e0(fraction,1.5))niceFraction=1;else if(v9S.w0(fraction,3))niceFraction=2;else if(v9S.o0(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(v9S.G0(fraction,1))niceFraction=1;else if(v9S.f0(fraction,2))niceFraction=2;else if(v9S.O0(fraction,5))niceFraction=5;else niceFraction=10;}
return v9S.Q0(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(v9S.K0(maxPoint,minPoint),false),tickSpacing=niceNum(v9S.u0(range,(idealTicks-1)),true),niceMin=v9S.F0(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=v9S.S8(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(v9S.V8(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;v9S.J8(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(v9S.l8(prices.index,nextLabel))continue;if(v9S.i8(prices.index,nextLabel)){hz=chart.left+v9S.c8(i,this.layout.candleWidth)+this.micropixels;}
else if(v9S.g8(prices.index,nextLabel)){hz=chart.left+v9S.e8(i,this.layout.candleWidth)-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var W9G=" < ",p44="rTic",Z2G="sPe",P7G="rro",Q0G="hDa",U1G="XAxis",r1G="teTi",Z6G="cr";if(!chart)chart=this.chart;chart.xaxis=[];if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],periodicity=this.layout.periodicity,interval=this.layout.interval,idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=v9S.w8(this.chart.width,idealTickSizePixels);for(var x=0;v9S.o8(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(v9S.G8(x,chart.dataSegment.length))return [];var timeRange=0;if(v9S.f8(interval,parseInt(interval,10))){timeRange=v9S.O8(interval,periodicity,60000,chart.dataSegment.length);}
else{timeRange=v9S.n8(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime());}
var self=this;function millisecondsPerTick(){var iter_parms={'begin':new Date(),'interval':(u7G+f7G+e94),'periodicity':1,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);iter.next();var dt1=iter.previous();iter=self.standardMarketIterator(dt1,null,chart);var dt2=iter.next();return v9S.m8(dt2.getTime(),dt1.getTime());}
if(v9S.b8(timeRange,0)){timeRange=v9S.W8(millisecondsPerTick(),chart.maxTicks);}
else{timeRange=v9S.Y1((timeRange/chart.dataSegment.length),chart.maxTicks);}
var msPerTick=v9S.J1(timeRange,idealTicks),i;for(i=0;v9S.q1(i,this.timePossibilities.length);i++){if(v9S.X1(this.timePossibilities[i],msPerTick))break;}
if(v9S.I1(i,0)){console.log((Z6G+J4G+f7G+r1G+l9G+U1G+a8G+L44+Q0G+h8G+J4G+c1G+Z74+z74+B7G+J4G+v1G+F1G+P0G+C4G+J4G+P7G+v1G+X64+s5G+Z2G+p44+E2G+W9G+t5G));}
if(v9S.T1(i,this.timePossibilities.length)){i--;}
else if(v9S.L1(i,0)){var prevUnit=this.timePossibilities[v9S.D1(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[v9S.s1(prevMap.arr.length,1)];if(v9S.M1(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;chart.xAxis.activeTimeUnit=timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;v9S.U1(i,timeInterval.arr.length);i++){if(v9S.H1(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(v9S.z1(i,timeInterval.arr.length)){i--;}
else{if(v9S.N1(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;var axisRepresentation=[];for(i=0;v9S.j1(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;}
if(v9S.v5(i,0)&&v9S.R5(i,chart.maxTicks)){var iter1=this.standardMarketIterator(chart.dataSegment[i].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(var j=i;v9S.E5(j,0);j--){var dt=iter1.previous();chart.xaxis.unshift({DT:dt,Date:STX.yyyymmddhhmmssmmm(dt)}
);}
}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true,candleWidth=this.layout.candleWidth,iter=this.standardMarketIterator(chart.dataSegment[v9S.q5(chart.dataSegment.length,1)].DT,chart.xAxis.adjustTimeZone?this.displayZone:this.dataZone);for(i;v9S.k5(i,chart.maxTicks);i++){if(v9S.r5(i,chart.dataSegment.length)){var prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
if(i&&prices.leftOffset)candleWidth=v9S.C5((prices.leftOffset-prices.candleWidth/2),i);}
else{if(!chart.xAxis.futureTicks)break;dtShifted=iter.next();}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmmssmmm(dtShifted)}
;if(v9S.A5(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(v9S.p5(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getMilliseconds();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(v9S.h5(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(v9S.B5(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(v9S.Z5(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours()+v9S.P5(dtShifted.getMinutes(),60);currentTimeUnitLarge=dtShifted.getDate();}
else if(v9S.n5(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(v9S.m5(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(v9S.b5(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null,hz;if(v9S.W5(previousTimeUnitLarge,currentTimeUnitLarge)){if(v9S.Y2(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(v9S.R2(i,candleWidth))-1;text=null;if(v9S.l2(timeUnit,STX.HOUR)||(v9S.a2(timeUnit,STX.MINUTE)&&v9S.I2(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(v9S.T2(timeUnit,STX.DAY)){if(v9S.p2(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(v9S.h2(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(v9S.B2(currentTimeUnit,nextTimeUnit)){if(v9S.Z2(nextTimeUnit,timeInterval.minTimeUnit)){if(v9S.P2(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted);hz=chart.left+v9S.n2(((2*i+1)*candleWidth),2)-1;var boundaryTimeUnit=v9S.u2(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(v9S.F2(boundaryTimeUnit,currentTimeUnit)){if(v9S.S3(this.layout.interval,"week"))boundaryTimeUnit=currentTimeUnit;else hz-=v9S.V3(candleWidth,4);}
if(v9S.J3(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(v9S.l3(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(v9S.i3(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(v9S.c3(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(v9S.g3(timeUnit,STX.DAY)){labelDate.setDate(Math.max(1,boundaryTimeUnit));}
else if(v9S.e3(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(v9S.w3(boundaryTimeUnit,1));}
else if(v9S.o3(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(v9S.G3(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(v9S.f3(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&v9S.O3(boundaryTimeUnit,currentTimeUnit))continue;if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(v9S.Q3(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(v9S.x3(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(v9S.z3(timeUnit,STX.YEAR)||v9S.N3(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
firstTick=false;}
return axisRepresentation;}
;var cached=v9S.V5J,notcached=v9S.V5J;STXChart.prototype.createYAxis=function(panel,parameters){if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(v9S.j3(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&v9S.v6I(yAxis.high,panel.cacheHigh)&&v9S.R6I(yAxis.low,panel.cacheLow)){var leftTick=v9S.E6I(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(v9S.q6I(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){this.adjustYAxisHeightOffset(panel,yAxis);var height=yAxis.height=v9S.k6I(yAxis.bottom,yAxis.top),pricePerPix=v9S.r6I((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground&&!yAxis.semiLog){yAxis.high=yAxis.high+v9S.C6I(yAxis.zoom,pricePerPix);}
else{yAxis.high=yAxis.high+v9S.A6I((yAxis.zoom/2),pricePerPix)+v9S.p6I(yAxis.scroll,pricePerPix);var unadjustedLow=yAxis.low;yAxis.low=v9S.h6I(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);if(yAxis.semiLog&&v9S.f6I(yAxis.low,0))yAxis.low=unadjustedLow;}
if(yAxis.min||v9S.O6I(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||v9S.Q6I(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=v9S.x6I(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||v9S.z6I(this.activeDrawing.name,"projection"))){yAxis.logHigh=v9S.N6I(Math.log(yAxis.high),Math.LN10);var semilow=Math.max(yAxis.low,0.000000001);yAxis.logLow=v9S.j6I(Math.log(semilow),Math.LN10);if(v9S.v7I(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=v9S.R7I(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=v9S.E7I(idealX,1.618);if(v9S.q7I(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=v9S.k7I(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=v9S.r7I(fontHeight,5);}
else{yAxis.idealTickSizePixels=v9S.C7I(fontHeight,2);}
}
}
var idealTicks=Math.round(v9S.A7I(height,yAxis.idealTickSizePixels)),shadow=parameters.range?v9S.p7I(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(v9S.h7I(shadow,idealTicks));var n=1;for(var zz=0;v9S.B7I(zz,10);zz++){if(v9S.Z7I(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=v9S.P7I(Math.floor(shadow/idealTicks*n),n);}
if(v9S.n7I(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=v9S.m7I(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(v9S.b7I(shadow,yAxis.priceTick));if(parameters.range&&v9S.W7I(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(v9S.Y4I(verticalTicks,1)){if(v9S.y4I(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=v9S.d4I(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){var yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;v9S.t4I(i,100);i++){var numberOfTicks=v9S.a4I(shadow,yAxisPriceTick);if(v9S.X4I(height/numberOfTicks,fontHeight*2))yAxisPriceTick+=yAxis.minimumPriceTick;else break;}
if(v9S.I4I(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=v9S.T4I(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||v9S.L4I(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=v9S.D4I(Math.log(yAxis.high),Math.LN10);var semilow2=Math.max(yAxis.low,0.00000000001);yAxis.logLow=v9S.s4I(Math.log(semilow2),Math.LN10);yAxis.logShadow=v9S.M4I(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=v9S.U4I(yAxis.high,yAxis.low);}
yAxis.multiplier=v9S.H4I(yAxis.height,yAxis.shadow);if(v9S.K4I(yAxis.multiplier,Infinity))yAxis.multiplier=0;if(!yAxis.decimalPlaces&&v9S.u4I(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;for(var j=0;v9S.F4I(j,panel.yAxis.shadowBreaks.length);j++){var brk=panel.yAxis.shadowBreaks[j];if(v9S.S9I(panel.yAxis.shadow,brk[0]))labelDecimalPlaces=brk[1];}
yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.adjustYAxisHeightOffset=function(panel,yAxis){yAxis.bottomOffset=v9S.V5J;if(v9S.V9I(this.xAxisAsFooter,t2G)&&v9S.J9I(panel.bottom>>>v9S.V5J,this.chart.canvasHeight)){yAxis.bottomOffset=this.xaxisHeight;}
else if(v9S.l9I(this.xAxisAsFooter,t2G)&&v9S.i9I(panel.name,p7G)){yAxis.bottomOffset=this.xaxisHeight;}
yAxis.bottom=v9S.c9I(panel.bottom,yAxis.bottomOffset);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var h4G="ft",W64="gr",c44="_bord",R74="_gr",K5G="'";if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(yAxis.fractional){if(!yAxis.originalPriceFormatter)yAxis.originalPriceFormatter={func:yAxis.priceFormatter}
;if(!yAxis.fractional.resolution)yAxis.fractional.resolution=yAxis.minimumPrice;if(!yAxis.fractional.formatter)yAxis.fractional.formatter=K5G;if(!yAxis.priceFormatter)yAxis.priceFormatter=function(stx,panel,price){var b2G="+",whole=Math.floor(v9S.g9I(Math.round(price/yAxis.fractional.resolution),yAxis.fractional.resolution)),frac=Math.round(v9S.e9I((price-whole),yAxis.fractional.resolution)),_nds=Math.floor(frac);return whole+yAxis.fractional.formatter+(v9S.w9I(_nds,S74)?j1G:A8G)+_nds+(v9S.o9I(frac-_nds,I9G)?b2G:A8G);}
;}
else{if(yAxis.originalPriceFormatter){yAxis.priceFormatter=yAxis.originalPriceFormatter.func;yAxis.originalPriceFormatter=J2G;}
}
if(yAxis.pretty)return this.drawYAxisPretty(panel,parameters);if(this.runPrepend(H9G,arguments))return ;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(v9S.G9I(panel.name,chart.name)&&v9S.f9I(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=v9S.O9I(parameters.range[v9S.v5J],parameters.range[v9S.V5J]);}
var verticalTicks=v9S.Q9I(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=v9S.x9I(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=v9S.z9I((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:c2J;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(f64,D3J,this.canvasStyle(G4G));yAxis.yAxisPlotter.newSeries(L8G,j6G,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(X04,D3J,this.canvasStyle((m7G+m94+R74+l2J+c44+I4G)));var priceOffset=v9S.V5J,high=parameters.range?parameters.range[v9S.v5J]:yAxis.high,low=parameters.range?parameters.range[v9S.V5J]:yAxis.low,drawBorders=(v9S.N9I(yAxis.displayBorder,J2G)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(v9S.j9I(this.axisBorders,I44))drawBorders=I44;if(v9S.v0I(this.axisBorders,t2G))drawBorders=t2G;var edgeOfAxis,position=(v9S.R0I(yAxis.position,J2G)?chart.panel.yAxis.position:yAxis.position);if(v9S.E0I(position,k64)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+I9G,tickWidth=drawBorders?v9S.F1J:v9S.V5J;if(v9S.q0I(position,k64))tickWidth=drawBorders?-v9S.F1J:v9S.V5J;if(isAChart)if(v9S.k0I(yAxis.shadow,v9S.v5J)){priceOffset=v9S.r0I(((parseInt(low/yAxis.priceTick,S74)+v9S.v5J)*yAxis.priceTick),low);}
else{priceOffset=v9S.C0I(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);}
else priceOffset=v9S.A0I(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(c2J);for(var i=v9S.V5J;v9S.p0I(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(v9S.h0I(i,logPriceTick));price=Math.pow(S74,logPrice);}
else{if(isAChart)price=low+v9S.B0I(i,yAxis.priceTick)+priceOffset;else price=v9S.Z0I(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+I9G;if(v9S.Q0I((y2+fontHeight/v9S.j1J),panel.bottom))continue;if(v9S.x0I((y2-fontHeight/v9S.j1J),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo((W64+K2G+u7G),panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo((A7G+a5G+v1G+M44+v1G),v9S.z0I(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,J2G,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:J2G,textXPosition=edgeOfAxis+tickWidth+v9S.F1J;if(v9S.N0I(position,(Q8G+h4G))){textXPosition=yAxis.left+v9S.F1J;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(L8G,price,textXPosition,y2,backgroundColor,J2G,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+I9G;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,X04);}
}
this.plotYAxisGrid(panel);}
this.runAppend(H9G,arguments);}
;STXChart.prototype.drawYAxisPretty=function(panel,parameters){var j8G="xi",F9G="Y",J74="dr",d2G="00",p3J="eached",E94="z",a94="io",e6G="ett",k1G="Pr",q6G="drawY";if(this.runPrepend("drawYAxis",arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(v9S.j0I(panel.name,chart.name)&&v9S.v8I(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;if(isNaN(yAxis.high)||isNaN(yAxis.low))return ;var shadow=yAxis.shadow;if(parameters.range){shadow=v9S.R8I(parameters.range[1],parameters.range[0]);}
var verticalTicks=v9S.E8I(yAxis.height,yAxis.idealTickSizePixels);verticalTicks=Math.round(verticalTicks);var textStyle=yAxis.textStyle?yAxis.textStyle:"stx_yaxis";yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries("grid","stroke",this.canvasStyle((I0G+c3G+v1G+l2J)));yAxis.yAxisPlotter.newSeries("text","fill",this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var priceOffset=0,high=parameters.range?parameters.range[1]:yAxis.high,low=parameters.range?parameters.range[0]:yAxis.low,drawBorders=(v9S.q8I(yAxis.displayBorder,null)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(v9S.k8I(this.axisBorders,false))drawBorders=false;if(v9S.r8I(this.axisBorders,true))drawBorders=true;var edgeOfAxis,position=(v9S.C8I(yAxis.position,null)?chart.panel.yAxis.position:yAxis.position);if(v9S.A8I(position,"left")){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+0.5,tickWidth=drawBorders?3:0;if(v9S.p8I(position,"left"))tickWidth=drawBorders?-3:0;var fontHeight=this.getCanvasFontSize("stx_yaxis"),increments=yAxis.increments,l=increments.length,p=0,n=1,inc=0,closest=0,pow=0,diff=Number.MAX_VALUE;for(var z=0;v9S.h8I(z,100);z++){inc=v9S.B8I(increments[p],Math.pow(10,pow));n=Math.floor(v9S.Z8I(shadow,inc));var newDiff=Math.abs(v9S.P8I(verticalTicks,n));if(v9S.n8I(newDiff,diff)){break;}
else{diff=newDiff;}
if(v9S.m8I(n,verticalTicks)){closest=inc;break;}
else if(v9S.b8I(n,verticalTicks)){p++;if(v9S.W8I(p,l)){p=0;pow++;}
}
else{p--;if(v9S.Y1I(p,0)){p=v9S.y1I(l,1);pow--;}
}
closest=inc;}
var lowLabel=v9S.d1I(Math.ceil(low/closest),closest),lowPixelSize=v9S.t1I(yAxis.bottom,this.pixelFromPrice(lowLabel,panel,yAxis)),closestInc=0;if(v9S.a1I(lowPixelSize,yAxis.idealTickSizePixels)&&yAxis.semiLog&&yAxis.prettySemiLog){var divisor;for(divisor=Math.ceil(low);v9S.X1I(divisor,lowLabel)&&v9S.I1I(lowLabel%divisor,0);++divisor);if(v9S.T1I(divisor,lowLabel)){if(v9S.L1I(lowLabel,closest)){closest=divisor;closestInc=divisor;}
lowLabel=divisor;}
}
var i=0;for(var zz=0;v9S.D1I(zz,100);zz++){var price=lowLabel+v9S.s1I(i,closest);if(v9S.M1I(price,high))break;closest+=closestInc;i++;var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+0.5;if(v9S.U1I((y2+fontHeight/2),panel.bottom))continue;if(v9S.H1I((y2-fontHeight/2),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",v9S.K1I(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,null,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:null,textXPosition=edgeOfAxis+tickWidth+3;if(v9S.u1I(position,"left")){textXPosition=yAxis.left+3;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText("text",price,textXPosition,y2,backgroundColor,null,fontHeight);}
if(v9S.F1I(zz,100)){console.log((q6G+W6G+K2G+c1G+k1G+e6G+e94+Z74+f7G+c1G+c1G+J4G+v1G+h8G+a94+y5G+C4G+J4G+r9G+X64+E94+E94+C4G+v1G+p3J+C4G+t5G+d2G));}
if(drawBorders){var b=Math.round(yAxis.bottom)+0.5;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,"border");}
}
this.plotYAxisGrid(panel);}
this.runAppend((J74+f7G+v04+F9G+z74+j8G+c1G),arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var B3G="plotYAxisGrid";if(this.runPrepend(B3G,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,f64);this.runAppend(B3G,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;v9S.S5I(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign="left";}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(v9S.V5I(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&v9S.J5I(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&v9S.l5I(decimalPlaces,0)){if(v9S.i5I(yax.priceTick,0.01))decimalPlaces=4;else if(v9S.c5I(yax.priceTick,0.1))decimalPlaces=2;else if(v9S.g5I(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(v9S.e5I(panel.name,panel.chart.name)){if(v9S.w5I(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(v9S.o5I(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=v9S.G5I(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&v9S.f5I(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&v9S.O5I(decimalPlaces,0)){return price;}
if(this.internationalizer){if(v9S.Q5I(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=v9S.x5I(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var l44="irs",F4G="oss",U1J="Cr",d3J="createCrosshairs";if(this.runPrepend(d3J,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return I44;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return I44;}
;this.runAppend((d4G+v1G+J4G+f7G+h8G+J4G+U1J+F4G+T2G+l44),arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform,length){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false,l=quotes.length;if(length)l=length;for(var i=0;v9S.z5I(i,l);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;v9S.N5I(j,fields.length);j++){var f=quote[fields[j]];if(!f)continue;if(typeof (f)=="number")f=[f];for(var v=0;v9S.j5I(v,f.length);v++){var val=f[v];if(val||v9S.v2I(val,0)){if(sum){acc+=val;if(v9S.R2I(acc,highValue))highValue=acc;if(v9S.E2I(acc,lowValue))lowValue=acc;}
else{if(v9S.q2I(val,highValue))highValue=val;if(v9S.k2I(val,lowValue))lowValue=val;}
}
}
}
}
if(highValue==Number.MAX_VALUE*-1)highValue=0;if(v9S.r2I(lowValue,Number.MAX_VALUE))lowValue=0;return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){var q4G="log";if(v9S.C2I(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;this.adjustYAxisHeightOffset(panel,yAxis);yAxis.top=panel.top;yAxis.height=v9S.A2I(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(v9S.p2I(cheight,5)));if(v9S.h2I(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(v9S.B2I(cheight,verticalPad))*(v9S.Z2I(yAxis.scroll,0)?-1:1);}
var pricePerPix=v9S.P2I((high-low),yAxis.height);if(low||v9S.n2I(low,0)){if(v9S.m2I(high-low,0)){newHigh=v9S.b2I(high,2);newLow=0;}
else{if((this.layout.semiLog||v9S.W2I(this.layout.chartScale,(q4G)))&&newHigh){var logLow=v9S.Y3I(Math.log(low),Math.LN10),logHigh=v9S.y3I(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||v9S.d3I(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||v9S.t3I(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=v9S.a3I(yAxis.high,yAxis.low);if(v9S.X3I(panel.chart.name,panel.name)&&v9S.I3I(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||v9S.T3I(this.layout.chartScale,"log"));if(panel.chart.isComparison)isLogScale=false;if(v9S.L3I(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;v9S.D3I(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(v9S.s3I(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;v9S.M3I(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){if(this.runPrepend("initializeDisplay",arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax,length=null,ticksOnScreen=Math.floor(v9S.U3I((chart.width-this.micropixels),this.layout.candleWidth));if(v9S.H3I(chart.scroll,chart.maxTicks)&&v9S.K3I(chart.maxTicks,ticksOnScreen+1))length=v9S.u3I(chart.dataSegment.length,1);if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push("Close");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);if(v9S.F3I(this.layout.chartType,"baseline_delta")){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(v9S.S6P(base,minMax[0]),v9S.V6P(minMax[1],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[0]=v9S.J6P(base,diff);minMax[1]=base+diff;}
}
}
else{fields.push("Close","High","Low");minMax=this.determineMinMax(chart.dataSegment,fields,null,null,length);}
chart.lowValue=minMax[0];chart.highValue=minMax[1];this.runAppend("initializeDisplay",arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==k5J)offset=v9S.V5J;var position=v9S.l6P(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){if(v9S.i6P(open,close))return H1J;if(v9S.c6P(open,close))return s5J;return V2G;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return v9S.g6P(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.setMarket=function(marketDefinition,chart){if(!chart)chart=this.chart;chart.market=new STX.Market(marketDefinition);}
;STXChart.prototype.setMarketFactory=function(factory){this.marketFactory=factory;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(v9S.e6P(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(v9S.w6P(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;v9S.o6P(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;var histMax=0,histMin=0;for(var i=0;v9S.G6P(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;v9S.f6P(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(v9S.O6P(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=prices[seriesParams[sp].field];if(v9S.Q6P(total,histMax))histMax=total;if(v9S.x6P(total,histMin))histMin=total;}
}
}
if(!params.bindToYAxis){if(v9S.z6P(histMax,0)&&v9S.N6P(histMin,0)){this.watermark(panelName,"center","bottom",this.translateIf(params.name+" Not Available"));return ;}
multiplier=v9S.j6P((b-t),params.heightPercentage,(histMax-histMin));}
var offset=0.5;if(v9S.V7P(this.layout.candleWidth,1)||!bordersOn)offset=0;this.startClip(panelName);var context=this.chart.context,shaveOff=Math.max(0,v9S.J7P((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this,candleWidth=1;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){var Z3J="au";if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;context.beginPath();var prevTop=b+0.5,farLeft=Math.floor(v9S.t7P(self.pixelFromBar(0,c.chart),self.layout.candleWidth/2)),prevRight=farLeft;for(var i=0;v9S.a7P(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(v9S.X7P(i,0))prevTop=bottom;var quote=quotes[i];if(!quote||!quote[field]){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=v9S.I7P((quote[field]-histMin),multiplier);if(isNaN(y))continue;var myCandleWidth=self.layout.candleWidth;if(quote.candleWidth){myCandleWidth=quote.candleWidth;if(v9S.T7P(i,0))farLeft=prevRight=Math.floor(v9S.L7P(self.pixelFromBar(0,c.chart),quote.candleWidth/2));}
var top=Math.min(Math.floor(v9S.D7P(bottom,y))+0.5,bottom);if(isUp){if(v9S.s7P(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
else{if(v9S.M7P(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=myCandleWidth;continue;}
}
var x0,x1,variableWidthRatio=v9S.U7P(myCandleWidth,self.layout.candleWidth),start=prevRight+v9S.H7P((shaveOff+shift*candleWidth),variableWidthRatio);x0=Math.round(start)+(isBorder?0:offset);x1=v9S.K7P(Math.round(start+candleWidth*variableWidthRatio),(isBorder?0:offset));if(v9S.u7P(x1-x0,2))x1=x0+1;if(isBorder)roundPixel=0;else roundPixel=0.5;if(v9S.F7P(x0%1,roundPixel))x0+=0.5;if(v9S.S4P(x1%1,roundPixel))x1+=0.5;context.moveTo(x0,bottom);if(v9S.V4P(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(v9S.J4P(tops[i],top)||v9S.l4P(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&v9S.i4P(type,"clustered")){if(v9S.c4P(i,0)&&tops[v9S.g4P(i,1)]&&v9S.e4P(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[v9S.w4P(i,1)]));}
else if(isBorder&&!shaveOff){if(v9S.o4P(prevTop,top)||v9S.G4P(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=myCandleWidth;if(v9S.f4P(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color=(Z3J+h8G+a5G);if(isBorder){context.strokeStyle=v9S.O4P(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=v9S.Q4P(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;v9S.x4P(sp,seriesParams.length);sp++){var param=seriesParams[sp];candleWidth=v9S.z4P(this.layout.candleWidth,params.widthFactor);var shift=0;if(v9S.N4P(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(v9S.j4P(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(v9S.v9P(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.drawHeatmap=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,quotes=this.chart.dataSegment;this.getDefaultColor();if(!params.name)params.name=(G1J);if(!params.widthFactor)params.widthFactor=1;var offset=0.5;if(v9S.R9P(c.chart.tmpWidth,1))offset=0;var height=null,halfHeight=null,self=this,lineWidth=null;function drawCells(field,color,isBorder,widthFactor,myoffset){context.beginPath();context.fillStyle=color;context.strokeStyle=color;var t=yAxis.top,b=yAxis.bottom,myCandleWidth=v9S.E9P(self.layout.candleWidth,widthFactor),xc=Math.floor(v9S.q9P(self.pixelFromBar(0,c.chart),self.layout.candleWidth)),x0,x1;for(var x=0;v9S.k9P(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.candleWidth){if(v9S.r9P(x,0)){xc+=self.layout.candleWidth;}
else{xc+=v9S.C9P((quote.candleWidth+myCandleWidth/widthFactor),2);}
myCandleWidth=v9S.A9P(quote.candleWidth,widthFactor);}
else{xc+=self.layout.candleWidth;}
x0=v9S.p9P(xc,myCandleWidth/2,myoffset);x1=xc+v9S.G9P(myCandleWidth,2)-myoffset;if(v9S.f9P(x1-x0,2))x1=x0+1;if(quote.transform)quote=quote.transform;var cellValues=quote[field];if(!cellValues)continue;if(typeof cellValues=="number")cellValues=[cellValues];for(var i=0;v9S.O9P(i,cellValues.length);i++){var v=self.pixelFromPrice(cellValues[i],c,yAxis);if(!lineWidth){var v1=self.pixelFromPrice(v9S.Q9P(cellValues[i],params.height),c,yAxis);context.lineWidth=1;height=v9S.x9P(v1,v);halfHeight=v9S.z9P(height,2);lineWidth=context.lineWidth;}
if(isBorder){var tc=v+halfHeight,bc=v9S.N9P(v,halfHeight);context.moveTo(x0,tc);context.lineTo(x0,bc);context.lineTo(x1,bc);context.lineTo(x1,tc);context.lineTo(x0,tc);}
else{context.fillRect(x0,v9S.j9P(v,halfHeight),v9S.v0P(x1,x0),height);}
}
}
if(isBorder)context.stroke();context.closePath();}
this.startClip(panelName);var context=this.chart.context;context.globalAlpha=params.opacity;for(var sp=0;v9S.R0P(sp,seriesParams.length);sp++){var param=seriesParams[sp];drawCells(param.field,param.color,null,params.widthFactor,param.border_color?offset:-offset/4);if(param.border_color&&v9S.E0P(this.layout.candleWidth,2)){drawCells(param.field,param.border_color,true,params.widthFactor,offset);}
}
context.lineWidth=1;context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=v9S.q0P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis,whitespace=v9S.k0P(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=v9S.r0P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v9S.T0P(x,quotes.length);x++){xbase+=v9S.L0P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v9S.D0P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v9S.s0P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(v9S.M0P(this.layout.chartType,"volume_candle"))whitespace=v9S.U0P(candleWidth,2);}
if(v9S.H0P(quote.Open,quote.Close))continue;if(v9S.K0P(condition,STXChart.CANDLEUP)&&v9S.u0P(quote.Open,quote.Close))continue;if(v9S.F0P(condition,STXChart.CANDLEDOWN)&&v9S.S8P(quote.Open,quote.Close))continue;if(v9S.V8P(condition,STXChart.CLOSEUP)&&v9S.J8P(quote.Close,quote.iqPrevClose))continue;if(v9S.l8P(condition,STXChart.CLOSEDOWN)&&v9S.i8P(quote.Close,quote.iqPrevClose))continue;if(v9S.c8P(condition,STXChart.CLOSEEVEN)&&v9S.g8P(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v9S.e8P(tick,panel.cacheLeft)||v9S.w8P(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v9S.o8P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v9S.G8P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(v9S.f8P(bottom,top));if(v9S.O8P(top,t)){if(v9S.Q8P(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=v9S.x8P(t,top);top=t;}
if(v9S.z8P(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(v9S.N8P(cache.open,b))continue;if(v9S.j8P(cache.close,t))continue;var flr_xbase=Math.floor(xbase)+0.5,xstart=Math.floor(v9S.v1P(flr_xbase,whitespace))+borderOffset,xend=v9S.R1P(Math.round(flr_xbase+whitespace),borderOffset);if(v9S.E1P(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var k94="e_cand",S7G="um",chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=v9S.q1P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,whitespace=v9S.k1P(chart.tmpWidth,2),candleWidth=this.layout.candleWidth,xbase=v9S.r1P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v9S.T1P(x,quotes.length);x++){xbase+=v9S.L1P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v9S.D1P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v9S.s1P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;if(v9S.M1P(this.layout.chartType,(h2G+r5G+S7G+k94+r5G+J4G)))whitespace=v9S.U1P(candleWidth,2);}
if(!quote.Open&&v9S.H1P(quote.Open,0))continue;if(v9S.K1P(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.beginPath();context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v9S.u1P(tick,panel.cacheLeft)||v9S.F1P(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v9S.S5P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v9S.V5P((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(v9S.J5P(bottom,top));if(v9S.l5P(top,t)){if(v9S.i5P(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=v9S.c5P(t,top);top=t;}
if(v9S.g5P(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(v9S.e5P(cache.open,b))continue;if(v9S.w5P(cache.close,t))continue;flr_xbase=Math.floor(xbase)+0.5;var xstart=Math.floor(v9S.o5P(flr_xbase,whitespace))+borderOffset,xend=v9S.G5P(Math.round(flr_xbase+whitespace),borderOffset);if(v9S.f5P(quote.Open,quote.Close)){context.moveTo(xstart,cache.open);context.lineTo(xend,cache.open);context.lineTo(xend,cache.close);context.lineTo(xstart,cache.close);context.lineTo(xstart,cache.open);}
if(v9S.O5P(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=v9S.Q5P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=v9S.x5P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v9S.b5P(x,quotes.length);x++){xbase+=v9S.W5P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v9S.Y2P(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v9S.y2P((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(condition){if(v9S.d2P(condition,STXChart.CANDLEUP)&&v9S.t2P(quote.Open,quote.Close))continue;else if(v9S.a2P(condition,STXChart.CANDLEDOWN)&&v9S.X2P(quote.Open,quote.Close))continue;else if(v9S.I2P(condition,STXChart.CLOSEUP)&&v9S.T2P(quote.Close,quote.iqPrevClose))continue;else if(v9S.L2P(condition,STXChart.CLOSEDOWN)&&v9S.D2P(quote.Close,quote.iqPrevClose))continue;else if(v9S.s2P(condition,STXChart.CLOSEEVEN)&&v9S.M2P(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v9S.U2P(tick,panel.cacheLeft)||v9S.H2P(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(v9S.K2P((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(v9S.u2P((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=v9S.F2P(bottom,top);if(v9S.S3P(top,t)){if(v9S.V3P(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v9S.J3P(t,top);top=t;}
if(v9S.l3P(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(v9S.i3P(cache.top,b))continue;if(v9S.c3P(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(v9S.g3P(quote.Open,quote.Close)){var offset=this.offset;if(v9S.e3P(this.layout.chartType,"volume_candle")){offset=v9S.w3P(candleWidth,2);}
var x0=v9S.o3P(xx,offset),x1=xx+offset,o=Math.floor(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v9S.G3P((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top)+0.5;if(v9S.f3P(o,b)&&v9S.O3P(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=v9S.Q3P(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,candleWidth=this.layout.candleWidth,xbase=v9S.x3P(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v9S.b3P(x,quotes.length);x++){xbase+=v9S.W3P(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v9S.Y68(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(quote.candleWidth){xbase+=v9S.y68((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v9S.d68(tick,panel.cacheLeft)||v9S.t68(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(v9S.a68((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(v9S.X68((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=v9S.I68(bottom,top);if(v9S.T68(top,t)){if(v9S.L68(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v9S.D68(t,top);top=t;}
if(v9S.s68(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(v9S.M68(cache.top,b))continue;if(v9S.U68(cache.bottom,t))continue;var xx=Math.floor(xbase)+0.5;context.beginPath();context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(v9S.H68(quote.Open,quote.Close)||(!quote.Open&&v9S.K68(quote.Open,0))){var offset=this.offset;if(v9S.u68(this.layout.chartType,"volume_candle")){offset=v9S.F68(candleWidth,2);}
var x0=v9S.S78(xx,offset),x1=xx+offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v9S.V78((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(v9S.J78(o,b)&&v9S.l78(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var u44="tter_",O1J="sc",chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=v9S.i78(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;v9S.r78(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(v9S.C78("Scatter",quote))scatter=quote.Scatter;for(var i=0;v9S.A78(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(v9S.p78(top,t))continue;if(v9S.h78(top,b))continue;context.moveTo(v9S.B78(xbase,2),top);context.lineTo(xbase+2,top);}
}
}
this.canvasColor((c1G+h8G+e5G+O1J+f7G+u44+d4G+w2G+W5J+h8G));context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&v9S.Z78(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&v9S.P78(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=v9S.n78(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null,xbase=v9S.m78(panel.left,0.5*this.layout.candleWidth,this.micropixels,1);for(var x=0;v9S.F78(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v9S.S48(tick,panel.cacheLeft)||v9S.V48(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v9S.J48((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v9S.l48((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
lastClose=cache.close;if(first){context.moveTo(Math.floor(xbase),cache.open);previousOpen=cache.open;if(v9S.i48(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&v9S.c48(cache.close,previousOpen)&&v9S.g48(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(Math.floor(xbase),previousOpen);}
else if(v9S.e48(trend,1)&&v9S.w48(cache.close,previousOpen)&&v9S.o48(previousOpen,cache.open)){context.lineTo(Math.floor(xbase),previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(Math.floor(xbase),previousOpen);}
context.lineTo(Math.floor(xbase),cache.close);if(v9S.G48(x+1,quotes.length)){context.lineTo(Math.floor(xbase+this.layout.candleWidth),cache.close);previousOpen=cache.open;}
}
if(trend==-1||(v9S.f48(trend,null)&&v9S.O48(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&v9S.Q48(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();if(!this.chart.pandf)this.chart.pandf={"box":1,"reversal":3}
;var box=this.chart.pandf.box,leftTick=v9S.x48(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start,candleWidth=this.layout.candleWidth,xbase=v9S.z48(panel.left,candleWidth,this.micropixels,1);for(var x=0;v9S.W48(x,quotes.length);x++){xbase+=candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth)candleWidth=quote.candleWidth;if(quote.transform)quote=quote.transform;if(v9S.Y98(condition,"X")&&v9S.y98(quote.Open,quote.Close))continue;else if(v9S.d98(condition,"O")&&v9S.t98(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(v9S.a98(tick,panel.cacheLeft)||v9S.X98(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v9S.I98((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v9S.T98((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xxl=Math.round(xbase),xxr=Math.round(xbase+candleWidth);boxes=Math.abs(Math.round(v9S.L98((quote.Close-quote.Open),box)));height=Math.abs(v9S.D98((cache.open-cache.close),boxes));var voffset=v9S.s98(height,2);start=cache.open;for(;v9S.M98(boxes,0);boxes--){if(v9S.U98(condition,"X")){context.moveTo(xxl+paddingLeft,v9S.H98(start,paddingBottom,voffset));context.lineTo(v9S.m98(xxr,paddingRight),v9S.b98(start,height,paddingTop,voffset));context.moveTo(xxl+paddingLeft,v9S.S08(start,height,paddingTop,voffset));context.lineTo(v9S.R08(xxr,paddingRight),v9S.E08(start,paddingBottom,voffset));start-=height;}
else if(v9S.i08(condition,"O")){context.moveTo(v9S.c08((xxl+xxr),2),start+paddingTop-voffset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-voffset,xxr+paddingRight,start+height-paddingBottom-voffset,v9S.g08((xxl+xxr),2),start+height-paddingBottom-voffset);context.bezierCurveTo(v9S.e08(xxl,paddingLeft),start+height-paddingBottom-voffset,v9S.w08(xxl,paddingLeft),start+paddingTop-voffset,v9S.o08((xxl+xxr),2),start+paddingTop-voffset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&v9S.G08(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=v9S.f08(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,xbase=v9S.O08(panel.left,0.5*this.layout.candleWidth,this.micropixels,1),hlen=v9S.n08(chart.tmpWidth,2),voffset=v9S.m08(context.lineWidth,2);for(var x=0;v9S.b08(x,quotes.length);x++){xbase+=this.layout.candleWidth;var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(v9S.W08(condition,STXChart.CLOSEUP)&&v9S.Y88(quote.Close,quote.iqPrevClose))continue;else if(v9S.y88(condition,STXChart.CLOSEDOWN)&&v9S.d88(quote.Close,quote.iqPrevClose))continue;else if(v9S.t88(condition,STXChart.CLOSEEVEN)&&v9S.a88(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v9S.X88(tick,panel.cacheLeft)||v9S.I88(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(v9S.T88((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(v9S.L88((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=v9S.D88(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v9S.s88((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v9S.M88((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(v9S.U88(top,t)){if(v9S.H88(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v9S.K88(t,top);top=t;}
if(v9S.u88(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(v9S.F88(cache.top,b)&&v9S.S18(cache.bottom,t)){context.moveTo(xx,v9S.V18(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(v9S.J18(cache.open,t)&&v9S.l18(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(v9S.i18(xx,hlen),cache.open);}
if(v9S.c18(cache.close,t)&&v9S.g18(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&v9S.e18(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=v9S.w18(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
,hlen=v9S.o18(chart.tmpWidth,2),voffset=v9S.G18(context.lineWidth,2),candleWidth=this.layout.candleWidth,xbase=v9S.f18(panel.left,0.5*candleWidth,this.micropixels,1);for(var x=0;v9S.P18(x,quotes.length);x++){xbase+=v9S.n18(candleWidth,2);candleWidth=this.layout.candleWidth;xbase+=v9S.m18(candleWidth,2);var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.candleWidth){xbase+=v9S.b18((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(v9S.W18(tick,panel.cacheLeft)||v9S.Y58(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=v9S.y58(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(v9S.d58((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(v9S.t58((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(v9S.a58(top,t)){if(v9S.X58(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=v9S.I58(t,top);top=t;}
if(v9S.T58(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=Math.floor(xbase)+0.5;if(v9S.L58(cache.top,b)&&v9S.D58(cache.bottom,t)){context.moveTo(xx,v9S.s58(cache.top,voffset));context.lineTo(xx,cache.bottom+voffset);}
if(v9S.M58(cache.open,t)&&v9S.U58(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(v9S.H58(xx,hlen),cache.open);}
if(v9S.K58(cache.close,t)&&v9S.u58(cache.close,b)){context.moveTo(xx,cache.close);context.lineTo(xx+hlen,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var k2J="plot",skipProjections=false,skipTransform=false,noSlopes=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=v9S.F58(chart.dataSet.length,chart.scroll),lastQuote=null,colors={}
,lastXY=[0,0],candleWidth=this.layout.candleWidth,xbase=v9S.S28(panel.left,(parameters.noSlopes?1:0.5)*candleWidth,this.micropixels,1);this.startClip(panel.name);context.beginPath();for(var i=0;v9S.R28(i,quotes.length);i++){xbase+=v9S.E28(candleWidth,2);if(parameters.noSlopes)xbase+=v9S.q28(candleWidth,2);candleWidth=this.layout.candleWidth;if(!parameters.noSlopes)xbase+=v9S.k28(candleWidth,2);var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(quote.candleWidth){if(!parameters.noSlopes)xbase+=v9S.r28((quote.candleWidth-candleWidth),2);candleWidth=quote.candleWidth;}
if(!skipTransform&&quote.transform)quote=quote.transform;var x=xbase,cache=quote.cache,tick=leftTick+i;if(!quote[field]&&v9S.C28(quote[field],0))continue;if(v9S.A28(tick,panel.cacheLeft)||v9S.p28(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(v9S.h28((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
if(v9S.B28(x,panel.right))lastQuote=quote;if(v9S.Z28(i,quotes.length-1)){if(this.extendLastTick)x+=v9S.P28(candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(v9S.n28(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||v9S.m28(leftTick,0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
else{if(pattern){context.dashedLineTo(0,y,x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else if(v9S.b28(leftTick,0)){var baseline=chart.dataSet[leftTick];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(i?x:0,y);if(tension){points.push(x,y);}
}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(v9S.W28((yAxis.high-y0),yAxis.multiplier))+yAxis.top);var x0=v9S.Y38(x,candleWidth);if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);if(tension){points.push(x0,y0,x,y);}
else{context.lineTo(x,y);}
}
}
}
}
else{if(noSlopes){var quote1=quotes[v9S.y38(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
if(v9S.d38(i,quotes.length-1)){if(pattern){context.dashedLineTo(x,y,x+candleWidth,y,pattern);}
else{context.lineTo(x+candleWidth,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
}
}
lastXY=[x,y];if(v9S.t38(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=v9S.a38(yaxisLabelStyle,"noop")?context.strokeStyle:null;this.yAxisLabels.push({src:(k2J),"args":[panel,txt,lastQuote.cache[field],v9S.X38(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false,tension=0,points=[];if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;tension=parameters.tension;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=v9S.I38(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;v9S.T38(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(v9S.L38(tick,panel.cacheLeft)||v9S.D38(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&v9S.s38(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(v9S.M38((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+v9S.U38((i+0.5),this.layout.candleWidth)+this.micropixels-1;if(v9S.H38(i,quotes.length-1)){if(this.extendLastTick)x+=v9S.K38(this.layout.candleWidth,2);if(parameters.lastTickOffset)x+=parameters.lastTickOffset;}
if(v9S.u38(firstX,null))firstX=x;var y=cache[field];if(v9S.F38(firstY,null))firstY=y;if(first){first=false;if(v9S.S6b(leftTick,0)){context.moveTo(x,y);if(tension){points.push(x,y);}
}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(v9S.V6b((yAxis.high-y0),yAxis.multiplier))+yAxis.top);firstX=v9S.J6b(x,this.layout.candleWidth);context.moveTo(firstX,y0);if(tension){points.push(firstX,y0,x,y);}
else{context.lineTo(x,y);}
}
}
else{if(tension){points.push(x,y);}
else{context.lineTo(x,y);}
}
if(v9S.l6b(i,(quotes.length-1))&&tension){points.push(x,y);plotSplinePrimitive(points,tension,context);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(v9S.i6b(firstY,t))firstY=t;}
else{if(v9S.c6b(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&v9S.g6b(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel,style,colorFunction){var context=this.chart.context;if(!style)style="stx_mountain_chart";var c=this.canvasStyle(style);if(c.width&&v9S.e6b(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&!STX.isTransparent(color)){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
var params={skipProjections:true}
;if(panel.chart.tension)params.tension=panel.chart.tension;if(panel.chart.lastTickOffset)params.lastTickOffset=panel.chart.lastTickOffset;var padding=parseInt(c.padding,10),strokeStyle=c.borderTopColor,rc=null;if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){var tempCanvas=context.canvas.cloneNode(true);tempCanvas.getContext("2d").drawImage(context.canvas,0,0);context.save();context.clearRect(0,0,context.canvas.width,context.canvas.height);}
}
this.plotMountainChart(panel,panel.chart.dataSegment,"Close",params);if(strokeStyle&&!STX.isTransparent(strokeStyle)){if(padding&&!STX.isIE8){context.lineWidth+=v9S.w6b(2,padding);context.globalCompositeOperation="destination-out";this.plotLineChart(panel,panel.chart.dataSegment,"Close",params);context.globalCompositeOperation="destination-over";context.drawImage(tempCanvas,0,0);context.restore();}
context.strokeStyle=strokeStyle;rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",params,colorFunction);}
context.lineWidth=1;return rc;}
;STXChart.prototype.drawWaveChart=function(panel){var s6G="_cha",chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;this.startClip(panel.name);context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom,xbase=panel.left+Math.floor(-0.5*this.layout.candleWidth+this.micropixels);for(var i=0;v9S.o6b(i,quotes.length);i++){xbase+=this.layout.candleWidth;var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=v9S.G6b(xbase,3*this.layout.candleWidth/8),y=this.pixelFromPrice(quote.Open,panel);if(v9S.f6b(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(v9S.O6b(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=v9S.Q6b(chart.dataSet.length,chart.scroll);if(v9S.x6b(leftTick,0)){context.moveTo(x,y);}
else if(v9S.z6b(leftTick,0)){var baseline=chart.dataSet[v9S.N6b(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(v9S.j6b((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(panel.left+v9S.v7b((i-1),this.layout.candleWidth)+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=v9S.R7b(this.layout.candleWidth,4);if(v9S.E7b(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(v9S.q7b(y,t))y=t;if(v9S.k7b(y,b))y=b;context.lineTo(x,y);x+=v9S.r7b(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(v9S.C7b(y,t))y=t;if(v9S.A7b(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(v9S.p7b(y,t))y=t;if(v9S.h7b(y,b))y=b;context.lineTo(x,y);x+=v9S.B7b(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(v9S.Z7b(y,t))y=t;if(v9S.P7b(y,b))y=b;context.lineTo(x,y);}
x+=v9S.n7b(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(v9S.m7b(y,t))y=t;if(v9S.b7b(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&v9S.W7b(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor((c1G+h8G+m94+y9G+m8G+s6G+v1G+h8G));context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS),cy=this.crossYActualPos?this.crossYActualPos:this.cy;if(this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);if(v9S.Y4b(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){var crosshairWidth=panel.width;if(v9S.y4b(this.yaxisLabelStyle,"roundRectArrow"))crosshairWidth-=7;this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=crosshairWidth+"px";}
for(var i=0;v9S.d4b(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(cy,panel,yAxis);if(isNaN(price))continue;if((panel.min||v9S.t4b(panel.min,0))&&v9S.a4b(price,panel.min))continue;if((panel.max||v9S.X4b(panel.max,0))&&v9S.I4b(price,panel.max))continue;var labelDecimalPlaces=null;if(v9S.T4b(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(v9S.L4b(yAxis.shadow,1000))labelDecimalPlaces=2;if(v9S.D4b(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||v9S.s4b(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle("stx-float-price");this.createYAxisLabel(panel,price,cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);this.floatCanvas.isDirty=true;}
}
;STXChart.prototype.headsUpHR=function(){var B0G="ond",Z9G="illi",E7G="headsUpHR";if(this.runPrepend(E7G,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate&&!STXChart.hideDates()){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(!STXChart.isDailyInterval(this.layout.interval))str+=C4G+this.internationalizer.hourMinute.format(prices.DT);else{str=this.internationalizer.yearMonthDay.format(prices.DT);}
this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+v9S.v5J;if(v9S.M4b(m,S74))m=j1G+m;var d=prices.DT.getDate();if(v9S.U4b(d,S74))d=j1G+d;var h=prices.DT.getHours();if(v9S.H4b(h,S74))h=j1G+h;var mn=prices.DT.getMinutes();if(v9S.K4b(mn,S74))mn=j1G+mn;if(STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+t1G+d+t1G+prices.DT.getFullYear();else{this.controls.floatDate.innerHTML=m+t1G+d+C4G+h+h94+mn;var isSecond=(chart.xAxis.activeTimeUnit&&v9S.u4b(chart.xAxis.activeTimeUnit,STX.SECOND))||v9S.F4b(this.layout.timeUnit,c64),isMS=(chart.xAxis.activeTimeUnit&&v9S.S9b(chart.xAxis.activeTimeUnit,STX.MILLISECOND))||v9S.V9b(this.layout.timeUnit,(s5G+Z9G+c1G+J4G+d4G+B0G));if(isSecond||isMS){var sec=prices.DT.getSeconds();if(v9S.J9b(sec,S74))sec=j1G+sec;this.controls.floatDate.innerHTML+=(h94+sec);if(isMS){var mil=prices.DT.getMilliseconds();if(v9S.l9b(mil,S74))mil=j1G+mil;if(v9S.i9b(mil,V94))mil=j1G+mil;this.controls.floatDate.innerHTML+=(h94+mil);}
}
}
}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=A8G;}
}
this.runAppend(E7G,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){var Q94="00000",L4G="freefo";this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((v9S.c9b(this.currentVectorParameters.vectorType,"annotation")||v9S.g9b(this.currentVectorParameters.vectorType,"callout"))&&STXChart.drawingLine)return ;if(v9S.e9b(this.currentVectorParameters.vectorType,"projection"))return ;if(v9S.w9b(this.currentVectorParameters.vectorType,(L4G+v1G+s5G)))return ;var panel=this.currentPanel;if(v9S.o9b(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(v9S.G9b(STXChart.crosshairX,this.left),chart);if(v9S.f9b(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(v9S.O9b(this.layout.chartType,"bar")||v9S.Q9b(this.layout.chartType,"candle")||v9S.x9b(this.layout.chartType,"colored_bar")||v9S.z9b(this.layout.chartType,"hollow_candle")||v9S.N9b(this.layout.chartType,"volume_candle")){var fields=["Open","High","Low","Close"],closest=1000000000;for(var i=0;v9S.j9b(i,fields.length);i++){var fp=prices[fields[i]];if(v9S.v0b(Math.abs(price-fp),closest)){closest=Math.abs(v9S.R0b(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=v9S.E0b(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,v9S.q0b(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle=(b5G+j1G+Q94);ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(v9S.k0b(this.pixelFromTick(tick,chart),0.5))+(t74);this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+(D1G+m94);this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var e2J="doDisplayCrosshairs";if(this.runPrepend(e2J,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(v9S.r0b(this.currentVectorParameters.vectorType,A8G)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(v9S.C0b(this.controls.crossX.style.display,A8G)){this.controls.crossX.style.display=A8G;this.controls.crossY.style.display=A8G;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.unappendClassName(this.container,P9G);}
else{STX.appendClassName(this.container,P9G);}
}
if(this.controls.floatDate&&!STXChart.hideDates()){this.controls.floatDate.style.display=S6G;}
}
}
this.runAppend(e2J,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var Z2J="undisplayCrosshairs";if(this.runPrepend(Z2J,arguments))return ;if(this.controls.crossX){if(v9S.A0b(this.controls.crossX.style.display,W44)){this.controls.crossX.style.display=W44;this.controls.crossY.style.display=W44;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=W44;}
STX.unappendClassName(this.container,P9G);if(this.floatCanvas&&this.floatCanvas.isDirty)STX.clearCanvas(this.floatCanvas,this);this.runAppend(Z2J,arguments);}
;STXChart.prototype.modalBegin=function(){var D9G="modal";this.openDialog=D9G;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=t2G;this.openDialog=A8G;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var z2J="updateChartAccessories";if(this.runPrepend(z2J,arguments))return ;this.accessoryTimer=J2G;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart),bottom=v9S.p0b(this.xAxisAsFooter,t2G)?v9S.V5J:v9S.h0b(this.chart.canvasHeight,panel.chart.bottom);floatDate.style.left=(v9S.B0b(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/v9S.j1J),I9G))+t74;floatDate.style.bottom=bottom+t74;}
}
this.headsUpHR();this.runAppend(z2J,arguments);}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;STXChart.crosshairX=e.clientX;STXChart.crosshairY=e.clientY;if(this.runPrepend(R9G,arguments))return ;if(!this.displayInitialized)return ;if(v9S.O0b(this.openDialog,A8G))return ;this.mousemoveinner(e.clientX,e.clientY);this.runAppend(R9G,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){var R44=1463249,m5J=8314641,k3J=711390245,k0G=1563705430;var J1J=-k0G,d1J=-k3J,R1J=v9S.j1J;for(var y1J=v9S.v5J;v9S.L8J.p8J(y1J.toString(),y1J.toString().length,m5J)!==J1J;y1J++){this.reconstructDrawings(serializedDrawings);cIterator++;(fn)(params);R1J+=v9S.j1J;}
if(v9S.L8J.p8J(R1J.toString(),R1J.toString().length,R44)!==d1J){context.lineTo(x1,top);return m9u==z9u;}
if(!self.chart.canvas)return ;if(!STX.isAndroid){if(v9S.Q0b(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||v9S.x0b(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;if(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;v9S.z0b(i,arr.length);i++){var yAxis=arr[i];if(v9S.N0b(yAxis.left,x)&&v9S.j0b(yAxis.left+yAxis.width,x))return yAxis;}
}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){if(!this.chart.canvas)return ;if(!STX.isAndroid&&!STX.isIOS7or8){if(v9S.v8b(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||v9S.R8b(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
var value;if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.crossYActualPos=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);value=this.valueFromPixel(cy,this.currentPanel);var chField=v9S.E8b(this.currentPanel.name,"chart")?this.preferences.horizontalCrosshairField:this.currentPanel.horizontalCrosshairField;if(chField&&v9S.q8b(this.crosshairTick,chart.dataSet.length)&&this.crosshairTick>-1){value=chart.dataSet[this.crosshairTick][chField];this.crossYActualPos=this.pixelFromPriceTransform(value,this.currentPanel);}
this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,value);}
if(v9S.k8b(STXChart.crosshairX,this.left)&&v9S.r8b(STXChart.crosshairX,this.right)&&v9S.C8b(STXChart.crosshairY,this.top)&&v9S.A8b(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=v9S.p8b(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&v9S.h8b(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(v9S.B8b(this.cx,this.currentPanel.right)||v9S.Z8b(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(v9S.P8b(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=v9S.n8b(STXChart.crosshairX,this.grabStartX),dy=v9S.m8b(STXChart.crosshairY,this.grabStartY);if(v9S.b8b(dx,0)&&v9S.W8b(dy,0))return ;if(v9S.Y1b(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&v9S.y1b(this.grabMode,"pan")&&(v9S.d1b(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(v9S.t1b(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(v9S.a1b(this.grabMode,"zoom-x"))dy=0;else if(v9S.X1b(this.grabMode,"zoom-y"))dx=0;push=v9S.I1b(dx,25);var centerMe=true;if(v9S.T1b(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(v9S.L1b(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=v9S.D1b((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(v9S.s1b(pct,0.1)){newCandleWidth=v9S.M1b(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=v9S.U1b(this.layout.candleWidth,1.1);}
if(STX.ipad){if(v9S.H1b(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&v9S.K1b(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((v9S.u1b(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(v9S.F1b((this.chart.width/newCandleWidth),0.499));if(v9S.S5b(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);chart.scroll+=Math.round(v9S.V5b((newMaxTicks-chart.maxTicks),2));}
}
else{newMaxTicks=Math.round(v9S.J5b((this.chart.width/newCandleWidth),0.499));if(v9S.l5b(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(v9S.i5b(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=v9S.c5b(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);if(this.overYAxis){yAxis.zoom=Math.round(this.grabStartZoom+dy);if(v9S.g5b(this.grabStartZoom,yAxis.height)){if(v9S.e5b(yAxis.zoom,yAxis.height))yAxis.zoom=v9S.w5b(yAxis.height,1);}
else{if(v9S.o5b(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
}
else{if(this.allowScroll){if(v9S.G5b(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(v9S.f5b(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode=(D1G+f1J);push=Math.round(v9S.O5b(dx,this.layout.candleWidth));this.microscroll=v9S.Q5b(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;chart.scroll=this.grabStartScrollX+push;if(v9S.x5b(chart.scroll,1))chart.scroll=1;if(v9S.z5b(chart.scroll,chart.maxTicks)){this.preferences.whitespace=this.initialWhitespace;}
else{this.preferences.whitespace=v9S.N5b((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(v9S.j5b(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
this.dispatch("move",{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation){window.requestAnimationFrame(clsrFunc(this));}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;this.controls.crossX.style.left=(v9S.v2b(this.pixelFromTick(this.crosshairTick,chart),0.5))+"px";this.controls.crossY.style.top=this.crossYActualPos+(D1G+m94);this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(v9S.R2b(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(v9S.E2b(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&v9S.q2b(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&v9S.k2b(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){this.dispatch("move",{stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&!this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true,null,"drawing"],box={x0:this.tickFromPixel(v9S.r2b(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(v9S.C2b(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;v9S.A2b(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(v9S.p2b(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(v9S.h2b(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(v9S.B2b(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;v9S.Z2b(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(v9S.P2b(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(v9S.n2b(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(v9S.m2b(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(v9S.b2b(cy-radius,y)&&v9S.W2b(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
if(o.highlight)break;}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;v9S.Y3b(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field]&&renderer.caches[series.field][bar];if(!y&&v9S.y3b(y,0))continue;if(v9S.d3b(cy-radius,y)&&v9S.t3b(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((v9S.a3b(renderer.params.subtype,"step")||v9S.X3b(series.type,"step"))&&v9S.I3b(bar,0)){var py=renderer.caches[series.field]&&renderer.caches[series.field][v9S.T3b(bar,1)];if((py||v9S.L3b(py,0))&&(v9S.D3b(cy,y)&&v9S.s3b(cy,py))||(v9S.M3b(cy,y)&&v9S.U3b(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.inputs.display?o.inputs.display:o.name,null,null,o.permanent,"study"];drawingToMeasure=null;}
if(v9S.H3b(o.prev,o.highlight))somethingChanged=true;}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;v9S.K3b(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent,"series"];drawingToMeasure=null;}
if(v9S.u3b(series.prev,series.highlight))somethingChanged=true;}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(v9S.F3b(this.cy,m.offsetHeight,m74),v9S.V5J),right=Math.min(v9S.Y6n(this.chart.canvasWidth,(this.cx-V44)),v9S.y6n(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+(D1G+m94);m.style.right=right+t74;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete,type){var y94="rightclick_",m=this.controls.mSticky;if(!m)return ;var mi=m.children[v9S.V5J];if(!mi)return ;var overlayTrashCan=m.children[v9S.v5J].children[v9S.V5J],mouseDeleteInstructions=m.children[v9S.v5J].children[v9S.v5J];if(!forceShow&&!message){mi.innerHTML=A8G;m.style.display=W44;if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=W44;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=W44;}
}
else{if(!message)message=A8G;if(forceShow&&!message){mi.style.backgroundColor=A8G;mi.style.color=A8G;mi.style.display=W44;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=R4G;}
else{mi.style.backgroundColor=A8G;mi.style.color=A8G;mi.style.display=R4G;}
mi.innerHTML=message;if(type)m.children[v9S.v5J].className=y94+type;m.style.display=R4G;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=W44;mouseDeleteInstructions.style.display=W44;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=R4G;mouseDeleteInstructions.style.display=W44;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=S6G;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var s1G="measureLit",T6G="Bars",H0G="setMeasure";if(this.runPrepend(H0G,arguments))return ;var m=$$(H74),message=A8G;if(!price1){if(m&&v9S.d6n(m.className,X9G))m.className=X9G;if(!this.anyHighlighted&&v9S.t6n(this.currentVectorParameters.vectorType,A8G))this.clearMeasure();}
else{var distance=v9S.a6n(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=v9S.X6n((price2-price1),price1);if(v9S.I6n(Math.abs(pct),L9G)){pct=Math.round(v9S.T6n(pct,V94));}
else if(v9S.L6n(Math.abs(pct),C5J)){pct=v9S.D6n(Math.round(pct*H44),S74);}
else{pct=v9S.s6n(Math.round(pct*B44),V94);}
if(this.internationalizer){pct=this.internationalizer.percent.format(v9S.M6n(pct,V94));}
else{pct=pct+k2G;}
message+=K6G+pct+I3G;var ticks=Math.abs(v9S.U6n(tick2,tick1));ticks=Math.round(ticks)+v9S.v5J;var barsStr=this.translateIf(T6G);message+=C4G+ticks+C4G+barsStr;if(m){if(v9S.H6n(m.className,s1G))m.className=s1G;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(m){if(hover){m.style.display=R4G;m.children[v9S.V5J].style.display=R4G;if(price1){m.children[v9S.V5J].innerHTML=message;}
this.positionSticky(m);}
else{m.style.display=W44;m.children[v9S.V5J].innerHTML=A8G;}
}
this.runAppend(H0G,arguments);}
;STXChart.prototype.clearMeasure=function(){var m=$$(H74);if(m){if(v9S.K6n(m.className,X9G))m.className=X9G;m.innerHTML=A8G;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var A74="stx_panel_drag",borderEdge=Math.round(v9S.u6n(STXChart.resizingPanel.right,v9S.F1J))+I9G;STX.clearCanvas(this.chart.tempCanvas,this);var y=v9S.F6n(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(A74),t2J,this.chart.tempCanvas.context,I44,{}
);STXChart.resizingPanel.handle.style.top=(v9S.S7n(y,STXChart.resizingPanel.handle.offsetHeight/v9S.j1J))+t74;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=R4G;m.children[v9S.V5J].style.display=(W44);m.children[v9S.v5J].style.display=R4G;if(m.children[v9S.j1J])m.children[v9S.j1J].style.display=W44;m.style.top=(v9S.V7n(this.backOutY(STXChart.crosshairY),m74))+t74;m.style.right=v9S.J7n(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-V44),(t74));}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=v9S.V5J;if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){x=this.chart.dataSegment[bar].leftOffset;}
else{x=v9S.t7n((bar+I9G),this.layout.candleWidth);}
x=chart.panel.left+Math.floor(x+this.micropixels)-v9S.v5J;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;if(v9S.a7n(this.layout.chartType,"volume_candle")){var pixel=v9S.X7n(x,chart.panel.left,this.micropixels),mult=2,bar=Math.round(v9S.C7n(this.chart.dataSegment.length,mult)),rightofLastTick=this.chart.dataSegment[v9S.A7n(this.chart.dataSegment.length,1)].leftOffset+v9S.p7n(this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth,2);if(v9S.h7n(pixel,rightofLastTick)){return this.chart.dataSegment.length+Math.floor(v9S.B7n((x-rightofLastTick-chart.panel.left-this.micropixels),this.layout.candleWidth));}
else{for(var i=1;v9S.Z7n(i,this.chart.dataSegment.length);i++){mult*=2;if(!this.chart.dataSegment[bar])break;var left=v9S.P7n(this.chart.dataSegment[bar].leftOffset,this.chart.dataSegment[bar].candleWidth/2),right=this.chart.dataSegment[bar].leftOffset+v9S.n7n(this.chart.dataSegment[bar].candleWidth,2);if(v9S.m7n(bar,0)||(v9S.b7n(pixel,left)&&v9S.W7n(pixel,right)))break;else if(v9S.Y4n(pixel,left))bar-=Math.max(1,Math.round(v9S.y4n(this.chart.dataSegment.length,mult)));else bar+=Math.max(1,Math.round(v9S.d4n(this.chart.dataSegment.length,mult)));bar=Math.max(0,Math.min(v9S.t4n(this.chart.dataSegment.length,1),bar));}
if(!this.chart.dataSegment[bar]){for(i=0;v9S.a4n(i,this.chart.dataSegment.length);i++){if(!this.chart.dataSegment[i])continue;if(v9S.X4n(pixel,this.chart.dataSegment[i].leftOffset-this.chart.dataSegment[i].candleWidth/2))return Math.max(0,v9S.I4n(i,1));else if(v9S.T4n(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i;else if(v9S.L4n(pixel,this.chart.dataSegment[i].leftOffset+this.chart.dataSegment[i].candleWidth/2))return i+1;}
}
}
return bar;}
else{return Math.floor(v9S.D4n((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var tick=v9S.s4n(chart.dataSet.length,chart.scroll,1);if(v9S.Z4n(this.layout.chartType,"volume_candle")){tick+=this.barFromPixel(x,chart);}
else{tick+=Math.floor(v9S.P4n((x-chart.panel.left-this.micropixels),this.layout.candleWidth));}
return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;var bar=v9S.n4n(tick,chart.dataSet.length,chart.scroll,1);if(this.chart.dataSegment&&this.chart.dataSegment[bar]&&this.chart.dataSegment[bar].leftOffset){return chart.panel.left+Math.floor(this.chart.dataSegment[bar].leftOffset+this.micropixels)-1;}
else{var rightOffset=0,dsTicks=0;if(this.chart.dataSegment&&this.chart.dataSegment[v9S.u4n(this.chart.dataSegment.length,1)]&&this.chart.dataSegment[v9S.F4n(this.chart.dataSegment.length,1)].leftOffset){if(v9S.S9n(this.chart.dataSegment.length,tick-chart.dataSet.length+chart.scroll)){rightOffset=v9S.V9n(this.chart.dataSegment[this.chart.dataSegment.length-1].leftOffset,this.chart.dataSegment[this.chart.dataSegment.length-1].candleWidth/2);dsTicks=this.chart.dataSegment.length;}
}
return rightOffset+chart.panel.left+Math.floor(v9S.J9n((tick-dsTicks-chart.dataSet.length+chart.scroll-0.5),this.layout.candleWidth)+this.micropixels)-1;}
}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=v9S.l9n(yax.bottom,y);var price=yax.low+(v9S.i9n(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(v9S.c9n(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(v9S.I9n(y,v9S.V5J)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&v9S.T9n(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=v9S.L9n((yax.high-price),yax.multiplier);if(yax.semiLog){var p=Math.max(price,0),logPrice=v9S.D9n(Math.log(p),Math.LN10),height=yax.height;y=v9S.s9n(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick),ratio;if(v9S.M9n(a,0)&&v9S.U9n(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(v9S.H9n(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick),ratio;if(v9S.K9n(a,0)&&v9S.u9n(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return v9S.F9n(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;v9S.S0n(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var U9G="cros",n8G="undo";if(this.runPrepend(n8G,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=J2G;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,(c1G+h8G+m94+y9G+U9G+c1G+T2G+K2G+v1G),C7G);STX.swapClassName(this.controls.crossY,n6G,C7G);STXChart.drawingLine=I44;}
this.runAppend(n8G,arguments);}
;STXChart.prototype.undoStamp=function(before,after){var Q1G="undoStamp";this.undoStamps.push(before);this.dispatch(Q1G,{before:before,after:after}
);}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.changeOccurred("vector");this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){var drawings=STX.shallowClone(this.drawingObjects);this.drawingObjects.push(drawing);this.undoStamp(drawings,STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){var i44="ne";if(!parameters)parameters={}
;if(v9S.V0n(parameters.pattern,(y5G+a5G+i44)))return ;if(v9S.J0n(confineToPanel,true))confineToPanel=this.chart.panel;if(v9S.l0n(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(v9S.i0n(type,"ray")){bigX=10000000;if(v9S.c0n(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(v9S.g0n(type,"line")||v9S.e0n(type,"horizontal")||v9S.w0n(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=v9S.o0n(x1,x0),ydelta=v9S.G0n(y1,y0),p,q,r;for(var edge=0;v9S.f0n(edge,4);edge++){if(v9S.O0n(edge,0)){p=-xdelta;q=-(v9S.Q0n(edgeLeft,x0));}
if(v9S.x0n(edge,1)){p=xdelta;q=(v9S.z0n(edgeRight,x0));}
if(v9S.N0n(edge,2)){p=-ydelta;q=-(v9S.j0n(edgeTop,y0));}
if(v9S.v8n(edge,3)){p=ydelta;q=(v9S.R8n(edgeBottom,y0));}
r=v9S.E8n(q,p);if((y1||v9S.q8n(y1,0))&&v9S.k8n(p,0)&&v9S.r8n(q,0)){return false;}
if(v9S.C8n(p,0)){if(v9S.A8n(r,t1))return false;else if(v9S.p8n(r,t0))t0=r;}
else if(v9S.h8n(p,0)){if(v9S.B8n(r,t0))return false;else if(v9S.Z8n(r,t1))t1=r;}
}
var x0clip=x0+v9S.P8n(t0,xdelta),y0clip=y0+v9S.n8n(t0,ydelta),x1clip=x0+v9S.m8n(t1,xdelta),y1clip=y0+v9S.b8n(t1,ydelta);if(!y1&&v9S.W8n(y1,0)&&!y0&&v9S.Y1n(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(v9S.y1n(v.x0,edgeRight))return false;if(v9S.d1n(v.x0,edgeLeft))return false;}
else if(!y1&&v9S.t1n(y1,0)){if(v9S.a1n(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(v9S.X1n(v.x0,edgeRight))return false;if(v9S.I1n(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||v9S.T1n(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(v9S.L1n(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(v9S.D1n(pattern,"solid")){pattern=null;}
else if(v9S.s1n(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(v9S.M1n(pattern,"dashed")){pattern=[v9S.U1n(context.lineWidth,5),v9S.H1n(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(v9S.K1n(parameters.pattern,"none"))return ;if(v9S.u1n(confineToPanel,true))confineToPanel=this.chart.panel;if(v9S.F1n(context,null)||typeof (context)=="undefined")context=this.chart.context;if(v9S.S5n(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||v9S.V5n(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(v9S.J5n(pattern,"solid")){pattern=null;}
else if(v9S.l5n(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(v9S.i5n(pattern,"dashed")){pattern=[v9S.c5n(context.lineWidth,5),v9S.g5n(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;v9S.e5n(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=v9S.w5n(x1,x0),ydelta=v9S.o5n(y1,y0),p,q,r;for(var edge=0;v9S.G5n(edge,4);edge++){if(v9S.f5n(edge,0)){p=-xdelta;q=-(v9S.O5n(edgeLeft,x0));}
if(v9S.Q5n(edge,1)){p=xdelta;q=(v9S.x5n(edgeRight,x0));}
if(v9S.z5n(edge,2)){p=-ydelta;q=-(v9S.N5n(edgeTop,y0));}
if(v9S.j5n(edge,3)){p=ydelta;q=(v9S.v2n(edgeBottom,y0));}
r=v9S.R2n(q,p);if((y1||v9S.E2n(y1,0))&&v9S.q2n(p,0)&&v9S.k2n(q,0)){return false;}
if(v9S.r2n(p,0)){if(v9S.C2n(r,t1))return false;else if(v9S.A2n(r,t0))t0=r;}
else if(v9S.p2n(p,0)){if(v9S.h2n(r,t0))return false;else if(v9S.B2n(r,t1))t1=r;}
}
var x0clip=x0+v9S.Z2n(t0,xdelta),y0clip=y0+v9S.P2n(t0,ydelta),x1clip=x0+v9S.n2n(t1,xdelta),y1clip=y0+v9S.m2n(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(v9S.b2n(parameters.pattern,"none"))return ;if(v9S.W2n(confineToPanel,true))confineToPanel=this.chart.panel;if(v9S.Y3n(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||v9S.y3n(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(v9S.d3n(pattern,"solid")){pattern=null;}
else if(v9S.t3n(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(v9S.a3n(pattern,"dashed")){pattern=[v9S.X3n(context.lineWidth,5),v9S.I3n(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var P3G="shair_",C3G="cro",Q4G="shai",c7G="_cros",X3G="ra",X7G="crossh";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=J2G;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=J2G;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=I44;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=J2G;this.adjustDrawings();this.draw();this.changeOccurred(M3J);STX.swapClassName(this.controls.crossX,n6G,(m7G+e5G+X7G+f7G+K2G+v1G+y9G+u7G+X3G+v04+d04+c3G));STX.swapClassName(this.controls.crossY,(c1G+h8G+m94+c7G+Q4G+v1G),C7G);}
}
else{this.changeOccurred(a7G);STXChart.drawingLine=t2G;STX.swapClassName(this.controls.crossX,(m7G+e5G+C3G+c1G+P3G+u7G+v1G+f7G+v04+d04+c3G),n6G);STX.swapClassName(this.controls.crossY,C7G,(I0G+d4G+v1G+a5G+B7G+T2G+K2G+v1G));}
return t2G;}
return I44;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(v9S.T3n(y,panel.top)&&v9S.L3n(y,panel.bottom))return panel;}
return J2G;}
;STXChart.prototype.mouseup=function(e){var d44="rt";if(this.runPrepend(b74,arguments))return ;this.swipe.end=t2G;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(v9S.D3n(Date.now()-this.mouseTimer,y04))){this.changeOccurred(M3J);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=J2G;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=I44;}
}
if(this.repositioningBaseline){this.repositioningBaseline=J2G;this.chart.panel.yAxis.scroll=v9S.s3n(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/v9S.j1J);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=I44;if(!this.displayInitialized)return ;this.grabbingScreen=I44;if(v9S.M3n(this.openDialog,A8G)){if(STXChart.insideChart)STX.unappendClassName(this.container,(m7G+m94+t1G+u7G+v1G+f7G+c3G+t1G+d4G+T2G+d44));return ;}
if(this.grabOverrideClick){this.swipeRelease();STX.unappendClassName(this.container,x4G);this.grabOverrideClick=I44;return ;}
if(STXChart.insideChart)STX.unappendClassName(this.container,x4G);if(STXChart.resizingPanel){this.releaseHandle({}
);return ;}
if(!e)e=event;if((e.which&&v9S.U3n(e.which,v9S.j1J))||(e.button&&v9S.H3n(e.button,v9S.j1J))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault&&this.captureTouchEvents)e.preventDefault();e.stopPropagation();return I44;}
else{return t2G;}
}
if(v9S.K3n(e.clientX,this.left)||v9S.u3n(e.clientX,this.right))return ;if(v9S.F3n(e.clientY,this.top)||v9S.S6g(e.clientY,this.bottom))return ;var cy=this.backOutY(e.clientY),cx=this.backOutX(e.clientX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){this.dispatch(s2J,{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
this.runAppend(b74,arguments);}
;STXChart.prototype.grabbingHand=function(){var e64=((0xF,36)<130?(18,3725424):(0x17E,0x241)<=(0x20,49)?(3.80E1,0xD5):(89.60E1,95)),K3J=9879235,W2G=986696033,S2J=1846024339;if(!this.allowScroll)return ;var t1J=-S2J,q1J=-W2G,l1J=v9S.j1J;for(var E1J=v9S.v5J;v9S.L8J.p8J(E1J.toString(),E1J.toString().length,K3J)!==t1J;E1J++){this.makeAsyncCallbacks();seriesPlotter.draw(context,V7G);this.setPeriodicityV2(v9S.v5J,P3J,loadAllTheData);l1J+=v9S.j1J;}
if(v9S.L8J.p8J(l1J.toString(),l1J.toString().length,e64)!==q1J){this.touchstart(e);}
if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(this.container,x4G);}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(v9S.V6g(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&v9S.J6g(e.which,2))||(e.button&&v9S.l6g(e.button,2))){return ;}
var chart=this.currentPanel.chart;if(v9S.i6g(e.clientX,this.left)&&v9S.c6g(e.clientX,this.right)&&v9S.g6g(e.clientY,this.top)&&v9S.e6g(e.clientY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;v9S.w6g(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if((v9S.o6g(this.layout.chartType,"baseline_delta")||v9S.G6g(this.layout.chartType,"baseline_delta_mountain"))&&v9S.f6g(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(v9S.O6g(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=v9S.Q6g(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(v9S.x6g(chart.baseline.actualLevel,y0)&&v9S.z6g(chart.baseline.actualLevel,y1)&&v9S.N6g(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;this.grabStartX=e.clientX;this.grabStartY=e.clientY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.swipeStart(chart);this.runAppend("mousedown",arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var x8G="rightClickOverlay";if(this.runPrepend(x8G,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(x8G,arguments);}
;STXChart.prototype.removeOverlay=function(name){var p94="la",R6G="Ov",u2G="rem",x0G="removeOverlay";if(this.runPrepend(x0G,arguments))return ;var mySD;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-v9S.v5J){this.removeOverlay(sd.name);}
else if(v9S.j6g(sd.name,name)){mySD=sd;}
}
var study=this.layout.studies[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);if(mySD)this.cleanupRemovedStudy(mySD);delete  this.overlays[name];this.displaySticky();this.createDataSet();this.changeOccurred(p5J);this.runAppend((u2G+a5G+g04+J4G+R6G+J4G+v1G+p94+e94),arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){var E9G="ad";if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(v9S.v7g("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&v9S.R7g(obj.parameters.chartType,"mountain"))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var mIterator=0,cIterator=0,c,m;while(parameters.data&&v9S.E7g(mIterator,stx.masterData.length)&&v9S.q7g(cIterator,parameters.data.length)){c=parameters.data[cIterator];m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(v9S.k7g(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
cIterator++;mIterator++;continue;}
if(v9S.r7g(c.DT,m.DT)){if(parameters.forceData){stx.masterData.splice(mIterator,0,{DT:c.DT}
);continue;}
cIterator++;}
else mIterator++;}
if(parameters.forceData&&v9S.C7g(mIterator,stx.masterData.length)){while(parameters.data&&v9S.A7g(cIterator,parameters.data.length)){var c=parameters.data[cIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);m={DT:c.DT}
;if(typeof c.Value!="undefined"){m[field]=c.Value;}
else if(stx.layout.adj&&typeof c.Adj_Close!="undefined"){m[field]=c.Adj_Close;}
else{m[field]=c.Close;}
stx.masterData.push(m);cIterator++;}
}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,parameters.symbolObject,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[v9S.p7g(this.chart.masterData.length,1)].DT;if(parameters.symbolObject)fetchParams.symbolObject=parameters.symbolObject;doneInCallback=true;function handleResponse(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error,obj);self.runAppend("addSeries",arguments);}
;if(fetchParams.stx.isEquationChart(fetchParams.symbol)){STX.fetchEquationChart(fetchParams,handleResponse);}
else{driver.quoteFeed.fetch(fetchParams,handleResponse);}
}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);if(cb)cb(null,obj);this.runAppend((E9G+u7G+o5J+J4G+N7G),arguments);}
return obj;}
;STXChart.prototype.isEquationChart=function(symbol){var Z64="=";if(!this.allowEquations||!STX.computeEquationChart)return I44;if(symbol&&v9S.h7g(symbol[v9S.V5J],Z64))return t2G;return I44;}
;STXChart.prototype.deleteSeries=function(field,chart){var o7G="deleteSeries",P64="eSe";if(this.runPrepend((M44+r5G+J4G+h8G+P64+N7G),arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];if(this.quoteDriver)this.quoteDriver.updateSubscriptions();this.runAppend(o7G,arguments);}
;STXChart.prototype.removeSeries=function(field,chart){var d74="eS";if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=v9S.B7g(renderer.seriesParams.length,1);v9S.Z7g(sp,0);sp--){var series=renderer.seriesParams[sp];if(!series.permanent&&v9S.P7g(series.field,field)){renderer.removeSeries(field);}
}
}
this.deleteSeries(field,chart);var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.createDataSet();this.draw();this.runAppend((v1G+J4G+s5G+H4G+d74+I4G+b5J+c1G),arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var g1G="rendererAction";if(this.runPrepend(g1G,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&v9S.n7g(phase,B6G))continue;if(!renderer.params.overChart&&v9S.m7g(phase,L1J))continue;if(!this.panels[renderer.params.panel])continue;if(v9S.b7g(this.panels[renderer.params.panel].chart,chart))continue;if(v9S.W7g(phase,k6G)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(g1G,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var I5G="awSe",G1G="li",f6G="un",J7G="mo";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&v9S.Y4g(parameters.minimum,0))||(!parameters.maximum&&v9S.y4g(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&v9S.d4g(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&v9S.t4g(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=v9S.a4g(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=v9S.X4g(t,1)?(top+t):(top+(v9S.I4g(height,t)));if(b)bottom=v9S.T4g(b,1)?(v9S.L4g(bottom,b)):(v9S.D4g(bottom,(height*b)));var multiplier=v9S.s4g((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,context=this.chart.context,isStep=(v9S.M4g(parameters.type,(c1G+u8G+D1G))||v9S.U4g(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||v9S.H4g(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap","stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries("gap","stroke",color,1,width);series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis,xbase=v9S.K4g(panel.left,(isStep?1:0.5)*cw,this.micropixels,1),x0=xbase;for(var i=0;v9S.N4g(i,quotes.length);i++){xbase+=v9S.j4g(cw,2);if(isStep)xbase+=v9S.v9g(cw,2);cw=this.layout.candleWidth;if(!isStep)xbase+=v9S.R9g(cw,2);if(v9S.E9g(x,null)&&v9S.q9g(y,null)){if(!gap||parameters.gaps)points.push([x,y]);}
var quote=quotes[i];if(!quote)continue;if(quote.candleWidth){if(!isStep)xbase+=v9S.k9g((quote.candleWidth-cw),2);cw=quote.candleWidth;}
if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&v9S.r9g(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(v9S.C9g(gap,false)){if(isStep){x+=cw;seriesPlotter.lineTo("line",x,y);}
seriesPlotter.moveTo("gap",x,y);}
gap=true;if(x&&!parameters.gaps)points.push([x,bottom]);continue;}
if(!isStep&&lastPoint&&v9S.A9g(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=xbase;if(v9S.p9g(x,panel.right))lastQuote=quote;if(this.extendLastTick&&v9S.h9g(i,quotes.length-1))x+=v9S.B9g(cw,2);if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=v9S.Z9g(bottom,((val-min)*multiplier));}
if(v9S.P9g(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;v9S.n9g(lastPoint,i);lastPoint++){var xInt=panel.left+Math.floor(xbase+v9S.m9g(((lastPoint-i)+0.5),cw))+this.micropixels-1,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[v9S.b9g(i,1)]&&v9S.W9g(yValueCache[i-1],0)){for(var bf=v9S.Y0g(i,1);v9S.y0g(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[v9S.d0g(points.length,1)][1];}
}
if(!started){started=true;var leftTick=v9S.t0g(chart.dataSet.length,chart.scroll);if(v9S.a0g(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[leftTick];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=v9S.X0g(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?(V7G):"line"),x,y);}
else{seriesPlotter.moveTo((gap?"gap":"line"),x0,y0);if(isStep){if(gap){if(parameters.gaps)seriesPlotter.lineTo("gap",x,y0);else seriesPlotter.moveTo("gap",x,y0);}
else seriesPlotter.lineTo("line",x,y0);}
if(!gap||parameters.gaps){if(isStep)points.unshift([x,y0]);points.unshift([x0,y0]);}
if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.unshift([x,bottom]);points.unshift([x0,bottom]);seriesPlotter.moveTo((c3G+f7G+D1G),x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
}
}
}
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){points.push([x,bottom]);seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);if(isStep&&v9S.I0g(i,quotes.length-1))seriesPlotter.dashedLineTo("line",x+cw,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);if(isStep&&v9S.T0g(i,quotes.length-1)&&!gap)seriesPlotter.lineTo("line",x+cw,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=panel.left+Math.floor(xbase+cw+this.micropixels)-1;if(this.extendLastTick)x+=v9S.L0g(cw,2);if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(v9S.D0g(series.parameters.chartType,(J7G+f6G+h8G+f7G+K2G+y5G))&&points.length){points.push([x,(gap&&!parameters.gaps)?bottom:y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);for(var pt=0;v9S.s0g(pt,points.length);pt++){seriesPlotter[pt?"lineTo":"moveTo"]("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",points[0][0],bottom);seriesPlotter.draw(context,"mountain");}
seriesPlotter.draw(context,"gap");seriesPlotter.draw(context,(G1G+y5G+J4G));this.endClip();if(shareYAxis&&lastQuote){if(yax.priceFormatter){txt=yax.priceFormatter(this,panel,lastQuote[field],yax);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,null,yax);}
this.yAxisLabels.push({src:"series","args":[panel,txt,this.pixelFromPrice(lastQuote[field],panel,yax),color,null,null,yax]}
);}
var display=series.parameters.display;if(!display)display=series.display;legendColorMap[field]={color:color,display:display}
;}
if(chart.legend&&series&&series.useChartLegend){if(chart.legendRenderer)chart.legendRenderer(this,{"chart":chart,"legendColorMap":legendColorMap,"coordinates":{x:chart.legend.x,y:chart.legend.y+chart.panel.yAxis.top}
}
);}
this.runAppend((u7G+v1G+I5G+v1G+b5J+c1G),arguments);}
;STXChart.prototype.isDailyInterval=function(interval){if(v9S.M0g(interval,P3J))return t2G;if(v9S.U0g(interval,u9G))return t2G;if(v9S.H0g(interval,A5J))return t2G;return I44;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,timeUnit,cb){var n4G="et",Y44="iv",H1G="q",N2G="Cal",m5G="eit",c5J="ecause",L74="eriod",T2J="nth";if(this.runPrepend("setPeriodicityV2",arguments))return ;if(typeof timeUnit==="function"){cb=timeUnit;timeUnit=null;}
var switchInterval=false;if(!interval)return ;if(!period)return ;delete  this.layout.setSpan;if(v9S.K0g(interval,"year")){interval=(s5G+a5G+T2J);if(!period)period=1;period=v9S.u0g(period,12);}
var isDaily=this.isDailyInterval(interval),wasDaily=this.isDailyInterval(this.layout.interval);if(isDaily)timeUnit=null;else if(v9S.F0g(interval,"tick"))timeUnit=null;else if(!timeUnit)timeUnit="minute";var getDifferentData=false;if(this.chart.symbol){if(v9S.S8g(isDaily,wasDaily)||this.dontRoll)getDifferentData=true;if(!wasDaily){if(v9S.V8g(this.layout.interval,interval))getDifferentData=true;}
if(v9S.J8g(timeUnit,this.layout.timeUnit))getDifferentData=true;}
this.layout.periodicity=period;this.layout.interval=interval;this.layout.timeUnit=timeUnit;if(getDifferentData){this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol){if(this.displayInitialized)this.quoteDriver.newChart({symbol:this.charts[c].symbol,symbolObject:this.charts[c].symbolObject,chart:this.charts[c]}
,cb);else this.newChart(this.charts[c].symbol,null,this.charts[c],cb);}
}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((d4G+f1J+y5G+a5G+h8G+C4G+d4G+T2G+y5G+c3G+J4G+C4G+D1G+L74+b3J+K2G+h8G+e94+C4G+A7G+c5J+C4G+y5G+m5G+o8G+v1G+C4G+u7G+f7G+n0G+N2G+r5G+w94+d4G+E2G+C4G+a5G+v1G+C4G+H1G+B8G+T1G+p6G+v1G+Y44+J4G+v1G+C4G+f7G+i2G+C4G+c1G+n4G));return ;}
}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(v9S.l8g(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(v9S.i8g(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=v9S.c8g(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&v9S.g8g(chart.dataSegment.length,0)){if(v9S.e8g(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=v9S.w8g(chart.dataSegment.length,1);}
if(v9S.o8g(pos,chart.dataSegment.length)){dt=chart.dataSegment[v9S.G8g(chart.dataSegment.length,1)].DT;pos=v9S.f8g(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.createDataSet();if(centerMe){if(chart.dataSegment&&v9S.O8g(chart.dataSegment.length,0)){for(var i=v9S.Q8g(chart.dataSet.length,1);v9S.x8g(i,0);i--){var nd=chart.dataSet[i].DT;if(v9S.z8g(nd.getTime(),dt.getTime())){chart.scroll=(v9S.N8g(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(v9S.j8g(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=v9S.v1g(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){var Q2J=6296454,s7G=6603985,n3J=((0x1D9,118.)<(66,0x130)?(59,1548100694):(13,14.61E2)),R94=((0xE,0xC3)<=(110,0x13A)?(2.780E2,1924822526):(0x9A,0x142));if(this.vectorsShowing)return ;var k1J=R94,c1J=-n3J,a1J=v9S.j1J;for(var i1J=v9S.v5J;v9S.L8J.p8J(i1J.toString(),i1J.toString().length,s7G)!==k1J;i1J++){context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+v9S.v5J])));leftDT.setMilliseconds(v9S.V5J);e.stopPropagation();this.pendingAsyncs.push(t2G);a1J+=v9S.j1J;}
if(v9S.L8J.p8J(a1J.toString(),a1J.toString().length,Q2J)!==c1J){inputs[u94].push(stx.layout.studies[corrPanel.name].inputs[u94][i]);return a7u/k7u;}
if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;v9S.R1g(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;v9S.E1g(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,timeUnit,dontRoll,alignToHour){var V4G="dQ",H5G="cons";if(v9S.q1g(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var ratio=1;if(self.layout.adj&&quotes[p].Adj_Close){ratio=v9S.k1g(quotes[p].Adj_Close,quotes[p].Close);}
if(v9S.r1g("High",quotes[p]))if(v9S.C1g(quotes[p].High*ratio,quote.High))quote.High=v9S.A1g(quotes[p].High,ratio);if(v9S.p1g("Low",quotes[p]))if(v9S.h1g(quotes[p].Low*ratio,quote.Low))quote.Low=v9S.B1g(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(v9S.Z1g("Close",quotes[p])&&v9S.P1g(quotes[p].Close,null))quote.Close=v9S.n1g(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[v9S.m1g(p,1)].DT,d2=quotes[p].DT;if(v9S.b1g(interval,(v04+k9G+E2G))){if(v9S.W1g(d2.getDay(),d1.getDay()))return true;}
else if(v9S.Y5g(interval,"month")){if(v9S.y5g(d2.getMonth(),d1.getMonth()))return true;}
else{if(v9S.d5g(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval,timeUnit){var L3J="sec",nextBar=v9S.t5g(interval,periodicity),d1=new Date(quotes[position].DT);if(v9S.a5g(timeUnit,"millisecond"))d1.setMilliseconds(d1.getMilliseconds()+nextBar);else if(v9S.X5g(timeUnit,(L3J+a5G+y5G+u7G)))d1.setSeconds(d1.getSeconds()+nextBar);else d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(v9S.I5g(quotes[position].DT.getMinutes(),nextBar)){if(v9S.T5g(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(v9S.L5g(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((v9S.D5g(interval,(v04+J4G+J4G+E2G))||v9S.s5g(interval,"month"))&&!dontRoll){for(i=1;v9S.M5g(i,periodicity);i++){while(v9S.U5g(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(v9S.H5g(i,periodicity)){p++;if(v9S.K5g(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&v9S.u5g(interval,"tick")&&v9S.F5g(periodicity,1)){for(i=1;v9S.S2g(i,periodicity);i++){p=position+i;if(v9S.V2g(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval,timeUnit)){p--;break;}
if(v9S.J2g(p,0)&&v9S.l2g(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;v9S.i2g(i,periodicity);i++){p=position+i;if(v9S.c2g(p,0)&&v9S.g2g(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend((H5G+q8G+l2J+z4G+V4G+B8G+T1G),arguments$);return {"quote":quote,"position":p+1}
;}
;X(v9S.V5J);T(v9S.v5J);L(v9S.j1J);G(v9S.d5J);M(v9S.q5J);O(v9S.w64);P(l64);STXChart.prototype.displayChart=function(chart){var P2G="e_tra",V8G="el",g2J="x_b",M9G="ce",h7G="e_tr",P6G="selin",K74="ty",j4G="ac",D4G="ow",s94="_shad",H6G="_can",N94="_eve",H94="low_candl",V3J="_up",m2G="andle",H2G="llow",i9G="ho",n94="wa",m44="wn",R2J="e_d",F0G="x_li",G5G="mount",g8G="own",r8G="_d",y2J="stx_pandf",noBorders=(v9S.e2g(this.layout.candleWidth-chart.tmpWidth,2)&&v9S.w2g(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(v9S.o2g(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up","stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(v9S.G2g(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,(y2J+r8G+g8G),"O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(v9S.f2g(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(v9S.O2g(chartType,(G5G+f7G+d04))){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(v9S.Q2g(chartType,"colored_mountain")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor((m7G+F0G+y5G+R2J+a5G+m44)),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(v9S.x2g(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(v9S.z2g(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawMountainChart(panel,"stx_colored_mountain_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(v9S.N2g(chartType,(n94+g04+J4G))){this.drawWaveChart(panel);}
else if(v9S.j2g(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(v9S.v3g(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(v9S.R3g(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(v9S.E3g(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(v9S.q3g(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,"stx_bar_even",STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(v9S.k3g(chartType,"hollow_candle")||v9S.r3g(chartType,"volume_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,(c1G+h74+y9G+i9G+H2G+y9G+d4G+m2G+V3J),STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,(c5G+y9G+w2G+a5G+r5G+H94+J4G+N94+y5G),STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,"transparent",v9S.C3g(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",v9S.A3g(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",v9S.p3g(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,v9S.h3g(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,v9S.B3g(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,v9S.Z3g(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(v9S.P3g(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor("stx_candle_shadow_down"),coloredShadow=(v9S.n3g(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(v9S.m3g(mode,"shadow")){if(coloredShadow){if(v9S.b3g(quote.Close,quote.Open))return coloredShadowUp;else if(v9S.W3g(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(v9S.Y6q(mode,"solid")){if(v9S.y6q(quote.Close,quote.Open))return stxCandleUpColor;else if(v9S.d6q(quote.Close,quote.Open))return stxCandleDownColor;else if(v9S.t6q(quote.Close,quote.Open))return stxCandleShadow;}
else if(v9S.a6q(mode,"outline")){var styleArray1;if(v9S.X6q(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(v9S.I6q(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,(c1G+h74+H6G+u7G+Q8G+s94+D4G));var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(v9S.T6q(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace",(a5G+D1G+j4G+K2G+K74),0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(v9S.L6q(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(v9S.D6q(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&v9S.s6q(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(v9S.M6q(s,"over")?0:v9S.U6q(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(v9S.H6q(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=v9S.K6q(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=v9S.b6q(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(v9S.j6q(chartType,"baseline_delta_mountain")){var baseline=chart.baseline.actualLevel;if(v9S.v7q(baseline,null)){this.drawMountainChart(panel,"stx_baseline_delta_mountain");this.startClip(panel.name);this.setStyle((c1G+h8G+e5G+w94+P6G+h7G+f7G+M9G),"opacity",0);this.drawLineChart(panel,(m7G+g2J+f7G+c1G+V8G+K2G+y5G+P2G+M9G));baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(v9S.R7q(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
;this.chart.baseLegendColors.push(parameters.color);parameters.color="transparent";STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(v9S.E7q(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=v9S.q7q(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=v9S.c7q(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
this.endClip();}
}
else if(v9S.I7q(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;v9S.T7q(i,chart.dataSet.length);i++){var q=chart.dataSet[i],previousClose=chart.dataSet[v9S.L7q(i,1)].Close,trueRange=Math.max(v9S.D7q(q.High,q.Low),Math.abs(v9S.s7q(q.High,previousClose)),Math.abs(v9S.M7q(q.Low,previousClose)));total+=trueRange;if(v9S.U7q(i,period))total-=chart.dataSet[v9S.H7q(i,period)].trueRange;q.trueRange=trueRange;q.atr=v9S.K7q(total,period);}
}
;STXChart.prototype.calculateMedianPrice=function(chart){var d;for(var i=0;v9S.u7q(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hl/2"]=v9S.F7q((d.High+d.Low),2);}
}
;STXChart.prototype.calculateTypicalPrice=function(chart){var B1G="3",E1G="lc",d;for(var i=0;v9S.S4q(i,chart.dataSet.length);++i){d=chart.dataSet[i];d[(w2G+E1G+s8G+B1G)]=v9S.V4q((d.High+d.Low+d.Close),3);}
}
;STXChart.prototype.calculateWeightedClose=function(chart){var d;for(var i=0;v9S.J4q(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["hlcc/4"]=v9S.l4q((d.High+d.Low+2*d.Close),4);}
}
;STXChart.prototype.calculateOHLC4=function(chart){var d;for(var i=0;v9S.i4q(i,chart.dataSet.length);++i){d=chart.dataSet[i];d["ohlc/4"]=v9S.c4q((d.Open+d.High+d.Low+d.Close),4);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;if(!this.chart.dataSet)return null;for(var i=v9S.g4q(this.chart.dataSet.length,1);v9S.e4q(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=this.minimumLeftBars+1;if(chart.allowScrollPast){var rightPad=v9S.w4q(chart.maxTicks,leftPad);if(v9S.o4q(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=v9S.G4q(chart.maxTicks,chart.dataSet.length);}
if(v9S.f4q(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(v9S.O4q(chart.scroll,leftPad)){chart.scroll=leftPad;this.micropixels=-this.layout.candleWidth/2;}
}
else{if(v9S.Q4q(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(v9S.x4q(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){var j3J="can",J5G="lum";if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=v9S.z4q(chart.dataSet.length,chart.scroll,1);for(var i=-1;v9S.F4q(i,chart.scroll)&&v9S.S9q(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(v9S.V9q(position,chart.dataSet.length)&&v9S.J9q(position,0)){if(chart.dataSet[position].candleWidth){chart.dataSet[position].candleWidth=null;chart.dataSet[position].leftOffset=null;}
chart.dataSegment.push(chart.dataSet[position]);if(v9S.l9q(chart.baseline.actualLevel,null)&&v9S.i9q(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(v9S.c9q(position,0)){chart.dataSegment.push(null);}
}
if(v9S.g9q(this.layout.chartType,(h2G+J5G+J4G+y9G+j3J+u7G+r5G+J4G))){var totalVolume=0;for(var v=0;v9S.e9q(v,chart.dataSegment.length);v++){if(chart.dataSegment[v])totalVolume+=chart.dataSegment[v].Volume;}
var accumOffset=0;for(var w=0;v9S.w9q(w,chart.dataSegment.length);w++){if(chart.dataSegment[w]){if(chart.dataSegment[w].Volume){var workingWidth=chart.width;if(v9S.o9q(chart.scroll,chart.maxTicks))workingWidth-=this.preferences.whitespace;chart.dataSegment[w].candleWidth=v9S.G9q(workingWidth,chart.dataSegment[w].Volume,totalVolume);chart.dataSegment[w].leftOffset=accumOffset+v9S.M9q(chart.dataSegment[w].candleWidth,2);accumOffset+=chart.dataSegment[w].candleWidth;}
else{chart.dataSegment[w].candleWidth=this.layout.candleWidth;chart.dataSegment[w].leftOffset=accumOffset+v9S.U9q(this.layout.candleWidth,2);accumOffset+=this.layout.candleWidth;}
}
else{accumOffset+=this.layout.candleWidth;}
}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return v9S.H9q(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;v9S.K9q(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;v9S.u9q(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(v9S.F9q(bar.DT.getTime(),dt.getTime())){this.chart.scroll=v9S.S0q(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;v9S.V0q(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var p0G="dle",n7G="mid",T74="axi",L64="_y";if(v9S.J0q(panel.yAxis.drawPriceLabels,false))return ;var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize((c1G+h74+L64+T74+c1G))+v9S.l0q(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder;if(v9S.i0q(this.axisBorders,false))drawBorders=false;if(v9S.c0q(this.axisBorders,true))drawBorders=true;var tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+v9S.g0q(margin,2);}
catch(e){width=yax.width;}
var x=v9S.e0q(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(v9S.L0q(yax.position,null)?panel.chart.yAxis.position:yax.position);if(v9S.D0q(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(v9S.s0q(y+(height/2),yax.bottom))y=v9S.M0q(yax.bottom,(height/2));if(v9S.U0q(y-(height/2),yax.top))y=yax.top+(v9S.H0q(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,v9S.K0q(y,(height/2)),width,height,radius,true,false);if(v9S.u0q(this.preferences.currentPriceLine,true)&&v9S.F0q(panel.chart.scroll-1,Math.ceil(panel.chart.width/this.layout.candleWidth))){context.globalCompositeOperation="destination-over";this.plotLine(panel.left,panel.right,y,y,backgroundColor,"line",context,panel,{pattern:"dashed",lineWidth:1,opacity:0.8}
);context.globalCompositeOperation="source-over";}
context.textBaseline=(n7G+p0G);context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(v9S.S8q(context.fillStyle,backgroundColor)){if(v9S.V8q(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,textx,y+1);context.textAlign="left";}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var g5G="loat",context=this.chart.context,margin=2,fontstyle=(c5G+t1G+V3G+g5G+t1G+u7G+z4G),height=this.getCanvasFontSize(fontstyle)+v9S.J8q(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+v9S.l8q(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(v9S.i8q(x+(width/2),panel.left)||v9S.c8q(x-(width/2),panel.right))return ;if(!pointed){if(v9S.g8q(x+(width/2),panel.right))x=v9S.e8q(panel.right,(width/2));if(v9S.w8q(x-(width/2),panel.left))x=panel.left+(v9S.o8q(width,2));}
context.fillStyle=backgroundColor;STX.roundRect(context,v9S.G8q(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=v9S.f8q(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(v9S.U8q(x,arrowHeight),y);context.lineTo(x,v9S.H8q(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(v9S.K8q(context.fillStyle,backgroundColor)){if(v9S.u8q(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,v9S.F8q(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(v9S.Y1q(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&v9S.y1q(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(v9S.d1q(whichSet,"dataSegment")){while(v9S.t1q(l,(chart.width-this.micropixels+(this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][v9S.a1q(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(v9S.X1q(chart.dataSet.length,2)){var quote2=chart[whichSet][v9S.I1q(l,2)];prevClose=quote2.Close;}
if(v9S.T1q(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||v9S.L1q(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var X3J=0.65;this.defaultColor=o0G;var bgColor=J2G,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=W0G;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(v9S.D1q(bgColor,W0G))bgColor=F64;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[v9S.j1J];if(v9S.s1q(v,X3J))this.defaultColor=o0G;else this.defaultColor=F64;}
else{this.defaultColor=o0G;}
}
else{this.containerColor=F64;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(t2G);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;v9S.M1q(i,this.asyncCallbacks.length);i++){if(v9S.U1q(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;v9S.H1q(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){this.debug();if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;this.offset=v9S.K1q(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(v9S.b1q(this.layout.candleWidth,this.candleWidthPercent));if(v9S.W1q(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(v9S.Y5q(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(v9S.y5q(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){if(!this.panels[panel].hidden)this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;v9S.d5q(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(v9S.t5q(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display="none";}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(v9S.a5q(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;var backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1,ratio=v9S.X5q(this.devicePixelRatio,backingStoreRatio);if(!STX.isAndroid||STX.is_chrome){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=v9S.I5q(oldWidth,ratio);canvas.height=v9S.T5q(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=this.chart.container.clientHeight;this.floatCanvas.width=this.chart.container.clientWidth;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=v9S.L5q(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(v9S.D5q(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(v9S.s5q(chart.width,candleWidth));var wsInTicks=Math.round(v9S.M5q(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=v9S.U5q(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(v9S.H5q(idealNumberOfTicks,1)){if(v9S.K5q(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(v9S.u5q(this.chart.width,idealNumberOfTicks));if(v9S.F5q(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(v9S.S2q(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(v9S.V2q(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(maintainScroll){var W1G="hart",E6G="izeC",y0G="resizeChart";if(this.runPrepend(y0G,arguments))return ;if(v9S.J2q(maintainScroll,I44))maintainScroll=t2G;if(maintainScroll)this.preAdjustScroll();var previousHeight=this.chart.canvasHeight;this.resizeCanvas();if(maintainScroll)this.postAdjustScroll();if(this.displayInitialized){this.adjustPanelPositions();this.draw();}
else if(v9S.l2q(this.chart.canvasHeight,v9S.V5J)&&v9S.i2q(previousHeight,v9S.V5J)){this.adjustPanelPositions();this.draw();}
this.runAppend((i2G+c1G+E6G+W1G),arguments);}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb,params){var s74="gu",l0G="onf",M74="Feed",G44="nd",L3G="fie",E0G="pec",L2J="N",X5G="ng",k4G='ec',c4G='obj';if(!chart)chart=this.chart;if(!params)params={}
;if(params.periodicity){if(params.periodicity.interval)this.layout.interval=params.periodicity.interval;if(params.periodicity.period)this.layout.periodicity=params.periodicity.period;this.layout.timeUnit=params.periodicity.timeUnit;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject),prevMarket=chart.market;if(!symbol){chart.symbol=J2G;chart.symbolObject={symbol:J2G}
;}
else if(typeof symbol==(c4G+k4G+E8G)){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if(!masterData&&this.quoteDriver){var callback=function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;chart.market=prevMarket;}
if(cb)cb(err);}
,setSpan=params.span;if(!setSpan&&this.layout)setSpan=this.layout.setSpan;if(setSpan&&setSpan.base){var multiplier=setSpan.multiplier||v9S.v5J;this.chart.masterData=J2G;this.displayInitialized=I44;this.setSpan({maintainPeriodicity:params.periodicity?t2G:I44,multiplier:multiplier,base:setSpan.base,symbol:chart.symbol}
,callback);}
else{var self=this;this.quoteDriver.newChart({symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart,initializeChart:t2G}
,function(){self.adjustPanelPositions();self.quoteDriver.updateSubscriptions();if(params.stretchToFillScreen){self.fillScreen();}
callback.apply(self,arguments);}
);}
}
else{if(!masterData){console.log((a8G+W5J+y5G+K2G+X5G+Z74+L2J+a5G+C4G+s5G+f7G+m7G+I4G+p6G+f7G+h8G+f7G+C4G+c1G+E0G+K2G+L3G+u7G+C4G+f7G+G44+C4G+y5G+a5G+C4G+M1J+B8G+a5G+u8G+M74+C4G+d4G+l0G+K2G+s74+i2G+u7G));}
if(!chart.symbol)chart.symbol=A8G;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();if(params.span&&params.span.multiplier&&params.span.base){this.setSpan({maintainPeriodicity:t2G,multiplier:params.span.multiplier,base:params.span.base}
);}
else if(params.stretchToFillScreen){this.fillScreen();}
else{this.draw();}
this.adjustPanelPositions();if(cb)cb();}
}
;STXChart.prototype.fillScreen=function(){var candleWidth=this.layout.candleWidth,chartWidth=v9S.c2q(this.chart.width,this.preferences.whitespace),count=this.chart.dataSet.length;if(v9S.g2q(count*candleWidth,chartWidth)){this.draw();return ;}
var newCandleWidth=v9S.e2q(chartWidth,count);this.setCandleWidth(newCandleWidth,this.chart);this.home({maintainWhitespace:true}
);}
;STXChart.prototype.setMasterData=function(masterData,chart){var n5G='= ',G94='ex',a2G='ter',p8G='ing',G0G='tr',A2J='ovi',V04='rver',G6G='ta',F94='our',K64='() ',n2J='rseF',f8G='U',u5J='. ',Y3G='mb',i64='ssi',G2G='ose',j5G='Da',D1J='er',q0G='bj',Q7G='Dat',c0G='ate',b94='g',O94='si',i0G='M',Q3J=' : ',v4G=(36.<(111,64.)?(6.07E2,'D'):(76,0x1EE)<(25,0x180)?(133.,5.4E1):(17,118)),h1J='st',e5J='et';if(!chart)chart=this.chart;if(this.marketFactory){var marketDef=this.marketFactory(chart.symbolObject);this.setMarket(marketDef,chart);}
chart.masterData=masterData;if(v9S.w2q(chart.name,"chart"))this.masterData=masterData;var i;for(i=0;masterData&&v9S.o2q(i,masterData.length);i++){if(this.transformMasterDataQuote)masterData[i]=this.transformMasterDataQuote(masterData[i]);var quotes=masterData[i];if(quotes.DT){quotes.DT=new Date(quotes.DT);quotes.Date=STX.yyyymmddhhmmssmmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);else console.log((K9G+e5J+a3G+h1J+M3G+A9G+v4G+r74+E8G+r74+Q3J+i0G+n1J+O94+o44+b94+S64+v4G+b8G+S64+r74+a4G+S64+v4G+c0G+S64+Z44+o44+S64+t44+r74+K9G+x7G+A9G+Q7G+r74+S64+Z44+q0G+M3G+Q64+E8G));if(quotes.Volume&&typeof quotes.Volume!=="number")quotes.Volume=parseInt(quotes.Volume,10);if(typeof quotes.Close=='number'){}
else{console.log((K9G+M3G+E8G+i0G+r74+h1J+D1J+j5G+E8G+r74+Q3J+z7G+d94+G2G+S64+c94+K9G+S64+t44+c94+i64+o44+b94+S64+Z44+A9G+S64+o44+Z44+E8G+S64+r74+S64+o44+c8G+Y3G+M3G+A9G+u5J+f8G+j3G+S64+R0G+r74+n2J+d94+Z44+r74+E8G+K64+c94+R64+S64+t4G+F94+S64+Y74+r74+G6G+S64+K9G+M3G+V04+S64+R0G+A9G+A2J+Y74+M3G+K9G+S64+K9G+G0G+p8G+K9G+u5J+i0G+r74+K9G+a2G+j5G+G6G+S64+t8G+a4G+G94+n5G)+i+' Value = '+quotes.Close);}
if(v9S.G2q(quotes.High,null))delete  quotes.High;if(v9S.f2q(quotes.Low,null))delete  quotes.Low;if(v9S.O2q(quotes.Open,null))delete  quotes.Open;}
chart.decimalPlaces=this.callbacks.calculateTradingDecimalPlaces({stx:this,chart:chart,symbol:chart.symbolObject.symbol,symbolObject:chart.symbolObject}
);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.getSymbols=function(){var Y2J="mete",N4G="cl",a=[],obj;for(var chartName in this.charts){var chart=this.charts[chartName];a.push({symbol:chart.symbol,symbolObject:chart.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
);for(var field in chart.series){var series=chart.series[field];if(!series.parameters.data||!series.parameters.data.useDefaultQuoteFeed)continue;obj={symbol:field,symbolObject:series.symbolObject,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
;if(v9S.Q2q(arguments[0],(d04+N4G+B8G+u7G+J4G+t1G+D1G+W5J+f7G+Y2J+v1G+c1G)))obj.parameters=series.parameters;if(!obj.symbolObject)obj.symbolObject={symbol:field}
;a.push(obj);}
}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){obj={symbol:sq,symbolObject:{symbol:sq}
,periodicity:this.layout.periodicity,interval:this.layout.interval,timeUnit:this.layout.timeUnit}
;a.push(obj);}
}
}
for(var s=v9S.x2q(a.length,1);v9S.z2q(s,0);s--){var symbol=a[s].symbol;if(this.isEquationChart(symbol)){var res=STX.formatEquation(symbol);if(res){for(var sym=0;v9S.N2q(sym,res.symbols.length);sym++){obj={symbol:res.symbols[sym],symbolObject:a[s].symbolObject,periodicity:a[s].periodicity,interval:a[s].interval,timeUnit:a[s].timeUnit}
;a.push(obj);}
a.splice(s,1);}
}
}
return a;}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=v9S.j2q(dt.getSeconds(),H44)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){if(!masterData)return ;for(var i=0;v9S.v3q(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol,params){var chart=this.chart;if(!params)params={}
;if(params.chart)chart=params.chart;var price=null,bid=null,ask=null,volume=0;if(typeof priceData==(a5G+A7G+A5G+d4G+h8G)){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;now=new Date(now);}
else{price=arguments[0];volume=arguments[1];now=new Date(arguments[2]);symbol=arguments[3];}
var md=chart.masterData;if(!now){now=new Date();}
var quote;if(!md||!md.length||v9S.R3q(this.layout.interval,"tick")){quote={Date:STX.yyyymmddhhmmssmmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote],chart,params);}
else{quote=STX.clone(md[v9S.E3q(md.length,1)]);var market24=new STX.Market({}
),iter_parms={'begin':quote.DT,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=market24.newIterator(iter_parms),next=iter.next();if(v9S.q3q(now,next)){if(symbol){if(price||v9S.k3q(price,0)){quote[symbol]=price;}
}
else{if(price||v9S.r3q(price,0)){quote.Close=price;if(v9S.C3q(price,quote.High)||v9S.A3q(quote.High,null))quote.High=price;if(v9S.p3q(price,quote.Low)||v9S.h3q(quote.Low,null))quote.Low=price;if(v9S.B3q(quote.Open,null))quote.Open=price;}
if(volume)quote.Volume+=volume;if(bid||v9S.Z3q(bid,0))quote.Bid=bid;if(ask||v9S.P3q(ask,0))quote.Ask=ask;}
var newParams=STX.clone(params);if(typeof quote.Adj_Close!="undefined"){quote.Adj_Close=quote.Close;}
this.appendMasterData([quote],chart,newParams);}
else{var gaps=[],iter2_parms={'begin':now,'interval':this.layout.interval,'periodicity':this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter2=market24.newIterator(iter2_parms);iter2.next();now=iter2.previous();while(v9S.n3q(next,now)&&this.streamParameters.fillGaps){var gap={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=iter.next();}
if(symbol){var c=this.currentQuote();quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:null,Close:c.Close,High:null,Low:null,Volume:volume,Bid:c.Bid,Ask:c.Ask}
;quote[symbol]=price;}
else{quote={Date:STX.yyyymmddhhmmssmmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;}
gaps.push(quote);this.appendMasterData(gaps,chart,params);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var x9G="ned",S2G="ndef";if(!params)params={}
;if(!chart)chart=this.chart;if(v9S.m3q(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(this.runPrepend("appendMasterData",[appendQuotes,chart,params]))return ;if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;v9S.b3q(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmmssmmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);if(masterData[i].Volume&&typeof masterData[i].Volume!=="number")masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=v9S.W3q(masterData.length,1);while(v9S.Y6Q(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(v9S.y6Q(dt2.getTime(),dt.getTime())){var plusOne=0;if(v9S.d6Q(dt2.getTime(),dt.getTime()))plusOne=1;var advancing=plusOne;for(var j=0;v9S.t6Q(j,appendQuotes.length);j++){if(!plusOne){if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(!params.allowReplaceOHL){if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(v9S.a6Q(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&v9S.X6Q(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
}
else{advancing++;}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!=(B8G+S2G+K2G+x9G))appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmmssmmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);if(masterData[i+j+plusOne].Volume&&typeof masterData[i+j+plusOne].Volume!=="number")masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);var dontAdvanceScroll=v9S.I6Q(chart.scroll,chart.maxTicks+1)||chart.lockScroll||chart.spanLock;if(dontAdvanceScroll&&advancing){chart.scroll+=advancing;this.grabStartScrollX+=advancing;}
}
break;}
i--;}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.appendMasterData)plugin.appendMasterData(this,appendQuotes,chart);}
}
}
if(!this.masterData||!this.masterData.length)this.masterData=masterData;if(!params.noCreateDataSet){var sp=this.streamParameters;if(++sp.count>sp.maxTicks||params.bypassGovernor){clearTimeout(sp.timeout);this.createDataSet();this.draw();this.updateChartAccessories();sp.count=0;sp.timeout=-1;}
else{var self=this;if(sp.timeout==-1){sp.timeout=setTimeout(function(){self.createDataSet();self.draw();self.updateChartAccessories();self.streamParameters.count=0;self.streamParameters.timeout=-1;}
,sp.maxWait);}
}
}
this.runAppend("appendMasterData",arguments);}
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;var p=STX.clone(params);p.dtLeft=chart.masterData[0].DT;p.dtRight=chart.masterData[v9S.T6Q(chart.masterData.length,1)].DT;self.setRange(p);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&v9S.L6Q(this.layout.interval,"month")){this.setPeriodicityV2(1,"month",loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var h0G="inute";if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(params.periodicity){if(v9S.D6Q(params.periodicity.interval,'tick'))params.periodicity=null;if(!params.periodicity.period)params.periodicity.period=1;}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var dontChangePeriodicity=false,chart=params.chart,lt=params.dtLeft,rt=new Date();if(params.dtRight)rt=params.dtRight;if(!lt){var iter=this.standardMarketIterator(rt,null,chart);lt=iter.previous(chart.maxTicks);if(!params.periodicity)dontChangePeriodicity=true;}
var self=this;function showTheRange(){if(!chart.dataSet||v9S.s6Q(chart.dataSet.length,0)){if(cb)cb();return ;}
var l=0,r=0;if(v9S.M6Q(lt.getTime(),chart.dataSet[0].DT.getTime())||params.goIntoPast){l=self.tickFromDate(lt,chart,null,true);}
else{l=0;}
if(v9S.U6Q(rt.getTime(),chart.dataSet[chart.dataSet.length-1].DT.getTime())||params.goIntoFuture){r=self.tickFromDate(rt,chart);}
else{r=v9S.H6Q(chart.dataSet.length,1);}
var ticks=v9S.K6Q(r,l,1);if(v9S.b6Q(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(v9S.W6Q((self.chart.width-params.padding),ticks),chart);chart.scroll=(v9S.Y7Q(chart.dataSet.length,l,1));self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(err){var A44="city",d5G="ri",J04="pp",N44="rv",w4G=") ",w3J="oad",q3J="ny",D0G="oo",y74="(): ",O7G="ange",W5G="etR",C8G=".",i4G="XCha",q2G="ST";if(err){if(cb)cb(err);return ;}
loadMoreCount++;if(v9S.R7Q(loadMoreCount,10)){console.log((q2G+i4G+v1G+h8G+C8G+c1G+W5G+O7G+y74+n5J+D0G+C4G+s5G+f7G+q3J+C4G+r5G+w3J+c1G+K6G+t5G+j1G+w4G+V3G+v1G+a5G+s5G+C4G+c1G+J4G+N44+I4G+X64+o5J+h8G+a5G+J04+d04+c3G+X64+c74+o8G+d4G+E2G+C4G+D1G+J4G+d5G+a5G+x94+A44+C4G+r5G+a5G+c3G+K2G+d4G+C8G));showTheRange();return ;}
if(chart.moreAvailable&&v9S.E7Q(chart.masterData[0].DT,lt)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function estimateMaxTicks(rtMS,ltMS,interval,period,dontRoll){var ticks=0,ms=v9S.q7Q(rtMS,ltMS);if(STXChart.isDailyInterval(interval)){if(v9S.k7Q(interval,"month")){ticks=v9S.r7Q((ms/STX.MONTH),period);}
else if(v9S.C7Q(interval,"week")){ticks=v9S.A7Q((ms/STX.WEEK),period);}
else{ticks=v9S.p7Q((ms/STX.DAY),period);}
}
else{if(!isNaN(interval))ticks=v9S.h7Q((ms/(STX.MINUTE*interval)),period);else{if(v9S.B7Q(interval,"millisecond"))ticks=v9S.Z7Q(ms,period);else if(v9S.P7Q(interval,"second"))ticks=v9S.n7Q((ms/STX.SECOND),period);else if(v9S.m7Q(interval,"hour"))ticks=v9S.b7Q((ms/STX.HOUR),period);else ticks=v9S.W7Q((ms/STX.MINUTE),period);}
}
return Math.round(ticks);}
if(this.quoteDriver){var intervalToUse,periodToUse,timeUnitToUse;if(dontChangePeriodicity){intervalToUse=this.layout.interval;timeUnitToUse=this.layout.timeUnit;periodToUse=this.layout.period;}
else if(params.periodicity){intervalToUse=params.periodicity.interval;timeUnitToUse=params.periodicity.timeUnit;periodToUse=params.periodicity.period;}
else{var rangeInMS=v9S.Y4Q(rt.getTime(),lt.getTime());if(params.rangePeriodicityMap){var periodicityMap=params.rangePeriodicityMap,entryToUse=null;for(var i=0;v9S.y4Q(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(v9S.d4Q(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;timeUnitToUse=entryToUse.timeUnit;}
else{var pixelsPerBar=2;switch(this.layout.chartType){case "line":case "colored_line":case "mountain":case "colored_mountain":case "baseline_delta":case "baseline_delta_mountain":case "wave":pixelsPerBar=2;break;case "candle":case "bar":case "colored_bar":case "hollow_candle":case "volume_candle":case "scatterplot":pixelsPerBar=5;break;}
if(params.pixelsPerBar)pixelsPerBar=params.pixelsPerBar;var numBars=v9S.t4Q(chart.width,pixelsPerBar),possibleIntervals=[{interval:5,ms:v9S.a4Q(STX.MINUTE,5)}
,{interval:30,ms:v9S.X4Q(STX.MINUTE,30)}
,{interval:"day",ms:STX.DAY}
,{interval:"month",ms:STX.MONTH}
,{interval:"year",ms:Number.MAX_VALUE}
],numBarsLastInterval;for(var j=0;v9S.I4Q(j,possibleIntervals.length);j++){var numBarsThisInterval=v9S.T4Q(rangeInMS,possibleIntervals[j].ms);if(v9S.L4Q(numBarsThisInterval,numBars)){if(possibleIntervals[v9S.D4Q(j,1)]){intervalToUse=possibleIntervals[v9S.s4Q(j,1)].interval;periodToUse=Math.ceil(v9S.M4Q(numBarsLastInterval,numBars));}
else{intervalToUse=possibleIntervals[j].interval;periodToUse=1;}
break;}
numBarsLastInterval=numBarsThisInterval;}
}
}
this.chart.scroll=this.chart.maxTicks=estimateMaxTicks(rt.getTime(),lt.getTime(),intervalToUse,periodToUse,this.dontRoll);this.layout.candleWidth=v9S.U4Q(this.chart.width,this.chart.maxTicks);var needDifferentData=v9S.H4Q(this.layout.timeUnit,timeUnitToUse)&&(v9S.K4Q(timeUnitToUse,"seconds")||v9S.u4Q(timeUnitToUse,"milliseconds"));if(!needDifferentData&&(v9S.F4Q(STXChart.isDailyInterval(this.layout.interval),STXChart.isDailyInterval(intervalToUse))))needDifferentData=true;else if(!STXChart.isDailyInterval(this.layout.interval)&&v9S.S9Q(this.layout.interval,intervalToUse))needDifferentData=true;if(!this.chart.masterData||needDifferentData){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.layout.timeUnit=timeUnitToUse;if(!this.layout.timeUnit){if(STXChart.isDailyInterval(this.layout.interval))this.layout.timeUnit=null;else if(v9S.V9Q(this.layout.interval,"second"))this.layout.timeUnit="second";else this.layout.timeUnit=(s5G+h0G);}
var qparams={symbol:chart.symbol,symbolObject:chart.symbolObject,chart:chart}
;if(!this.displayInitialized)qparams.initializeChart=true;this.quoteDriver.newChart(qparams,loadTheRange);}
else{if(v9S.J9Q(this.layout.interval,intervalToUse)||v9S.l9Q(this.layout.periodicity,periodToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;this.createDataSet();}
loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var B74=((10.84E2,0x117)<(126,130.)?'X':6.63E2>(0xE6,63)?(144.3E1,59):(121.4E1,0x71)<(144.,49)?(0xA1,90.):(0.,3.86E2)),u3G=23,j0G='today',z44="tod",r0G='ytd',t04="today",F74="ytd",O2J="ye",period=arguments[v9S.V5J],interval=arguments[v9S.v5J],padding=arguments[v9S.j1J],chart=arguments[v9S.F1J],useMarketTZ=arguments[v9S.d5J];if(typeof params==T7G){period=params.period?params.period:(params.multiplier?params.multiplier:v9S.v5J);interval=params.interval?params.interval:(params.base?params.base:(params.span?params.span:params.period));padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[v9S.J5J];}
if(!params.padding)params.padding=v9S.V5J;if(!chart)chart=this.chart;interval=interval.toLowerCase();if(v9S.i9Q(interval,F44)){this.displayAll(params,cb);return ;}
var iterInterval=interval;if(v9S.c9Q(interval,(O2J+f7G+v1G))){iterInterval=A5J;period*=G64;}
else if(v9S.g9Q(interval,F74)){iterInterval=P3J;}
else if(v9S.e9Q(interval,t04)){iterInterval=P3J;}
var parms_copy=STX.shallowClone(params);parms_copy.goIntoFuture=I44;var iter_parms={'begin':new Date(),'interval':iterInterval,'periodicity':period,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms),leftDT=new Date();if(v9S.w9Q(interval,r0G)){leftDT.setMonth(v9S.V5J);leftDT.setDate(v9S.v5J);leftDT.setHours(v9S.V5J);leftDT.setMinutes(v9S.V5J);leftDT.setSeconds(v9S.V5J);leftDT.setMilliseconds(v9S.V5J);}
else if(v9S.o9Q(interval,(z44+z6G))){iter.next();leftDT=iter.previous();}
else{leftDT=iter.previous();}
parms_copy.dtLeft=leftDT;if(v9S.G9Q(interval,j0G)){parms_copy.goIntoFuture=t2G;parms_copy.dtRight=new Date(leftDT);var closeHour=iter.market.zclose_hour,closeMinute=iter.market.zclose_minute;parms_copy.dtRight.setHours(closeHour?closeHour:u3G);parms_copy.dtRight.setMinutes(closeHour?closeMinute:B74);parms_copy.dtRight.setSeconds(v9S.V5J);parms_copy.dtLeft.setHours(iter.market.zopen_hour);parms_copy.dtLeft.setMinutes(iter.market.zopen_minute);parms_copy.dtLeft.setSeconds(v9S.V5J);}
if(parms_copy.maintainPeriodicity){parms_copy.periodicity={}
;parms_copy.periodicity.interval=this.layout.interval;parms_copy.periodicity.period=this.layout.periodicity;}
chart.spanLock=I44;var self=this;this.setRange(parms_copy,function(err){if(!params.maintainPeriodicity){self.layout.setSpan={base:params.base,multiplier:params.multiplier}
;self.changeOccurred(p5J);}
if(v9S.f9Q(interval,(F74))||v9S.O9Q(interval,t04)){chart.spanLock=t2G;}
if(cb)cb(err);}
);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(v9S.Q9Q(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(v9S.x9Q(arr[1],"year")){prev.setFullYear(v9S.z9Q(prev.getFullYear(),num));}
else if(v9S.N9Q(arr[1],"month")){prev.setMonth(v9S.j9Q(prev.getMonth(),num));}
else if(v9S.v0Q(arr[1],"day")){prev.setDate(v9S.R0Q(prev.getDate(),num));}
else if(v9S.E0Q(arr[1],"week")){prev.setDate(v9S.q0Q(prev.getDate(),(7*num)));}
var diff=v9S.k0Q((now.getTime()-prev.getTime()),1000,60,60,24);diff=v9S.C0Q(diff,5,7);var candleWidth=v9S.w0Q(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks,params){if(!params)params={}
;ticks=Math.round(ticks);if(v9S.o0Q(ticks,v9S.j1J))ticks=v9S.j1J;var padding=params.padding;if(!padding)padding=v9S.V5J;this.layout.candleWidth=v9S.G0Q((this.chart.width-padding),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=v9S.q5J;this.chart.maxTicks=Math.round(v9S.f0Q((this.chart.width/this.layout.candleWidth),0.499));if(params.padding||v9S.O0Q(params.padding,v9S.V5J))this.chart.scroll=ticks+v9S.v5J;}
;STXChart.prototype.construct=function(){var L5G="art";this.stackPanel(p7G,(j9G+L5G),v9S.v5J);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=v9S.V5J;this.cy=v9S.V5J;this.micropixels=v9S.V5J;this.chart.panel.subholder.appendChild(this.controls.home);this.callbackListeners={}
;}
;STXChart.prototype.addEventListener=function(type,cb){if(!type)type=B2G;var arr=this.callbackListeners[type];if(!arr)this.callbackListeners[type]=arr=[];arr.push(cb);return {type:type,cb:cb}
;}
;STXChart.prototype.removeEventListener=function(obj,cb){if(typeof obj!="object"){obj={type:type,cb:cb}
;}
if(!obj.type)obj.type="*";var arr=this.callbackListeners[obj.type];if(!arr)return ;for(var i=0;v9S.Q0Q(i,arr.length);i++){if(v9S.x0Q(arr[i],obj.cb)){arr.splice(i);if(!arr.length)obj[obj.type]=null;return ;}
}
}
;STXChart.prototype.dispatch=function(type,data){if(this.callbacks[type])(this.callbacks[type])(data);var arr=this.callbackListeners[type];if(arr){for(var i=0;v9S.z0Q(i,arr.length);i++)(arr[i])(data);}
arr=this.callbackListeners["*"];if(arr){for(var j=0;v9S.N0Q(j,arr.length);j++)(arr[j])(data);}
}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(v9S.j0Q(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(v9S.v8Q(renderer.params.yAxis,yAxis)){if(v9S.R8Q(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;v9S.E8Q(i,panel.yaxisLHS.length);i++){if(v9S.q8Q(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;v9S.k8Q(i,panel.yaxisRHS.length);i++){if(v9S.r8Q(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){var M5G="lef";if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(v9S.C8Q(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;v9S.A8Q(i,arr.length);i++){if(v9S.p8Q(arr[i],yAxis))return ;}
if(v9S.h8Q(yAxis.position,(M5G+h8G))){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var g94="nde",panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(v9S.B8Q(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;v9S.Z8Q(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=v9S.P8Q(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(v9S.n8Q(panel.name,panel.chart.name)||panel.yAxis.position){if(v9S.m8Q(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||v9S.b8Q(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;v9S.W8Q(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(v9S.Y1Q(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(v9S.y1Q(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;v9S.d1Q(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;v9S.t1Q(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=v9S.a1Q(this.width,panel.yaxisTotalWidthRight);for(i=0;v9S.X1Q(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!=(B8G+g94+V3G+d04+O9G))panel.chart.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.chart.yaxisPaddingRight||v9S.I1Q(panel.chart.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.chart.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.chart.yaxisPaddingLeft||v9S.T1Q(panel.chart.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.chart.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=v9S.L1Q(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=v9S.D1Q(panel.right,panel.left);panel.handle.style.left=panel.left+"px";panel.handle.style.width=panel.width+"px";if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=v9S.s1Q(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var N64="iz",p1G="2",w7G="nvasTe",M0G="ca",G3J="e8",K0G="va";if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(v9S.M1Q(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;if(v9S.U1Q(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement((d4G+f7G+y5G+K0G+c1G));if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll((b5G+K2G+G3J+M0G+w7G+s5G+D1G))[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement((d4G+f7G+y5G+K0G+c1G));if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext((p1G+u7G));this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);this.initialWhitespace=this.preferences.whitespace;if(this.chart.dataSet&&v9S.H1Q(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(v9S.K1Q(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(v9S.u1Q(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
if(STX.touchDevice){var overlayTrashCan=this.chart.container.querySelectorAll("#overlayTrashCan")[0],vectorTrashCan=this.chart.container.querySelectorAll("#vectorTrashCan")[0];if(overlayTrashCan)overlayTrashCan.onmspointerup=overlayTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
;}
)(this);if(vectorTrashCan)vectorTrashCan.onmspointerup=vectorTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted(true);}
;}
)(this);}
if(this.manageTouchAndMouse){this.registerTouchAndMouseEvents();}
this.chart.container.onmouseout=(function(self){return function(e){self.handleMouseOut(e);}
;}
)(this);if(this.controls.chartControls){this.controls.chartControls.style.display="block";}
this.abortDrawings();this.undoStamps=[];for(var panelName in this.panels){var panel=this.panels[panelName];if(panel.markerHolder){this.chart.container.removeChild(panel.markerHolder);panel.markerHolder=null;}
}
for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.initializeChart)plugin.initializeChart(this);}
}
if(!this.resizeListenerInitialized){this.resizeListenerInitialized=true;var closure=function(self){return function(e){self.resizeChart();}
;}
;if(window.attachEvent){window.attachEvent("onresize",closure(this));}
else{var c=closure(this);window.addEventListener("resize",c,true);this.eventListeners.push({"element":window,"event":(v1G+J4G+c1G+N64+J4G),"function":c}
);}
}
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){var f44="tio",b1J="unc";this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;v9S.F1Q(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener[(V3G+b1J+f44+y5G)]);}
}
;STXChart.prototype.handleMouseOut=function(e){var g3G="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(g3G,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=I44;this.touches=[];this.touching=I44;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=I44;this.drawingLine=I44;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=I44;this.displaySticky();this.runAppend(g3G,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var w5J="DOMMouseScroll",y3G="mousewheel",O2G="whee",O1G="onwheel",f5G="wheel",e8G="onMouseOver",D2G="onMouseOut",r5J="Over",B5G="pointerup",M2G="pointermove",N8G="pointerdown",y3J="MSPointerUp",y2G="MSPointerMove",u6G="MSGestureEnd",T3G="MSGestureChange",M94="MSGestureStart",q2J="Down",X44="int",P8G="Po",D3G="MS",m6G="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=t2G;var el=this.chart.container,homeEl=$$$(m6G,this.controls.chartControls),zoomInEl=$$$(l2G,this.controls.chartControls),zoomOutEl=$$$(J8G,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener((m2J+D2J+s5G+H4G+J4G),(function(self){return function(e){self.mousemove(e);}
;}
)(this),I44);el.addEventListener(A4G,(function(self){return function(e){self.mousedown(e);}
;}
)(this),I44);el.addEventListener(b74,(function(self){return function(e){self.mouseup(e);}
;}
)(this),I44);}
else{if(STX.isSurface){el.addEventListener(R9G,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),I44);el.addEventListener(A4G,(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),I44);el.addEventListener(b74,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),I44);if(window.navigator.msPointerEnabled){el.addEventListener((D3G+P8G+X44+J4G+v1G+q2J),(function(self){return function(e){return self.startProxy(e);}
;}
)(this),I44);el.addEventListener(M94,(function(self){return function(e){self.gestureInEffect=t2G;}
;}
)(this),I44);el.addEventListener(T3G,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),I44);el.addEventListener(u6G,(function(self){return function(e){self.gestureInEffect=I44;return self.touchend(e);}
;}
)(this),I44);el.addEventListener(y2G,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),I44);el.addEventListener(y3J,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),I44);}
else{el.addEventListener(N8G,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),I44);el.addEventListener(M94,(function(self){return function(e){self.gestureInEffect=t2G;}
;}
)(this),I44);el.addEventListener(T3G,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),I44);el.addEventListener(u6G,(function(self){return function(e){self.gestureInEffect=I44;return self.touchend(e);}
;}
)(this),I44);el.addEventListener(M2G,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),I44);el.addEventListener(B5G,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),I44);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener(R9G,(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),I44);el.addEventListener(A4G,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),I44);el.addEventListener(b74,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),I44);}
el.addEventListener(K8G,(function(self){return function(e){self.touchstart(e);}
;}
)(this),I44);el.addEventListener(Y6G,(function(self){return function(e){self.touchmove(e);}
;}
)(this),I44);el.addEventListener(c9G,(function(self){return function(e){self.touchend(e);}
;}
)(this),I44);if(zoomInEl){zoomInEl.removeAttribute((a5G+y5G+E2J+a5G+B8G+D2J+r5J));zoomInEl.removeAttribute(D2G);}
if(zoomOutEl){zoomOutEl.removeAttribute(e8G);zoomOutEl.removeAttribute(D2G);}
}
}
var wheelEvent=(v9S.S5Q(f5G,document.createElement(G2J))||v9S.V5Q(O1G,document))?(O2G+r5G):v9S.J5Q(document.onmousewheel,undefined)?y3G:w5J;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),I44);}
;STXChart.prototype.rightClickHighlighted=function(){var Q5G="rightClickHighlighted";if(this.runPrepend(Q5G,arguments))return ;this.deleteHighlighted(t2G);this.runAppend(Q5G,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=v9S.l5Q(this.drawingObjects.length,1);v9S.i5Q(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){var before=STX.shallowClone(this.drawingObjects);this.drawingObjects.splice(i,1);this.undoStamp(before,STX.shallowClone(this.drawingObjects));}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
var chart=this.currentPanel.chart;for(var r in chart.seriesRenderers){var renderer=chart.seriesRenderers[r];for(var sp=v9S.c5Q(renderer.seriesParams.length,1);v9S.g5Q(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
var comparing=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison)comparing=true;}
if(!comparing)this.setComparison(false,chart);this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(v9S.e5Q(panel.name,name))return t2G;}
return I44;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=I44;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=t2G;}
;STXChart.prototype.grabHandle=function(panel){var S9G="bHa",v74="gra",a04="grabHandle";if(this.runPrepend(a04,arguments))return ;if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();STX.appendClassName(panel.handle,Y1G);this.runAppend((v74+S9G+y5G+r64+J4G),arguments);}
;STXChart.prototype.releaseHandle=function(){var Y8G="releaseHandle";if(this.runPrepend(Y8G,arguments))return ;STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();if(STXChart.resizingPanel)STX.unappendClassName(STXChart.resizingPanel.handle,Y1G);STXChart.resizingPanel=J2G;this.runAppend(Y8G,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(v9S.w5Q(saveLayout,I44))this.changeOccurred((r5G+z6G+a5G+b4G));}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return v9S.o5Q(y,this.top);}
;STXChart.prototype.backOutX=function(x){return v9S.G5Q(x,this.left);}
;STXChart.prototype.cleanupRemovedStudy=function(sd){var e44="}",Y94="{";if(sd.libraryEntry){if(sd.libraryEntry.removeFN)sd.libraryEntry.removeFN(this,sd);if(sd.libraryEntry.feed&&sd.libraryEntry.quoteFeed){this.detachTagAlongQuoteFeed(sd.libraryEntry.feed);}
}
for(var p in this.plugins){if(p.indexOf(Y94+sd.id+e44)>-v9S.v5J)delete  this.plugins[p];}
if(this.layout.studies)delete  this.layout.studies[sd.name];}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies){var mySD=this.layout.studies[panel.name];if(mySD)this.cleanupRemovedStudy(mySD);}
delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(v9S.f5Q(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(v9S.O5Q(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;v9S.Q5Q(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var E3G="panelClose";if(!panel)return ;if(this.runPrepend(E3G,arguments))return ;this.cancelTouchSingleClick=t2G;STXChart.drawingLine=I44;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(v9S.x5Q(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(E3G,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=t2G;STXChart.drawingLine=I44;this.showCrosshairs();var newPanels={}
,pos=v9S.V5J,p;for(p in this.panels){if(v9S.z5Q(p,panel.name))break;pos++;}
if(!pos)return ;var i=v9S.V5J;for(p in this.panels){if(v9S.N5Q(i,pos-v9S.v5J))newPanels[panel.name]=panel;if(v9S.j5Q(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(v9S.v2Q(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(v9S.R2Q(pos,length-1))return ;var i=0;for(p in this.panels){if(v9S.E2Q(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(v9S.q2Q(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var v5G="stx_solo_lit";this.cancelTouchSingleClick=t2G;STXChart.drawingLine=I44;this.showCrosshairs();var hideOrNot=t2G;if(panel.soloing){hideOrNot=I44;panel.soloing=I44;STX.unappendClassName(panel.solo,v5G);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=t2G;STX.appendClassName(panel.solo,v5G);if(v9S.k2Q(panel.name,p7G)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=v9S.r2Q(v9S.v5J,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=I44;panel.hidden=I44;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=v9S.C2Q(panel.bottom,panel.top);panel.percent=v9S.A2Q(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=t2G,p,newY,priorPanel;if(v9S.p2Q(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=I44;if(up){priorPanel=J2G;for(p in this.panels){if(v9S.h2Q(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(v9S.B2Q(newY,priorPanel.top+d64)){newY=priorPanel.top+d64;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=J2G;for(p in this.panels){if(v9S.Z2Q(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(v9S.P2Q(newY,STXChart.resizingPanel.bottom-d64)){newY=v9S.n2Q(STXChart.resizingPanel.bottom,d64);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||v9S.m2Q(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display="none";}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{if(this.displayIconsUpDown)panel.up.style.display="";}
if(activeSolo){if(panel.soloing){if(this.displayIconsSolo)panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(v9S.b2Q(n,1)||v9S.W2Q(n,2)){panel.solo.style.display="none";}
else{if(this.displayIconsSolo)panel.solo.style.display="";}
if(v9S.Y3Q(n,1)){panel.down.style.display="none";}
else{if(this.displayIconsUpDown)panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=v9S.y3Q(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(v9S.d3Q(h,panel.percent));panel.height=v9S.t3Q(panel.bottom,panel.top);if(v9S.a3Q(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&v9S.X3Q(yAxis.height,0)){zoomRatio=v9S.I3Q(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=v9S.T3Q(panel.bottom,yAxis.bottomOffset);yAxis.height=v9S.L3Q(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=v9S.D3Q(zoomRatio,yAxis.height);if(v9S.s3Q(yAxis.zoom,yAxis.height))yAxis.zoom=0;}
lastBottom=panel.bottom;if(!yAxis.high&&v9S.M3Q(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=v9S.U3Q(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top="0px";if(v9S.H3Q(yAxis.height,0))panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(v9S.K3Q(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(v9S.u3Q(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var o94="sName",J44="ber",v64="ts",j74="rker",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:v9S.V5J,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((E2J+f7G+j74+C4G+a5G+A7G+A5G+d4G+v64+C4G+s5G+B8G+m7G+C4G+w2G+f7G+z9G+C4G+f7G+C4G+s5G+J4G+s5G+J44+C4G+d4G+r5G+f7G+c1G+o94));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;v9S.W3Q(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(v9S.Y6T(type,"panelName")){if(v9S.y6T(marker.panelName,comparison))arr.push(marker);}
else if(v9S.d6T(type,"label")){if(v9S.t6T(label,comparison))arr.push(marker);}
else if(v9S.a6T(type,"all")){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(v9S.X6T(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(v9S.I6T(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(v9S.T6T(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;v9S.L6T(i,labels.length);i++){if(v9S.D6T(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart.name];if(chartMap){for(i=0;v9S.s6T(i,chartMap.markers.length);i++){if(v9S.M6T(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.className];if(classMap){var panelArray=classMap[marker.params.panelName];if(panelArray){for(i=0;v9S.U6T(i,panelArray.length);i++){if(v9S.H6T(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(v9S.K6T(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;v9S.u6T(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.futureTickIfDisplayed=function(marker){var chart=marker.chart;if(v9S.F6T(chart.dataSet.length,1))return ;var xaxisDT=chart.xaxis[v9S.S7T(chart.xaxis.length,1)].DT;xaxisDT=new Date(v9S.V7T(xaxisDT.getTime(),this.timeZoneOffset*60000));if(v9S.J7T(marker.params.x,xaxisDT))return ;var futureTicksOnScreen=v9S.l7T(chart.maxTicks,chart.dataSegment.length),ticksToSearch=chart.dataSet.length+futureTicksOnScreen,pms,qms,dt=new Date(chart.dataSet[v9S.i7T(chart.dataSet.length,1)].DT),iter=this.standardMarketIterator(dt,null,chart),dms=marker.params.x.getTime();for(var j=chart.dataSet.length;v9S.c7T(j,ticksToSearch);j++){pms=dt.getTime();dt=iter.next();qms=dt.getTime();if(v9S.g7T(qms,dms)){marker.tick=j;return ;}
else if(v9S.e7T(qms,dms)&&v9S.w7T(pms,dms)){marker.tick=Math.max(v9S.o7T(j,1),0);return ;}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(v9S.G7T(marker.params.xPositioner,"master")&&marker.params.x){marker.tick=Math.floor(v9S.f7T(marker.params.x,this.layout.periodicity));return ;}
else if(v9S.O7T(marker.params.xPositioner,"date")&&marker.params.x){var pms,qms,dms=marker.params.x.getTime();for(var i=0;v9S.Q7T(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(v9S.x7T(i,0))pms=chart.dataSet[v9S.z7T(i,1)].DT.getTime();if(v9S.N7T(qms,dms)){marker.tick=i;return ;}
else if(v9S.j7T(qms,dms)&&v9S.v4T(pms,dms)){marker.tick=Math.max(v9S.R4T(i,1),0);return ;}
else if(v9S.E4T(dms,qms)){marker.tick=null;return ;}
}
if(v9S.q4T(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[v9S.k4T(i,1)].DT);if(v9S.r4T(dt.getTime(),dms))marker.params.future=true;marker.tick=null;}
}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=v9S.C4T(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;var fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else{self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||v9S.A4T(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=v9S.p4T(h,0.20);}
var percent=v9S.h4T(height,h),reduce=v9S.B4T(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var a74="stx-chart-panel",n9G="chart-title",o4G=".stx-ico-edit",w44=".stx-ico-down",j44=".stx-ico-focus",r2J=".stx-ico-up",I3J=".stx-panel-title",G5J=".stx-ico-close",u64=".stx-panel-control",isChart=(v9S.Z4T(panel.name,panel.chart.name));panel.icons=$$$(u64,panel.holder);panel.close=panel.icons.children[v9S.d5J];panel.close=$$$(G5J,panel.icons).parentNode;STX.appendClassName(panel.icons,F3G);panel.title=$$$(I3J,panel.icons);panel.up=$$$(r2J,panel.icons).parentNode;panel.solo=$$$(j44,panel.icons).parentNode;panel.down=$$$(w44,panel.icons).parentNode;panel.edit=$$$(o4G,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=W44;if(!this.displayIconsUpDown)panel.down.style.display=W44;if(!this.displayIconsSolo)panel.solo.style.display=W44;if(!this.displayIconsClose){panel.close.style.display=W44;}
if(!this.displayPanelResize)panel.handle.style.display=W44;panel.title.innerHTML=A8G;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,n9G);STX.appendClassName(panel.icons,a74);}
if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseover=(function(self){return function(e){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseout=(function(self){return function(e){self.showCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseover=(function(self){return function(){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseout=(function(self){return function(){self.showCrosshairs();}
;}
)(this);if(STX.touchDevice){panel.handle.ontouchstart=(function(stx,panel){return function(e){if(stx.resizingPanel)return ;e.preventDefault();stx.grabHandle(panel);}
;}
)(this,panel);panel.handle.ontouchend=(function(stx){return function(e){e.preventDefault();stx.releaseHandle();}
;}
)(this);}
panel.handle.onmousedown=(function(stx,panel){return function(e){if(!e)e=event;stx.grabHandle(panel);}
;}
)(this,panel);panel.handle.onmouseup=(function(stx){return function(e){if(!e)e=event;stx.releaseHandle();}
;}
)(this);STX.safeClickTouch(panel.close,(function(stx,panel){return function(){stx.panelClose(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.up,(function(stx,panel){return function(){stx.panelUp(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.down,(function(stx,panel){return function(){var u1J=7722568,B4G="ab",m1G="ni",e3J="ssi",v9G="ou",O6G="F",C6G="Quot",W74="agA",c3J="ttac",z8G="mpt",D5J="At",X94=(63.<(0x153,109.7E1)?(19.,4477057):(13,72)),M5J=1971338003,P5J=1719311732;var g1J=-P5J,I1J=M5J,r1J=v9S.j1J;for(var X1J=v9S.v5J;v9S.L8J.p8J(X1J.toString(),X1J.toString().length,X94)!==g1J;X1J++){leftDT.setSeconds(v9S.V5J);self.stx.setMasterData(fullMasterData,params.chart);console.log((D5J+u8G+z8G+C4G+h8G+a5G+C4G+f7G+c3J+w2G+n5J+W74+r5G+P0G+c3G+C6G+J4G+O6G+k9G+u7G+C4G+v04+L44+w2G+v9G+h8G+C4G+f7G+e3J+c3G+m1G+y5G+c3G+C4G+f7G+C4G+r5G+B4G+J4G+r5G));delete  this.charts[panel.name];r1J+=v9S.j1J;}
if(v9S.L8J.p8J(r1J.toString(),r1J.toString().length,u1J)!==I1J){descResults.push(STX.clone(container.records[entry.index]));labelDate.setMonth(v9S.V5J);P(l64);prev.setDate(v9S.R0Q(prev.getDate(),num));return b88>N88;}
stx.panelDown(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.solo,(function(stx,panel){return function(){stx.panelSolo(panel);}
;}
)(this,panel));if(v9S.P4T(panel.name,p7G))panel.close.style.display=W44;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var v7G="stx-panel-study",b9G="stx-panel-chart",x1J="stx-subholder",i3J="stx-holder",a1G="stackPanel";if(this.runPrepend(a1G,arguments))return ;if(!chartName)chartName=p7G;var chart=this.charts[chartName],isChart=(v9S.n4T(name,chartName)),yAxis=J2G;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,G2J,i3J);panel.subholder=STX.newChild(panel.holder,G2J,x1J);panel.subholder.style.zIndex=v9S.v5J;var appendClass=isChart?b9G:v7G;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(t2G));panel.handle=this.controls.handleTemplate.cloneNode(t2G);this.container.appendChild(panel.handle);panel.handle.id=J2G;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(a1G,arguments);}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var o74="stx_panel_border",U3J="drawPanels";if(this.runPrepend(U3J,arguments))return ;var first=I44;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=I44;if(v9S.m4T(panel.title.innerHTML,panel.display)){panel.title.innerHTML=A8G;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,F3G);if(panel.hidden){STX.unappendClassName(panel.icons,F3G);panel.handle.style.display=W44;panel.holder.style.display=W44;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=W44;if(!this.displayIconsUpDown)panel.down.style.display=W44;if(!this.displayIconsSolo)panel.solo.style.display=W44;panel.holder.style.display=S6G;}
if(!first){panel.handle.style.display=W44;first=t2G;continue;}
var y=panel.top;y=Math.round(y)+I9G;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(o74),t2J,this.chart.context,I44,{}
);if(!this.displayPanelResize){panel.handle.style.display=W44;}
else{panel.handle.style.display=A8G;}
panel.handle.style.top=(v9S.b4T(y,panel.handle.offsetHeight/v9S.j1J))+t74;}
this.runAppend(U3J,arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(v9S.W4T(this.openDialog,""))return ;if(v9S.Y9T(x,this.left)||v9S.y9T(x,this.right)||v9S.d9T(y,this.top)||v9S.t9T(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){this.dispatch("tap",{stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
self.cancelTouchSingleClick=false;this.runAppend("touchSingleClick",args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var A0G="touchDoubleClick",I6G="tou";if(v9S.a9T(x,this.left)||v9S.X9T(x,this.right)||v9S.I9T(y,this.panels.chart.top)||v9S.T9T(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend((I6G+j9G+p6G+a5G+B8G+A7G+r5G+J4G+c74+r5G+K2G+l9G),arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(v9S.L9T(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/v9S.j1J)&&v9S.D9T(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-v9S.v5J,e1MS:-v9S.v5J,s2MS:-v9S.v5J,e2MS:-v9S.v5J}
;this.runAppend(A0G,arguments);}
;STXChart.prototype.touchmove=function(e){if(!this.displayInitialized)return ;if(v9S.s9T(this.openDialog,""))return ;if(v9S.M9T(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&v9S.U9T(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault&&this.captureTouchEvents){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(v9S.H9T(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(v9S.K9T(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(v9S.u9T(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;v9S.F9T(i,this.touches.length);i++){if(v9S.S0T(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(v9S.V0T(this.touches[i].pageX,e.clientX)),yd=Math.abs(v9S.J0T(this.touches[i].pageY,e.clientY)),c=Math.sqrt(v9S.l0T(xd,xd)+v9S.i0T(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(v9S.c0T(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(v9S.g0T(this.touches[i].pageX,e.clientX)&&v9S.e0T(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(v9S.w0T(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&v9S.o0T(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchmove",arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(v9S.G0T(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=v9S.f0T(y,this.top+this.chart.panel.yAxis.bottom)&&v9S.O0T(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(v9S.Q0T(x,whichPanel.right)||v9S.x0T(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(v9S.z0T(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(v9S.N0T((x2-x1),(x2-x1))+v9S.j0T((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+v9S.v8T((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(v9S.R8T(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(v9S.E8T(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((v9S.q8T(x1,this.pt.x1)&&v9S.k8T(x2,this.pt.x2))||(v9S.r8T(x1,this.pt.x1)&&v9S.C8T(x2,this.pt.x2))||(v9S.A8T(y1,this.pt.y1)&&v9S.p8T(y2,this.pt.y2))||(v9S.h8T(y1,this.pt.y1)&&v9S.B8T(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(v9S.Z8T(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(v9S.P8T(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(v9S.n8T((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(v9S.m8T(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(v9S.b8T(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(v9S.W8T(angle,1)||(!this.goneVertical&&v9S.Y1T(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;distance=v9S.y1T(this.pt.x2,this.pt.x1);var tickDistance=v9S.d1T(this.grabStartValues.t2,this.grabStartValues.t1),centerTick=this.grabStartValues.t1+v9S.t1T(tickDistance,2),newCandleWidth=v9S.a1T(distance,tickDistance);if(v9S.X1T(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var oldCandleWidth=this.layout.candleWidth;this.setCandleWidth(newCandleWidth,chart);if(v9S.I1T(chart.maxTicks,5)){this.setCandleWidth(oldCandleWidth,chart);return ;}
this.micropixels=0;var px=this.pixelFromTick(Math.round(centerTick),chart),centerOfPinch=(v9S.T1T(this.pt.x1,this.left))+Math.round(v9S.L1T(distance,2)),pxdiff=v9S.D1T(px,centerOfPinch),scrollDiff=v9S.s1T(pxdiff,newCandleWidth),rounded=Math.round(scrollDiff);chart.scroll-=rounded;this.microscroll=v9S.M1T(rounded,scrollDiff);this.micropixels=v9S.U1T(newCandleWidth,this.microscroll);this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(v9S.H1T(this.gestureStartDistance,distance));if(v9S.K1T(this.grabStartZoom,yAxis.height)){if(v9S.u1T(yAxis.zoom,yAxis.height))yAxis.zoom=v9S.F1T(yAxis.height,1);}
else{if(v9S.S5T(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(v9S.V5T(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=v9S.J5T(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(v9S.l5T(distance,10));if(v9S.i5T(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(v9S.c5T(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;if(this.manageTouchAndMouse&&e&&e.preventDefault&&this.captureTouchEvents)e.preventDefault();this.doubleFingerMoves=0;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(v9S.g5T(this.touches.length,1)||v9S.e5T(this.touches.length,2)){if(v9S.w5T(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(v9S.o5T(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(v9S.G5T(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(v9S.f5T(x1,this.left)&&v9S.O5T(x1,this.right)&&v9S.Q5T(y1,this.top)&&v9S.x5T(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=v9S.z5T(y1,this.top+this.chart.panel.yAxis.bottom)&&v9S.N5T(y1,this.top+this.chart.panel.bottom);this.overYAxis=v9S.j5T(x1,this.currentPanel.right)||v9S.v2T(x1,this.currentPanel.left);for(var i=0;v9S.R2T(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&v9S.E2T(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart&&!this.touchNoPan){if((v9S.q2T(this.layout.chartType,"baseline_delta")||v9S.k2T(this.layout.chartType,"baseline_delta_mountain"))&&v9S.r2T(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(v9S.C2T(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=v9S.A2T(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(v9S.p2T(this.chart.baseline.actualLevel,yt)&&v9S.h2T(this.chart.baseline.actualLevel,yb)&&v9S.B2T(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
for(p in this.panels){panel=this.panels[p];if(panel.highlighted){this.grabHandle(panel);return ;}
}
this.grabbingScreen=true;this.yToleranceBroken=false;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.swipeStart(this.currentPanel.chart);setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else{this.grabbingScreen=false;if(STXChart.insideChart){if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.userPointerDown=true;STXChart.crosshairX=x1;STXChart.crosshairY=y1;if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.backOutY(STXChart.crosshairY),this.currentPanel));}
this.drawingClick(this.currentPanel,this.backOutX(x1),this.backOutY(y1));this.headsUpHR();return ;}
}
}
}
if(v9S.Z2T(this.touches.length,2)){this.swipe.end=true;if((!this.displayCrosshairs&&!this.touchNoPan)||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){this.grabHandle(panel);return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(v9S.P2T((x2-x1),(x2-x1))+v9S.n2T((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.pt.x1,x2:this.pt.x2,y1:this.valueFromPixel(v9S.m2T(this.pt.y1,this.top),this.currentPanel),y2:this.valueFromPixel(v9S.b2T(this.pt.y2,this.top),this.currentPanel),t1:this.tickFromPixel(v9S.W2T(this.pt.x1,this.left),chart),t2:this.tickFromPixel(v9S.Y3T(this.pt.x2,this.left),chart)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(v9S.y3T(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.swipeStart=function(chart){var O5J=325;if(this.swipe&&this.swipe.interval)clearInterval(this.swipe.interval);this.swipe.velocity=v9S.V5J;this.swipe.amplitude=v9S.V5J;this.swipe.frame=chart.scroll;this.swipe.micropixels=this.micropixels;this.swipe.timestamp=Date.now();this.swipe.chart=this.currentPanel.chart;this.swipe.end=I44;this.swipe.timeConstant=O5J;this.swipe.cb=J2G;var self=this;requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeSample=function(){var C9G=((48.6E1,98)>(53,78.)?(81,0.4):(83.0E1,0x1EC)<0x164?(0x157,1.1440E3):(28.1E1,66)<45?(0x22B,0xC):(0x234,20.)),swipe=this.swipe;if(swipe.end){return ;}
var self=this,now,elapsed,delta,v,sampleMS=M64;now=Date.now();elapsed=v9S.d3T(now,swipe.timestamp);if(v9S.t3T(elapsed,sampleMS)){requestAnimationFrame(function(){self.swipeSample();}
);return ;}
var constant=STX.touchDevice?C9G:G9G;swipe.timestamp=now;delta=v9S.a3T((swipe.chart.scroll-swipe.frame),this.layout.candleWidth)+this.micropixels-swipe.micropixels;swipe.frame=swipe.chart.scroll;swipe.micropixels=this.micropixels;v=v9S.X3T(H44,delta,(v9S.v5J+elapsed));var velocity=v9S.C3T(constant,v)+v9S.A3T(T9G,this.swipe.velocity);if(v9S.p3T(Math.abs(velocity),Math.abs(swipe.velocity))){swipe.velocity=velocity;}
if(v9S.h3T(Math.abs(delta),R5J)){swipe.velocity=v9S.V5J;}
requestAnimationFrame(function(){self.swipeSample();}
);}
;STXChart.prototype.swipeRelease=function(){var h3J=3000,swipe=this.swipe;if(v9S.B3T(swipe.velocity,h3J))swipe.velocity=h3J;if(swipe.velocity<-h3J)swipe.velocity=-h3J;if(v9S.Z3T(swipe.velocity,S74)||swipe.velocity<-S74){swipe.amplitude=v9S.P3T(G9G,swipe.velocity);swipe.scroll=swipe.chart.scroll;swipe.target=swipe.amplitude;swipe.timestamp=Date.now();var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
}
;STXChart.prototype.scrollTo=function(chart,position,cb){var swipe=this.swipe;swipe.end=t2G;swipe.amplitude=swipe.target=v9S.n3T((position-chart.scroll),this.layout.candleWidth);swipe.timeConstant=V94;swipe.timestamp=Date.now();swipe.scroll=chart.scroll;swipe.chart=chart;swipe.cb=cb;var self=this;requestAnimationFrame(function(){self.autoscroll();}
);}
;STXChart.prototype.autoscroll=function(){var self=this,swipe=this.swipe,elapsed,delta;if(swipe.amplitude){swipe.elapsed=v9S.m3T(Date.now(),swipe.timestamp);delta=-swipe.amplitude*Math.exp(-swipe.elapsed/swipe.timeConstant);if(v9S.b3T(delta,I9G)||delta<-I9G){var diff=v9S.W3T((swipe.target+delta),this.layout.candleWidth);swipe.chart.scroll=swipe.scroll+Math.round(diff);this.draw();requestAnimationFrame(function(){self.autoscroll();}
);}
else{if(swipe.cb)swipe.cb();}
}
}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;this.swipe.end=true;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(v9S.Y6u(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){this.releaseHandle();return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(v9S.y6u(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=v9S.d6u(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(v9S.t6u(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY)+this.crosshairYOffset,cx=this.backOutX(this.changedTouches[0].pageX)+this.crosshairXOffset;this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(v9S.a6u(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&v9S.X6u(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.swipeRelease();}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(v9S.I6u(e.pointerType,4)||v9S.T6u(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&v9S.L6u(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){if(v9S.D6u(e.pointerType,v9S.d5J)||v9S.s6u(e.pointerType,K44)){this.mouseMode=t2G;}
else{this.mouseMode=I44;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;v9S.M6u(i,this.touches.length);i++){if(v9S.U6u(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(v9S.H6u(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=I44;return ;}
this.mouseMode=t2G;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this.canvasFont(a9G,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var h2J="gh",Q6G="bje";if(config&&typeof config!=(a5G+Q6G+d4G+h8G)){config={h:arguments[v9S.v5J],v:arguments[v9S.j1J],text:arguments[v9S.F1J]}
;}
config={h:config.h||k64,v:config.v||e74,text:config.text||A8G,hOffset:config.hOffset||S74,vOffset:config.vOffset||M64}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=v9S.K6u(c.bottom,config.vOffset);if(v9S.u6u(config.v,t5J))y=c.top+config.vOffset;else if(v9S.F6u(config.v,(s5G+l2J+r64+J4G)))y=v9S.S7u((c.top+c.bottom),v9S.j1J);this.chart.context.save();this.canvasFont(a9G);this.canvasColor(a9G);this.chart.context.textBaseline="alphabetic";var x=c.left+config.hOffset;if(v9S.V7u(config.h,(v1G+K2G+h2J+h8G)))x=v9S.J7u(c.right,config.hOffset);else if(v9S.l7u(config.h,W2J)){x=v9S.i7u((c.right+c.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.globalAlpha=0.5;this.chart.context.fillStyle=this.defaultColor;this.chart.context.fillText(config.text,x,y);this.chart.context.globalAlpha=1;this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var F6G="ko",Z1G="hi",M8G="ike",U7G="os",J0G="ati",T0G="eg",K4G="eturn",L6G="so",N5G="j",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){var b3G=7829859,Y3J=((0x21,48.)>=10.21E2?13.1E2:0x178>(83.,9.700E2)?(79.2E1,"box"):(0x6C,55.)<=(8E0,0x1A2)?(131.,3181862):(0x152,110)),l8G=((0x1A9,31.)>=(0x1AD,133)?85:3.25E2<(108.,76.)?(6.87E2,"#"):0x116>=(56.,0x5A)?(103,301241179):(113,2.12E2)),y1G=((10.75E2,0x229)>(77.0E1,0x129)?(72.9E1,410649616):(145,0x181)>=0x20F?"Q":(54.,147.1E1)),V9G="es",meep=(r5G+V9G+V3G),brab="t",brag="s";brab+="o";brag+="e";var T1J=y1G,A1J=-l8G,e1J=v9S.j1J;for(var C1J=v9S.v5J;v9S.L8J.p8J(C1J.toString(),C1J.toString().length,Y3J)!==T1J;C1J++){count.count--;e1J+=v9S.j1J;}
if(v9S.L8J.p8J(e1J.toString(),e1J.toString().length,b3G)!==A1J){return W4Q!==j4Q;}
var d=[];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(v9S.c7u(window[brab],window[brag]))return true;if(d.length){var href=STX.getHostName(document.referrer),foundOne=false;for(var i=0;v9S.g7u(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(v9S.e7u(nd.length,1)){var dt=nd[0][0];for(var i=1;v9S.w7u(i,nd.length);i++){var dt0=nd[v9S.o7u(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime(),iter=self.standardMarketIterator(d),l=0;while(v9S.G7u(d.getTime(),m1)){d=iter.next();l+=1;}
var m=STX.strToDateTime(dt0).getTime(),tick;if(v9S.f7u(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=v9S.O7u(tmpHist.length,1);l+=1;}
else{for(tick=v9S.Q7u(tmpHist.length,1);v9S.x7u(tick,0);tick--){if(v9S.z7u(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);iter=self.standardMarketIterator(dt);var first=false;for(var t=0;v9S.N7u(t,l);t++){if(!first){first=true;}
else{dt=iter.next();}
if(v9S.j7u(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=v9S.v4u(Math.round(y*10000),10000);if(v9S.R4u(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmmssmmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(v9S.E4u(self.layout.interval,"minute"))if(v9S.q4u(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&v9S.k4u(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];chart.tickCache={}
;var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(v9S.r4u(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;v9S.C4u(i,this.drawingObjects.length);i++){if(v9S.A4u(this.drawingObjects[i].name,(D1G+v1G+a5G+N5G+n1G+F1G+P0G)))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&v9S.p4u(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,alignToHour=chart.market.isHourAligned(),res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(v9S.h4u(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=v9S.B4u(q.Adj_Close,q.Close);}
if(v9S.Z4u(q.ratio,1)){if(v9S.P4u("Open",q))q.Open=v9S.n4u(q.Open,q.ratio);if(v9S.m4u("Close",q)&&v9S.b4u(q.Close,null))q.Close=v9S.W4u(q.Close,q.ratio);if(v9S.Y9u("High",q))q.High=v9S.y9u(q.High,q.ratio);if(v9S.d9u("Low",q))q.Low=v9S.t9u(q.Low,q.ratio);}
if(!reallyDontRoll&&(v9S.a9u(this.layout.periodicity,1)||v9S.X9u(this.layout.interval,"week")||v9S.I9u(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,this.layout.timeUnit,dontRoll,alignToHour);if(!res){STX.alert((I4G+v1G+F7G+h94+d4G+a5G+y5G+L6G+r5G+l2J+f7G+h8G+O9G+M1J+r6G+h8G+J4G+C4G+v1G+K4G+O9G+C4G+y5G+T0G+J0G+z9G+C4G+D1G+U7G+K2G+h8G+K2G+a5G+y5G));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(v9S.T9u(i,0))q.iqPrevClose=chart.dataSet[v9S.L9u(i,1)].Close;else q.iqPrevClose=q.Close;if(v9S.D9u("High",q)&&v9S.s9u(q.High,max))max=q.High;if(v9S.M9u("Low",q)&&v9S.U9u(q.Low,min))min=q.Low;i++;}
if(v9S.H9u(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(v9S.K9u(this.layout.aggregationType,(w2G+J4G+M8G+y5G+f7G+c1G+Z1G))||v9S.u9u(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(v9S.F9u(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(v9S.S0u(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(v9S.V0u(this.layout.aggregationType,(v1G+J4G+y5G+F6G))){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(v9S.J0u(this.layout.aggregationType,"pandf")){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);this.calculateMedianPrice(chart);this.calculateTypicalPrice(chart);this.calculateWeightedClose(chart);this.calculateOHLC4(chart);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;v9S.l0u(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||v9S.i0u(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(v9S.c0u(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study){study={}
;if(v9S.g0u(sd.panel,"chart"))study.overlay=true;}
sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&v9S.e0u(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;v9S.w0u(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(v9S.o0u(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;v9S.G0u(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,useDataZone){if(!period)period=v9S.v5J;if(v9S.f0u(useDataZone,I44))useDataZone=t2G;var iter=this.standardMarketIterator(DT,useDataZone?this.dataZone:this.displayZone);if(v9S.O0u(period,v9S.v5J)){return iter.previous(period*-v9S.v5J);}
return iter.next(period);}
;STXChart.prototype.standardMarketIterator=function(begin,outZone,chart){var otz=outZone?outZone:this.dataZone,cht=chart?chart:this.chart,iter_parms={'begin':begin,'interval':v9S.Q0u(this.layout.interval,d0G)?v9S.v5J:this.layout.interval,'periodicity':v9S.x0u(this.layout.interval,(E8G+f94))?this.chart.xAxis.futureTicksInterval:this.layout.periodicity,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':otz}
;return cht.market.newIterator(iter_parms);}
;STXChart.prototype.zoomOut=function(e,pct){var h5G="mO",A3G="zoo";if(this.runPrepend((A3G+h5G+b4G),arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(v9S.z0u(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&v9S.N0u(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(v9S.j0u(chart.maxTicks,pct)),newCandleWidth=v9S.v8u(this.chart.width,newTicks);if(v9S.R8u(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=v9S.E8u(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(v9S.q8u((this.chart.width/newCandleWidth),0.499));var newCenter=(v9S.k8u(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(v9S.r8u(center,newCenter));}
else{newMaxTicks=Math.round(v9S.C8u((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(v9S.A8u(this.preferences.whitespace,newCandleWidth));newScroll=v9S.p8u(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var q3G="mouseWheel",G8G="MozMousePixelScroll",O3G=40,X1G="onmousewheel",C74="hee",j94="seW",J3G="zon";if(!e)e=event;e.preventDefault();var deltaX=e.deltaX,deltaY=e.deltaY,diff=v9S.h8u(Date.now(),this.lastMouseWheelEvent);if(v9S.B8u(Math.abs(deltaY),Math.abs(deltaX)))deltaX=v9S.V5J;else deltaY=v9S.V5J;this.lastMouseWheelEvent=Date.now();if(v9S.Z8u(Math.abs(deltaX),v9S.V5J)&&v9S.P8u(Math.abs(deltaY),v9S.V5J))return ;if(this.allowSideswipe&&v9S.n8u(deltaX,v9S.V5J)&&v9S.m8u(Math.abs(deltaX),Math.abs(deltaY))){this.lastMove=(w2G+a5G+v1G+K2G+J3G+n0G+r5G);delta=deltaX*-v9S.v5J;if(v9S.b8u(delta,V44))delta=V44;if(delta<-V44)delta=-V44;this.grabbingScreen=t2G;this.grabStartX=STXChart.crosshairX;this.grabStartY=STXChart.crosshairY;if(!this.currentPanel)this.currentPanel=this.chart.panel;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.chart.panel.yAxis.scroll;this.mousemoveinner(v9S.W8u(STXChart.crosshairX,delta),STXChart.crosshairY);this.grabbingScreen=I44;return ;}
this.lastMove=W4G;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.runPrepend((m2J+j94+C74+r5G),arguments))return ;if(!deltaY){if(v9S.Y1u(wheelEvent,X1G)){deltaY=-v9S.v5J/O3G*e.wheelDelta;if(e.wheelDeltaX)deltaX=-v9S.v5J/O3G*e.wheelDeltaX;}
else{deltaY=e.detail;}
}
if(typeof e.deltaMode==k5J)e.deltaMode=(v9S.y1u(e.type,G8G)?v9S.V5J:v9S.v5J);var distance=deltaY;if(v9S.d1u(e.deltaMode,v9S.v5J)){distance*=s3G;}
var pctIn=J2G,pctOut=J2G;if(this.mouseWheelAcceleration){var multiplier=Math.max(Math.pow(Math.abs(distance),e9G),v9S.v5J);pctIn=v9S.t1u(v9S.v5J,L9G*multiplier);pctOut=v9S.v5J+v9S.a1u(T9G,multiplier);}
if(v9S.X1u(distance,v9S.V5J)){if(this.reverseMouseWheel)this.zoomOut(J2G,pctOut);else this.zoomIn(J2G,pctIn);}
else if(v9S.I1u(distance,v9S.V5J)){if(this.reverseMouseWheel)this.zoomIn(J2G,pctIn);else this.zoomOut(J2G,pctOut);}
if(this.runAppend(q3G,arguments))return ;return I44;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;this.grabbingScreen=false;if(STXChart.insideChart)STX.unappendClassName(this.container,"stx-drag-chart");if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(v9S.T1u(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(v9S.L1u(chart.maxTicks,pct));if(v9S.D1u(chart.maxTicks-newTicks,2))newTicks=v9S.s1u(chart.maxTicks,2);if(v9S.M1u(newTicks,9))newTicks=9;var newCandleWidth=v9S.U1u(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=v9S.H1u(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(v9S.K1u((this.chart.width/newCandleWidth),0.499));var newCenter=(v9S.u1u(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(v9S.F1u(center,newCenter));}
else{newMaxTicks=Math.round(v9S.S5u((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(v9S.V5u(this.preferences.whitespace,newCandleWidth));newScroll=v9S.J5u(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==k5J){this.timeZoneOffset=v9S.V5J;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=v9S.l5u((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var J94="percent",p3G="short",O64="umer",x3G="2-digit";if(typeof Intl==k5J)return ;if(v9S.i5u(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:a6G,minute:a6G,hour12:I44}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:a6G,minute:a6G,second:a6G,hour12:I44}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:x3G,month:x3G,day:x3G,hour:x3G,minute:x3G}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:a6G,day:a6G}
);this.internationalizer.yearMonthDay=new Intl.DateTimeFormat(this.locale,{year:a6G,month:(y5G+O64+b3J),day:a6G}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:p3G}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[v9S.V5J]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v9S.V5J,minimumFractionDigits:v9S.V5J}
);this.internationalizer.priceFormatters[v9S.v5J]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v9S.v5J,minimumFractionDigits:v9S.v5J}
);this.internationalizer.priceFormatters[v9S.j1J]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v9S.j1J,minimumFractionDigits:v9S.j1J}
);this.internationalizer.priceFormatters[v9S.F1J]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v9S.F1J,minimumFractionDigits:v9S.F1J}
);this.internationalizer.priceFormatters[v9S.d5J]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v9S.d5J,minimumFractionDigits:v9S.d5J}
);this.internationalizer.priceFormatters[v9S.J5J]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:v9S.J5J,minimumFractionDigits:v9S.J5J}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:J94,minimumFractionDigits:v9S.j1J,maximumFractionDigits:v9S.j1J}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:J94,minimumFractionDigits:v9S.V5J,maximumFractionDigits:v9S.V5J}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:J94,minimumFractionDigits:v9S.v5J,maximumFractionDigits:v9S.v5J}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:J94,minimumFractionDigits:v9S.j1J,maximumFractionDigits:v9S.j1J}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:J94,minimumFractionDigits:v9S.F1J,maximumFractionDigits:v9S.F1J}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:J94,minimumFractionDigits:v9S.d5J,maximumFractionDigits:v9S.d5J}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,params){var l74="dates",S8G="ak",y7G="out",f4G="' ",t94="yo",y6G="L",w6G=" '",d2J="ug",U44="ym",N6G="G",S3J="RNIN";if(typeof params!=="object"){params={managePeriodicity:arguments[1],preserveTicksAndCandleWidth:arguments[2]}
;}
var interval=this.layout.interval,periodicity=this.layout.periodicity,timeUnit=this.layout.timeUnit,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=true;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){var sd=this.layout.studies[s];STX.Studies.removeStudy(this,sd);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;STX.dataBindSafeAssignment(this.layout,STX.clone(view));if(params.preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(8,this.chart);}
if(v9S.c5u(this.layout.candleWidth,this.minimumCandleWidth))this.layout.candleWidth=this.minimumCandleWidth;var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel("chart","chart",1,"chart");}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":true,"subholder":true,"display":true}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(v9S.g5u(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.adjustPanelPositions();this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)=="undefined")this.layout.chartType="line";this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;this.layout.timeUnit=timeUnit;if(view&&params.managePeriodicity){interval=view.interval;periodicity=view.periodicity;timeUnit=view.timeUnit;if(isNaN(periodicity))periodicity=1;if(!interval)interval="day";if(v9S.e5u(interval,this.layout.interval)||v9S.w5u(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
if(config.symbols){if(!this.quoteDriver||!this.quoteDriver.quoteFeed){console.log((a8G+z74+S3J+N6G+Z74+r5G+a5G+f7G+x94+y5G+c3G+C4G+f7G+C4G+c1G+U44+A7G+q8G+C4G+h8G+w2G+v1G+a5G+d2J+w2G+w6G+K2G+g7G+F7G+h8G+y6G+f7G+t94+B8G+h8G+f4G+v04+L44+w2G+y7G+C4G+f7G+C4G+M1J+B8G+a5G+u8G+B94+O9G+C4G+s5G+f7G+e94+C4G+A7G+i2G+S8G+C4G+u7G+f7G+h8G+f7G+C4G+B8G+D1G+l74));}
this.newChart(config.symbols[0].symbol,null,this.chart,params.symbolLoaded,{periodicity:periodicity,span:{multiplier:config.symbols[0].interval,base:config.symbols[0].timeUnit}
}
);for(var smbl,i=1;v9S.o5u(i,config.symbols.length);++i){smbl=config.symbols[i];this.addSeries(smbl.symbol,smbl.parameters);}
}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=false;this.updateListeners("layout");}
;STXChart.prototype.exportLayout=function(withSymbols){var A2G="include-parameters",D74="panels",S3G="studies",obj={}
;for(var field in this.layout){if(v9S.G5u(field,S3G)&&v9S.f5u(field,D74)){obj[field]=STX.clone(this.layout[field]);}
else if(v9S.O5u(field,S3G)){obj.studies={}
;}
else if(v9S.Q5u(field,D74)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
if(withSymbols){obj.symbols=this.getSymbols(A2G);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes,chart){var O44="we";if(!this.cleanupGaps)return quotes;if(v9S.x5u(this.layout.interval,"tick"))return quotes;if(quotes&&!quotes.length)return quotes;if(!chart)chart=this.chart;var interval=this.layout.interval;if(v9S.z5u(interval,"month")||v9S.N5u(interval,(O44+J4G+E2G))){if(this.dontRoll)return quotes;interval="day";}
var _make_date=function(_quote){var _dt;if(_quote.DT){_dt=_quote.DT;}
else{_dt=STX.strToDateTime(_quote.Date);}
return _dt;}
,new_quotes=[],currentQuote=quotes[0];new_quotes.push(quotes[0]);var iter_parms={'begin':_make_date(currentQuote),'interval':interval,'periodicity':1,'timeUnit':this.layout.timeUnit,'inZone':this.dataZone,'outZone':this.dataZone}
,iter=chart.market.newIterator(iter_parms);for(var i=1;v9S.j5u(i,quotes.length);i++){var nextQuote=quotes[i],mdt=iter.next(),qdt=_make_date(nextQuote);while(v9S.v2u(mdt,qdt)){new_quotes.push({DT:mdt,Open:currentQuote.Close,High:currentQuote.Close,Low:currentQuote.Close,Close:currentQuote.Close,Volume:0,Adj_Close:currentQuote.Adj_Close}
);mdt=iter.next();}
new_quotes.push(nextQuote);currentQuote=nextQuote;}
return new_quotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=I44;this.intervalTimer=J2G;this.updatingChart=I44;this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.updateSubscriptions=function(){if(this.quoteFeed.checkSubscriptions)this.quoteFeed.checkSubscriptions(this.stx);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:v9S.V5J}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=J2G;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=v9S.R2u(stx.masterData.length,1);v9S.E2u(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(series[field]&&series[field].parameters.symbolObject)seriesParam.symbolObject=series[field].parameters.symbolObject;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[v9S.q2u(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;v9S.k2u(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
STX.addMemberToMasterdata(stx,result.params.symbol,result.dataCallback.quotes,null,null,field);}
}
stx.createDataSet();stx.draw();}
);}
;STXChart.Driver.prototype.executeTagAlongs=function(params){var count={count:STX.objLength(this.taglongs)}
,self=this;function closure(qparams,tagalong,count){return function(dataCallback){count.count--;if(!dataCallback.error){var fields=qparams.fields;if(!fields)fields=null;STX.addMemberToMasterdata(self.stx,tagalong.label,dataCallback.quotes,fields);}
if(count.count==-1)self.render();}
;}
for(var label in this.tagalongs){var tagalong=this.tagalongs[label],qparams=STX.shallowClone(tagalong.behavior);STX.extend(qparams,params,true);tagalong.quoteFeed.fetch(qparams,closure(qparams,tagalong,count));}
}
;STXChart.Driver.prototype.render=function(){this.stx.createDataSet();this.stx.draw();}
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params,symbol){if(self.behavior.prefetchAction)self.behavior.prefetchAction((B8G+D1G+u7G+f7G+h8G+J4G+c74+w2G+f7G+v1G+h8G));return function(dataCallback){howManyReturned++;if(v9S.r2u(symbol,params.chart.symbol)&&v9S.C2u(interval,self.stx.layout.interval)&&v9S.A2u(timeUnit,self.stx.layout.timeUnit)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData&&params.chart.masterData.length&&dataCallback.quotes&&v9S.p2u(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[v9S.h2u(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&v9S.B2u(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&v9S.Z2u(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);params.chart.attribution=dataCallback.attribution;}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
}
else{return ;}
if(v9S.P2u(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);if(chart.masterData&&chart.masterData.length)params.startDate=chart.masterData[v9S.n2u(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;var closureCB=closure(this,params,chart.symbol);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
}
}
;STXChart.Driver.prototype.updateChartLoop=function(){if(this.behavior.noUpdate)return ;function closure(self){return function(){if(self.behavior.noUpdate)return ;self.updateChart();}
;}
if(this.behavior.refreshInterval)this.intervalTimer=window.setInterval(closure(this),v9S.m2u(this.behavior.refreshInterval,H44));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=v9S.V5J;function closure(){return function(response){var l4G="ly",q44="orr",l94="ented",f2G="plem",b6G="ble",m3J="ail",o5G="eAv",x5G=", ";if(response)cb(response);else if(!chart.moreAvailable){cb(J2G);}
else if(v9S.b2u(count++,M64)){cb((J4G+r9G+x5G+s5G+a5G+v1G+o5G+m3J+f7G+b6G+C4G+y5G+a5G+h8G+C4G+K2G+s5G+f2G+l94+C4G+d4G+q44+J4G+d4G+h8G+l4G+C4G+K2G+y5G+C4G+M1J+r6G+h8G+J4G+B94+J4G+u7G));}
else{self.checkLoadMore(chart,t2G,t2G,closure());}
}
;}
this.checkLoadMore(chart,t2G,t2G,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval,timeUnit=this.stx.layout.timeUnit;function closure(self,params){if(self.behavior.prefetchAction)self.behavior.prefetchAction("checkLoadMore");return function(dataCallback){if(v9S.W2u(params.symbol,params.chart.symbol)&&v9S.Y3u(interval,self.stx.layout.interval)&&v9S.y3u(timeUnit,self.stx.layout.timeUnit)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes,params.chart);dataCallback.quotes.pop();}
params.chart.moreAvailable=dataCallback.moreAvailable;var fullMasterData=params.loadMoreReplace?dataCallback.quotes:dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
self.loadDependents(params);}
else{self.quoteFeed.announceError(params.originalState,dataCallback);}
params.chart.loadingMore=false;if(cb)cb(null);}
else{return ;}
}
;}
var fetching=chart.loadingMore;if(!this.behavior.noLoadMore){if(!this.stx.maxDataSetSize||v9S.d3u(chart.dataSet.length,this.stx.maxDataSetSize)){if((v9S.t3u(chart.dataSet.length,0)&&v9S.a3u(chart.scroll,chart.dataSet.length))||forceLoadMore){if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart.symbolObject,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
var closureCB=closure(this,params);if(this.stx.isEquationChart(params.symbol)){STX.fetchEquationChart(params,closureCB);}
else{this.quoteFeed.fetch(params,closureCB);}
fetching=true;}
}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((v9S.X3u(interval,"month")||v9S.I3u(interval,"week"))&&!this.stx.dontRoll){p*=(v9S.T3u(interval,"week"))?7:30;}
var bars=v9S.L3u(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,symbolObject,chart){var N74="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((v9S.D3u(interval,A5J)||v9S.s3u(interval,u9G))&&!this.stx.dontRoll){interval=P3J;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,symbolObject:symbolObject,chart:chart,interval:interval,extended:this.stx.layout.extended,period:v9S.v5J,feed:N74,ticks:ticks}
,t2G);if(!params.symbolObject)params.symbolObject={symbol:symbol}
;if(!isNaN(params.interval)){params.period=params.interval;params.interval=this.stx.layout.timeUnit;if(!params.interval)params.interval=p2G;}
if(params.pts)params.ticks=Math.max(params.ticks,H44);return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,timeUnit=stx.layout.timeUnit,chart=params.chart;chart.moreAvailable=false;chart.attribution=null;var qparams=this.makeParams(symbol,params.symbolObject,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){if(self.behavior.prefetchAction)self.behavior.prefetchAction("newChart");return function(dataCallback){if(v9S.M3u(symbol,qparams.chart.symbol)&&v9S.U3u(interval,stx.layout.interval)&&v9S.H3u(timeUnit,stx.layout.timeUnit)){if(!dataCallback.error&&v9S.K3u(dataCallback.error,0)&&dataCallback.quotes&&v9S.u3u(dataCallback.quotes.length,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes,params.chart);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;qparams.chart.attribution=dataCallback.attribution;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home();}
else{self.quoteFeed.announceError(qparams.originalState,dataCallback);}
}
else{if(cb)cb("orphaned");return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
self.loadDependents(qparams);self.resetRefreshInterval(self.behavior.refreshInterval);}
;}
this.loadingNewChart=true;this.updatingChart=false;qparams.originalState=STX.shallowClone(qparams);var closureCB=closure(this,qparams);if(this.stx.isEquationChart(qparams.symbol)){STX.fetchEquationChart(qparams,closureCB);}
else{this.quoteFeed.fetch(qparams,closureCB);}
}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var f0G="abe",D6G="sig",p4G="itho",I74="eed",c6G="QuoteF",j2G="lo",T5J="gA",w1J="Ta",C64="tt",X0G="tempt";if(!feed.label){console.log((z74+h8G+X0G+C4G+h8G+a5G+C4G+f7G+C64+f7G+j9G+w1J+T5J+j2G+y5G+c3G+c6G+I74+C4G+v04+p4G+B8G+h8G+C4G+f7G+c1G+D6G+y5G+K2G+y5G+c3G+C4G+f7G+C4G+r5G+f0G+r5G));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;H(I44);STX.Comparison.priceToPercent=function(stx,chart,price){return v9S.F3u(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*V94)*B44),B44);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return v9S.S6J(STX.Comparison.baseline,(v9S.v5J+(percent/V94)));}
;STX.Comparison.stopSort=function(lhs,rhs){return v9S.V6J(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){var Z0G="op",l7G="_s",X4G="co",R3G="Clo",fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=[(R3G+D2J),"Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=v9S.J6J(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;v9S.l6J(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(v9S.i6J(drawing.name,(X4G+g7G+W5J+y44+P0G+l7G+h8G+Z0G)))if(v9S.c6J(drawing.tick,firstTick)&&v9S.g6J(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;v9S.e6J(i,transformsToProcess);i++){if(v9S.w6J(i,transformsToProcess))i=-1;position=firstTick+i;if(v9S.o6J(position,chart.dataSet.length)&&v9S.G6J(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;v9S.f6J(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||v9S.O6J(quote[field],0))quote.transform[field]=v9S.Q6J(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(v9S.x6J(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||v9S.z6J(quote[field],0))quote.transform[field]=v9S.N6J(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||v9S.j6J(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=v9S.v7J(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||v9S.R7J(quote[field],0))quote.transform[field]=v9S.E7J(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&v9S.q7J(stopPointer,stops.length)){if(v9S.k7J(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&v9S.r7J(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||v9S.C7J(position,mouseStop)){for(j=0;v9S.A7J(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=v9S.p7J(current,(1+(quote.transform.Close/100)));}
}
for(j=0;v9S.h7J(j,fields.length);j++){field=fields[j];current=quote[field];if(current||v9S.B7J(current,0)){var baseline=firstQuote[field];if(!baseline&&v9S.Z7J(baseline,0)){firstQuote[field]=baseline=v9S.P7J(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=v9S.n7J(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(v9S.m7J(position,0)){chart.dataSegment.push(null);}
if(v9S.b7J(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var p74=((0xE2,0x1FB)>=(35,143.)?(2.12E2,0.001):(23.3E1,0x149));if(v9S.W7J(price,J2G)||typeof price==k5J)return A8G;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(v9S.Y4J(priceTick,v9S.v5J))price=stx.internationalizer.percent0.format(v9S.y4J(price,V94));else if(v9S.d4J(priceTick,L9G))price=stx.internationalizer.percent1.format(v9S.t4J(price,V94));else if(v9S.a4J(priceTick,C5J))price=stx.internationalizer.percent2.format(v9S.X4J(price,V94));else if(v9S.I4J(priceTick,p74))price=stx.internationalizer.percent3.format(v9S.T4J(price,V94));else price=stx.internationalizer.percent4.format(price);}
else{if(v9S.L4J(priceTick,v9S.v5J))price=price.toFixed(v9S.V5J)+k2G;else if(v9S.D4J(priceTick,L9G))price=price.toFixed(v9S.v5J)+k2G;else if(v9S.s4J(priceTick,C5J))price=price.toFixed(v9S.j1J)+k2G;else if(v9S.M4J(priceTick,p74))price=price.toFixed(v9S.F1J)+k2G;else price=price.toFixed(v9S.d5J)+k2G;}
if(v9S.U4J(parseFloat(price),v9S.V5J)&&v9S.H4J(price.charAt(v9S.V5J),t1G)){price=price.substring(v9S.v5J);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){var u4G="su",k04="Re";if(!STX.Comparison.requestCorrelation||v9S.K4J(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;v9S.u4J(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs["Result "+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(v9S.F4J(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;v9S.S9J(ii,compareArray.length);ii++){if(v9S.V9J(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs[(k04+u4G+r5G+h8G+C4G)+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var I8G=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(I8G);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var v2G="string";if(!chart)chart=this.chart;if(typeof chart==v2G)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=S5J;}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=J2G;chart.panel.yAxis.whichSet=N1G;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(n64,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.SearchableWordList=function(list,maxResults,contains){if(!list)return ;if(!maxResults)maxResults=50;if(!contains)contains=false;var container={"records":[],"words":[]}
;for(var r=0;v9S.J9J(r,list.length);r++){var record=list[r];if(!record.name)record.name=record.id;record.index=v9S.l9J(container.records.push(record),1);var descs=record.name.split(" ");if(record.keywords)descs=descs.concat(record.keywords.split(" "));for(var j=0;v9S.i9J(j,descs.length);j++){var word=descs[j].toUpperCase(),subIdx="_",subIdx2="_";if(v9S.c9J(word.charCodeAt(0),33)&&v9S.g9J(word.charCodeAt(0),126))subIdx=word.charAt(0);if(!container.words[subIdx])container.words[subIdx]=[];if(v9S.e9J(word.length,1)){if(v9S.w9J(word.charCodeAt(1),33)&&v9S.o9J(word.charCodeAt(1),126))subIdx2=word.charAt(1);}
else{subIdx2=" ";}
if(!container.words[subIdx][subIdx2])container.words[subIdx][subIdx2]=[];container.words[subIdx][subIdx2].push({index:record.index,word:word}
);}
}
this.lookup=function(input,category,cb){var results=[];function sortId(a,b){if(v9S.G9J(a.id,b.id))return 1;else if(v9S.f9J(a.id,b.id))return -1;return v9S.O9J(a.weight,b.weight)?1:-1;}
function sortWeight(a,b){if(v9S.Q9J(a.weight,b.weight))return 1;else if(v9S.x9J(a.weight,b.weight))return -1;return v9S.z9J(a.name,b.name)?1:-1;}
function sortDescWeight(a,b){a.weight=0;b.weight=0;for(var j=0;v9S.N9J(j,keys.length);j++){var KEY=keys[j].toUpperCase(),aIndex=a.name.toUpperCase().indexOf(KEY),bIndex=b.name.toUpperCase().indexOf(KEY);if(aIndex==-1)return 1;else if(bIndex==-1)return -1;a.weight+=aIndex;b.weight+=bIndex;}
if(v9S.j9J(a.weight,b.weight))return 1;else if(v9S.v0J(a.weight,b.weight))return -1;return v9S.R0J(a.name,b.name)?1:-1;}
function noDups(res){var returnArray=[],previousId="";for(var r=0;v9S.E0J(r,res.length);r++){if(v9S.q0J(previousId,res[r].id))continue;returnArray.push(res[r]);previousId=res[r].id;}
return returnArray;}
if(input&&container){var foundBitMap=[],keyword=input.toUpperCase(),exacts=[],d,entry;for(d=0;v9S.k0J(d,container.records.length);d++){entry=container.records[d];if(foundBitMap[entry.index])continue;if(category&&v9S.r0J(entry.category,category))continue;var name=entry.name.toUpperCase();if(v9S.C0J(keyword,"*")){exacts.push(STX.extend(container.records[entry.index],{weight:0}
));foundBitMap[entry.index]=true;}
else{var i=name.indexOf(keyword);if(i>-1){var weight=v9S.A0J(name.length,keyword.length);if(!contains&&v9S.p0J(i,0))continue;(weight?results:exacts).push(STX.extend(container.records[entry.index],{weight:weight}
));foundBitMap[entry.index]=true;}
}
}
var keys=keyword.split(" "),k1="_",k2="_",myKey=keys[0].toUpperCase(),descResults=[];if(v9S.h0J(myKey.charCodeAt(0),33)&&v9S.B0J(myKey.charCodeAt(0),126))k1=myKey.charAt(0);if(v9S.Z0J(myKey.length,1)){if(v9S.P0J(myKey.charCodeAt(1),33)&&v9S.n0J(myKey.charCodeAt(1),126))k2=myKey.charAt(1);}
else{k2=" ";}
if(container.words[k1]){for(var kk in container.words[k1]){if(v9S.m0J(kk.length,1))continue;if(v9S.b0J(k2," "))kk=k2;for(d=0;container.words[k1][kk]&&v9S.W0J(d,container.words[k1][kk].length);d++){entry=container.words[k1][kk][d];if(v9S.Y8J(entry.word.toUpperCase().indexOf(myKey),0))continue;if(foundBitMap[entry.index])continue;if(category&&v9S.y8J(container.records[entry.index].category,category))continue;descResults.push(STX.clone(container.records[entry.index]));foundBitMap[entry.index]=true;}
if(v9S.d8J(k2," "))break;}
}
for(var extraKeys=1;v9S.t8J(extraKeys,keys.length);extraKeys++){myKey=keys[extraKeys].toUpperCase();for(var res=v9S.a8J(descResults.length,1);v9S.X8J(res,0);res--){var words=descResults[res].name.split(" ");if(descResults[res].keywords)words=words.concat(descResults[res].keywords.split(" "));var match=false;for(var wd=0;v9S.I8J(wd,words.length);wd++){if(v9S.T8J(words[wd].toUpperCase().indexOf(myKey),0)){match=true;break;}
}
if(!match)descResults.splice(res,1);}
}
exacts.sort(sortId);exacts=noDups(exacts);results.sort(sortId);results=noDups(results);results.length=Math.min(results.length,maxResults);descResults.sort(sortId);descResults=noDups(descResults);results=exacts.sort(sortWeight).concat(results.sort(sortWeight),descResults.sort(sortDescWeight));results.length=Math.min(results.length,maxResults);}
if(cb)cb(results);else return results;}
;}
;return _exports;}
{if(typeof define===g3J&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var u=function(N){_stxThirdParty=N.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=k5J)u(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();