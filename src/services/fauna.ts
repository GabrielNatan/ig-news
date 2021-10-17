import {Client} from "faunadb"

export const fauna = new Client({
    secret: "fnAEVvX_yxAAQ2jkLNF2vTJUDpTUM1xE53KFKK_g",
    domain: 'db.us.fauna.com'
})