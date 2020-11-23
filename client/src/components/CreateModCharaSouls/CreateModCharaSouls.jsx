import React from "react";
import SoulSetDropDown from "../SoulSetDropDown/SoulSetDropDown";
import SoulSetStatDropDown from "../SoulSetStatDropDown/SoulSetStatDropDown";

const CreateModCharaSouls = ({
  soulSets,
  soulSetOnChange,
  soulStats,
  soulStatsOnChange,
}) => {
  return (
    <div>
      <div className="text-2xl">SoulSets</div>
      <div>
        <SoulSetDropDown
          title="Four Set:"
          isEdit={true}
          setType={"mainSet"}
          soulSetValue={soulSets.mainSet}
          onChange={soulSetOnChange}
        />
        <SoulSetDropDown
          title="TwoSet:"
          isEdit={true}
          setType="subSet"
          soulSetValue={soulSets.subSet}
          onChange={soulSetOnChange}
        />
        <br />
        <SoulSetStatDropDown
          title={"Slot 2: "}
          slot={2}
          subSetValue={soulStats.slotTwo}
          isEdit={true}
          onChange={soulStatsOnChange}
        />
        <SoulSetStatDropDown
          title={"Slot 4: "}
          slot={4}
          subSetValue={soulStats.slotFour}
          isEdit={true}
          onChange={soulStatsOnChange}
        />
        <SoulSetStatDropDown
          title={"Slot 6: "}
          slot={6}
          subSetValue={soulStats.slotSix}
          isEdit={true}
          onChange={soulStatsOnChange}
        />
      </div>
    </div>
  );
};

export default CreateModCharaSouls;
