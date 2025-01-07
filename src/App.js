import React, { useState, useEffect } from "react";

import { Header } from "./components/header.js";

import image from "./images/image.png";

const data = {
  status: "success",
  totalResults: 4531,
  results: [
    {
      article_id: "dbc0121b92273fbb10e27dd2fe2d0010",
      title:
        "Apple’s Medical ID feature helps man return iPhone lost at sea to its owner",
      link: "https://9to5mac.com/2025/01/06/medical-id-iphone-lost-at-sea/",
      keywords: ["news"],
      creator: ["Filipe Espósito"],
      video_url: null,
      description:
        "Losing devices such as an or Apple Watch at sea is more common than it seems, as we’ve reported on many similar cases before. However, while owners often use Apple’s Find My to recover their devices, this case is a bit different. An iPhone lost at sea was returned to its owner thanks to the Medical ID feature. more...",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:45:12",
      pubDateTZ: "UTC",
      image_url:
        "https://9to5mac.com/wp-content/uploads/sites/6/2025/01/iphone-lost-sea.jpg?quality=82&strip=all&w=1600",
      source_id: "9to5mac",
      source_priority: 2672,
      source_name: "9to5 Mac",
      source_url: "https://9to5mac.com",
      source_icon: "https://i.bytvi.com/domain_icons/9to5mac.png",
      language: "english",
      country: [
        "india",
        "singapore",
        "united states of america",
        "australia",
        "united kingdom",
      ],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "38e7f116d5eedc41fb8f45b91cb41f12",
      title:
        "Xbox Cloud Gaming Is Finally Coming To LG TVs - Press Start Australia",
      link: "https://news.google.com/rss/articles/CBMimgFBVV95cUxOMXA1Mmk2LWNWX2FXM1hhWU10bXJYYV8xcktWTl9xRVRySkwteXM0S1plNF9HZVJnUXVKVEZHZ0FGRG9QNnhGUkt1U2JTeXVnZ1BmZnFVZTJpNGxVU3dXX1lFRWlCYUh0NlRKcHpMSUE5T2ZJbkJrOVFETUZvWUxUc1BraGJiNF9HVmFzeVJqVUVreGRJSTlCNGZn0gGfAUFVX3lxTFBKdktfNGxhRDJWeXpsSnJZcHBFOG9ZM0ZSRTdReFZqTmZqQlAydFBhS0hhdm0tc05Xc3kzWUVCYnFYd0c0Vk5BM0lKUEtJSEZRX3lReFFXUndKWmpYSHQwSFc3b3BYU2RacWtvV3pCY2RKOGFnN2tEaGp1NGZ1UUluYjBJZG9EZF8tYU9RNnNVV0NLRWJCQXROVFhUMWo2SQ?oc=5",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Xbox Cloud Gaming Is Finally Coming To LG TVs Press Start AustraliaXbox Cloud Streaming is coming to new LG smart TVs Yahoo News Australia",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:45:06",
      pubDateTZ: "UTC",
      image_url: null,
      source_id: "google",
      source_priority: 14,
      source_name: "Google News",
      source_url: "https://news.google.com",
      source_icon: "https://i.bytvi.com/domain_icons/google.png",
      language: "english",
      country: ["australia"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "97cb2d4aba977dd42a042ce6527b6578",
      title:
        "World's first 750Hz refresh rate gaming monitor unveiled at CES 2025",
      link: "https://www.tweaktown.com/news/102419/world-first-750hz-refresh-rate-gaming-monitor-unveiled-at-ces-2025/index.html",
      keywords: null,
      creator: ["Jak Connor"],
      video_url: null,
      description:
        "Koorui is set to showcase a 750Hz gaming monitor at CES 2025, pushing the limit of what monitor tech can achieve, but for a select audience. Continue reading at TweakTown >",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:45:03",
      pubDateTZ: "UTC",
      image_url:
        "https://www.tweaktown.com/images/news/1/0/102419_995858959_ces-2025-will-showcase-750hz-gaming-monitor.jpg",
      source_id: "tweaktown",
      source_priority: 43825,
      source_name: "Tweak Town",
      source_url: "https://www.tweaktown.com",
      source_icon: "https://i.bytvi.com/domain_icons/tweaktown.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "ee784728901bfc0eb6377c9a8775590e",
      title: "Too Big - Aftermath",
      link: "https://news.google.com/rss/articles/CBMid0FVX3lxTE1rM2hKNldvdVBVdEJVMHJscmFZWE02YXhQN3NDblMwUE10ZEtuckp3YlVWU1ZrQlFDalVoWGJ0VnVXOUltVEYtc2hzYlMxMjZWcmxPQ1V4MEEwWEN0RHBsYXFRZGZOZ0haMGJOOU4yUnZGajA4bl9z?oc=5",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Too Big AftermathAcer’s New Nitro Blaze 11 Has One Giant Advantage Over Steam Deck ForbesAcer made an enormous 11-inch gaming handheld The VergeAcer's New 8 and 11-inch Windows Game Handhelds Push The Limits On Portable CNETACER announces $1099 NITRO Blaze 11 and $899 Blaze 8 handhelds with Ryzen 7 8840HS VideoCardz.com",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:45:00",
      pubDateTZ: "UTC",
      image_url: null,
      source_id: "google",
      source_priority: 14,
      source_name: "Google News",
      source_url: "https://news.google.com",
      source_icon: "https://i.bytvi.com/domain_icons/google.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "b3d473557b3864e652136f48641e0d02",
      title: "A year without paper towels",
      link: "https://www.postandcourier.com/lowcountryparent/columns/a-year-without-paper-towels/article_5d2e710a-cc77-11ef-a3a5-6b80be740691.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Lowcountry Parent Editor muses about her family's decision to stop using paper towels for a year.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:44:00",
      pubDateTZ: "UTC",
      image_url:
        "https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/2/fa/2faf5fd0-cc79-11ef-b54d-3b5418548dab/677c51d33e83e.image.jpg?resize=400%2C210",
      source_id: "postandcourier",
      source_priority: 5131,
      source_name: "Postandcourier",
      source_url: "https://www.postandcourier.com",
      source_icon: "https://i.bytvi.com/domain_icons/postandcourier.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "c40de22590e45ba9a5271eeb3a6642fd",
      title: "Meta Adds UFC's Dana White to Board",
      link: "https://www.wsj.com/articles/meta-adds-ufcs-dana-white-to-board-09cbd022?mod=rss_Technology",
      keywords: ["paid"],
      creator: null,
      video_url: null,
      description:
        "Meta said UFC President Dana White, Exor CEO John Elkann and technology investor Charlie Songhurst were elected as new members of its board of directors.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:44:00",
      pubDateTZ: "UTC",
      image_url: null,
      source_id: "wsj",
      source_priority: 311,
      source_name: "Wsj",
      source_url: "http://www.wsj.com",
      source_icon: "https://i.bytvi.com/domain_icons/wsj.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "172f3dd58b71c99d98dada897360e60d",
      title: "Xbox App Coming to LG Smart TVs",
      link: "https://cogconnected.com/2025/01/xbox-app-coming-to-lg-smart-tvs/",
      keywords: [
        "xbox portal",
        "lg tv",
        "news",
        "xbox",
        "xbox games pass",
        "xbox app",
      ],
      creator: ["Jacob Greenwood"],
      video_url: null,
      description:
        "Today, Xbox announces their new partnership with LG Electronics, bringing Xbox games to select LG TVs. The post Xbox App Coming to LG Smart TVs appeared first on COGconnected.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:43:46",
      pubDateTZ: "UTC",
      image_url:
        "https://cogconnected.com/wp-content/uploads/2025/01/Xbox-App-Coming-to-LGTV.jpg",
      source_id: "cogconnected",
      source_priority: 142681,
      source_name: "Cogconnected",
      source_url: "https://cogconnected.com",
      source_icon: "https://i.bytvi.com/domain_icons/cogconnected.png",
      language: "english",
      country: ["canada"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "aae8ac795f7b2181a6218930393ac81b",
      title:
        "Amazon knocks up to 36% off Our Place cookware — 5 kitchen deals I'd shop now",
      link: "https://www.tomsguide.com/sales-events/amazon-knocks-up-to-36-percent-off-our-place-cookware-5-kitchen-deals-id-shop-now",
      keywords: ["sales events"],
      creator: null,
      video_url: null,
      description:
        "From bakeware sets to ovens, here are my favorite Our Place deals at Amazon right now.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:43:25",
      pubDateTZ: "UTC",
      image_url: "https://cdn.mos.cms.futurecdn.net/YSoZseB9gbxibeHUQwhkyD.jpg",
      source_id: "tomsguide",
      source_priority: 3580,
      source_name: "Tom's Guide",
      source_url: "https://www.tomsguide.com",
      source_icon: "https://i.bytvi.com/domain_icons/tomsguide.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "a56c6f18b3c4611b2fe966745161dfb0",
      title: "AMD’s new GPUs were a complete no-show at CES 2025",
      link: "https://www.digitaltrends.com/computing/amd-rx-9000-series-missing-from-ces-2025/",
      keywords: [
        "amd",
        "news",
        "gpus",
        "computing",
        "rdna 4",
        "features",
        "graphics cards",
        "rx 9000 series",
      ],
      creator: ["Monica J. White"],
      video_url: null,
      description:
        "Despite the fact that everyone expected to learn more about AMD's RX 9000 series during CES 2025, the GPUs were a no-show.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:42:12",
      pubDateTZ: "UTC",
      image_url:
        "https://www.digitaltrends.com/wp-content/uploads/2025/01/RDNA-4-GPUs.jpg?fit=720%2C720&p=1",
      source_id: "digitaltrends",
      source_priority: 287,
      source_name: "Digitaltrends",
      source_url: "https://www.digitaltrends.com",
      source_icon: "https://i.bytvi.com/domain_icons/digitaltrends.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
    {
      article_id: "2725ca4a2154f738576413734ddb6a7c",
      title:
        "Ulta Beauty CEO Dave Kimbell to retire, Kecia Steelman appointed president and CEO",
      link: "https://www.cnbc.com/video/2025/01/06/ulta-beauty-ceo-dave-kimbell-to-retire-kecia-steelman-appointed-president-and-ceo.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "CNBC's Courtney Reagan with breaking news on an change in Ulta Beauty's leadership.",
      content: "ONLY AVAILABLE IN PAID PLANS",
      pubDate: "2025-01-06 21:41:41",
      pubDateTZ: "UTC",
      image_url:
        "https://image.cnbcfm.com/api/v1/image/108082723-17361990631736199058-37874813582-1080pnbcnews.jpg?h=1080&v=1736199062&w=1920",
      source_id: "cnbc",
      source_priority: 379,
      source_name: "Cnbc",
      source_url: "http://cnbc.com",
      source_icon: "https://i.bytvi.com/domain_icons/cnbc.png",
      language: "english",
      country: ["united states of america"],
      category: ["technology"],
      ai_tag: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      sentiment_stats: "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
      ai_region: "ONLY AVAILABLE IN CORPORATE PLANS",
      ai_org: "ONLY AVAILABLE IN CORPORATE PLANS",
      duplicate: false,
    },
  ],
  nextPage: "1736199701918107608",
};

function App() {
  const [categories, setCategories] = useState([]);
  const [list, setList] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null); // Holds the selected article

  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let toJson = async (obj) => {
    const jsonData = await obj.json(); // Read the response body once
    return jsonData;
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getReadingTime(text) {
    const wordsPerMinute = 200; // average reading speed
    const wordCount = text.split(/\s+/).length; // split text into words and count them
    const minutes = Math.ceil(wordCount / wordsPerMinute); // calculate the number of minutes
    return minutes;
  }

  const applyData = (dataset) => {
    console.log(dataset);
    if (dataset.status !== "success") {
      setLoading(false);
      alert(`Error: ${dataset.results.message}`);
      return;
    }

    let lenArticle = dataset.length;
    let myCategories = new Set();
    let myList = [];

    Array.from(dataset).forEach((element) => {
      myCategories.add(...element.category);
      myList.push({
        title: element.title,
        meta: `${element.pubDate} ${element.pubDateTZ} / From ${
          element.creator && element.creator.length > 0
            ? element.creator[0]
            : ""
        } ${
          element.creator && element.creator.length > 1
            ? `and ${element.creator.length - 1} others`
            : ""
        }`,
        content: `${element.content.slice(0, 40)}...`,
        image_url: element.image_url,
        description: element.description,
        creater: `By ${
          element.creator && element.creator.length > 1
            ? `and ${element.creator.length - 1} others`
            : ""
        }`,
        pubDate: element.pubDate,
        source_name: `Image ${element.source_name}`,
        full_content: element.content,
        estimate: `${getReadingTime(element.content)} min read`,
      });
    });
    setList([...myList]);
    setCategories([...myCategories]);
    setLoading(false);
  };

  // Function to handle selecting an article
  const selectArticle = (article) => {
    setSelectedArticle(article); // Update the selected article state
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsdata.io/api/1/news?apikey=pub_635031f8dfedfcd1866ea8b447113b762127f&language=en&category=technology"
        );
        return response;
        // return data.results;
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews().then(toJson).then(applyData);
  }, []);

  return (
    !loading && (
      <>
        <Header />
        {/* Parent Wrapper for Sidebar and Overlay */}
        <div className="relative">
          {/* Sidebar */}
          <div
            id="sidebar"
            className={`z-50 w-64 h-screen bg-gray-800 text-white flex flex-col fixed top-0 left-0 transform ${
              !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
            } transition-transform duration-300`}
          >
            <div className="p-4 text-xl font-bold border-b border-gray-700">
              <h1 className="text-3xl underline inline text-red-500 cursor-pointer hover:text-red-600">
                <a onClick={toggleSidebar}>X</a>
              </h1>{" "}
              <span className="inline">Categories</span>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-4">
                {categories.map((e) => {
                  return (
                    <li key={e}>
                      <a
                        href="#"
                        className="block p-2 rounded hover:bg-gray-700"
                      >
                        {capitalizeFirstLetter(e)}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <a href="#" className="block p-2 rounded hover:bg-gray-700">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded hover:bg-gray-700">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 rounded hover:bg-gray-700">
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Overlay */}
          {isSidebarOpen && (
            <div
              onClick={toggleSidebar}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            ></div>
          )}
        </div>

        <div className="relative lg:flexmin-h-screen ">
          {/* <!-- Main Content --> */}
          <div className="flex-1 p-8 w-full">
            <button
              id="menu-toggle"
              onClick={toggleSidebar}
              className="btn btn-primary"
            >
              Menu
            </button>
            <div className="min-h-screen flex flex-col lg:flex-row mt-2">
              {/* <!-- Left: News Article List --> */}
              <div className="w-full lg:w-1/2 bg-white p-4 overflow-y-auto border-r border-gray-300 mb-2">
                <h2 className="text-2xl font-bold mb-4">News Articles</h2>
                <ul className="space-y-4">
                  {/* <!-- Example News Card --> */}
                  {/* <li
                    className="cursor-pointer"
                    className="border-2 border-blue-500 rounded-lg "
                    onClick="showArticle('Article 2')"
                  >
                    <div className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Article 2"
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Article 2 Title</h3>
                        <p className="text-sm text-gray-600">
                          Short description of article 2...
                        </p>
                      </div>
                    </div>
                  </li> */}

                  {list.map((e, index) => {
                    return (
                      <li
                        onClick={() => selectArticle(e)} // Select article on click
                        key={index}
                        className={`cursor-pointer ${
                          selectedArticle === e
                            ? "border-2 border-blue-500 rounded-lg"
                            : ""
                        }`}
                      >
                        <div className="flex space-x-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 ">
                          <img
                            src={e.image_url}
                            alt={e.title}
                            className="w-20 object-contain rounded-md"
                          />
                          <div>
                            <h3 className="sm:text-sm text-lg font-semibold">
                              {e.title}
                            </h3>
                            <p>{e.meta}</p>
                            <p className="text-sm text-gray-600">{e.content}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}

                  {/* <!-- Add more articles here --> */}
                </ul>
              </div>

              {/* <!-- Right: Selected Article Display --> */}
              <div id="articleDisplay" className="w-full lg:flex-1 lg:m-4">
                {/* Check if article is selected */}
                {selectedArticle ? (
                  <div className="space-y-2">
                    {/* Publisher Info, Date, and Reading Time */}
                    <div className="text-sm text-gray-500 flex items-center justify-between">
                      <span>
                        <strong>{selectedArticle.creater}</strong>
                      </span>
                      <span>
                        {selectedArticle.pubDate} •{selectedArticle.estimate}
                      </span>
                    </div>
                    <div>
                      {/* Article Title */}
                      <h1 className=" lg:text-3xl text-sm font-bold ">
                        {selectedArticle.title}
                      </h1>

                      {/* Article desc */}
                      <p>{selectedArticle.description}</p>
                    </div>

                    {/* Article Image */}
                    <img
                      src={selectedArticle.image_url}
                      alt={selectedArticle.title}
                      className="w-full h-auto rounded-lg"
                    />

                    {/* Social Media Share Icons */}
                    <div className="flex space-x-4 mt-4">
                      <a
                        // href={`https://twitter.com/intent/tweet?text=${selectedArticle.title}`}
                        target="_blank"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <i className="fab fa-twitter"></i> Share on X
                      </a>
                      <a
                        // href={`https://www.linkedin.com/shareArticle?url=${selectedArticle.url}`}
                        target="_blank"
                        className="text-blue-700 hover:text-blue-800"
                      >
                        <i className="fab fa-linkedin"></i> Share on LinkedIn
                      </a>
                      <a
                        // href={`mailto:?subject=${selectedArticle.title}&body=Check out this article: ${selectedArticle.url}`}
                        className="text-red-500 hover:text-red-600"
                      >
                        <i className="fas fa-envelope"></i> Share via Email
                      </a>
                    </div>

                    {/* Article Text */}
                    <div className="text-lg leading-relaxed text-gray-700 mt-6">
                      {selectedArticle.content}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 mt-6">
                    <h1 className="text-2xl font-bold" id="articleTitle">
                      Select an Article
                    </h1>
                    <p className=" text-gray-700" id="articleContent">
                      Click on an article from the list to view its details
                      here.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default App;
