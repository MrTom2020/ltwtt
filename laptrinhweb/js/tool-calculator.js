 function convert(field){
    var strk=field.value;
    str=clearDot(strk);
    var stmp="";
    if (str!=""){
        var l=str.trim().length-1;
        k=0;
        for (i=l;i>=0;i--){
          k++;
          stmp= str.trim().substr(i,1) + stmp.trim();
          if (str.trim().substr(i,1)==","){
             k=0;
          }
          if ((k==3)&&(i>0)){
              k=0;
            stmp= "," + stmp.trim();
          }
        }
     }
   field.value=stmp.trim();
  }
  
  function clearDot(st){
       var stmp="";
       if (st!=""){
          var l=st.trim().length;
          for (i=0;i<l;i++){
             if ((st.trim().substr(i,1)!=".")&&(st.trim().substr(i,1)!="-")&&(!isNaN(st.trim().substr(i,1))))
              stmp= stmp.trim()+st.trim().substr(i,1);
          }
       }
     return stmp.trim();
   }
function formatResult(val){
	val = val.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return val;
}
function isNumber(val) {
	var digits="1234567890";
	for (var i=0; i < val.length; i++) {
		if (digits.indexOf(val.charAt(i))==-1) { return false; }
	}
	return true;
}

function monthExprenses(){
	var total = 0;
	var homeUtilities = document.getElementById("homeUtilities").value;
	
	homeUtilities = homeUtilities.replace(/,/g, '');
	if(!isNumber(homeUtilities.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho nh\u00E0, sinh ho\u1EA1t ph\u00ED ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "homeUtilities");
		document.getElementById("homeUtilities").focus();
		return;
	}
	if(homeUtilities.trim().length > 0) {
		total = homeUtilities*1 + total*1;
	}
	
	var foodGroceries = document.getElementById("foodGroceries").value;
	foodGroceries = foodGroceries.replace(/,/g, '');
	if(!isNumber(foodGroceries.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho th\u1EF1c ph\u1EA9m, t\u1EA1p h\u00F3a ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "foodGroceries");
		document.getElementById("foodGroceries").focus();
		return;
	}
	if(foodGroceries.trim().length > 0) {
		total = foodGroceries*1 + total*1;
	}
	var shopping = document.getElementById("shopping").value;
	shopping = shopping.replace(/,/g, '');
	if(!isNumber(shopping.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho mua s\u1EAFm ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "shopping");
		document.getElementById("shopping").focus();
		return;
	}
	if(shopping.trim().length > 0) {
		total = shopping*1 + total*1;
	}
	var transport = document.getElementById("transport").value;
	transport = transport.replace(/,/g, '');
	if(!isNumber(transport.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho di chuy\u1EC3n ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "transport");
		document.getElementById("transport").focus();
		return;
	}
	if(transport.trim().length > 0) {
		total = transport*1 + total*1;
	}
	var entertaiment = document.getElementById("entertaiment").value;
	entertaiment = entertaiment.replace(/,/g, '');
	if(!isNumber(entertaiment.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho gi\u1EA3i tr\u00ED ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "entertaiment");
		document.getElementById("entertaiment").focus();
		return;
	}
	if(entertaiment.trim().length > 0) {
		total = entertaiment*1 + total*1;
	}
	var childrenExprenses = document.getElementById("childrenExprenses").value;
	childrenExprenses = childrenExprenses.replace(/,/g, '');
	if(!isNumber(childrenExprenses.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho con ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "childrenExprenses");
		document.getElementById("childrenExprenses").focus();
		return;
	}
	if(childrenExprenses.trim().length > 0) {
		total = childrenExprenses*1 + total*1;
	}
	var loans = document.getElementById("loans").value;
	loans = loans.replace(/,/g, '');
	if(!isNumber(loans.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho vay m\u01B0\u1EE3n ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "loans");
		document.getElementById("loans").focus();
		return;
	}
	if(loans.trim().length > 0) {
		total = loans*1 + total*1;
	}
	var securities = document.getElementById("securities").value;
	securities = securities.replace(/,/g, '');
	if(!isNumber(securities.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho b\u1EA3o v\u1EC7 ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "securities");
		document.getElementById("securities").focus();
		return;
	}
	if(securities.trim().length > 0) {
		total = securities*1 + total*1;
	}
	var health = document.getElementById("health").value;
	health = health.replace(/,/g, '');
	if(!isNumber(health.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho ch\u0103m s\u00F3c s\u1EE9c kh\u1ECFe ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "health");
		document.getElementById("health").focus();
		return;
	}
	if(health.trim().length > 0) {
		total = health*1 + total*1;
	}
	var other = document.getElementById("other").value;
	other = other.replace(/,/g, '');
	if(!isNumber(other.trim())){
		showMessage("S\u1ED1 ti\u1EC1n chi ti\u00EAu cho c\u00E1c tr\u01B0\u1EDDng h\u1EE3p kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "other");
		document.getElementById("other").focus();
		return;
	}
	if(other.trim().length > 0) {
		total = other*1 + total*1;
	}
	
	var balance = 0;
	var totalMonthIncome = document.getElementById("hiddenTotalMonthIncome").value;
	
	if(totalMonthIncome.trim().length > 0){
		balance = 1*(totalMonthIncome-total); 
	} else {
		balance = 0 - total;
	}
	document.getElementById("hiddenTotalMonthExpenses").value = total;
	$("#labTotalMonthExpenses").empty().append(formatResult(total) + " VND");
	$("#monthlyBalance").empty().append(formatResult(balance) + " VND");
}

function shortMonthIncome(){
	var totalMonthIncome = document.getElementById("totalMonthIncome").value;
	totalMonthIncome = totalMonthIncome.replace(/,/g, '');
	if(!isNumber(totalMonthIncome.trim())){
		showMessage("T\u1ED5ng s\u1ED1 ti\u1EC1n thu nh\u1EADp ph\u1EA3i l\u00E0 s\u1ED1 nguy\u00EAn v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "totalMonthIncome");
		//document.getElementById("other").focus();
		return;
	}
	var hiddenTotalMonthExpenses = document.getElementById("hiddenTotalMonthExpenses").value;
	var balance = 0;
	if(hiddenTotalMonthExpenses.trim().length > 0){
		balance = totalMonthIncome*1 - hiddenTotalMonthExpenses*1; 
	} else {
		balance = totalMonthIncome;
	}
	
	$("#labTotalMonthIncome").empty().append(formatResult(totalMonthIncome) + " VND");
	document.getElementById("hiddenTotalMonthIncome").value = balance;
	$("#monthlyBalance").empty().append(formatResult(balance) + " VND");
}

function showPie(myData) {
    $('#pieChart').highcharts({
        chart: {
            plotBackgroundColor: '#4ba9dd',
            backgroundColor:'#4ba9dd',
            borderWidth: 0,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Bi\u1EC3u \u0111\u1ED3',
            align: 'center',
            verticalAlign: 'middle',
            y: 0
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
						fontSize: '8px',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '50%']
            }
        },
		credits: {
			enabled: false
		},
		colors: ['#42ced0', '#009395', '#009395', '#0b56c6', '#0b56c6', 
   '#361db4', '#361db4', '#64199d', '#64199d'],
        series: [{
            type: 'pie',
            name: 'T\u1EF7 l\u1EC7',
            innerSize: '60%',
            data: myData 
        }]
    });
}

