import React, { useEffect, useState } from "react";

const SocialMediaEmbed = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const instaScript = document.createElement("script");
    instaScript.src = "https://www.instagram.com/embed.js";
    instaScript.async = true;
    document.body.appendChild(instaScript);

    const tiktokScript = document.createElement("script");
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.removeChild(instaScript);
      document.body.removeChild(tiktokScript);
    };
  }, []);

  return (
    <div className="p-4 sm:p-8 bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full mx-auto overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-8 pt-4 sm:pt-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Connect With Us on Social Media
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-8 p-4 sm:p-8">
          {/* Instagram Embed */}
          <div className="w-full md:w-1/2 transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 p-2 sm:p-4 bg-gradient-to-r from-purple-100 to-indigo-100">
                Latest on Instagram
              </h3>
              <div className="p-2 sm:p-4 aspect-square">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/smkgama_garudamahadhika"
                  data-instgrm-version="12"
                  style={{
                    background: "#FFF",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    margin: "0 auto",
                    maxWidth: "100%",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div style={{ padding: "16px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <a
                      href="https://www.instagram.com/smkgama_garudamahadhika"
                      style={{
                        background: "#FFFFFF",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ marginBottom: "12px" }}>
                        <div
                          style={{
                            backgroundColor: "#7C3AED",
                            borderRadius: "50%",
                            height: "60px",
                            width: "60px",
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "4px",
                          height: "14px",
                          width: "100px",
                          margin: "6px 0",
                        }}
                      ></div>
                      <div
                        style={{
                          backgroundColor: "#F4F4F4",
                          borderRadius: "4px",
                          height: "14px",
                          width: "60px",
                        }}
                      ></div>
                      <div style={{ padding: "19% 0" }}></div>
                      <div
                        style={{
                          color: "#3897f0",
                          fontFamily: "Arial,sans-serif",
                          fontSize: "14px",
                          fontWeight: "550",
                          marginTop: "12px",
                        }}
                      >
                        View our Instagram
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* TikTok Embed */}
          <div className="w-full md:w-1/2 transition-all duration-300 hover:scale-105">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 p-2 sm:p-4 bg-gradient-to-r from-indigo-100 to-purple-100">
                Trending on TikTok
              </h3>
              <div className={`p-2 sm:p-4 ${isMobile ? 'aspect-[9/16]' : 'aspect-square'}`}>
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@smkgaruda.mahadhika.bjb/video/7386477880781475077"
                  data-video-id="7386477880781475077" 
                  style={{
                    maxWidth: "100%",
                    minWidth: "100%",
                  }}
                >
                  <section>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                      href="https://www.tiktok.com/@smkgaruda.mahadhika.bjb?refer=embed"
                    >
                      @smkgaruda.mahadhika.bjb
                    </a>
                  </section>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaEmbed;