import {ReviewsUpWrapper} from "@/components/reviewsup-wrapper";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <ReviewsUpWrapper/>
    </div>
  );
}
