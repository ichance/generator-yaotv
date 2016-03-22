#/bin/sh
# 上传并刷新七牛缓存

DATADIR="deploy/";
BUCKET="yaotv";
QNHTTP="http://o0vslv5hc.qnssl.com/";
QNHTTPS="https://o0vslv5hc.qnssl.com/";
KEYPREFIX="<%= cdn%>/";
FILES=("css/app.css" "js/app.js" "js/track.js" "font/super.woff");
LIST='';

#执行shell，上传数据
for file in ${FILES[*]}; do
    echo "\033[36;1m 当前文件为: \033[0m " $DATADIR$file
    echo "\033[31;1m -删除... \033[0m ";
    echo qrsctl del ${BUCKET} ${KEYPREFIX}$file
    qrsctl del ${BUCKET} ${KEYPREFIX}$file
    echo "\033[32;1m +上传... \033[0m ";
    echo qrsctl put ${BUCKET} ${KEYPREFIX}$file $DATADIR$file
    qrsctl put ${BUCKET} ${KEYPREFIX}$file $DATADIR$file

    LIST=${LIST}${QNHTTP}${KEYPREFIX}$file,${QNHTTPS}${KEYPREFIX}$file,
done

echo qrsctl cdn/refresh ${BUCKET} ${LIST%%,};
qrsctl cdn/refresh ${BUCKET} ${LIST%%,};

echo -e "\033[36;1m 上传并且刷新完成 \033[0m ";