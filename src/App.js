import "./App.css";
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState();

  const showUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((res) => {
          setUserList(res.data);
          setIsLoading(false);
        });
    }, 3000);
  };

  useEffect(() => {
    setIsLoading(true);
    showUsers();
  }, []);

  return (
    <div className="App">


      <div className="button" onClick={showUsers}>
        Show Users
      </div>
      {isLoading === false &&
        userList.map((user) => (
          <div className="card">
            <img
              src={"https://joeschmoe.io/api/v1/" + user.first}
              alt={user.first}
            />
            <h1>{user.first + user.last}</h1>
            <h2>{user.email || <Skeleton />}</h2>
            <h3>{user.address || <Skeleton />}</h3>
          </div>
        ))}
      {isLoading === true && (
        <>
          <div className="card">
            <Skeleton variant="circular" width={70} height={70} className="imageSkeleton" />

            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
            <Skeleton variant="circular" width={70} height={70} className="imageSkeleton" />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
            <Skeleton variant="circular" width={70} height={70} className="imageSkeleton" />

            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div><div className="card">
            <Skeleton variant="circular" width={70} height={70} className="imageSkeleton" />

            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
            <Skeleton variant="circular" width={70} height={70} className="imageSkeleton" />
            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
          <div className="card">
            <Skeleton variant="circular" width={70} height={70} className="imageSkeleton" />

            <h1>
              <Skeleton />
            </h1>
            <h2>
              <Skeleton />
            </h2>
            <h3>
              <Skeleton />
            </h3>
          </div>
        </>
      )}
    </div>
  );

  // <SkeletonTheme color="#cfcfcf" highlightColor="#b4cf97">
  //   <div className="App">
  //     <div className="demo">
  //       <h1>{heading || <Skeleton />}</h1>
  //       <p>{para || <Skeleton count={3} />}</p>
  //       {imgUrl ? (
  //         <img src={imgUrl} width={100} />
  //       ) : (
  //         <Skeleton width={100} height={100} circle={true} />
  //       )}
  //     </div>

  //     <div className="demo">
  //       <h1>{heading || <Skeleton />}</h1>
  //       <p>{para || <Skeleton count={3} />}</p>
  //       {imgUrl ? (
  //         <img src={imgUrl} width={100} />
  //       ) : (
  //         <Skeleton width={100} height={100} circle={true} />
  //       )}
  //     </div>

  //     <div className="demo">
  //       <h1>{heading || <Skeleton />}</h1>
  //       <p>{para || <Skeleton count={3} />}</p>
  //       {imgUrl ? (
  //         <img src={imgUrl} width={100} />
  //       ) : (
  //         <Skeleton width={100} height={100} circle={true} />
  //       )}
  //     </div>
  //   </div>
  // </SkeletonTheme>
}