function monthIncom(){
	var typeSelect1 = document.getElementById("thunhap_canhan_select").value;
	var valueInput1 = document.getElementById("thunhap_canhan").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n thu nh\u1EADp c\u00E1 nh\u00E2n ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_canhan");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	
	var typeSelect2 = document.getElementById("thunhap_vo_chong_select").value;
	var valueInput2 = document.getElementById("thunhap_vo_chong").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n thu nh\u1EADp c\u1EE7a v\u1EE3/ch\u1ED3ng ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_vo_chong");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	
	var typeSelect3 = document.getElementById("thunhap_phucap_select").value;
	var valueInput3 = document.getElementById("thunhap_phucap").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n th\u01B0\u1EDFng/l\u00E0m ngo\u00E0i gi\u1EDD/ph\u1EE5 c\u1EA5p ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_phucap");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	
	var typeSelect4 = document.getElementById("thunhap_tienlai_select").value;
	var valueInput4 = document.getElementById("thunhap_tienlai").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n thu nh\u1EADp t\u1EEB ti\u1EC1n l\u00E3i, ho\u1EA1t \u0111\u1ED9ng \u0111\u1EA7u t\u01B0 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_tienlai");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	
	var typeSelect5 = document.getElementById("thunhap_luonghuu_select").value;
	var valueInput5 = document.getElementById("thunhap_luonghuu").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n l\u01B0\u01A1ng h\u01B0u ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_luonghuu");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	
	var typeSelect6 = document.getElementById("thunhap_trocap_select").value;
	var valueInput6 = document.getElementById("thunhap_trocap").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n tr\u1EE3 c\u1EA5p t\u1EEB gia \u0111\u00ECnh ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_trocap");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	
	var typeSelect7 = document.getElementById("thunhap_phucloi_select").value;
	var valueInput7 = document.getElementById("thunhap_phucloi").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n h\u1ED7 tr\u1EE3 ph\u00FAc l\u1EE3i c\u1EE7a nh\u00E0 n\u01B0\u1EDBc ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_phucloi");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	
	var typeSelect8 = document.getElementById("thunhap_khac_select").value;
	var valueInput8 = document.getElementById("thunhap_khac").value;
	valueInput8 = valueInput8.replace(/,/g, '');
	if(!isNumber(valueInput8.trim())){
		showMessage("Ti\u1EC1n thu nh\u1EADp kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1 v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n.", "thunhap_khac");
		return;
	}
	var res8 = calculator(typeSelect8, valueInput8);
	
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1)+(res8*1);
	
	$("#thunhap_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labThunhapTotal").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenThunhapTotal").value=res;
	
	tinhTongChitieu();
	return res;
}

function financialCommitmentCalculator(){
	var typeSelect1 = document.getElementById("commitment_thuenha_select").value;
	var valueInput1 = document.getElementById("commitment_thuenha").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n thu\u00EA nh\u00E0/chi ph\u00ED tr\u1EA3 l\u00E3i vay mua nh\u00E0 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_thuenha");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("commitment_tralai_select").value;
	var valueInput2 = document.getElementById("commitment_tralai").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n tr\u1EA3 l\u00E3i vay mua xe h\u01A1i ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_tralai");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("commitment_thanhtoanno_select").value;
	var valueInput3 = document.getElementById("commitment_thanhtoanno").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n t\u00E1c kho\u1EA3n thanh to\u00E1n n\u1EE3 vay kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_thanhtoanno");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("commitment_tralaitindung_select").value;
	var valueInput4 = document.getElementById("commitment_tralaitindung").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n tr\u1EA3 l\u00E3i th\u1EBB t\u00EDn d\u1EE5ng ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_tralaitindung");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("commitment_quyhuu_select").value;
	var valueInput5 = document.getElementById("commitment_quyhuu").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n \u0111\u00F3ng g\u00F3p cho qu\u1EF9 h\u01B0u tr\u00ED ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_quyhuu");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("commitment_tietkiem_select").value;
	var valueInput6 = document.getElementById("commitment_tietkiem").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n ti\u1EBFt ki\u1EC7m ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_tietkiem");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	var typeSelect7 = document.getElementById("commitment_nuoicon_select").value;
	var valueInput7 = document.getElementById("commitment_nuoicon").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED nu\u00F4i con ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_nuoicon");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	
	var typeSelect8 = document.getElementById("commitment_taitro_select").value;
	var valueInput8 = document.getElementById("commitment_taitro").value;
	valueInput8 = valueInput8.replace(/,/g, '');
	if(!isNumber(valueInput8.trim())){
		showMessage("Ti\u1EC1n t\u00E0i tr\u1EE3/ t\u1EEB thi\u1EC7n ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_taitro");
		return;
	}
	var res8 = calculator(typeSelect8, valueInput8);
	
	var typeSelect9 = document.getElementById("commitment_tientieuvat_select").value;
	var valueInput9 = document.getElementById("commitment_tientieuvat").value;
	valueInput9 = valueInput9.replace(/,/g, '');
	if(!isNumber(valueInput9.trim())){
		showMessage("Ti\u1EC1n ti\u00EAu v\u1EB7t cho Con ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_tientieuvat");
		return;
	}
	var res9 = calculator(typeSelect9, valueInput9);
	
	var typeSelect10 = document.getElementById("commitment_chiphikhac_select").value;
	var valueInput10 = document.getElementById("commitment_chiphikhac").value;
	valueInput10 = valueInput10.replace(/,/g, '');
	if(!isNumber(valueInput10.trim())){
		showMessage("Ti\u1EC1n chi ti\u00EAu t\u00E0i ch\u00EDnh kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "commitment_chiphikhac");
		return;
	}
	var res10 = calculator(typeSelect10, valueInput10);
	
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1)+(res8*1)+(res9*1)+(res10*1);
	$("#commitment_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainCommitment").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainCommitment").value=res;
	tinhTongChitieu();
	return res;
}

