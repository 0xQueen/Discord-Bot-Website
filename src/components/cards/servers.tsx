import React from "react";
import { FaUserFriends } from "react-icons/fa";

const TrustedServers: React.FC = () => {
  return (
    <section className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-pink-500">Discord Bot Name</span> is trusted and
          used in a lot of servers.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg bg-gray-800 p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-4">Server Name</h3>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vehicula massa eget magna dapibus, vitae ultricies
              nulla placerat.
            </p>
            <div className="flex items-center mt-auto">
              <FaUserFriends className="mr-2 text-pink-500" />
              <span className="text-gray-300">500+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedServers;
