import test from 'tape'
import { prefab } from '../src'

test('timing test', function (t) {
    t.equal(prefab("hey"), undefined);
    t.end()
});