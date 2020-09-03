import React from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        //url e search u atar.
        params: {
          //buraya yazdığımız objeler search ün sonuna eklenir ve ona göre arama yapmamızı sağlar. /search?limit=50
          limit: 50,
          term: searchTerm, //term:term aslında identical olduğu için yalnızca term deyip geçtik.
          location: "san jose",
        },
      });
      // console.log(response); //bize baseURL,header ve aynı zamanda istediğimiz verileri getirir.
      // console.log(response.data); //burda ise baseURL, headers ın olmadığı halini getirir.
      // console.log(response.data.businesses);
      setResults(response.data.businesses); //response.data bütün json verisini tutar ama bizim ihtiyacımız olan api deki business kısmıdır onu oraya ekleriz.
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
    // try {
    //   const response = await fetch(
    //     "https://api.yelp.com/v3/businesses/search?location=san jose",
    //     {
    //       headers: {
    //         Authorization:
    //           "Bearer Z7XWn39rxt3bAVPimOlbXWnYi83-hEC8oCFcgjpaIgkbf-LrsQcd_pahbkgwaMRyuScpuMZdPHZTglwLFwmIHSCKd4bQLTNbeBfuLFNzfGHeChHrr6pvwvmL17VDX3Yx",
    //       },
    //     }
    //   );
    //   const responseData = await response.json();
    //   setResults(responseData.businesses);
    //   console.log(responseData);
    // } catch (error) {
    //   setErrorMessage(error);
    // }
  };
  React.useEffect(() => {
    searchApi("food");
  }, []);

  return [searchApi, results, errorMessage];
};
