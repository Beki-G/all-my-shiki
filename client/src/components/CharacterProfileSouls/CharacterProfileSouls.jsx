import React from "react";
import SoulSetDropDown from "../SoulSetDropDown/SoulSetDropDown";
import SoulSetStatDropDown from "../SoulSetStatDropDown/SoulSetStatDropDown";

const CharacterProfileSouls = ({
  soulSets,
  soulStats,
  isEdit,
  soulSetOnChange,
  soulStatsOnChange,
}) => {
  return (
    <div>
      <div>
        <div className="text-2xl">Soul Sets</div>

        <SoulSetDropDown
          title="Four set: "
          soulSetValue={soulSets.mainSet}
          onChange={soulSetOnChange}
          isEdit={isEdit}
          setType={"mainSet"}
        />

        <SoulSetDropDown
          title="Two set: "
          soulSetValue={soulSets.subSet}
          onChange={soulSetOnChange}
          isEdit={isEdit}
          setType={"subSet"}
        />
        <br />
        <SoulSetStatDropDown
          title={"Slot 2: "}
          slot={2}
          subSetValue={soulStats.slotTwo}
          isEdit={isEdit}
          onChange={soulStatsOnChange}
        />
        <SoulSetStatDropDown
          title={"Slot 4: "}
          slot={4}
          subSetValue={soulStats.slotFour}
          isEdit={isEdit}
          onChange={soulStatsOnChange}
        />
        <SoulSetStatDropDown
          title={"Slot 6: "}
          slot={6}
          subSetValue={soulStats.slotSix}
          isEdit={isEdit}
          onChange={soulStatsOnChange}
        />
      </div>
    </div>
  );
};

export default CharacterProfileSouls;
