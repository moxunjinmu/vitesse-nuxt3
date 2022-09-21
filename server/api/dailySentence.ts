/*
 * @Author: wuwenjia
 * @Date: 2022-09-19 17:00:23
 * @FilePath: \vitesse-nuxt3\server\api\dailySentence.ts
 * @Description:
 * Copyright (c) 2022 by wuwenjia wuwenjia@aegis-data.cn, All Rights Reserved.
 */
export default defineEventHandler(async (event) => {
  const { type = 'text' } = useQuery(event)

  const data = await (await fetch('https://v1.hitokoto.cn/')).json()
  if (type === 'json') {
    return data
  }
  else {
    event.res.setHeader('Content-Type', 'text/html;charset=utf-8')
    return data.hitokoto
  }
},
)
