#!/bin/sh

API="http://localhost:4741"
URL_PATH="/workouts"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
 "workouts": {
      "type": "'"${TYPE}"'",
      "date": "'"${DATE}"'",
      "duration": "'"${DURATION}"'"
    }
  }'

echo
