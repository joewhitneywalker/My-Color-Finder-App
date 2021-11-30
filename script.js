

//PROMISE CODE

$('form').on('submit', (event) => {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();
     $.ajax({
       url:'https://x-colors.herokuapp.com/api/random/blue' + userInput
     }).then(
         (data) => {
         $('#hex').html(data.hex);
         $('#rgb').html(data.rgb);
         $('#hsl').html(data.hsl);
         },
         (error) => {
           console.log('bad request: ', error);
          }
         );
       })


       // TRYING TO CREATE A FUNCTION WHICH CHANGES THE BACKGROUND COLOR TO THE HEX CODE GIVEN. BUT CAN'T GET IT TO POPULATE IN THE DOM
       function changebackground(){
        document.body.style.backgroundColor = (data.hex);
      }
