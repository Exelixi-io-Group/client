import { useSelector } from "react-redux";
import { ELCircle } from "../../../component";
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../../utils";

export const Dashboard = () => {
  const [reach, setReach] = useState({
    user_count: null,
    referals: null,
    organic: null,
    freshers: null,
    experienced: null,
  });

  const userList = useSelector((state) => state.user.usersList);

  useEffect(() => {
    if (userList) {
      const userCount = userList?.length;
      const referalCount = userList?.filter((item) => {
        return item?.referalCode;
      })?.length;

      const freshersCount = userList?.filter(
        (item) => !item?.workExperience?.length
      )?.length;

      setReach((prev) => {
        return {
          ...prev,
          referals: referalCount,
          organic: userCount - referalCount,
          freshers: freshersCount,
          experienced: userCount - freshersCount,
          user_count: userCount,
        };
      });
    }
  }, [userList]);


  const renderCircles = Object?.keys(reach)?.map((item, id) => {
    return (
      <ELCircle key={id} value={reach[item]} labelText={capitalizeFirstLetter(item)} />
    );
  });

  return (
    <>
      <section className="admin-dashboard">
        <div className="circle-infos">{renderCircles}</div>
      </section>
    </>
  );
};
