$wnd.jsme.runAsyncCallback1('var $7="Assignment of aromatic double bonds failed";function a8(a,b){var c;c=a.A[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=~~(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function b8(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function c8(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function d8(){this.b=!0}y(24,1,{},d8);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function e8(a,b){var c,d,e;1==a.b.E[b]&&lo(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);vr(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[no(a.b,c,e)]=!1}}function f8(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=no(a.b,d,g)&&a.a[no(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,e8(a,c))}}while(h)}function g8(){}y(29,1,{},g8);_.a=null;_.b=null;\nfunction h8(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction zaa(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&Qr(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function i8(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(ko,an,-1,4,2),this.f=C(B,w,-1,4,1),this.k=C(B,w,-1,4,1),-1!=c&&1==d&&(h8(this,2147483647,e,!0),this.d=0))}y(30,1,{},i8);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction j8(a){jo(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.K.c;++b)if(0==(a.K.s[b]&67108864)&&3==a.V[b]){var c=a.K;c.s[b]|=67108864;c.N&=3}for(b=0;b<a.K.d;++b)3==a.k[b]&&2==ro(a.K,b)&&lo(a.K,b,26)}}function k8(){this.e=1}y(33,1,{},k8);\nfunction l8(a){var b;if(null==a||0==a.length||0==ps(a).length)return iZ(new LO,m,!0);b=new Es;var c=new g8,d=bW(ps(a)),e,f,g,h,j,l,n,q,r,u,x,v,t,F,G,s,P,ga,X,ba,pa,Ha,Ib,ob,T,Sa,Pb,V,Ca,ka,la,jb,Q,$c,Ia,nc,Ac;c.b=b;er(c.b);Ib=null;h=C(B,w,-1,64,1);h[0]=-1;Sa=C(B,w,-1,64,1);Pb=C(B,w,-1,64,1);for(t=0;64>t;++t)Sa[t]=-1;f=T=0;V=ob=ka=!1;l=0;Ca=d.length;for(j=1;32>=d[T];)++T;for(;T<Ca;)if(la=d[T++]&65535,m8(la)||42==la){g=0;x=-1;F=Ha=G=!1;if(ka)82==la&&KN(d[T]&65535)?(ga=null!=String.fromCharCode(d[T+\n1]&65535).match(/\\d/)?2:1,g=Hr(fr(d,T-1,1+ga)),T+=ga):(s=String.fromCharCode(d[T]&65535).toLowerCase().charCodeAt(0)==(d[T]&65535)&&m8(d[T]&65535)?2:1,g=Hr(fr(d,T-1,s)),T+=s-1,x=0),64==d[T]&&(++T,64==d[T]&&(F=!0,++T),Ha=!0),72==d[T]&&(++T,x=1,KN(d[T]&65535)&&(x=d[T]-48,++T));else if(42==la)g=6,G=!0;else switch(String.fromCharCode(la).toUpperCase().charCodeAt(0)){case 66:T<Ca&&114==d[T]?(g=35,++T):g=5;break;case 67:T<Ca&&108==d[T]?(g=17,++T):g=6;break;case 70:g=9;break;case 73:g=53;break;case 78:g=\n7;break;case 79:g=8;break;case 80:g=15;break;case 83:g=16}if(0==g)throw new lp("SmilesParser: unknown element label found");e=$q(c.b,g);G?(V=!0,yr(c.b,e,1)):vr(c.b,e,String.fromCharCode(la).toLowerCase().charCodeAt(0)==la&&m8(la));if(-1!=x&&1!=g){n=C(Mp,yn,-1,1,1);n[0]=~~(x<<24)>>24;var Ma=c.b,ab=e,Na=n;null!=Na&&0==Na.length&&(Na=null);null==Na?null!=Ma.r&&(Ma.r[ab]=null):(null==Ma.r&&(Ma.r=C(Yq,o,3,Ma.J,0)),Ma.r[ab]=Na)}v=h[l];-1!=h[l]&&128!=j&&dr(c.b,e,h[l],j);j=1;h[l]=e;0!=f&&(wr(c.b,e,f),f=0);\n(ba=!Ib?null:fs(Ib,qR(v)))&&h8(ba,e,T,1==g);Ha&&(!Ib&&(Ib=new ys),zs(Ib,qR(e),new i8(c,e,v,x,T,F)))}else if(46==la)j=128;else if(61==la)j=2;else if(35==la)j=4;else if(KN(la))if(X=la-48,ka){for(;T<Ca&&KN(d[T]&65535);)X=10*X+d[T]-48,++T;f=X}else{ob&&T<Ca&&KN(d[T]&65535)&&(X=10*X+d[T]-48,++T);ob=!1;if(64<=X)throw new lp("SmilesParser: ringClosureAtom number out of range");if(-1==Sa[X])Sa[X]=h[l],Pb[X]=T-1;else{if(Sa[X]==h[l])throw new lp("SmilesParser: ring closure to same atom");Ib&&((ba=fs(Ib,qR(Sa[X])))&&\nh8(ba,h[l],Pb[X],!1),(ba=fs(Ib,qR(h[l])))&&h8(ba,Sa[X],T-1,!1));dr(c.b,h[l],Sa[X],j);Sa[X]=-1}j=1}else if(43==la){if(!ka)throw new lp("SmilesParser: \'+\' found outside brackets");for(q=1;43==d[T];)++q,++T;1==q&&KN(d[T]&65535)&&(q=d[T]-48,++T);pr(c.b,h[l],q)}else if(45==la){if(ka){for(q=-1;45==d[T];)--q,++T;-1==q&&KN(d[T]&65535)&&(q=48-d[T],++T);pr(c.b,h[l],q)}}else if(40==la){if(-1==h[l])throw new lp("Smiles with leading parenthesis are not supported");h[l+1]=h[l];++l}else if(41==la)--l;else if(91==\nla){if(ka)throw new lp("SmilesParser: nested square brackets found");ka=!0}else if(93==la){if(!ka)throw new lp("SmilesParser: closing bracket without opening one");ka=!1}else if(37==la)ob=!0;else if(58==la)if(ka){for(P=0;KN(d[T]&65535);)P=10*P+d[T]-48,++T;c.b.u[h[l]]=P}else j=64;else if(47==la)j=17;else if(92==la)j=9;else throw new lp("SmilesParser: unexpected character found: \'"+String.fromCharCode(la)+Ob);if(1!=j)throw new lp("SmilesParser: dangling open bond");for(t=0;64>t;++t)if(-1!=Sa[t])throw new lp("SmilesParser: dangling ring closure");\nvar ib=c.b,La,fa,kb,Ea,W,gc;gc=C(B,w,-1,ib.o,1);Ea=C(ko,an,-1,ib.o,2);for(fa=0;fa<ib.p;++fa)for(kb=0;2>kb;++kb)Qr(ib,ib.B[kb][fa])&&!Qr(ib,ib.B[1-kb][fa])&&(Ea[ib.B[kb][fa]]=!0);for(W=ib.o-1;0<=W&&Ea[W];)gc[W]=W,--W;for(La=0;La<=W;++La)if(Ea[La]){gc[La]=W;gc[W]=La;for(--W;0<=W&&Ea[W];)gc[W]=W,--W}else gc[La]=La;c.b.M=!0;jo(c.b,1);for(e=0;e<c.b.o;++e)if(null!=(null==b.r?null:null==b.r[e]?null:fr(b.r[e],0,b.r[e].length))&&!mr(c.b,e))if(u=(null==c.b.r?null:c.b.r[e])[0],c.b.A[e]<(hp(),Xq).length&&null!=\nXq[c.b.A[e]]){r=!1;jb=Tp(c.b,e);jb-=Vp(c.b,e,jb);for($c=Xq[c.b.A[e]],Ia=0,nc=$c.length;Ia<nc;++Ia)if(Q=$c[Ia],jb<=Q){r=!0;Q!=jb+u&&or(c.b,e,jb+u);break}r||or(c.b,e,jb+u)}var Z,U,dc,Qb;for(Z=0;Z<c.b.c;++Z)if(7==c.b.A[Z]&&0==c.b.q[Z]&&3<Tp(c.b,Z)&&0<c.b.k[Z])for(Qb=0;Qb<c.b.f[Z];++Qb)if(U=oo(c.b,Z,Qb),dc=no(c.b,Z,Qb),1<ro(c.b,dc)&&Jr(c.b.A[U])){4==c.b.E[dc]?lo(c.b,dc,2):lo(c.b,dc,1);pr(c.b,Z,c.b.q[Z]+1);pr(c.b,U,c.b.q[U]-1);break}var qd,xd,ma,Xb,sc,ta,L,Aa,kd,ad,ne,bd,Fa,lb,eb,Jb;jo(c.b,1);c.a=C(ko,\nan,-1,c.b.d,2);for(ma=0;ma<c.b.d;++ma)64==c.b.E[ma]&&(lo(c.b,ma,1),c.a[ma]=!0);Jb=new mo(c.b,3);Aa=C(ko,an,-1,Jb.i.c,2);for(Fa=0;Fa<Jb.i.c;++Fa){lb=uo(Jb.i,Fa);Aa[Fa]=!0;for(L=0;L<lb.length;++L)if(!mr(c.b,lb[L])){Aa[Fa]=!1;break}if(Aa[Fa]){eb=uo(Jb.j,Fa);for(L=0;L<eb.length;++L)c.a[eb[L]]=!0}}for(ma=0;ma<c.b.d;++ma)if(!c.a[ma]&&0!=Jb.b[ma]&&mr(c.b,D(c.b,0,ma))&&mr(c.b,D(c.b,1,ma)))a:{var hc=c,Uc=ma,Bc=void 0,J=void 0,Kb=void 0,yb=void 0,Mc=void 0,pb=void 0,Lb=void 0,qb=void 0,ld=void 0,yd=void 0,\nrd=void 0,qa=void 0,ec=void 0,qb=C(B,w,-1,hc.b.c,1),pb=C(B,w,-1,hc.b.c,1),Lb=C(B,w,-1,hc.b.c,1),ld=C(B,w,-1,hc.b.c,1),Bc=D(hc.b,0,Uc),J=D(hc.b,1,Uc);pb[0]=Bc;pb[1]=J;Lb[0]=-1;Lb[1]=Uc;qb[Bc]=1;qb[J]=2;ld[Bc]=-1;ld[J]=Bc;for(yd=Mc=1;Mc<=yd&&15>qb[pb[Mc]];){ec=pb[Mc];for(rd=0;rd<hc.b.f[ec];++rd)if(Kb=oo(hc.b,ec,rd),Kb!=ld[ec]){yb=no(hc.b,ec,rd);if(Kb==Bc){Lb[0]=yb;for(qa=0;qa<=yd;++qa)hc.a[Lb[rd]]=!0;break a}mr(hc.b,Kb)&&0==qb[Kb]&&(++yd,pb[yd]=Kb,Lb[yd]=yb,qb[Kb]=qb[ec]+1,ld[Kb]=ec)}++Mc}}jo(c.b,3);\nfor(Fa=0;Fa<Jb.i.c;++Fa)if(Aa[Fa]){lb=uo(Jb.i,Fa);for(L=0;L<lb.length;++L){var hd;var ub=c,fb=lb[L],Ab=void 0;16==ub.b.A[fb]&&0>=ub.b.q[fb]||6==ub.b.A[fb]&&0!=ub.b.q[fb]||!mr(ub.b,fb)?hd=!1:(Ab=null==aq(ub.b,fb)?0:(null==ub.b.r?null:ub.b.r[fb])[0],hd=1>kr(ub.b,fb)-Tp(ub.b,fb)-Ab||5!=ub.b.A[fb]&&6!=ub.b.A[fb]&&7!=ub.b.A[fb]&&8!=ub.b.A[fb]&&15!=ub.b.A[fb]&&16!=ub.b.A[fb]&&33!=ub.b.A[fb]&&34!=ub.b.A[fb]?!1:!0);if(!hd){vr(c.b,lb[L],!1);for(ad=0;ad<c.b.f[lb[L]];++ad)c.a[no(c.b,lb[L],ad)]=!1}}}f8(c);for(Fa=\n0;Fa<Jb.i.c;++Fa)if(Aa[Fa]&&6==uo(Jb.j,Fa).length){eb=uo(Jb.j,Fa);kd=!0;for(Xb=0,sc=eb.length;Xb<sc;++Xb)if(ma=eb[Xb],!c.a[ma]){kd=!1;break}kd&&(e8(c,eb[0]),e8(c,eb[2]),e8(c,eb[4]),f8(c))}for(bd=5;4<=bd;--bd){do{ne=!1;for(ma=0;ma<c.b.d;++ma)if(c.a[ma]){for(L=qd=0;2>L;++L){ta=D(c.b,L,ma);for(ad=0;ad<c.b.f[ta];++ad)c.a[no(c.b,ta,ad)]&&++qd}if(qd==bd){e8(c,ma);f8(c);ne=!0;break}}}while(ne)}for(ma=0;ma<c.b.d;++ma)if(c.a[ma])throw new lp($7);for(xd=0;xd<c.b.c;++xd)if(mr(c.b,xd))throw new lp($7);c.b.r=\nnull;c.b.M=!1;var vb,tc,lc,cb,sd,Hd,Hc,zd,Cc,bb,Ic;jo(c.b,3);Cc=!1;bb=C(B,w,-1,2,1);Ic=C(B,w,-1,2,1);zd=C(B,w,-1,2,1);for(tc=0;tc<c.b.d;++tc)if(!Xo(c.b,tc)&&2==c.b.E[tc]){for(cb=0;2>cb;++cb){bb[cb]=-1;zd[cb]=-1;vb=D(c.b,cb,tc);for(Hc=0;Hc<c.b.f[vb];++Hc)lc=no(c.b,vb,Hc),lc!=tc&&(17==c.b.E[lc]||9==c.b.E[lc]?(bb[cb]=oo(c.b,vb,Hc),Ic[cb]=lc):zd[cb]=oo(c.b,vb,Hc));if(-1==bb[cb])break}if(-1!=bb[0]&&-1!=bb[1]){Hd=c.b.E[Ic[0]]!=c.b.E[Ic[1]];sd=!1;for(cb=0;2>cb;++cb)-1!=zd[cb]&&zd[cb]<bb[cb]&&(sd=!sd);Dr(c.b,\ntc,Hd^sd?2:1,!1);Cc=!0}}for(tc=0;tc<c.b.d;++tc)(17==c.b.E[tc]||9==c.b.E[tc])&&lo(c.b,tc,1);Cc&&(c.b.N|=4);Zs(new k8,c.b);if(Ib){for(pa=n8((Ac=new dX(Ib),new o8(Ib,Ac)));xW(pa.a.a);)ba=(pa.a.b=tq(pa.a.a)).Aj(),xr(c.b,ba.a,zaa(ba,gc),!1);c.b.N|=4}Rr(c.b);j8(c.b);V&&Fr(c.b,!0);return(new $r(b)).a.a.a}function m8(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function n8(a){a=new gX(a.b.a);return new p8(a)}function o8(a,b){this.a=a;this.b=b}y(684,672,{},o8);\n_.xj=function(a){a:{var b,c;for(c=new gX((new dX(this.a)).a);xW(c.a);)if(b=c.b=tq(c.a),b=b.Aj(),null==a?null==b:Jw(a,b)){a=!0;break a}a=!1}return a};_.Ff=function(){return n8(this)};_.gh=function(){return this.b.a.c};_.a=null;_.b=null;function p8(a){this.a=a}y(685,1,{},p8);_.af=function(){return xW(this.a.a)};_.bf=function(){return(this.a.b=tq(this.a.a)).Aj()};_.cf=function(){fX(this.a)};_.a=null;function q8(){LW();this.a=6122;this.b=12230397}y(701,1,{},q8);y(754,644,Bn);\n_.me=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(AR(),BR)&&this.b.i==(CR(),DR))try{var f=this.b.b,g,h,j;j=null;h=new Es;ks(new Bs,h,new AM(new EM(f)))&&(g=new $r(h),j=g.a.a.a);b=j;if(null==b)throw new lp("V3000 read failed.");a=bl;this.a.Mc.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=Zo(l),E(l,103))c=l,d=c.ke();else throw l;}else if(this.b.a==ZX)try{var n=this.b.b,q,r,u,x,v,t,F;b=-1!=n.indexOf(ee)?(q=$V(n,ee),r=3<=q.length&&0<q[2].length,u=2<=q.length&&0<q[1].length,x=l8(q[0]),\nv=r?l8(q[2]):l8(m),t=u?l8(q[1]):l8(m),F=m,F+=Bb,F+=tS(1,3)+tS(1,3),u&&(F+=tS(1,3)),F+=ca,F+=tb+x,F+=tb+v,u&&(F+=tb+t),F):l8(n);this.b.f==(xR(),GR)?a="readSMIRKS":this.b.f==WX&&(a="readSMILES");this.a.Mc.a="SMILES conversion provided by OpenChemLib"}catch(G){if(G=Zo(G),E(G,103))c=G,d="SMILES parsing error:"+c.ke();else throw G;}else if(d="Invalid or unsupported input",this.a.cd&&!this.b.d)try{var s=new d8,P=ps(this.b.b),ga;if(null==P||0==P.length)ga=null;else{var X=bW(P),ba,pa,Ha,Ib,ob;if(null==X)ga=\nnull;else{b8(s,X,0);ba=$(s,4);Ib=$(s,4);8<ba&&(ba=Ib);pa=$(s,ba);Ha=$(s,Ib);ob=new ss(pa,Ha);var T=null,Sa,Pb,V,Ca,ka,la,jb,Q,$c,Ia,nc,Ac,Ma,ab,Na,ib,La,fa,kb,Ea,W,gc,Z,U,dc,Qb,qd,xd,ma,Xb,sc,ta,L,Aa,kd,ad,ne,bd,Fa,lb,eb,Jb,hc,Uc,Bc,J,Kb,yb,Mc,pb,Lb,qb,ld,yd,rd,qa,ec,hd,ub,fb,Ab,vb,tc,lc,cb,sd,Hd,Hc,zd,Cc,bb,Ic;sd=8;s.f=ob;er(s.f);if(!(null==X||0==X.length))if(null!=T&&0==T.length&&(T=null),b8(s,X,0),V=$(s,4),ib=$(s,4),8<V&&(sd=V,V=ib),0==V)Fr(s.f,1==$(s,1));else{Ca=$(s,V);ka=$(s,ib);rd=$(s,V);ub=\n$(s,V);hd=$(s,V);dc=$(s,V);for(Q=0;Q<Ca;++Q)$q(s.f,6);for(J=0;J<rd;++J)cr(s.f,$(s,V),7);for(J=0;J<ub;++J)cr(s.f,$(s,V),8);for(J=0;J<hd;++J)cr(s.f,$(s,V),$(s,8));for(J=0;J<dc;++J)pr(s.f,$(s,V),$(s,4)-8);Qb=1+ka-Ca;L=$(s,4);Na=0;zr(s.f,0,0);Ar(s.f,0,0);Br(s.f,0,0);Aa=null!=T&&39<=T[0];Ic=Cc=Hc=cb=0;Xb=ma=!1;Aa&&(T.length>2*Ca-2&&39==T[2*Ca-2]||T.length>3*Ca-3&&39==T[3*Ca-3]?(Xb=!0,Kb=(ma=T.length==3*Ca-3+9)?3*Ca-3:2*Ca-2,ab=86*(T[Kb+1]-40)+T[Kb+2]-40,cb=Math.pow(10,ab/2E3-1),Kb+=2,Hd=86*(T[Kb+1]-40)+\nT[Kb+2]-40,Hc=Math.pow(10,Hd/1500-1),Kb+=2,zd=86*(T[Kb+1]-40)+T[Kb+2]-40,Cc=Math.pow(10,zd/1500-1),ma&&(Kb+=2,bb=86*(T[Kb+1]-40)+T[Kb+2]-40,Ic=Math.pow(10,bb/1500-1))):ma=T.length==3*Ca-3);s.b&&ma&&(T=null,Aa=!1);for(J=1;J<Ca;++J)kd=$(s,L),0==kd?(Aa&&(zr(s.f,J,s.f.G[0].a+8*(T[2*J-2]-83)),Ar(s.f,J,s.f.G[0].b+8*(T[2*J-1]-83)),ma&&Br(s.f,J,s.f.G[0].c+8*(T[2*Ca-3+J]-83))),++Qb):(Na+=kd-1,Aa&&(zr(s.f,J,Go(s.f,Na)+T[2*J-2]-83),Ar(s.f,J,Ho(s.f,Na)+T[2*J-1]-83),ma&&Br(s.f,J,Io(s.f,Na)+(T[2*Ca-3+J]-83))),\ndr(s.f,Na,J,1));for(J=0;J<Qb;++J)dr(s.f,$(s,V),$(s,V),1);Mc=C(ko,an,-1,ka,2);for(fa=0;fa<ka;++fa)switch(W=$(s,2),W){case 0:a8(s.f,D(s.f,0,fa))||a8(s.f,D(s.f,1,fa))?lo(s.f,fa,32):Mc[fa]=!0;break;case 2:lo(s.f,fa,2);break;case 3:lo(s.f,fa,4)}Pb=$(s,V);for(J=0;J<Pb;++J)if(Q=$(s,V),8==sd)fb=$(s,2),3==fb?(rr(s.f,Q,1,0),xr(s.f,Q,1,!1)):xr(s.f,Q,fb,!1);else switch(fb=$(s,3),fb){case 4:xr(s.f,Q,1,!1);rr(s.f,Q,1,$(s,3));break;case 5:xr(s.f,Q,2,!1);rr(s.f,Q,1,$(s,3));break;case 6:xr(s.f,Q,1,!1);rr(s.f,Q,2,\n$(s,3));break;case 7:xr(s.f,Q,2,!1);rr(s.f,Q,2,$(s,3));break;default:xr(s.f,Q,fb,!1)}8==sd&&0==$(s,1)&&(s.f.I=!0);Sa=$(s,ib);for(J=0;J<Sa;++J)if(fa=$(s,ib),1==s.f.E[fa])switch(fb=$(s,3),fb){case 4:Dr(s.f,fa,1,!1);Cr(s.f,fa,1,$(s,3));break;case 5:Dr(s.f,fa,2,!1);Cr(s.f,fa,1,$(s,3));break;case 6:Dr(s.f,fa,1,!1);Cr(s.f,fa,2,$(s,3));break;case 7:Dr(s.f,fa,2,!1);Cr(s.f,fa,2,$(s,3));break;default:Dr(s.f,fa,fb,!1)}else Dr(s.f,fa,$(s,2),!1);Fr(s.f,1==$(s,1));jb=null;for(ec=0;1==$(s,1);)switch(ta=ec+$(s,4),\nta){case 0:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),yr(s.f,Q,2048);break;case 1:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),ld=$(s,8),wr(s.f,Q,ld);break;case 2:qa=$(s,ib);for(J=0;J<qa;++J)fa=$(s,ib),lo(s.f,fa,64);break;case 3:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),yr(s.f,Q,4096);break;case 4:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),lc=$(s,4)<<3,yr(s.f,Q,lc);break;case 5:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),la=$(s,2)<<1,yr(s.f,Q,la);break;case 6:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),yr(s.f,Q,1);break;case 7:qa=$(s,V);for(J=\n0;J<qa;++J)Q=$(s,V),Uc=$(s,4)<<7,yr(s.f,Q,Uc);break;case 8:qa=$(s,V);for(J=0;J<qa;++J){Q=$(s,V);nc=$(s,4);$c=C(B,w,-1,nc,1);for(pb=0;pb<nc;++pb)Ia=$(s,8),$c[pb]=Ia;var md=s.f,oe=Q,Zb=$c;null==md.t&&(md.t=C(No,sn,93,md.J,0));null!=Zb&&vp(Zb);md.t[oe]=Zb;md.N=0;md.H=!0}break;case 9:qa=$(s,ib);for(J=0;J<qa;++J)fa=$(s,ib),lc=$(s,2)<<4,Er(s.f,fa,lc);break;case 10:qa=$(s,ib);for(J=0;J<qa;++J)fa=$(s,ib),gc=$(s,4),Er(s.f,fa,gc);break;case 11:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),yr(s.f,Q,8192);break;case 12:qa=\n$(s,ib);for(J=0;J<qa;++J)fa=$(s,ib),Z=$(s,8)<<6,Er(s.f,fa,Z);break;case 13:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),Ab=$(s,3)<<14,yr(s.f,Q,Ab);break;case 14:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),yd=$(s,5)<<17,yr(s.f,Q,yd);break;case 15:ec=16;break;case 16:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),tc=$(s,3)<<22,yr(s.f,Q,tc);break;case 17:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),or(s.f,Q,$(s,4));break;case 18:qa=$(s,V);qb=$(s,4);for(J=0;J<qa;++J){Q=$(s,V);sc=$(s,qb);Lb=C(Mp,yn,-1,sc,1);for(pb=0;pb<sc;++pb)Lb[pb]=~~($(s,\n7)<<24)>>24;var ic=s.f,Td=Q,fc=fr(Lb,0,Lb.length),Od=void 0;if(null!=fc)if(0==fc.length)fc=null;else if(Od=Hr(fc),0!=Od&&qs(fc,Uq[Od])||qs(fc,fe))cr(ic,Td,Od),fc=null;null==fc?null!=ic.r&&(ic.r[Td]=null):(null==ic.r&&(ic.r=C(Yq,o,3,ic.J,0)),ic.r[Td]=bW(fc))}break;case 19:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),U=$(s,3)<<25,yr(s.f,Q,U);break;case 20:qa=$(s,ib);for(J=0;J<qa;++J)fa=$(s,ib),tc=$(s,3)<<14,Er(s.f,fa,tc);break;case 21:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),tr(s.f,Q,$(s,2)<<4);break;case 22:qa=\n$(s,V);for(J=0;J<qa;++J)Q=$(s,V),yr(s.f,Q,268435456);break;case 23:qa=$(s,ib);for(J=0;J<qa;++J)fa=$(s,ib),Er(s.f,fa,131072);break;case 24:qa=$(s,ib);for(J=0;J<qa;++J)fa=$(s,ib),la=$(s,2)<<18,Er(s.f,fa,la);break;case 25:for(J=0;J<Ca;++J)if(1==$(s,1)){var Vc=s.f;Vc.s[J]|=512}break;case 26:qa=$(s,ib);jb=C(B,w,-1,qa,1);for(J=0;J<qa;++J)jb[J]=$(s,ib);break;case 27:qa=$(s,V);for(J=0;J<qa;++J)Q=$(s,V),yr(s.f,Q,536870912)}io(new vo(s.f),Mc);if(null!=jb)for(kb=0,Ea=jb.length;kb<Ea;++kb)fa=jb[kb],lo(s.f,fa,\n2==s.f.E[fa]?4:2);qd=0;if(null==T&&X.length>s.d+1&&(32==X[s.d+1]||9==X[s.d+1]))T=X,qd=s.d+2;if(null!=T)try{if(33==T[qd]||35==T[qd]){b8(s,T,qd+1);ma=1==$(s,1);Xb=1==$(s,1);vb=2*$(s,4);La=1<<vb;fa=0;for(Q=1;Q<Ca;++Q)fa<ka&&D(s.f,1,fa)==Q?(Jb=D(s.f,0,fa++),eb=1):(Jb=0,eb=8),zr(s.f,Q,Go(s.f,Jb)+eb*($(s,vb)-~~(La/2))),Ar(s.f,Q,Ho(s.f,Jb)+eb*($(s,vb)-~~(La/2))),ma&&Br(s.f,Q,Io(s.f,Jb)+eb*($(s,vb)-~~(La/2)));Ma=ma?1.5:(hp(),24);Ac=gr(s.f,Ca,ka,Ma);if(35==T[qd]){Bc=0;hc=C(B,w,-1,Ca,1);for(Q=0;Q<Ca;++Q)Bc+=\nhc[Q]=up(s.f,Q);for(Q=0;Q<Ca;++Q)for(J=0;J<hc[Q];++J)Uc=$q(s.f,1),dr(s.f,Q,Uc,1),zr(s.f,Uc,Go(s.f,Q)+($(s,vb)-~~(La/2))),Ar(s.f,Uc,Ho(s.f,Q)+($(s,vb)-~~(La/2))),ma&&Br(s.f,Uc,Io(s.f,Q)+($(s,vb)-~~(La/2)));Ca+=Bc}if(Xb){var Tf=$(s,vb),Nc=Math.log(2E3)*Math.LOG10E*Tf/(La-1)-1;cb=Math.pow(10,Nc);Hc=cb*c8($(s,vb),La);Cc=cb*c8($(s,vb),La);ma&&(Ic=cb*c8($(s,vb),La));eb=cb/Ac;for(Q=0;Q<Ca;++Q)zr(s.f,Q,Hc+eb*Go(s.f,Q)),Ar(s.f,Q,Cc+eb*Ho(s.f,Q)),ma&&Br(s.f,Q,Ic+eb*Io(s.f,Q))}else{eb=1.5/Ac;for(Q=0;Q<Ca;++Q)zr(s.f,\nQ,eb*Go(s.f,Q)),Ar(s.f,Q,eb*Ho(s.f,Q)),ma&&Br(s.f,Q,eb*Io(s.f,Q))}}else if(ma&&!Xb&&0==cb&&(cb=1.5),0!=cb&&0!=s.f.p){for(fa=Ac=0;fa<s.f.p;++fa)ad=Go(s.f,D(s.f,0,fa))-Go(s.f,D(s.f,1,fa)),ne=Ho(s.f,D(s.f,0,fa))-Ho(s.f,D(s.f,1,fa)),bd=ma?Io(s.f,D(s.f,0,fa))-Io(s.f,D(s.f,1,fa)):0,Ac+=Math.sqrt(ad*ad+ne*ne+bd*bd);Ac/=s.f.p;lb=cb/Ac;for(Q=0;Q<s.f.o;++Q)zr(s.f,Q,Go(s.f,Q)*lb+Hc),Ar(s.f,Q,Ho(s.f,Q)*lb+Cc),ma&&Br(s.f,Q,Io(s.f,Q)*lb+Ic)}}catch(uc){if(uc=Zo(uc),E(uc,103))Fa=uc,Fa.ke(),T=null,ma=!1;else throw uc;\n}if((xd=null!=T&&!ma)||s.b){jo(s.f,3);for(fa=0;fa<s.f.d;++fa)if(2==ro(s.f,fa)&&!Xo(s.f,fa)&&0==(s.f.C[fa]&3)){var rb=s.f;rb.C[fa]|=16777216}}!xd&&s.b&&(s.f.N|=4,yb=new k8,yb.i=new q8,Zs(yb,s.f),xd=!0);xd?(Rr(s.f),j8(s.f)):ma||(s.f.N|=4)}ga=ob}}b=(new $r(ga)).a.a.a;a="readOCLCode";d=null}catch(Ad){if(Ad=Zo(Ad),!E(Ad,103))throw Ad;}e=!1;if(null!=b&&null==d)try{(e=ER(this.a,b,!1))&&this.c&&rP(this.a,a,0,0,0,!0)}catch(Ee){if(Ee=Zo(Ee),E(Ee,103))d="Invalid converted molfile";else throw Ee;}this.a.jc=e;\nthis.e?e?MR(this.e):NR(this.e,new lp(d)):null!=d&&B4(this.a,d);this.d&&hK(this.a)};Y(684);Y(685);Y(24);Y(29);Y(30);M(b1)(1);\n//# sourceURL=1.js\n')