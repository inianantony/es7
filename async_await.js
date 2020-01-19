var page = (function () {

    var makeAsyncCall = function () {
        //States : pending, fulfilled, rejected

        var get = function (url) {
            var p = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    var rand = Math.random();
                    if (rand > 0.5) {
                        resolve({ data: `p resolved ${url}` });
                    } else {
                        reject({ data: `p rejected ${url}` });
                    }
                },
                    2000);
            });
            return p;
        };

        async function fetchData() {
            try {
                const resp = await get('go_to_server');
                const data = resp.data;
                return data;
            } catch (e) {
                console.log(e);
            }
        }

        fetchData().then(data => {
            console.log(data);
        });

    };

    return {
        makeAsyncCall
    };

})();

