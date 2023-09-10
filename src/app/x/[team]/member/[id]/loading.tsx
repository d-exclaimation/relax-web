import { page } from "@d-exclaimation/next";

export default page(() => {
  return (
    <div className="flex-1 flex flex-row items-center justify-center w-full py-6 gap-2 h-full">
      {[1, 2, 3, 4].map((_, i) => (
        <span
          key={`loading-${i}`}
          className="w-3 aspect-square rounded-full bg-sand animate-bounce [animation-fill-mode:backwards]"
          style={{
            animationDelay:
              i === 0 ? "0s" : i === 1 ? "0.25s" : i === 2 ? "0.5s" : "0.75s",
          }}
        />
      ))}
    </div>
  );
});
