import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contactConfig } from "../config/contact";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 sm:px-8 lg:px-40 flex justify-center py-8 lg:py-12">
        <div className="flex flex-col max-w-[960px] w-full">
          <h2 className="text-[#141414] tracking-tight text-2xl sm:text-3xl lg:text-[28px] font-bold leading-tight px-4 text-center pb-6 pt-8">
            Get In Touch
          </h2>
          <p className="text-[#141414] text-base sm:text-lg font-normal leading-normal pb-8 pt-1 px-4 text-center max-w-4xl mx-auto">
            I'd love to hear about your next project and discuss how I can help
            bring your vision to life. Whether you're planning an event, looking
            for portrait work, or need photography for any occasion, let's
            connect and create something beautiful together.
          </p>

          {/* Contact Information Card */}
          <div className="flex justify-center px-4 mb-12">
            <div className="bg-[#f8f9fa] rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 max-w-md w-full">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white rounded-full shadow-sm">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl text-[#141414]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#141414] mb-4">
                Get In Touch
              </h3>
              <a
                href={`mailto:${contactConfig.email.address}`}
                className="text-lg text-[#141414] hover:text-gray-600 transition-colors duration-200 font-medium"
              >
                {contactConfig.email.address}
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-[#141414] mb-6">
              Follow My Work
            </h3>
            <div className="flex justify-center gap-8">
              {/* Instagram */}
              <a
                href={`https://instagram.com/${contactConfig.instagram.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl text-white"
                  />
                </div>
                <span className="text-sm font-medium text-[#141414] group-hover:text-gray-600 transition-colors duration-200">
                  @{contactConfig.instagram.username}
                </span>
              </a>

              {/* Email (as social icon) */}
              <a
                href={`mailto:${contactConfig.email.address}`}
                className="group flex flex-col items-center transition-transform duration-300 hover:scale-110"
              >
                <div className="w-16 h-16 bg-[#141414] rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-2xl text-white"
                  />
                </div>
                <span className="text-sm font-medium text-[#141414] group-hover:text-gray-600 transition-colors duration-200">
                  Email
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
