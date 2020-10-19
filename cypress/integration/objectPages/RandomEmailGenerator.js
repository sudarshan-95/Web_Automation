
/// <reference types="Cypress" />


 class Email{
    emailValidation(){
        
            var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
            var string = '';
            for(var ii=0; ii<15; ii++){
                string += chars[Math.floor(Math.random() * chars.length)];
            }
        //   return  (string + '@domain.com');
       console.log((string + '@domain.com'))  ;
    }

    textValidation(){
        function getRandomText(length) {
        var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".match(/./g);
        var text = "";
        for (var i = 0; i < length; i++) result += charset[Math.floor(Math.random() * charset.length)];
        // return text;
       console.log(text)
}
    }
}




export default Email;