function homeCalculator(){
	var typeSelect1 = document.getElementById("nha_thuedat_select").value;
	var valueInput1 = document.getElementById("nha_thuedat").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n thu\u1EBF nh\u00E0 \u0111\u1EA5t ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "nha_thuedat");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("nha_phiquanlytoanha_select").value;
	var valueInput2 = document.getElementById("nha_phiquanlytoanha").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n ph\u00ED qu\u1EA3n l\u00FD t\u00F2a nh\u00E0 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "nha_phiquanlytoanha");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("nha_baohiemvatdung_select").value;
	var valueInput3 = document.getElementById("nha_baohiemvatdung").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n b\u1EA3o hi\u1EC3m nh\u00E0 v\u00E0 v\u1EADt d\u1EE5ng ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "nha_baohiemvatdung");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("nha_chiphisuanha_select").value;
	var valueInput4 = document.getElementById("nha_chiphisuanha").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED s\u1EEDa ch\u1EEFa nh\u00E0 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "nha_chiphisuanha");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("nha_vatdunggiadinh_select").value;
	var valueInput5 = document.getElementById("nha_vatdunggiadinh").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n mua v\u1EADt d\u1EE5ng gia \u0111\u00ECnh ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "nha_vatdunggiadinh");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("nha_chiphikhac_select").value;
	var valueInput6 = document.getElementById("nha_chiphikhac").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED nh\u00E0 kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "nha_chiphikhac");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1);
	
	$("#nha_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainHome").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainHome").value=res;
	
	tinhTongChitieu();
	return res;
}

function utilityCalculator(){
	var typeSelect1 = document.getElementById("shp_dien_select").value;
	var valueInput1 = document.getElementById("shp_dien").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n \u0111i\u1EC7n ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_dien");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("shp_gas_select").value;
	var valueInput2 = document.getElementById("shp_gas").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n gas ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_gas");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("shp_nuoc_select").value;
	var valueInput3 = document.getElementById("shp_nuoc").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n n\u01B0\u1EDBc ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_nuoc");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("shp_internet_select").value;
	var valueInput4 = document.getElementById("shp_internet").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n internet ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_internet");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("shp_truyenhinh_select").value;
	var valueInput5 = document.getElementById("shp_truyenhinh").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n truy\u1EC1n h\u00ECnh c\u00E1p ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_truyenhinh");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("shp_dienthoai_select").value;
	var valueInput6 = document.getElementById("shp_dienthoai").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n \u0111i\u1EC7n tho\u1EA1i nh\u00E0 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_dienthoai");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	var typeSelect7 = document.getElementById("shp_didong_select").value;
	var valueInput7 = document.getElementById("shp_didong").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n \u0111i\u1EC7n tho\u1EA1i di \u0111\u1ED9ng ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_didong");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	var typeSelect8 = document.getElementById("shp_khac_select").value;
	var valueInput8 = document.getElementById("shp_khac").value;
	valueInput8 = valueInput8.replace(/,/g, '');
	if(!isNumber(valueInput8.trim())){
		showMessage("Ti\u1EC1n sinh ho\u1EA1t kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "shp_khac");
		return;
	}
	var res8 = calculator(typeSelect8, valueInput8);
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1)+(res8*1);
	$("#shp_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainShp").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainShp").value=res;
	tinhTongChitieu();
	
	return res;
}

function educationCalculator(){
	var typeSelect1 = document.getElementById("giaoduc_hocphi_select").value;
	var valueInput1 = document.getElementById("giaoduc_hocphi").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n h\u1ECDc ph\u00ED ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaoduc_hocphi");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("giaoduc_daihoc_select").value;
	var valueInput2 = document.getElementById("giaoduc_daihoc").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n h\u1ECDc ph\u00ED \u0111\u1EA1i h\u1ECDc ho\u1EB7c sau t\u1ED1t nghi\u1EC7p ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaoduc_daihoc");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("giaoduc_mannon_select").value;
	var valueInput3 = document.getElementById("giaoduc_mannon").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED nu\u00F4i con nh\u1ECF/ m\u1EABu gi\u00E1o/ nh\u00E0 tr\u1EBB ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaoduc_mannon");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("giaoduc_dongphuc_select").value;
	var valueInput4 = document.getElementById("giaoduc_dongphuc").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n mua \u0110\u1ED3ng ph\u1EE5c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaoduc_dongphuc");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("giaoduc_thethao_select").value;
	var valueInput5 = document.getElementById("giaoduc_thethao").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n th\u1EC3 thao, \u00E2m nh\u1EA1c, gi\u1EA3i tr\u00ED, \u2026 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaoduc_thethao");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("giaoduc_thamquan_select").value;
	var valueInput6 = document.getElementById("giaoduc_thamquan").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n tham quan/du l\u1ECBch ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaoduc_thamquan");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	
	var typeSelect7 = document.getElementById("giaoduc_khac_select").value;
	var valueInput7 = document.getElementById("giaoduc_khac").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED gi\u00E1o d\u1EE5c kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaoduc_khac");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1);
	$("#giaoduc_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainEducation").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainEducation").value=res;
	tinhTongChitieu();
	return res;
}

