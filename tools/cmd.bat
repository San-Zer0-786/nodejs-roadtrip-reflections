curl --request POST \
  --url http://localhost:5000 \
  --header 'content-type: application/json' \
  --data '{"name":"Arrow","description":"bad movie","rating":"7.0","image":"michaeljackson.png"}'

curl --request GET \
  --url http://localhost:5000

curl --request GET \
  --url http://localhost:5000/
  
curl --request GET \
  --url http://localhost:5000/api/user/70
  
curl --request POST \
  --url http://localhost:5000/api/user/follow \
  --header 'content-type: application/json' \
  --data '{"user": "testGuy"}'

POST NEW POST
curl --request POST \
  --url http://localhost:5000/api/post \
  --header 'content-type: application/json' \
  --data '{"text": "ersdst", "title": "sfsf", "claps":0, "description": "test desc", "feature_img": "sdsdsd", "author_id": "5a92cf3f2dec79115c8fc78a"}'

POST NEW USER
=============
curl --request POST \
  --url http://localhost:5000/api/user \
  --header 'content-type: application/json' \
  --data '{"name": "david", "email": "david@gmail.com"}'

FOLLOW USER
===========
curl --request POST \
  --url http://localhost:5000/api/user/follow \
  --header 'content-type: application/json' \
  --data '{"id": "5a92cf3f2dec79115c8fc78a", "user_id": "5a92cf582dec79115c8fc78b"}'

GET A USER
==========
curl --request GET \
  --url http://localhost:5000/api/user/5a92cf3f2dec79115c8fc78a

GET ALL POSTS
================
curl --request GET \
  --url http://localhost:5000/api/posts

GET AN POST
==============
curl --request GET \
  --url http://localhost:5000/api/post/5a92e41abb04440888395e44

COMMENT ON AN POST
=====================
curl --request POST \
  --url http://localhost:5000/api/post/comment \
  --header 'content-type: application/json' \
  --data '{"comment": "dfdggd", "author_id": "5a92cf3f2dec79115c8fc78a", "post_id": "5a92e41abb04440888395e44"}'

CLAP AN POST
===============
curl --request POST \
  --url http://localhost:5000/api/post/clap \
  --header 'content-type: application/json' \
  --data '{"post_id": "5a92e41abb04440888395e44"}'

GET A USER'S POSTS
===================
curl --request GET \
  --url http://localhost:5000/api/user/profile/5a92cf3f2dec79115c8fc78a


