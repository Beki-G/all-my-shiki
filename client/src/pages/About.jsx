import React from "react";
import Navbar from "../components/Navbar/Navbar";
import GuildCrest from "../assets/GuildCrest.jpg";

const About = () => {
  return (
    <div className="pb-8">
      <div className="bg-black">
        <Navbar />
      </div>

      <img
        src={GuildCrest}
        className="object-center-top mx-auto mt-8 object-contain rounded-full h-48 sm:h-64 md:h-96 md:mt-10"
        alt="SemiCausal Guild Crest"
      />

      <div className="bg-grey-200 sm:w-4/5 mx-auto">
        <h1 className="font-semibold mt-8 text-center tracking-wider text-3xl sm:text-5xl">
          About
        </h1>

        <section className="w-4/5 mx-auto mt-10">
          <p>
            We here at SemiCasual are a group of mostly light-hearted players
            who blur the line between lazy casual play and near addict levels of
            devotion to the game.
          </p>
          <br />
          <div>
            <h3 className="underline font-semibold text-lg">Current leadership</h3>
            <ul className="pl-4">
              <li>Leader and Queen coder: Bai_Qian</li>
              <li>Officer and builder of walls of text: Theookamikit</li>
              <li>Officer and advisor: Meowly_Anne</li>
              <li>Officer and Socialite: JynErso</li>
              <li>Officer and resident lurker: Zenaidaze</li>
              <li>Officer and schedule keeper: avainquin</li>
              <li>Retired officer and Discord mod: SoraMochi</li>
            </ul>
          </div>
          <br />
          <div>
            <h3 className="underline font-semibold text-lg">
              Brief History of SemiCasual
            </h3>
            <p className="pl-4 mb-8">
            As with most guilds, ours was a humble beginning. So much so that it
          was baked right into our name. For in the early days, our guild went
          by the name "Beginners." We were a group of new players helping other
          new players get started in the game. As time went on, we grew up from
          mostly new players to seasoned veterans and, with that, decided to
          change our name to "SemiCasual" to better represent who we were.
          Despite the name change, we never lost our dedication to helping new
          players ease into the game. Around the middle levels of guild growth,
          we joined hands with another guild named Fuchsgeist, led by the player
          Hulijing. Hulijing was looking to retire from guild management and
          return to being a player. An official guild merge was arranged with
          SemiCasual keeping identity and taking in all current players of
          Fuchsgeist. The merger went smoothly, and with this, for the first
          time, our humble guild appeared on the top 100 rankings. From there on
          out, we never stopped growing and seeking to provide a helpful and
          welcoming community.
            </p>
          </div>
          
        </section>
      </div>
    </div>
  );
};

export default About;
