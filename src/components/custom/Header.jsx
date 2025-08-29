import { googleLogout } from "@react-oauth/google";
import { Button } from "../ui/button";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import Logo from "./Logo";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [openDialoge, setOpenDialoge] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (res) => {
      userProfile(res);
    },
    onError: (error) => console.log(error),
  });

  const userProfile = async (tokenInfo) => {
    const data = await fetch(
      ` https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: "application/json",
        },
      }
    );
    const res = await data.json();
    setOpenDialoge(false);
    localStorage.setItem("user", JSON.stringify(res));
    toast.success("Login success");
  };

  return (
    <div className="flex justify-between items-center p-3 px-5 shadow-sm">
      <Link to="/">
        <Logo />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/my-trips")}
              variant="outline"
              className="rounded-xl"
            >
              My Trips
            </Button>
            <Button
              onClick={() => navigate("/create-itineraries")}
              variant="outline"
              className="rounded-xl"
            >
              ➕ Trips
            </Button>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  alt="user"
                  className="rounded-full h-[35px] w-[35px]"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="font-bold text-xl">{user?.name}</h2>
                <p>{user?.email}</p>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    googleLogout();
                    navigate("/");
                  }}
                  className="mt-5"
                >
                  logOut
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialoge(true)}>Sign In</Button>
        )}
      </div>
      <Dialog open={openDialoge}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <Logo />
              <h2 className="font-bold text-lg mt-7">Sign in with google</h2>
              <p>sign in to the app with google authentication securely</p>
              <Button
                onClick={login}
                className="w-full mt-5 flex gap-4 items-center"
              >
                <FcGoogle className="text-2xl mr-2" />
                Sign in With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                onClick={() => setOpenDialoge(!openDialoge)}
                type="button"
                variant="secondary"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Header;
