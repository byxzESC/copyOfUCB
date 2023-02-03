-- Add your code below and execute file in MySQL Shell --
SELECT book_name AS 'Book name', price AS 'Book price'
FROM book_prices
JOIN favorite_books ON book_prices.id = favorite_books.book_price;