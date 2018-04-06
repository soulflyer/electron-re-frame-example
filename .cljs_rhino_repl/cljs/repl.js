// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26637){
var map__26638 = p__26637;
var map__26638__$1 = ((((!((map__26638 == null)))?(((((map__26638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26638):map__26638);
var m = map__26638__$1;
var n = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26638__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26640_26662 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26641_26663 = null;
var count__26642_26664 = (0);
var i__26643_26665 = (0);
while(true){
if((i__26643_26665 < count__26642_26664)){
var f_26666 = cljs.core._nth.call(null,chunk__26641_26663,i__26643_26665);
cljs.core.println.call(null,"  ",f_26666);


var G__26667 = seq__26640_26662;
var G__26668 = chunk__26641_26663;
var G__26669 = count__26642_26664;
var G__26670 = (i__26643_26665 + (1));
seq__26640_26662 = G__26667;
chunk__26641_26663 = G__26668;
count__26642_26664 = G__26669;
i__26643_26665 = G__26670;
continue;
} else {
var temp__5457__auto___26671 = cljs.core.seq.call(null,seq__26640_26662);
if(temp__5457__auto___26671){
var seq__26640_26672__$1 = temp__5457__auto___26671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26640_26672__$1)){
var c__4319__auto___26673 = cljs.core.chunk_first.call(null,seq__26640_26672__$1);
var G__26674 = cljs.core.chunk_rest.call(null,seq__26640_26672__$1);
var G__26675 = c__4319__auto___26673;
var G__26676 = cljs.core.count.call(null,c__4319__auto___26673);
var G__26677 = (0);
seq__26640_26662 = G__26674;
chunk__26641_26663 = G__26675;
count__26642_26664 = G__26676;
i__26643_26665 = G__26677;
continue;
} else {
var f_26678 = cljs.core.first.call(null,seq__26640_26672__$1);
cljs.core.println.call(null,"  ",f_26678);


var G__26679 = cljs.core.next.call(null,seq__26640_26672__$1);
var G__26680 = null;
var G__26681 = (0);
var G__26682 = (0);
seq__26640_26662 = G__26679;
chunk__26641_26663 = G__26680;
count__26642_26664 = G__26681;
i__26643_26665 = G__26682;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26683 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26683);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26683)))?cljs.core.second.call(null,arglists_26683):arglists_26683));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26644_26684 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26645_26685 = null;
var count__26646_26686 = (0);
var i__26647_26687 = (0);
while(true){
if((i__26647_26687 < count__26646_26686)){
var vec__26648_26688 = cljs.core._nth.call(null,chunk__26645_26685,i__26647_26687);
var name_26689 = cljs.core.nth.call(null,vec__26648_26688,(0),null);
var map__26651_26690 = cljs.core.nth.call(null,vec__26648_26688,(1),null);
var map__26651_26691__$1 = ((((!((map__26651_26690 == null)))?(((((map__26651_26690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26651_26690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26651_26690):map__26651_26690);
var doc_26692 = cljs.core.get.call(null,map__26651_26691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26693 = cljs.core.get.call(null,map__26651_26691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26689);

cljs.core.println.call(null," ",arglists_26693);

if(cljs.core.truth_(doc_26692)){
cljs.core.println.call(null," ",doc_26692);
} else {
}


var G__26694 = seq__26644_26684;
var G__26695 = chunk__26645_26685;
var G__26696 = count__26646_26686;
var G__26697 = (i__26647_26687 + (1));
seq__26644_26684 = G__26694;
chunk__26645_26685 = G__26695;
count__26646_26686 = G__26696;
i__26647_26687 = G__26697;
continue;
} else {
var temp__5457__auto___26698 = cljs.core.seq.call(null,seq__26644_26684);
if(temp__5457__auto___26698){
var seq__26644_26699__$1 = temp__5457__auto___26698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26644_26699__$1)){
var c__4319__auto___26700 = cljs.core.chunk_first.call(null,seq__26644_26699__$1);
var G__26701 = cljs.core.chunk_rest.call(null,seq__26644_26699__$1);
var G__26702 = c__4319__auto___26700;
var G__26703 = cljs.core.count.call(null,c__4319__auto___26700);
var G__26704 = (0);
seq__26644_26684 = G__26701;
chunk__26645_26685 = G__26702;
count__26646_26686 = G__26703;
i__26647_26687 = G__26704;
continue;
} else {
var vec__26653_26705 = cljs.core.first.call(null,seq__26644_26699__$1);
var name_26706 = cljs.core.nth.call(null,vec__26653_26705,(0),null);
var map__26656_26707 = cljs.core.nth.call(null,vec__26653_26705,(1),null);
var map__26656_26708__$1 = ((((!((map__26656_26707 == null)))?(((((map__26656_26707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26656_26707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26656_26707):map__26656_26707);
var doc_26709 = cljs.core.get.call(null,map__26656_26708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26710 = cljs.core.get.call(null,map__26656_26708__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26706);

cljs.core.println.call(null," ",arglists_26710);

if(cljs.core.truth_(doc_26709)){
cljs.core.println.call(null," ",doc_26709);
} else {
}


var G__26711 = cljs.core.next.call(null,seq__26644_26699__$1);
var G__26712 = null;
var G__26713 = (0);
var G__26714 = (0);
seq__26644_26684 = G__26711;
chunk__26645_26685 = G__26712;
count__26646_26686 = G__26713;
i__26647_26687 = G__26714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__26658 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26659 = null;
var count__26660 = (0);
var i__26661 = (0);
while(true){
if((i__26661 < count__26660)){
var role = cljs.core._nth.call(null,chunk__26659,i__26661);
var temp__5457__auto___26715__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26715__$1)){
var spec_26716 = temp__5457__auto___26715__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26716));
} else {
}


var G__26717 = seq__26658;
var G__26718 = chunk__26659;
var G__26719 = count__26660;
var G__26720 = (i__26661 + (1));
seq__26658 = G__26717;
chunk__26659 = G__26718;
count__26660 = G__26719;
i__26661 = G__26720;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__26658);
if(temp__5457__auto____$1){
var seq__26658__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26658__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26658__$1);
var G__26721 = cljs.core.chunk_rest.call(null,seq__26658__$1);
var G__26722 = c__4319__auto__;
var G__26723 = cljs.core.count.call(null,c__4319__auto__);
var G__26724 = (0);
seq__26658 = G__26721;
chunk__26659 = G__26722;
count__26660 = G__26723;
i__26661 = G__26724;
continue;
} else {
var role = cljs.core.first.call(null,seq__26658__$1);
var temp__5457__auto___26725__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26725__$2)){
var spec_26726 = temp__5457__auto___26725__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26726));
} else {
}


var G__26727 = cljs.core.next.call(null,seq__26658__$1);
var G__26728 = null;
var G__26729 = (0);
var G__26730 = (0);
seq__26658 = G__26727;
chunk__26659 = G__26728;
count__26660 = G__26729;
i__26661 = G__26730;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
