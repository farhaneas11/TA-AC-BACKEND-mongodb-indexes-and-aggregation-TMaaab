writeCode

Insert the data present in users.json into local mongodb database using `mongoimport` into a database called sample and collection named as users.

Write aggregation queries to perform following tasks.

1. Find all users who are active.

db.users.aggregate([{$match:{active:true}}]);

2. Find all users whose name includes `blake` case insensitive.

db.users.aggregate([{$group:{}}])

3. Find all males.

db.users.aggregate([{$match:{gender:"men"}}]);

4. Find all active males.

db.users.aggregate([{$match:{active:true,gender:"men"}}]);

5. Find all active females whose age is >= 25.

db.users.aggregate([{$match:{active:true,gender:"female"}},{$project:{gt25:{$gt:["age",25]}}]);

6. Find all 40+ males with green eyecolor.

db.users.aggregate([{$match:{gender:"men",eyecolor:"green"}}]);

7. Find all blue eyed men working in 'USA'.

db.users.aggregate([{$match:{gender:"men",eyecolor:"blue",country:"USA"}}]);

8. Find all female working in Germany with green eyes and apple as favoriteFruit.

9. Count total male and females.

db.users.aggregate([{$group:{_id:"$gender",count:{$sum:1}}}]);

10. Count all whose eyeColor is green.

db.users.aggregate([{$match:{eyecolor:"green"}},{$group:{_id:null,count:{$sum:1}}}]);

11. Count all 20+ females who have brown eyes.

db.users.aggregate([{$match:{eyecolor:"green"}},{$group:{_id:null,count:{$sum:1}}}]);

12. Count all occurences of all eyeColors.
    Something like:-

```
blue -> 30
brown -> 67
green -> 123
```

db.users.aggregate([{$group:{_id:"$eyecolor",count:{$sum:1}}}]);

13. Count all females whose tags array include `amet` in it.

14. Find the average age of entire collection

15. Find the average age of males and females i.e. group them by gender.

db.users.aggregate([{$group:{
  _id:"$gender",
  avgage:{$avg:"$age"}
}}])


16. Find the user with maximum age.

db.users.aggregate([{$group:{
  _id:"$age",
  maxage:{$max:"$age"}
}}])

17. Find the document with minimum age.

db.users.aggregate([{$group:{
  _id:"$age",
  minage:{$min:"$age"}
}}])

18. Find the sum of ages of all males and females.

db.users.aggregate([{$group:{
  _id:"$age",
  sumage:
}}])

19. Group all males by their eyeColor.

db.users.aggregate([{$group:{
  _id:"$age",

}}])

20. group all 30+ females by their age.

db.users.aggregate([,{$match:{gender:"female"}}{$group:{
  _id:"$age"
}}])

21. Group all 23+ males with blue eyes working in Germany.

db.users.aggregate([{$group:{
  _id:"$age",

}}])

22. Group all by tag names i.e. use \$unwind since tags are array.

db.userss.aggregate([{$unwind: "$tags"}]);

23. Group all males whose favoriteFruit is `banana` who have registered before 2015.

24. Group all females by their favoriteFruit.

db.users.aggregate([{$match:{gender:"female"}},{$group:{_id:"$favoriteFruit"}}]);

25. Scan all the document to retrieve all eyeColors(use db.COLLECTION_NAME.distinct);

26. Find all apple loving blue eyed female working in 'USA'. Sort them by their registration date in descending order.


db.users.aggregate([{match:{gender:"female",eyecolor:"blue"}},{$sort:-1}]);

27. Find all 18+ inactive men and return only the fields specified below in the below provided format

```js
{
  name: "",
  email: '';
  identity: {
    eye: '',
    phone: '',
    location: ''
  }
}
```

db.users.aggregate([{$match:{active:false,gender:"men"}},{$project:{name:true,email:true,identity:true,_id:false}}]);
