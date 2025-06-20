import { ref,onMounted, onUnmounted } from 'vue';
/**
 * Composable to track mouse position.
 * 
 * @returns {Object} An object containing the x and y coordinates of the mouse.
 * 
 * Usage:
 * const { x, y } = useMouse();
 */
export function useMouse() {
    const x = ref(0);
    const y = ref(0);

    function update(event: MouseEvent) {
    x.value = event.clientX;
    y.value = event.clientY;
    }
    onMounted(() => {
    window.addEventListener('mousemove', update);
    });
    onUnmounted(() => {
    window.removeEventListener('mousemove', update);
    });

    return {x,y}
}