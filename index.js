var calculatee= false;
		var num = ['1','2','3','4','5','6','7','8','9','0'];
		var oper = ['+','-','*','/','%']
		function dis(val){
			var vali = document.getElementById("display-screen").value.slice(-1);
			if(calculatee == true){
				if(num.includes(val)){
				document.getElementById("display-screen").value = "";
				calculatee = false;
			}else{
				calculatee = false;
			}}
			if(document.getElementById("display-screen").value == "Invalid" || document.getElementById("display-screen").value == "Infinity"){
				document.getElementById("display-screen").value = "";
			}
			if(oper.includes(vali)){
				if(oper.includes(val)){
				deletev();			}}
			document.getElementById("display-screen").value += val;
		}
		function calculate(){
			try {
				let y = eval(document.getElementById("display-screen").value);
			document.getElementById("display-screen").value = y;
			calculatee = true;
} catch (e) {
    if (e instanceof SyntaxError) {
			document.getElementById("display-screen").value = "Invalid";
    }
}
			
		}
		function cleara(){
			document.getElementById("display-screen").value = "";
		}
		function deletev(){

			var val = document.getElementById("display-screen").value.slice(0, -1);
			document.getElementById("display-screen").value = val;
		}