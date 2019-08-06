
class EmailService {
    sendEmailToPO(firstName, lastName, fromEmail, subject, message) {

        console.log("We're in the browser service. " + firstName + "  " + lastName + "  " +  fromEmail + "  " +  subject + "  " +  message)
        function status(response) {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                console.log("We got the wrong response back " + response.status)
                return Promise.reject(new Error(response.statusText))
            }
        }

        function json(response) {
            return response.json()
        }

        let senderName = firstName + " " + lastName;
        // return new Promise((resolve,reject) => {
        //     axios.get(GETFEATURES_URL)
        //         .then((response) => {
        //             console.log("from axios in promise: ", response.data.toString());
        //             var processData = [];
        //
        //             for (let i = 0; i < Object.entries(response.data).length; i++){
        //                 processData.push(JSON.stringify(Object.values(response.data)[i]));
        //             }
        //             processData = Object.values(processData);
        //             // console.log("Pulling " + [processData]);
        //             // this.setState({ retrievedData: (processData) });
        //             // console.log("state: " + this.state.retrievedData + " length: "+ this.state.retrievedData.length);
        //             resolve(processData);
        //         }).catch((error) => {
        //         console.log("from apis failure", error);
        //         reject(error);
        //     });
        // })
        fetch('http://localhost:8080/sendEmail', {
            method: 'POST',
            headers: { "Accept": "*/*", "Content-Type": "application/json"},
            body: JSON.stringify({"senderName": senderName, "fromEmail": fromEmail, "subject": subject, "message": message})
        })
            .then(status)
            .then(json)
            .then(function (data) {
                console.log('All good. ', data);
                return data;
            }).catch(function (err) {
            console.log('Fetch Error : ', err)
            return err;
        });

        // this.setState({
        //     EmailResponse: response.json()
        // });

    }
}

export default new EmailService()