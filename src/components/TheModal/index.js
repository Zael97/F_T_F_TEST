export default {
    props: ['repo'],
    data: function (commits) {
        return {
            commits,
        };
    },
    async beforeMount() {
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        let jwt = getCookie("jwt");
        if (jwt) {
            try {
                const response = await fetch("http://localhost:8000/commits", {
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({ repo: this.repo }),
                });
                let commits_reponse = await response.text();
                this.commits = JSON.parse(commits_reponse).commits;
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("cookie not found");
        }
    },
}