function healthCalculator(){
	var typeSelect1 = document.getElementById("suckhoe_bhyt_select").value;
	var valueInput1 = document.getElementById("suckhoe_bhyt").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n b\u1EA3o hi\u1EC3m s\u1EE9c kh\u1ECFe c\u00E1 nh\u00E2n/BHYT ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_bhyt");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("suckhoe_bhnt_select").value;
	var valueInput2 = document.getElementById("suckhoe_bhnt").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n b\u1EA3o hi\u1EC3m nh\u00E2n th\u1ECD ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_bhnt");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("suckhoe_khamchuabenh_select").value;
	var valueInput3 = document.getElementById("suckhoe_khamchuabenh").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED kh\u00E1m ch\u1EEFa b\u1EC7nh ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_khamchuabenh");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("suckhoe_phinhakhoa_select").value;
	var valueInput4 = document.getElementById("suckhoe_phinhakhoa").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED kh\u00E1m ch\u1EEFa b\u1EC7nh ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_phinhakhoa");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("suckhoe_tienthuoc_select").value;
	var valueInput5 = document.getElementById("suckhoe_tienthuoc").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n ti\u1EC1n thu\u1ED1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_tienthuoc");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("suckhoe_chamsocmat_select").value;
	var valueInput6 = document.getElementById("suckhoe_chamsocmat").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED ch\u0103m s\u00F3c m\u1EAFt ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_chamsocmat");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	var typeSelect7 = document.getElementById("suckhoe_khamdinhky_select").value;
	var valueInput7 = document.getElementById("suckhoe_khamdinhky").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n kh\u00E1m b\u1EC7nh \u0111\u1ECBnh k\u1EF3 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_khamdinhky");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	var typeSelect8 = document.getElementById("suckhoe_chiphikhac_select").value;
	var valueInput8 = document.getElementById("suckhoe_chiphikhac").value;
	valueInput8 = valueInput8.replace(/,/g, '');
	if(!isNumber(valueInput8.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED s\u1EE9c kh\u1ECFe kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "suckhoe_chiphikhac");
		return;
	}
	var res8 = calculator(typeSelect8, valueInput8);
	
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1)+(res8*1);
	$("#suckhoe_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainHealth").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainHealth").value=res;
	tinhTongChitieu();
	return res;
}

function shoppingCalculator(){
	var typeSelect1 = document.getElementById("muasam_tiencho_select").value;
	var valueInput1 = document.getElementById("muasam_tiencho").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n \u0111i ch\u1EE3 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_tiencho");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("muasam_rauqua_select").value;
	var valueInput2 = document.getElementById("muasam_rauqua").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n mua rau qu\u1EA3 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_rauqua");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("muasam_chocon_select").value;
	var valueInput3 = document.getElementById("muasam_chocon").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n mua s\u1EAFm cho con ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_chocon");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("muasam_quanao_select").value;
	var valueInput4 = document.getElementById("muasam_quanao").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n mua qu\u1EA7n \u00E1o / gi\u1EA7y d\u00E9p ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_quanao");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("muasam_mypham_select").value;
	var valueInput5 = document.getElementById("muasam_mypham").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n mua m\u1EF9 ph\u1EA9m/ n\u01B0\u1EDBc hoa/ d\u1EA7u th\u01A1m ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_mypham");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("muasam_trangdiem_select").value;
	var valueInput6 = document.getElementById("muasam_trangdiem").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n l\u00E0m t\u00F3c/ trang \u0111i\u1EC3m ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_trangdiem");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	var typeSelect7 = document.getElementById("muasam_mungcuoi_select").value;
	var valueInput7 = document.getElementById("muasam_mungcuoi").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n mua qu\u00E0 t\u1EB7ng, m\u1EEBng c\u01B0\u1EDBi, ti\u1EC7c, \u2026 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_mungcuoi");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	var typeSelect8 = document.getElementById("muasam_khac_select").value;
	var valueInput8 = document.getElementById("muasam_khac").value;
	valueInput8 = valueInput8.replace(/,/g, '');
	if(!isNumber(valueInput8.trim())){
		showMessage("Ti\u1EC1n mua c\u00E1c lo\u1EA1i mua s\u1EAFm kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "muasam_khac");
		return;
	}
	var res8 = calculator(typeSelect8, valueInput8);
	
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1)+(res8*1);
	$("#muasam_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainShoping").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainShoping").value=res;
	tinhTongChitieu();
	return res;
}

