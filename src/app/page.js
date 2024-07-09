"use client"
import { useState, useEffect, useCallback } from "react";
import Profile from "./_components/_Profile/page";
import SearchBar from "./_components/_SearchBar/page";
import { getInfo } from "./_utils/getInfo";
import debounce from "lodash.debounce";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [userData, setUserData] = useState({}); // Add state to store user data

  const handleSearchTermChange = useCallback(debounce((newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }, 1000), []);

  useEffect(() => {
    if (searchTerm) {
      getInfo({ username: searchTerm }).then((data) => {
        setUserData(data);
      });
    }
  }, [searchTerm]);

  return (
    <main className="flex justify-center h-[240px] bg-[url('../../public/images/hero-image-github-profile.png')] bg-cover bg-center sm:bg-[150%] sm:bg-center">
      <div className="flex flex-col h-max w-screen items-center">
        <SearchBar onSearchTermChange={handleSearchTermChange} />
        <Profile userData={userData} />
      </div>
    </main>
  );
}