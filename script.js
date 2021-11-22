var app = new Vue({
    el: "#app",
    data: {
        mail: [],
    },
    mounted(){
        let self = this
        
        for(i=0; i < 10; i++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function(emails){
            
            self.mail.push(emails.data.response);
            
        });
        
    }}
})