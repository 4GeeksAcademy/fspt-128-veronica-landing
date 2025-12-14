import React from "react";

//include images into your bundle

import Card from "./Card";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
//create your first component
const Home = () => {
	const perretes = [
		{
			id: 1,
			imagen:"https://imgs.search.brave.com/-6cQpjt2kCGetjBeQpOm6jj7WifLWdYQOGKiVc1ROy4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/LXN0YXRpYy5wZXRs/b3ZlLmNvbS5ici93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNC8w/NC9jYWNob3Jyby1u/b21lcy1wZXRsb3Zl/LmpwZw",
			
			ojitos :"verdes",
			aficiones: "risueño",
			raza:"adorable",
			
			
			},
		{id:2,
			imagen:"https://imgs.search.brave.com/rvIWY_Spbyrb4zyK-_xNueIeKzPQhniWTgYZ7YQbgNU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zaXNw/ZXQuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L25vbWVzLXBhcmEt/Y2FjaG9ycm8tY2Fj/aG9ycmEtNzY4eDUx/NS5qcGc",
			nombre:"",
			ojitos :"nose sabe",
			aficiones: "risueño",
			raza:"adorable",
		},
		{ id:3,
			imagen:"https://imgs.search.brave.com/3xffzAyX-n2WNZa7qpI5WoeQDf1zbKQey16nw6pFtME/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cGVkaWdyZWUuY29t/LmJyL2Nkbi1jZ2kv/aW1hZ2UvZm9ybWF0/PWF1dG8scT05MC9z/aXRlcy9nL2ZpbGVz/L2ZubXpkZjI0MDEv/ZmlsZXMvMjAyNC0w/OS9ub21lcy1wYXJh/LWNhY2hvcnJhLWZl/bWVhXzAuanBn",
			nombre:"",
			ojitos :"nose sabe",
			aficiones: "risueño",
			raza:"adorable",

		},
		{ id:4,
			imagen:"https://imgs.search.brave.com/x7GRFtlOHjsBfyNOHnrJaUxQTYgmL_FFaVII1iO45ZQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/MDI4NTAwOS9lcy9m/b3RvL3NpZW1wcmUt/ZXN0JUMzJUExLWRl/cHJpbWlkby1wb3It/ZWwtanVlZ28uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNj/Tk5pWS1ZUGd4bjdN/bUx2cjJCTGN4YjdT/eFJfbi1wLThtNThp/ZnRuMzA9",
			nombre:"",
			ojitos :"nose sabe",
			aficiones: "risueño",
			raza:"adorable",

		},{ id:5,
			imagen:"https://imgs.search.brave.com/CHIA6Gb3misHQYPfPsN87QWMP0Ndj3OWjlrWhDk88kQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9jYWNob3Jyby1i/b25pdG8tc2VudGFk/by1vbGhhbmRvLXBh/cmEtYS1jYW1lcmEt/ZGUtcmFjYS1wdXJh/LWUtYnJpbmNhbGhh/by1nZXJhZG8tcG9y/LWludGVsaWdlbmNp/YS1hcnRpZmljaWFs/XzEzMzY2NzEtNzQw/NzQuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw",
			nombre:"",
			ojitos :"nose sabe",
			aficiones: "risueño",
			raza:"adorable",

		},
		{ id:6,
			imagen:"https://imgs.search.brave.com/gTmY-yDzlNc6VkekoPUxarXVDpXwby6FXnw_Dfz8IrA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM2/NDc1NDk2L2VzL2Zv/dG8vcmV0cmF0by1k/ZS1jYWNob3Jyby1t/YXJyJUMzJUIzbi1j/b24tZm9uZG8tYm9r/ZWguanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXhWTHAybEhO/N0FoVnlUTUJYV1Rm/MXlmUnlKb3ZYVDFS/MGhVd2s5OFJpdzg9",
			nombre:"",
			ojitos :"nose sabe",
			aficiones: "risueño",
			raza:"adorable",

		},
	]



	return (
		<>
			<Navbar />
			<div className="aligne-items:center justify-content:center">
				<Jumbotron /></div>

			<div className="row">
				{perretes.map((perretes)=>{
					return (
			<Card key={perretes.id} perretes={perretes}/>
					)
				})
			
				}
			</div>


		</>
	);
};

export default Home;