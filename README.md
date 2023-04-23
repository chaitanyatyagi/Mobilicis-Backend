# Mobilicis India Private Limited Assessment - Backend

Project Live Link:-  [Click](https://mobilicis-frontend.vercel.app/)

## Tech Stack Used

### Nodejs
### Express
### MongoDB

## Code Description

### API Description
`GET REQUEST /data/get-data/:number`
This is our get request, that user will make, and we will send data in response. (Code is implemented in route folder)

In the given code below, we are sending entire data.

![a0](https://user-images.githubusercontent.com/84731647/233834407-71a3e03e-7929-4375-a816-8bbc176dd5c2.png)

`Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.`\
In the given code below, we have use $and and $or operator to implement our query.

![a1](https://user-images.githubusercontent.com/84731647/233834416-b7daae3e-56bc-4339-8405-32b70ba88484.png)

`Male Users which have phone price greater than 10,000.`\
In the given code below, firstly we have created new field(convertedPhonePrice) with the help of aggregation pipeline which is present in integer format so that we can use $lt operator, and then using $match operator we have fulfilled our requirements of the query.

![a2](https://user-images.githubusercontent.com/84731647/233834425-a5521401-43f7-4447-856e-2531ac0fede4.png)

`Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.`\
In the given code below, we have taken empty array and pushed only those objects, which full the criteria of the query.

![a3](https://user-images.githubusercontent.com/84731647/233834428-8dc5433c-0e09-4ece-a46b-2748d1b5dc4c.png)

`Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.`\
In the given code below, first we have got those objects who have given car name, then among these objects we have pushed those in an empty array which doesn't include digits in email.

![a4](https://user-images.githubusercontent.com/84731647/233834432-4d8a5269-6941-4d6b-b820-ffa90c72fb61.png)

`Show the data of top 10 cities which have the highest number of users and their average income.`\
In the given code below, again with the help of aggregation pipeline we have group users of a city then taking average of all users of same city and storing its value in "avgIncome", then sorting in the descreasing order, then sending top 10 cities with most users using $limit operator.

![a5](https://user-images.githubusercontent.com/84731647/233834437-1c7ecd5a-eef3-48f4-b4d5-31406f322b3f.png)


Also I have used express-api-cache to get fast response !
