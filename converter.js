//MONEY
//1#America
function convertAmericanDollar(inputValue) {

        document.getElementById("dollarToBangladeshiTaka").innerHTML=inputValue *84.8235;
        document.getElementById("dollarToIndianRupee").innerHTML=inputValue *73.1458;
        document.getElementById("dollarToPakistaniRupee").innerHTML=inputValue *160.247;
        document.getElementById("dollarToEnglandPound").innerHTML=inputValue *0.731323;
        document.getElementById("dollarToChineseYuan").innerHTML=inputValue *6.52570;
        document.getElementById("dollarToKuwaitiDinar").innerHTML=inputValue *0.305195;
        document.getElementById("dollarToAustralianDollar").innerHTML=inputValue *1.29398;
        document.getElementById("dollarToSaudiRiyal").innerHTML=inputValue *3.75;
        document.getElementById("dollarToEmiretsDirham").innerHTML=inputValue *3.67250;
        document.getElementById("dollarToQatariRial").innerHTML=inputValue * 3.64000;
        document.getElementById("dollarToOmaniRial").innerHTML=inputValue *0.384500;
        document.getElementById("dollarToMaldivianRufiyaa").innerHTML=inputValue *15.6584;
        

    }

//2#Bangladesh
function convertBangladeshiTaka(inputValue) {
        document.getElementById("takaToAmericanDollar").innerHTML=inputValue *0.0118053;
        document.getElementById("takaToIndianRupee").innerHTML=inputValue *0.861997;
        document.getElementById("takaToPakistaniRupee").innerHTML=inputValue *1.89307;
        document.getElementById("takaToEnglandPound").innerHTML=inputValue *0.00862413;
        document.getElementById("takaToChineseYuan").innerHTML=inputValue *0.0762643;
        document.getElementById("takaToKuwaitiDinar").innerHTML=inputValue *0.00358650;
        document.getElementById("takaToAustralianDollar").innerHTML=inputValue *0.0152656;
        document.getElementById("takaToSaudiRiyal").innerHTML=inputValue *0.0442779;
        document.getElementById("takaToEmiretsDirham").innerHTML=inputValue *0.0433628;
        document.getElementById("takaToQatariRial").innerHTML=inputValue *0.0429752;
        document.getElementById("takaToOmaniRial").innerHTML=inputValue *0.00453955;
        document.getElementById("takaToMaldivianRufiyaa").innerHTML=inputValue *0.182139;
    }

//3#India
function convertIndianRupee(inputValue) {
        document.getElementById("IndianRupeeToAmericanDollar").innerHTML=inputValue *0.0136933;
        document.getElementById("IndianRupeeToBangladeshiTaka").innerHTML=inputValue *1.16006;
        document.getElementById("IndianRupeeToPakistaniRupee").innerHTML=inputValue *2.19628;
        document.getElementById("IndianRupeeToEnglandPound").innerHTML=inputValue *0.0100478;
        document.getElementById("IndianRupeeToChineseYuan").innerHTML=inputValue *0.0885184;
        document.getElementById("IndianRupeeToKuwaitiDinar").innerHTML=inputValue *0.00415978;
        document.getElementById("IndianRupeeToAustralianDollar").innerHTML=inputValue *0.0177455;
        document.getElementById("IndianRupeeToSaudiRiyal").innerHTML=inputValue *0.0513594;
        document.getElementById("IndianRupeeToEmiretsDirham").innerHTML=inputValue *0.0502932;
        document.getElementById("IndianRupeeToQatariRial").innerHTML=inputValue *0.0498481;
        document.getElementById("IndianRupeeToOmaniRial").innerHTML=inputValue *0.00526555;
        document.getElementById("IndianRupeeToMaldivianRufiyaa").innerHTML=inputValue *0.210676;
    }

//4#Pakistan
function convertPakistaniRupee(inputValue) {
        document.getElementById("PakistaniRupeeToAmericanDollar").innerHTML=inputValue *0.00624279;
        document.getElementById("PakistaniRupeeToBangladeshiTaka").innerHTML=inputValue *0.529326;
        document.getElementById("PakistaniRupeeToIndianRupee").innerHTML=inputValue *0.456055;
        document.getElementById("PakistaniRupeeToEnglandPound").innerHTML=inputValue *0.00459557;
        document.getElementById("PakistaniRupeetoChineseYuan").innerHTML=inputValue *0.0403523;
        document.getElementById("PakistaniRupeetoKuwaitiDinar").innerHTML=inputValue *0.00189647;
        document.getElementById("PakistaniRupeetoAustralianDollar").innerHTML=inputValue *0.00811064;
        document.getElementById("PakistaniRupeetoSaudiRiyal").innerHTML=inputValue *0.0234179;
        document.getElementById("PakistaniRupeetoEmiretsDirham").innerHTML=inputValue *0.0229340;
        document.getElementById("PakistaniRupeetoQatariRial").innerHTML=inputValue *0.0227387;
        document.getElementById("PakistaniRupeetoOmaniRial").innerHTML=inputValue *0.00240193;
        document.getElementById("PakistaniRupeetoMaldivianRufiyaa").innerHTML=inputValue *0.0960498;
    }



//Temperature
//celsius
function convertCelsius(inputValue) {
     inputValue= parseFloat(inputValue);
  document.getElementById("CelsiusToKelvin").innerHTML=inputValue+273.15 ;
    document.getElementById("CelsiusToFahrenheit").innerHTML=(inputValue* 9/5) + 32;
}



//Fahrenheit
function convertFahrenheit(inputValue) {
    document.getElementById("FahrenheitToCelsius").innerHTML=(inputValue - 32) / 1.8;
    document.getElementById("FahrenheitToKelvin").innerHTML=((inputValue - 32) /1.8) + 273.15 ;
}

//Kelvin
function convertKelvin(inputValue) {
    document.getElementById("KelvinToCelsius").innerHTML=inputValue - 273.15;
    document.getElementById("KelvinToFahrenheit").innerHTML=(inputValue- 273.15) * 9/5 + 32;
}





//Length
//Meter
function convertMeterLength(InputValue) {
    document.getElementById("MeterToKilometer").innerHTML=  inputValue;
    document.getElementById("MeterToCentemeter").innerHTML= inputValue;
    document.getElementById("MeterToMilimeter").innerHTML=  inputValue;
    document.getElementById("MeterToMicrometer").innerHTML= inputValue;
    document.getElementById("MeterToNanometer").innerHTML=  inputValue;
    document.getElementById("MeterToMile").innerHTML=       inputValue;
    document.getElementById("MeterToYard").innerHTML=       inputValue;
    document.getElementById("MeterToFoot").innerHTML=       inputValue;
    document.getElementById("MeterToInch").innerHTML=       inputValue;
    document.getElementById("MeterToLightYear").innerHTML=  inputValue;
}






