
    function validatePassword(){
            // getting password
        let passwordInput=document.getElementById('password').value;
        let pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!pattern.test(passwordInput)){
            document.getElementById('error').innerHTML='Password must contain 8 characters an upper case, lower case, one digit';
            document.getElementById("privacy2").style.height="500px";
        } else{
            document.getElementById('error').innerHTML='';
        }
             // Prevent the form from submitting if the password is invalid
        document.getElementById('password').addEventListener('submit', function(event) {
            var password = document.getElementById('password').value;
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

            if (!pattern.test(password)) {
                alert('Invalid password! Please follow the password pattern.');
                event.preventDefault(); // Prevent form submission
            }
            })

        };
function matchPassword(){
    if(document.getElementById('password').value!=document.getElementById('password2').value){
        document.getElementById('error2').innerHTML='password doest not match';
        document.getElementById("privacy2").style.height="500px";
    } else{
        document.getElementById('error2').innerHTML='';
        }
    }
    document.getElementById('password').addEventListener('submit', function(event) {
        var password = document.getElementById('password').value;
        var password2=document.getElementById('password2').value;

        if (!password==password2) {
            alert('password doesnt match');
            event.preventDefault(); // Prevent form submission
        }
        })
function imgUpload(){
    let k=document.getElementById('pic').value;
    console.log('k');
    document.getElementById('img').src=k;
};
function accountCreate(){
    confirm('Do u want to login with ncc?');
}
const form=document.querySelector('.form');
    form.addEventListener('submit',event=>{
        event.preventDefault();
        const formData=new FormData(form);
        const data=Object.fromEntries(formData);
        fetch('https://reqres.in/api/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.JSON())
         .then(data=>console.log(data))
         .catch(error=>console.log(error));
})
const ImgDiv=document.querySelector("#img_upload");
const img=document.querySelector("#img");
const file=document.querySelector("#pic");

file.addEventListener('change',function(){
    const chosedFile=this.files[0];
    if(chosedFile){
        const reader=new FileReader();
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(chosedFile);


    }
})

