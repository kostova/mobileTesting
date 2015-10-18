#!/bin/bash
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
pushd "$DIR/bin/tmtest/" > /dev/null

if [ `whoami` != 'root' ] ; then
    echo "Telerik Mobile Testing needs root permissions"
    echo "Please enter password"
    sudo node "$DIR/install.js"
else
    node "$DIR/install.js"
fi
	
popd "$DIR/bin/tmtest/" > /dev/null
echo ""

echo "Starting Telerik Mobile Testing..."

if [ `whoami` == 'root' ] ; then
	sudo -u $SUDO_USER node "$DIR/bin/tmtest/tmtest.js" server --launch-test-runner
else
	node "$DIR/bin/tmtest/tmtest.js" server --launch-test-runner
fi