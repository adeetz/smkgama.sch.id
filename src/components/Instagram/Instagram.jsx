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
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-8 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="w-full max-w-6xl mx-auto overflow-hidden bg-white shadow-2xl rounded-2xl">
        <h2 className="pt-4 mb-4 text-2xl font-bold text-center text-transparent text-gray-800 sm:text-3xl sm:mb-8 sm:pt-8 bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Connect With Us on Social Media
        </h2>

        <div className="flex flex-col justify-center gap-4 p-4 md:flex-row sm:gap-8 sm:p-8">
          {/* Instagram Embed */}
          <div className="w-full transition-all duration-300 md:w-1/2 hover:scale-105">
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <h3 className="p-2 mb-2 text-lg font-semibold text-gray-800 sm:text-xl sm:mb-4 sm:p-4 bg-gradient-to-r from-purple-100 to-indigo-100">
                Latest on Instagram
              </h3>
              <div className={`p-2 sm:p-4 ${isMobile ? 'aspect-[9/16]' : 'aspect-square'}`}>
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
          <div className="w-full transition-all duration-300 md:w-1/2 hover:scale-105">
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <h3 className="p-2 mb-2 text-lg font-semibold text-gray-800 sm:text-xl sm:mb-4 sm:p-4 bg-gradient-to-r from-indigo-100 to-purple-100">
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