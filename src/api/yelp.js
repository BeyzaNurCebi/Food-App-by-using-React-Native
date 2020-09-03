import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Z7XWn39rxt3bAVPimOlbXWnYi83-hEC8oCFcgjpaIgkbf-LrsQcd_pahbkgwaMRyuScpuMZdPHZTglwLFwmIHSCKd4bQLTNbeBfuLFNzfGHeChHrr6pvwvmL17VDX3Yx",
  },
});
