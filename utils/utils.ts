
export const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});


    // function to convert the discount into price
export const handleDiscount = (price: number, discount: number) => {
        const discountedPrice = Math.floor((discount * price) / 100);
        return price - discountedPrice;
}