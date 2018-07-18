const timeHelper = {
  addSeconds: function (currentTime, addSeconds) {
    const t = new Date(currentTime.getTime());
    t.setSeconds(t.getSeconds() + 10);
    return t;
  }
};

module.exports = function ({uniqueId, requestId, conversationId, fromAddress, responseAddress, toAddress, message, faultAddress}) {
  const sentTime = new Date();
  const expirationTime = timeHelper.addSeconds(sentTime,10);
  return {
    messageId: uniqueId,
    correlationId: uniqueId,
    requestId: requestId,
    conversationId: conversationId,
    message: message.body,
    headers: message.headers,
    messageType: message.type,
    expirationTime,
    sentTime,
    responseAddress: responseAddress,
    sourceAddress: fromAddress,
    destinationAddress: toAddress,
    faultAddress,
  }
};
