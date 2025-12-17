const MonthlyCard = () => {
  return (
    <div
      className="
          flex flex-col items-stretch justify-start rounded-xl p-5
          bg-background-light dark:bg-card-dark
        "
      style={{
        boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
      }}
    >
      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-text-light-secondary dark:text-text-dark-secondary text-base">
          Total Monthly Cost
        </p>

        <p className="text-text-light-primary dark:text-text-dark-primary text-2xl font-bold leading-tight tracking-tight">
          $29.99
        </p>

        <p className="text-base pt-1">Total Yearly Cost: $359.88</p>
      </div>
    </div>
  );
};

export default MonthlyCard;
