const timeHelper = {
  addSeconds: function (currentTime, addSeconds) {
    const t = new Date(currentTime.getTime());
    t.setSeconds(t.getSeconds() + 10);
    return t;
  }
};

module.exports = function (uniqueId, fromAddress, responseAddress, toAddress, message) {
  const sentTime = new Date();
  const expirationTime = timeHelper.addSeconds(sentTime,10);
  return {
    messageId: uniqueId,
    requestId: uniqueId,
    correlationId: uniqueId,
    conversationId: uniqueId,
    message: message.body,
    headers: message.headers,
    messageType: message.type,
    expirationTime,
    sentTime,
    responseAddress: responseAddress,
    sourceAddress: fromAddress,
    destinationAddress: toAddress,
  }
};