function transportCalculator(){
	var typeSelect1 = document.getElementById("dichuyen_baohiemoto_select").value;
	var valueInput1 = document.getElementById("dichuyen_baohiemoto").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n mua b\u1EA3o hi\u1EC3m \u00D4 t\u00F4 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "dichuyen_baohiemoto");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("dichuyen_baotrioto_select").value;
	var valueInput2 = document.getElementById("dichuyen_baotrioto").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n b\u1EA3o tr\u00EC \u00D4 t\u00F4 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "dichuyen_baotrioto");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("dichuyen_thueoto_select").value;
	var valueInput3 = document.getElementById("dichuyen_thueoto").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n thu\u1EBF s\u1EED d\u1EE5ng xe m\u00E1y, \u00D4 t\u00F4 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "dichuyen_thueoto");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("dichuyen_xangdau_select").value;
	var valueInput4 = document.getElementById("dichuyen_xangdau").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n x\u0103ng, d\u1EA7u ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "dichuyen_xangdau");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("dichuyen_chiphicauduong_select").value;
	var valueInput5 = document.getElementById("dichuyen_chiphicauduong").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED c\u1EA7u \u0111\u01B0\u1EDDng/ \u0111\u1ED7 xe ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "dichuyen_chiphicauduong");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("dichuyen_phuongtien_select").value;
	var valueInput6 = document.getElementById("dichuyen_phuongtien").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n Xe l\u1EEDa/ Xe bu\u00FDt/ Ph\u00E0 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "dichuyen_phuongtien");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	var typeSelect7 = document.getElementById("dichuyen_khac_select").value;
	var valueInput7 = document.getElementById("dichuyen_khac").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED di chuy\u1EC3n kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "dichuyen_khac");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1);
	$("#dichuyen_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainTransport").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainTransport").value=res;
	tinhTongChitieu();
	return res;
}

