var arr=[],node,space=function(a,b){return Array(a+1).join("  ")+(b?"  ":"› ")},PASS="PASS",FAIL="FAIL",SKIP="SKIP",SUITE="SUITE",TEST="TEST",STEP="STEP",OPERATION="OPERATION",ASSERTION_ERROR="ASSERTIONERROR",REASON="REASON",INVALID_AGENT="INVALID_AGENT",EXCEPTION="EXCEPTION",nodePrettyNames=["Test Suite","Test","Step","Operation"],MAX_DEPTH=2,resultsCounters={},currAgent,numAgents,chainArgs,colors={};colors[PASS]="[32;1m",colors[FAIL]="[31;1m",colors[SKIP]="[30;1m",colors.white="[37;1m",colors["default"]="[0m";var getColor=function(a){return chainArgs.disableColor?"":colors[a]},PassFailSkip=function(){this[PASS]=0,this[FAIL]=0,this[SKIP]=0,this.total=0,this.add=function(a){this[PASS]+=a[PASS],this[FAIL]+=a[FAIL],this[SKIP]+=a[SKIP],this.total+=a.total}},formatTime=function(a){var b,c=[],d=1,e=1e3*d,f=60*e,g=60*f,h={h:g,min:f,sec:e};for(var i in h)b="sec"===i?a/h[i]:Math.floor(a/h[i]),a-=b*h[i],b&&c.push(b+i);return c.join(" ")||"< 1sec"},formatFailDetail=function(a){var b=[];switch(a.type){case REASON:b.push("Error:",a.value);break;case INVALID_AGENT:b.push("Invalid agent:",a.value);break;case EXCEPTION:b.push("Exception:",a.value.name,a.value.message);break;case ASSERTION_ERROR:b.push("Assertion failed:",a.value.message)}return b.join(" ")},resultsRecurse=function(a,b){a.forEach(function(a){if(!(b>MAX_DEPTH&&a.status!==FAIL)){if(a.type===OPERATION&&a.status===FAIL)return arr.push(space(b+1)+getColor(a.status)+a.name+" - "+a.status+getColor("default")),arr.push(space(b+1,!0)+getColor(a.status)+formatFailDetail(a.details)+getColor("default")),void 0;resultsCounters[currAgent]||(resultsCounters[currAgent]={}),resultsCounters[currAgent][a.type]||(resultsCounters[currAgent][a.type]=new PassFailSkip),resultsCounters[currAgent][a.type][a.status]++,resultsCounters[currAgent][a.type].total++,arr.push(space(b+1)+nodePrettyNames[b]+" "+getColor(a.status)+a.name+" - "+a.status+getColor("default")),a.results&&resultsRecurse(a.results,b+1)}})},gatherSingleResult=function(a){arr.push(getColor("white")),"web"===a.agent.platformInfo.platformKey?(arr.push(a.agent.platformInfo.name),arr.push(a.agent.platformInfo.platform),arr.push(a.agent.platformInfo.browser.version)):(arr.push(a.agent.platformInfo.name),arr.push(a.agent.platformInfo.platform),arr.push(a.agent.platformInfo.systemVersion)),arr.push(getColor("default")),a.results&&(currAgent=a.agent.id,resultsRecurse(a.results,0)),"undefined"==typeof resultsCounters[currAgent][TEST]&&(resultsCounters[currAgent][TEST]=new PassFailSkip);var b=resultsCounters[currAgent][TEST][FAIL],c=resultsCounters[currAgent][TEST].total,d=a.endTime-a.startTime;resultsCounters.totals[TEST].add(resultsCounters[currAgent][TEST]),resultsCounters.totals[SUITE].add(resultsCounters[currAgent][SUITE]),arr.push(""),arr.push("  "+c+(1===c?" Test":" Tests")+(b>0?getColor(FAIL):"")+" ("+b+" Failed)"+getColor("default")),arr.push("  "+formatTime(d)),arr.push("")},gatherOverallResult=function(a){arr.push(getColor("white")+"OVERALL"+getColor("default")),arr.push(resultsCounters.totals[SUITE].total/numAgents+(resultsCounters.totals[SUITE].total/numAgents===1?" Suite":" Suites")+" run on "+numAgents+(1===numAgents?" Agent":" Agents")),arr.push(resultsCounters.totals[TEST].total+" Tests"+(resultsCounters.totals[TEST][FAIL]>0?getColor(FAIL):"")+" ("+resultsCounters.totals[TEST][FAIL]+" Failed)"+getColor("default")),a.length&&(arr.push(""),arr.push(getColor(FAIL)+a.length+(1===a.length?" Agent ":" Agents ")+"stopped responding during execution"+getColor("default")),a.forEach(function(a){arr.push(space(1)+a)})),arr.push("")},resultReporter={report:function(a,b,c){return a.quiet?void 0:(chainArgs=a,numAgents=c.length,resultsCounters.totals={},resultsCounters.totals[SUITE]=new PassFailSkip,resultsCounters.totals[TEST]=new PassFailSkip,c.forEach(gatherSingleResult),gatherOverallResult(b),console.log(arr.join("\n")),0===resultsCounters.totals[TEST][FAIL])}};module.exports=resultReporter;