
function fetchData() {
    responseData = [];
    query = document.getElementById("query").value;
    let payload = {"questions": ["I want yellow colors in webex"],
        "top_k_reader": 2,
        "top_k_retriever": 5};
    payload.questions = query.split();
    // console.log(payload.questions);
    displayInputText(payload.questions);
    let response = fetch( "http://18.144.71.96:8000/models/1/faq-qa", {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(response1 => response1.json())
        .then(data => {
            responseData.push(data.results[0].answers);

            displayResults(responseData);
            // similarArtefacts();
            return responseData;
        });
}

function displayResults(responseData) {
    console.log(typeof(responseData));
    for(let key in responseData) {
        console.log(key, responseData[key][0].answer);
        let text = responseData[key][0].question;
        // let len = text.length;
        // let text_formatted = text.slice(-len, -3);
        document.getElementById("para").innerHTML = text;
        document.getElementById("score").innerHTML = responseData[key][0].probability;
        document.getElementById("duplicatepara").innerHTML = responseData[key][0].answer;
    }
}


//       var requestOptions = {
//   method: 'POST',
//   redirect: 'follow'
// };

// fetch("142.93.217.34:5000/query?query=how to create breakout sessions on webex meetings&k=5", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

// function similarArtefacts() {
//   similarArtefactsData = [];
//   query = document.getElementById("query").value;
//   let payload = {"questions": ["I want yellow colors in webex"],
//                   "top_k_reader": 2,
//                   "top_k_retriever": 30};
//   payload.questions = query.split();
//   let faqResponse = fetch("http://142.93.217.34:5000/query?query="+payload.questions+"&k=5" ,{
//     method: 'POST',
//     body: JSON.stringify(payload)
//       }).then(response1 => response1.json())
//       .then(data => {
//         similarArtefactsData.push(data);
//         console.log(similarArtefactsData);
//         displayFaq(similarArtefactsData);
//         return similarArtefactsData;
//   });
// }
//
// function displayFaq(similarArtefactsData) {
//   links = [];
//   for( let key in similarArtefactsData) {
//     for(let i=0;i<3;i++) {
//       let text = similarArtefactsData[key][i].Document;
//       let index = text.indexOf(".");
//       let formatText = text.slice( 0, index+1);
//       console.log(key, formatText, similarArtefactsData[key][i].Link);
//       document.getElementById("parafaq"+i).innerHTML = formatText;
//       document.getElementById("linkfaq"+i).innerHTML = similarArtefactsData[key][i].Link;
//       document.getElementById("linkfaq"+i).setAttribute("href", similarArtefactsData[key][i].Link);
//     }
//   }
// }



function displayInputText(question) {
    // console.log(question);
    let ques = document.getElementById("Question");
    ques.setAttribute("value", question);
}




$(document).ready(function(){
    let i = true;
    $("#search").click(function(){
        if (i){
            $("#slide7").hide();
            $('#slide9').show();
            i = false;
        }
    });
});