function entertainmentCalculator(){
	var typeSelect1 = document.getElementById("giaitri_nghile_select").value;
	var valueInput1 = document.getElementById("giaitri_nghile").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED ngh\u1EC9 l\u1EC5 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_nghile");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("giaitri_bar_club_select").value;
	var valueInput2 = document.getElementById("giaitri_bar_club").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED bars/clubs ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_bar_club");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("giaitri_nhungnoikhac_select").value;
	var valueInput3 = document.getElementById("giaitri_nhungnoikhac").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED nh\u1EEFng n\u01A1i gi\u1EA3i tr\u00ED kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_nhungnoikhac");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("giaitri_thethao_select").value;
	var valueInput4 = document.getElementById("giaitri_thethao").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED Gym/th\u00E0nh vi\u00EAn clb th\u1EC3 thao ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_thethao");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("giaitri_thuocla_select").value;
	var valueInput5 = document.getElementById("giaitri_thuocla").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED thu\u1ED1c l\u00E1 ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_thuocla");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var typeSelect6 = document.getElementById("giaitri_xemphim_select").value;
	var valueInput6 = document.getElementById("giaitri_xemphim").value;
	valueInput6 = valueInput6.replace(/,/g, '');
	if(!isNumber(valueInput6.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED xem phim/nghe nh\u1EA1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_xemphim");
		return;
	}
	var res6 = calculator(typeSelect6, valueInput6);
	var typeSelect7 = document.getElementById("giaitri_sothich_select").value;
	var valueInput7 = document.getElementById("giaitri_sothich").value;
	valueInput7 = valueInput7.replace(/,/g, '');
	if(!isNumber(valueInput7.trim())){
		showMessage("Ti\u1EC1n chi phi cho c\u00E1c s\u1EDF th\u00EDch kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_sothich");
		return;
	}
	var res7 = calculator(typeSelect7, valueInput7);
	var typeSelect8 = document.getElementById("giaitri_baochi_select").value;
	var valueInput8 = document.getElementById("giaitri_baochi").value;
	valueInput8 = valueInput8.replace(/,/g, '');
	if(!isNumber(valueInput8.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED b\u00E1o ch\u00ED ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_baochi");
		return;
	}
	var res8 = calculator(typeSelect8, valueInput8);
	var typeSelect9 = document.getElementById("giaitri_tieccuoi_select").value;
	var valueInput9 = document.getElementById("giaitri_tieccuoi").value;
	valueInput9 = valueInput9.replace(/,/g, '');
	if(!isNumber(valueInput9.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED ti\u1EC7c c\u01B0\u1EDBi/l\u1EC5 h\u1ED9i ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_tieccuoi");
		return;
	}
	var res9 = calculator(typeSelect9, valueInput9);
	var typeSelect10 = document.getElementById("giaitri_khac_select").value;
	var valueInput10 = document.getElementById("giaitri_khac").value;
	valueInput10 = valueInput10.replace(/,/g, '');
	if(!isNumber(valueInput10.trim())){
		showMessage("Ti\u1EC1n Chi ph\u00ED gi\u1EA3i tr\u00ED kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "giaitri_khac");
		return;
	}
	var res10 = calculator(typeSelect10, valueInput10);
	
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1)+(res6*1)+(res7*1)+(res8*1)+(res9*1)+(res10*1);
	$("#giaitri_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainEntaiterment").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainEntaiterment").value=res;
	tinhTongChitieu();
	return res;
}

function eatingOutCalculator(){
	var typeSelect1 = document.getElementById("anngoai_nhahang_select").value;
	var valueInput1 = document.getElementById("anngoai_nhahang").value;
	valueInput1 = valueInput1.replace(/,/g, '');
	if(!isNumber(valueInput1.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED nh\u00E0 h\u00E0ng/qu\u00E1n \u0103n/qu\u00E1n c\u00E0 ph\u00EA ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "anngoai_nhahang");
		return;
	}
	var res1 = calculator(typeSelect1, valueInput1);
	var typeSelect2 = document.getElementById("anngoai_anvat_select").value;
	var valueInput2 = document.getElementById("anngoai_anvat").value;
	valueInput2 = valueInput2.replace(/,/g, '');
	if(!isNumber(valueInput2.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED \u0103n v\u1EB7t ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "anngoai_anvat");
		return;
	}
	var res2 = calculator(typeSelect2, valueInput2);
	var typeSelect3 = document.getElementById("anngoai_antrua_select").value;
	var valueInput3 = document.getElementById("anngoai_antrua").value;
	valueInput3 = valueInput3.replace(/,/g, '');
	if(!isNumber(valueInput3.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED \u0103n tr\u01B0a ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "anngoai_antrua");
		return;
	}
	var res3 = calculator(typeSelect3, valueInput3);
	var typeSelect4 = document.getElementById("anngoai_caphe_select").value;
	var valueInput4 = document.getElementById("anngoai_caphe").value;
	valueInput4 = valueInput4.replace(/,/g, '');
	if(!isNumber(valueInput4.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED c\u00E0 ph\u00EA ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "anngoai_caphe");
		return;
	}
	var res4 = calculator(typeSelect4, valueInput4);
	var typeSelect5 = document.getElementById("anngoai_khac_select").value;
	var valueInput5 = document.getElementById("anngoai_khac").value;
	valueInput5 = valueInput5.replace(/,/g, '');
	if(!isNumber(valueInput5.trim())){
		showMessage("Ti\u1EC1n chi ph\u00ED \u0103n ngo\u00E0i kh\u00E1c ph\u1EA3i l\u00E0 s\u1ED1, v\u00E0 ph\u1EA3i vi\u1EBFt li\u1EC1n", "anngoai_khac");
		return;
	}
	var res5 = calculator(typeSelect5, valueInput5);
	var res = (res1*1)+(res2*1)+(res3*1)+(res4*1)+(res5*1);
	$("#anngoai_total").empty().append(formatResult(res) + " <span>VND</span>");
	$("#labMainEatingOut").empty().append(formatResult(res) + " VND");
	document.getElementById("hiddenMainEatingOut").value=res;
	tinhTongChitieu();
	
	return res;
	
}
function tinhTongChitieu(){
	var commitment = document.getElementById("hiddenMainCommitment").value;
	var totalChitieu=0;
	var myArray = new Array();
	if(commitment.trim().length > 0){
		totalChitieu = totalChitieu*1 + commitment*1;
		myArray.push(new Array('Cam k\u1EBFt t\u00E0i ch\u00EDnh', commitment*1));
	} else {
		myArray.push(new Array('Cam k\u1EBFt t\u00E0i ch\u00EDnh', 0));
	}
	
	var home = document.getElementById("hiddenMainHome").value;
	if(home.trim().length > 0){
		totalChitieu = totalChitieu*1 + home*1;
		myArray.push(new Array('Nh\u00E0', home*1));
	} else {
		myArray.push(new Array('Nh\u00E0', 0));
	}
	
	var shp = document.getElementById("hiddenMainShp").value;
	if(shp.trim().length > 0){
		totalChitieu = totalChitieu*1 + shp*1;
		myArray.push(new Array('Sinh ho\u1EA1t ph\u00ED', shp*1));
	} else {
		myArray.push(new Array('Sinh ho\u1EA1t ph\u00ED', 0));
	}
	var education = document.getElementById("hiddenMainEducation").value;
	if(education.trim().length > 0){
		totalChitieu = totalChitieu*1 + education*1;
		myArray.push(new Array('Gi\u00E1o d\u1EE5c', education*1));
	} else {
		myArray.push(new Array('Gi\u00E1o d\u1EE5c', 0));
	}
	var health = document.getElementById("hiddenMainHealth").value;
	if(health.trim().length > 0){
		totalChitieu = totalChitieu*1 + health*1;
		myArray.push(new Array('S\u1EE9c kh\u1ECFe', health*1));
	} else {
		myArray.push(new Array('S\u1EE9c kh\u1ECFe', 0));
	}
	
	var shoping = document.getElementById("hiddenMainShoping").value;
	if(shoping.trim().length > 0){
		totalChitieu = totalChitieu*1 + shoping*1;
		myArray.push(new Array('Mua s\u1EAFm', shoping*1));
	} else {
		myArray.push(new Array('Mua s\u1EAFm', 0));
	}
	var transport = document.getElementById("hiddenMainTransport").value;
	if(transport.trim().length > 0){
		
		totalChitieu = totalChitieu*1 + transport*1;
		myArray.push(new Array('Di chuy\u1EC3n', transport*1));
	} else {
		myArray.push(new Array('Di chuy\u1EC3n', 0));
	}
	var entertaiment = document.getElementById("hiddenMainEntaiterment").value;
	if(entertaiment.trim().length > 0){
		var res = entertaiment.split(" VND");
		totalChitieu = totalChitieu*1 + entertaiment*1;
		myArray.push(new Array('Gi\u1EA3i tr\u00ED', entertaiment*1));
	} else {
		myArray.push(new Array('Gi\u1EA3i tr\u00ED', 0));
	}
	var eatingOut = document.getElementById("hiddenMainEatingOut").value;
	if(eatingOut.trim().length > 0){
		
		totalChitieu = totalChitieu*1 + eatingOut*1;
		myArray.push(new Array('\u0102n ngo\u00E0i', eatingOut*1));
	} else {
		myArray.push(new Array('\u0102n ngo\u00E0i', 0));
	}
	
	var thunhapTotal = document.getElementById("hiddenThunhapTotal").value;
	var canbang = 0;
	if(thunhapTotal.trim().length > 0){
		canbang = (thunhapTotal*1)-totalChitieu;
	} else {
		canbang = 0-totalChitieu;
	}
	
	$("#labChitieuTotal").empty().append(formatResult(totalChitieu) + " VND");
	$("#labCanbang").empty().append(formatResult(canbang) + " VND");
	if(totalChitieu > 0){
		$('#pieChart').removeClass('hidden');
		showPie(myArray);
	}
}



function mainCalculatorValue(){
	financialCommitmentCalculator();
	monthIncom();
	homeCalculator();
	utilityCalculator();
	educationCalculator();
	healthCalculator();
	shoppingCalculator();
	transportCalculator();
	entertainmentCalculator();
	eatingOutCalculator();
}


function mainCalculator(){
	var main_select = document.getElementById("main_select").value;
	if(main_select == 1){
		$("#labTotalThunhap").empty().append("T\u1ED5ng thu nh\u1EADp (h\u00E0ng th\u00E1ng)");
		$("#labHomeTotal").empty().append("T\u1ED5ng chi ti\u00EAu nh\u00E0  (h\u00E0ng th\u00E1ng");
		$("#labUtilityTotal").empty().append("T\u1ED5ng chi ti\u00EAu sinh ho\u1EA1t ph\u00ED (h\u00E0ng th\u00E1ng)");
		$("#labEducationTotal").empty().append("T\u1ED5ng chi ti\u00EAu gi\u00E1o d\u1EE5c (h\u00E0ng th\u00E1ng)");
		$("#labHealthTotal").empty().append("T\u1ED5ng chi ti\u00EAu s\u1EE9c kh\u1ECFe (h\u00E0ng th\u00E1ng)");
		$("#labShoppingTotal").empty().append("T\u1ED5ng chi ti\u00EAu mua s\u1EAFm (h\u00E0ng th\u00E1ng)");
		$("#labTransportTotal").empty().append("T\u00F4ng chi ti\u00EAu di chuy\u1EC3n (h\u00E0ng th\u00E1ng)");
		$("#labEntertaimentTotal").empty().append("T\u00F4ng chi ti\u00EAu gi\u1EA3i tr\u00ED (h\u00E0ng th\u00E1ng)");
		$("#labEatingOutTotal").empty().append("T\u1ED5ng chi ti\u00EAu \u0103n ngo\u00E0i (h\u00E0ng th\u00E1ng)");
		$("#labCommitmentTotal").empty().append("T\u1ED5ng cam k\u1EBFt t\u00E0i ch\u00EDnh (h\u00E0ng th\u00E1ng)");
		
	} else if(main_select==2) {
		$("#labTotalThunhap").empty().append("T\u1ED5ng thu nh\u1EADp (h\u00E0ng tu\u1EA7n)");
		$("#labHomeTotal").empty().append("T\u1ED5ng chi ti\u00EAu nh\u00E0  (h\u00E0ng tu\u1EA7n)");
		$("#labUtilityTotal").empty().append("T\u1ED5ng chi ti\u00EAu sinh ho\u1EA1t ph\u00ED (h\u00E0ng tu\u1EA7n)");
		$("#labEducationTotal").empty().append("T\u1ED5ng chi ti\u00EAu gi\u00E1o d\u1EE5c (h\u00E0ng tu\u1EA7n)");
		$("#labHealthTotal").empty().append("T\u1ED5ng chi ti\u00EAu s\u1EE9c kh\u1ECFe (h\u00E0ng tu\u1EA7n)");
		$("#labShoppingTotal").empty().append("T\u1ED5ng chi ti\u00EAu mua s\u1EAFm (h\u00E0ng tu\u1EA7n)");
		$("#labTransportTotal").empty().append("T\u00F4ng chi ti\u00EAu di chuy\u1EC3n (h\u00E0ng tu\u1EA7n)");
		$("#labEntertaimentTotal").empty().append("T\u00F4ng chi ti\u00EAu gi\u1EA3i tr\u00ED (h\u00E0ng tu\u1EA7n)");
		$("#labEatingOutTotal").empty().append("Tá»•ng chi tiÃªu Äƒn ngoÃ i (h\u00E0ng tu\u1EA7n)");
		$("#labCommitmentTotal").empty().append("T\u1ED5ng cam k\u1EBFt t\u00E0i ch\u00EDnh (h\u00E0ng tu\u1EA7n)");
	} else if (main_select==3) {
		$("#labTotalThunhap").empty().append("T\u1ED5ng thu nh\u1EADp (h\u00E0ng 2 tu\u1EA7n)");
		$("#labHomeTotal").empty().append("T\u1ED5ng chi ti\u00EAu nh\u00E0  (h\u00E0ng 2 tu\u1EA7n)");
		$("#labUtilityTotal").empty().append("T\u1ED5ng chi ti\u00EAu sinh ho\u1EA1t ph\u00ED (h\u00E0ng 2 tu\u1EA7n)");
		$("#labEducationTotal").empty().append("T\u1ED5ng chi ti\u00EAu gi\u00E1o d\u1EE5c (h\u00E0ng 2 tu\u1EA7n)");
		$("#labHealthTotal").empty().append("T\u1ED5ng chi ti\u00EAu s\u1EE9c kh\u1ECFe (h\u00E0ng 2 tu\u1EA7n)");
		$("#labShoppingTotal").empty().append("T\u1ED5ng chi ti\u00EAu mua s\u1EAFm (h\u00E0ng 2 tu\u1EA7n)");
		$("#labTransportTotal").empty().append("T\u00F4ng chi ti\u00EAu di chuy\u1EC3n (h\u00E0ng 2 tu\u1EA7n)");
		$("#labEntertaimentTotal").empty().append("T\u00F4ng chi ti\u00EAu gi\u1EA3i tr\u00ED (h\u00E0ng 2 tu\u1EA7n)");
		$("#labEatingOutTotal").empty().append("T\u1ED5ng chi ti\u00EAu \u0103n ngo\u00E0i (h\u00E0ng 2 tu\u1EA7n)");
		$("#labCommitmentTotal").empty().append("T\u1ED5ng cam k\u1EBFt t\u00E0i ch\u00EDnh (h\u00E0ng 2 tu\u1EA7n)");
	} else if (main_select==4) {
		$("#labTotalThunhap").empty().append("T\u1ED5ng thu nh\u1EADp (h\u00E0ng qu\u00FD)");
		$("#labHomeTotal").empty().append("T\u1ED5ng chi ti\u00EAu nh\u00E0  (h\u00E0ng qu\u00FD)");
		$("#labUtilityTotal").empty().append("T\u1ED5ng chi ti\u00EAu sinh ho\u1EA1t ph\u00ED (h\u00E0ng qu\u00FD)");
		$("#labEducationTotal").empty().append("T\u1ED5ng chi ti\u00EAu gi\u00E1o d\u1EE5c (h\u00E0ng qu\u00FD)");
		$("#labHealthTotal").empty().append("T\u1ED5ng chi ti\u00EAu s\u1EE9c kh\u1ECFe (h\u00E0ng qu\u00FD)");
		$("#labShoppingTotal").empty().append("T\u1ED5ng chi ti\u00EAu mua s\u1EAFm (h\u00E0ng qu\u00FD)");
		$("#labTransportTotal").empty().append("T\u00F4ng chi ti\u00EAu di chuy\u1EC3n (h\u00E0ng qu\u00FD)");
		$("#labEntertaimentTotal").empty().append("T\u00F4ng chi ti\u00EAu gi\u1EA3i tr\u00ED (h\u00E0ng qu\u00FD)");
		$("#labEatingOutTotal").empty().append("T\u1ED5ng chi ti\u00EAu \u0103n ngo\u00E0i (h\u00E0ng qu\u00FD)");
		$("#labCommitmentTotal").empty().append("T\u1ED5ng cam k\u1EBFt t\u00E0i ch\u00EDnh (h\u00E0ng qu\u00FD)");
	} else if (main_select==5) {
		$("#labTotalThunhap").empty().append("T\u1ED5ng thu nh\u1EADp (h\u00E0ng n\u0103m)");
		$("#labHomeTotal").empty().append("T\u1ED5ng chi ti\u00EAu nh\u00E0  (h\u00E0ng n\u0103m)");
		$("#labUtilityTotal").empty().append("T\u1ED5ng chi ti\u00EAu sinh ho\u1EA1t ph\u00ED (h\u00E0ng n\u0103m)");
		$("#labEducationTotal").empty().append("T\u1ED5ng chi ti\u00EAu gi\u00E1o d\u1EE5c (h\u00E0ng n\u0103m)");
		$("#labHealthTotal").empty().append("T\u1ED5ng chi ti\u00EAu s\u1EE9c kh\u1ECFe (h\u00E0ng n\u0103m)");
		$("#labShoppingTotal").empty().append("T\u1ED5ng chi ti\u00EAu mua s\u1EAFm (h\u00E0ng n\u0103m)");
		$("#labTransportTotal").empty().append("T\u00F4ng chi ti\u00EAu di chuy\u1EC3n (h\u00E0ng n\u0103m)");
		$("#labEntertaimentTotal").empty().append("T\u00F4ng chi ti\u00EAu gi\u1EA3i tr\u00ED (h\u00E0ng n\u0103m)");
		$("#labEatingOutTotal").empty().append("T\u1ED5ng chi ti\u00EAu \u0103n ngo\u00E0i (h\u00E0ng n\u0103m)");
		$("#labCommitmentTotal").empty().append("T\u1ED5ng cam k\u1EBFt t\u00E0i ch\u00EDnh (h\u00E0ng n\u0103m)");
		
	}
	mainCalculatorValue();
}



function calculator(typeSelect, valueInput){
	var main_select = document.getElementById("main_select").value;
	valueInput = valueInput.replace(/,/g, '');
	if(main_select == 1){ //hangthang
		
		if (typeSelect==1){
			return valueInput;
		} else if (typeSelect==2) {//hang tuan
			return Math.round((valueInput*52)/12);
		} else if (typeSelect==3) {//hang 2 tuan
			return Math.round((valueInput*52)/12/2);
		} else if (typeSelect==4) {//hang quy
			return Math.round(valueInput/3);
		} else if (typeSelect==5) {//hang nam
			return Math.round(valueInput/12);
		}
		
	} else if (main_select == 2){ //hang tuan
		if (typeSelect==1){ // hang thang
			return Math.round((valueInput*12)/52);
		} else if (typeSelect==2) {//hang tuan
			return valueInput;
		} else if (typeSelect==3) {//hang 2 tuan
			return Math.round(valueInput/2);
		} else if (typeSelect==4) {//hang quy
			return Math.round((valueInput*4)/52);
		} else if (typeSelect==5) {//hang nam
			return Math.round((valueInput)/52);
		}
		
	} else if (main_select == 3){ //hang 2 tuan
		if (typeSelect==1){ // hang thang
			return Math.round(((valueInput*12)/52)*2);
		} else if (typeSelect==2) {//hang tuan
			return Math.round(valueInput*2);
		} else if (typeSelect==3) {//hang 2 tuan
			return valueInput;
		} else if (typeSelect==4) {//hang quy
			return Math.round(((valueInput*4)/52)*2);
		} else if (typeSelect==5) {//hang nam
			return Math.round((valueInput/52)*2);
		}
		
		
	} else if (main_select == 4){ // hang quy
		if (typeSelect==1){ // hang thang
			return Math.round(valueInput*3);
		} else if (typeSelect==2) {//hang tuan
			return Math.round(valueInput*13);
		} else if (typeSelect==3) {//hang 2 tuan
			return Math.round((valueInput*13)/2);
		} else if (typeSelect==4) {//hang quy
			return valueInput;
		} else if (typeSelect==5) {//hang nam
			return Math.round(valueInput/4);
		}
		
	} else if (main_select == 5){ //hang nam
		if (typeSelect==1){ // hang thang
			return Math.round(valueInput*12);
		} else if (typeSelect==2) {//hang tuan
			return Math.round(valueInput*52);
		} else if (typeSelect==3) {//hang 2 tuan
			return Math.round((valueInput*52)/2);
		} else if (typeSelect==4) {//hang quy
			return Math.round((valueInput*12)/3);
		} else if (typeSelect==5) {//hang nam
			return valueInput;
		}
	}	
	return 0;
}


function showMessage(msg, id){
	var labMessage = document.getElementById('labMessage');
	labMessage.value="";
	labMessage.innerHTML = msg;
	$.magnificPopup.open({
			items: {
				src: $('#popupMessage')
			},
			modal: false,
			type: 'inline',
			closeOnBgClick: false,
			closeOnContentClick: false,
			callbacks: {
				open: function() {
					$('#popupMessage').find('.close').on('click', function (e) {
						e.preventDefault();
						$.magnificPopup.close();
						document.getElementById(id).focus();
					});
				}
			}
		});
}

