const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

// 会员清晰度
  if (obj.data.vip.status === 1) {
    $done({});
  } else {
    obj.data.vip.type = 2;
    obj.data.vip.status = 1;
    obj.data.vip.vip_pay_type = 1;
    obj.data.vip.due_date = 2208960000; // Unix 时间戳 2040-01-01 00:00:00
    obj.data.vip.role = 3;
  }
} else if (url.includes("/x/v2/feed/index?")) {
