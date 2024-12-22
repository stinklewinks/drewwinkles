import {WPSync} from 'kiwipress'
import dotenv from 'dotenv';

dotenv.config();

async function thescript(){
    const id = 1
    const wp = new WPSync(); 
    const wpdata = await wp.get_users(process.env.USERS + '?id=' + id)
        
        console.log(wpdata)
}

thescript();